import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid"; // Pastikan Anda telah menginstall Heroicons

const ToggleMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      rootElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label
      htmlFor="themeToggle"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition"
    >
      <input
        type="checkbox"
        id="themeToggle"
        className="peer sr-only"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />

      <span
        className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-yellow-500"
      >
        {isDarkMode ? (
          <MoonIcon className="h-5 w-5 text-gray-800" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        )}
      </span>
    </label>
  );
};

export default ToggleMode;
