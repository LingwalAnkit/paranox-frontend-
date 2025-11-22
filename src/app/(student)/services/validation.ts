// Validation functions for student forms
import type { LoginCredentials, SignupData } from "./types";

export const validateLoginCredentials = (
  credentials: LoginCredentials
): { email: string; password: string } => {
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

export const validateSignupData = (
  data: Omit<SignupData, "age"> & { age: string }
): Partial<Record<keyof SignupData, string>> => {
  const errors: Partial<Record<keyof SignupData, string>> = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }
  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }
  if (!data.email.includes("@")) {
    errors.email = "Invalid email format";
  }
  if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!data.age || parseInt(data.age) < 1) {
    errors.age = "Valid age is required";
  }
  if (!data.class.trim()) {
    errors.class = "Class is required";
  }

  return errors;
};
