// Student API Service Types

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  class: string;
}

export interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  class: string;
  // Add other profile fields as needed
}

export interface ClassData {
  _id: string;
  title: string;
  roomID: string;
  teacher: string;
  date: string;
  AudioURL?: string;
  NotesURL?: string;
  createdAt: string;
}

export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface ClassesResponse {
  classes: ClassData[];
}
