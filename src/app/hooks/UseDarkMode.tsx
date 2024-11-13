'use client';  // Mark this as a client-side component (important for hooks and state)

import { useEffect, useState } from 'react';

const UseDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode preference exists in localStorage
    const darkModeFromStorage = localStorage.getItem('darkMode') === 'true';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set dark mode state from localStorage or system preference
    const initialDarkMode = darkModeFromStorage ?? systemPrefersDark;
    setIsDark(initialDarkMode);

    // Apply dark mode class to html element
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newState = !prev;
      localStorage.setItem('darkMode', newState.toString()); // Save preference to localStorage

      if (newState) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newState;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition fixed right-0 top-1/2"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default UseDarkMode;
