import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface TeacherState {
    teacher: {
        firstName?: string;
        lastName?: string;
        subject?: string;
        email?: string;
        password?: string;
    } | null;
    isAuthenticated: boolean;
    error: string | null;
    flashMessage: {
        message: string;
        type: 'success' | 'error';
    } | null;
    loading: boolean;
    success: string | null;
}

const initialState: TeacherState = {
    teacher: null,
    isAuthenticated: false,
    error: null,
    flashMessage: null,
    loading: false,
    success: null,
}

const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        setTeacher: (state, action: PayloadAction<TeacherState['teacher']>) => {
            state.teacher = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setFlashMessage: (state, action: PayloadAction<TeacherState['flashMessage']>) => {
            state.flashMessage = action.payload;
        },
        logout: (state) => {
            state.teacher = null;
            state.isAuthenticated = false;
            state.error = null;
            state.flashMessage = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearFlashMessage: (state) => {
            state.flashMessage = null;
        },
    },
})

export const { setTeacher, setError, setFlashMessage, logout, setLoading, clearError, clearFlashMessage } = teacherSlice.actions;
export default teacherSlice.reducer;
