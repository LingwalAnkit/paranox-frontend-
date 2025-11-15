import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice';
import userReducer from './userSlice';
import teacherReducer from './teacherSlice';
import parentReducer from './parentSlice';
import translationReducer from "@/redux/translationSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    teacher: teacherReducer,
    parent: parentReducer,
    translation: translationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
