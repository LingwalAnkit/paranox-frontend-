// Authentication API Service
import axios from "axios";
import type {
  LoginCredentials,
  SignupData,
  ApiResponse,
  StudentProfile,
} from "./types";
import { handleApiError, ENDPOINTS } from "./utils";

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse> => {
    try {
      const response = await axios.post(ENDPOINTS.LOGIN, credentials);
      return {
        success: true,
        data: response.data,
        message: "Login successful",
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  signup: async (
    data: Omit<SignupData, "age"> & { age: string }
  ): Promise<ApiResponse> => {
    try {
      const processedData: SignupData = {
        ...data,
        age: parseInt(data.age),
      };

      const response = await axios.post(ENDPOINTS.SIGNUP, processedData);
      return {
        success: true,
        data: response.data,
        message: "Signup successful",
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  loginWithProfile: async (
    credentials: LoginCredentials
  ): Promise<ApiResponse<StudentProfile>> => {
    try {
      // First, login
      await axios.post(ENDPOINTS.LOGIN, credentials);

      // Then, fetch profile
      const profileResponse = await axios.get(ENDPOINTS.PROFILE);

      return {
        success: true,
        data: profileResponse.data,
        message: "Login successful",
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },
};
