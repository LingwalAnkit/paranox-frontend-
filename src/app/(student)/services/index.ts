// Student API Service - Main Export File
export * from "./types";
export * from "./validation";
export * from "./auth.api";
export * from "./profile.api";
export * from "./classes.api";
export * from "./doubt.api";
export { ENDPOINTS } from "./utils";

// Import individual APIs
import { authApi } from "./auth.api";
import { profileApi } from "./profile.api";
import { classesApi } from "./classes.api";
import { doubtApi } from "./doubt.api";

// Consolidated API object (backward compatibility)
export const studentApi = {
  // Auth methods
  login: authApi.login,
  signup: authApi.signup,
  loginWithProfile: authApi.loginWithProfile,

  // Profile methods
  getProfile: profileApi.getProfile,
  updateProfile: profileApi.updateProfile,

  // Classes methods
  getClasses: classesApi.getClasses,
  getClassById: classesApi.getClassById,
  downloadAudio: classesApi.downloadAudio,
  downloadNotes: classesApi.downloadNotes,

  // Doubt methods
  ask: doubtApi.ask,
  askGemini: doubtApi.askGemini,
  askLocal: doubtApi.askLocal,
  isGeminiConfigured: doubtApi.isGeminiConfigured,
  isLocalApiConfigured: doubtApi.isLocalApiConfigured,
};

export default studentApi;
