// Profile API Service
import axios from "axios";
import type { ApiResponse, StudentProfile } from "./types";
import { handleApiError, ENDPOINTS } from "./utils";

export const profileApi = {
  getProfile: async (): Promise<ApiResponse<StudentProfile>> => {
    try {
      const response = await axios.get(ENDPOINTS.PROFILE);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  updateProfile: async (
    profileData: Partial<StudentProfile>
  ): Promise<ApiResponse<StudentProfile>> => {
    try {
      const response = await axios.put(ENDPOINTS.PROFILE, profileData);
      return {
        success: true,
        data: response.data,
        message: "Profile updated successfully",
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },
};
