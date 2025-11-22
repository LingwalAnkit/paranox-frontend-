'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/slice';
import { RootState } from '@/redux/store';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps)  {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded-full bg-[#2a78be] dark:bg-[#12284b] ${className}`}
    >
      {isDarkMode ? '🌙' : '☀️'}
    </button>
  );
}