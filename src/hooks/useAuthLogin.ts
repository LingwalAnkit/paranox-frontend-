// hooks/useAuthLogin.ts
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import type { RootState } from "../redux/store";
import {
  setUser,
  setError as setUserError,
  setLoading,
  clearError,
} from "../redux/userSlice";

interface LoginCredentials {
  email: string;
  password: string;
}

interface UseAuthLoginProps {
  loginEndpoint: string;
  profileEndpoint: string;
  redirectPath: string;
  validateForm?: (credentials: LoginCredentials) => {
    email: string;
    password: string;
  };
}

export const useAuthLogin = ({
  loginEndpoint,
  profileEndpoint,
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

  const defaultValidateForm = (credentials: LoginCredentials) => {
    const errors = { email: "", password: "" };

    if (!credentials.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!credentials.password) {
      errors.password = "Password is required";
    } else if (credentials.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const credentials = { email, password };
    const validator = validateForm || defaultValidateForm;
    const errors = validator(credentials);

    if (errors.email || errors.password) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({ email: "", password: "" });
    dispatch(setLoading(true));

    try {
      const loginResponse = await axios.post(loginEndpoint, credentials);

      if (loginResponse.status === 200) {
        const userResponse = await axios.get(profileEndpoint);
        dispatch(setUser(userResponse.data));
        router.push(redirectPath);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during login";
      dispatch(setUserError(errorMessage));
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
