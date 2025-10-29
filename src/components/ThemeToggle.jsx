import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-500 hover:text-primary dark:text-indigo-200 dark:hover:text-white transition"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Moon Icon
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.463-.69a.75.75 0 01.819.162l.32.32a.75.75 0 01-.22 1.28a10.5 10.5 0 01-9.232 4.434A10.5 10.5 0 011.5 10.5a10.5 10.5 0 014.434-9.232l.32-.32a.75.75 0 011.28.22z" clipRule="evenodd" />
        </svg>
      ) : (
        // Sun Icon
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 2.25zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.364 5.636a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM17.3 17.3a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM12 21.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM5.636 18.364a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM2.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM6.7 6.7a.75.75 0 01-1.06 0L4.58 5.636a.75.75 0 011.06-1.06l1.06 1.06a.75.75 0 010 1.06z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
