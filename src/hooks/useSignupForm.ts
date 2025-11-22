// hooks/useSignupForm.ts
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  studentApi,
  validateSignupData,
  type ApiError,
} from "../app/(student)/services";

interface BaseFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UseSignupFormProps<T extends BaseFormData> {
  initialFormData: T;
  redirectPath: string;
  validateForm?: (data: T) => Partial<Record<keyof T, string>>;
}

export function useSignupForm<T extends BaseFormData>({
  initialFormData,
  redirectPath,
  validateForm,
}: UseSignupFormProps<T>) {
  const router = useRouter();
  const [formData, setFormData] = useState<T>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name as keyof T]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate form if validation function is provided
    const validator = validateForm || validateSignupData;
    const validationErrors = validator(formData as any);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as Partial<Record<keyof T, string>>);
      return;
    }

    setLoading(true);

    try {
      await studentApi.signup(formData as any);
      router.push(redirectPath);
    } catch (error) {
      const apiError = error as ApiError;
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    errors,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
}
