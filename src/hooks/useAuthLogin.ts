// hooks/useAuthLogin.ts
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import type { RootState } from "../redux/store";
import {
  setUser,
  setError as setUserError,
  setLoading,
  clearError,
} from "../redux/userSlice";
import {
  studentApi,
  validateLoginCredentials,
  type LoginCredentials,
  type ApiError,
} from "../app/(student)/services";

interface UseAuthLoginProps {
  redirectPath: string;
  validateForm?: (credentials: LoginCredentials) => {
    email: string;
    password: string;
  };
}

export const useAuthLogin = ({
  redirectPath,
  validateForm,
}: UseAuthLoginProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const { loading, error, success } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const credentials = { email, password };
    const validator = validateForm || validateLoginCredentials;
    const errors = validator(credentials);

    if (errors.email || errors.password) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({ email: "", password: "" });
    dispatch(setLoading(true));

    try {
      const response = await studentApi.loginWithProfile(credentials);
      dispatch(setUser(response.data));
      router.push(redirectPath);
    } catch (error) {
      const apiError = error as ApiError;
      dispatch(setUserError(apiError.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    formErrors,
    loading,
    error,
    success,
    handleLogin,
  };
};
