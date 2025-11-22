// Utility functions for API service
import axios, { AxiosError } from "axios";
import type { ApiError } from "./types";

export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message?: string }>;
    return {
      message:
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An unexpected error occurred",
      status: axiosError.response?.status,
    };
  }
  return {
    message:
      error instanceof Error ? error.message : "An unexpected error occurred",
  };
};

export const ENDPOINTS = {
  // Auth endpoints
  LOGIN: "/api/auth/student/login",
  SIGNUP: "/api/auth/student/signup",

  // Profile endpoints
  PROFILE: "/api/profile/student-profile",

  // Classes endpoints
  CLASSES: "/api/classes/teacher",
} as const;
