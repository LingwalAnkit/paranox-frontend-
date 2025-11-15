import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: {
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: number;
    class?: string;
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

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  error: null,
  flashMessage: null,
  loading: false,
  success: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setFlashMessage: (state, action: PayloadAction<UserState['flashMessage']>) => {
      state.flashMessage = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
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
});

export const { setUser, setError, setFlashMessage, logout, setLoading, clearError, clearFlashMessage } = userSlice.actions;
export default userSlice.reducer;