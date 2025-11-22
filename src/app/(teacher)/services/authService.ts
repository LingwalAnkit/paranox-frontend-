import axios from "axios";

export interface TeacherLoginData {
  email: string;
  password: string;
}

export interface TeacherSignupData {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  password: string;
  age: number;
  class: string;
}

export interface TeacherProfile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  age: number;
  class: string;
}

export const loginTeacher = async (
  data: TeacherLoginData
): Promise<{ status: number; data: any }> => {
  try {
    const response = await axios.post("/api/auth/teacher/login", data);
    return { status: response.status, data: response.data };
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "An error occurred during login"
    );
  }
};

export const signupTeacher = async (
  data: TeacherSignupData
): Promise<{ status: number; data: any }> => {
  try {
    const response = await axios.post("/api/auth/teacher/signup", data);
    return { status: response.status, data: response.data };
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "An error occurred during signup"
    );
  }
};

export const getTeacherProfile = async (): Promise<TeacherProfile> => {
  try {
    const response = await axios.get("/api/profile/teacher-profile");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch teacher profile"
    );
  }
};
