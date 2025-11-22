// Classes API Service
import axios from "axios";
import type { ApiResponse, ClassData, ClassesResponse } from "./types";
import { handleApiError, ENDPOINTS } from "./utils";

export const classesApi = {
  getClasses: async (): Promise<ApiResponse<ClassData[]>> => {
    try {
      const response = await axios.get<ClassesResponse>(ENDPOINTS.CLASSES);
      return {
        success: true,
        data: response.data.classes,
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  getClassById: async (classId: string): Promise<ApiResponse<ClassData>> => {
    try {
      const response = await axios.get(`${ENDPOINTS.CLASSES}/${classId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const apiError = handleApiError(error);
      throw apiError;
    }
  },

  downloadAudio: (audioUrl: string): void => {
    window.open(audioUrl, "_blank", "noopener,noreferrer");
  },

  downloadNotes: (notesUrl: string): void => {
    window.open(notesUrl, "_blank", "noopener,noreferrer");
  },
};
