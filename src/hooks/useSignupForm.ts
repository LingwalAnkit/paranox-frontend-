// hooks/useSignupForm.ts
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface BaseFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UseSignupFormProps<T extends BaseFormData> {
  initialFormData: T;
  apiEndpoint: string;
  redirectPath: string;
  validateForm?: (data: T) => Partial<Record<keyof T, string>>;
}

export function useSignupForm<T extends BaseFormData>({
  initialFormData,
  apiEndpoint,
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
    if (validateForm) {
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setLoading(true);

    try {
      const processedData = {
        ...formData,
        // Convert numeric fields
        ...((formData as any).age && { age: parseInt((formData as any).age) }),
      };

      const response = await axios.post(apiEndpoint, processedData);

      if (response.status === 201) {
        router.push(redirectPath);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong");
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
