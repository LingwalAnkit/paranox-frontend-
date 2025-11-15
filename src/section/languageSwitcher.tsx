import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setLanguage } from '@/redux/translationSlice';

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.translation.currentLanguage);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <select
        value={currentLanguage}
        onChange={(e) => dispatch(setLanguage(e.target.value as any))}
        className="border p-2 rounded bg-white dark:bg-black"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};