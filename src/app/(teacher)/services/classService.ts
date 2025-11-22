import axios from "axios";

export interface CreateClassData {
  title: string;
  roomID: string;
  teacher: string;
  date: string;
  AudioURL?: string;
  NotesURL?: string;
}

export interface ClassResponse {
  class: {
    _id: string;
    title: string;
    roomID: string;
    teacher: string;
    date: string;
    AudioURL: string;
    NotesURL: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const createClass = async (
  data: CreateClassData
): Promise<ClassResponse> => {
  try {
    const response = await axios.post<ClassResponse>(
      "/api/classes/teacher",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create class");
  }
};

export const getTeacherClasses = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/api/classes/teacher");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch classes");
  }
};

export const getClassById = async (classId: string): Promise<any> => {
  try {
    const response = await axios.get(`/api/classes/teacher/${classId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch class details"
    );
  }
};

export const updateClass = async (
  classId: string,
  data: Partial<CreateClassData>
): Promise<any> => {
  try {
    const response = await axios.put(`/api/classes/teacher/${classId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update class");
  }
};

export const deleteClass = async (classId: string): Promise<void> => {
  try {
    await axios.delete(`/api/classes/teacher/${classId}`);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to delete class");
  }
};
