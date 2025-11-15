import { createSlice } from "@reduxjs/toolkit";

interface ParentState {
    parent: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
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

const initialState: ParentState = {
    parent: null,
    isAuthenticated: false,
    error: null,
    flashMessage: null,
    loading: false,
    success: null,
};

const parentSlice = createSlice({
    name: "parent",
    initialState,
    reducers: {
        setParent: (state, action) => {
            state.parent = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setFlashMessage: (state, action) => {
            state.flashMessage = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearFlashMessage: (state) => {
            state.flashMessage = null;
        },
    },
});

export const { setParent, setError, setFlashMessage, setLoading, clearError, clearFlashMessage } = parentSlice.actions;
export default parentSlice.reducer;


