import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {darkMode ? (
        <h1 className="flex justify-start items-center gap-2 font-medium text-center">
          <FaSun className="text-lg" /> Light Mode
        </h1>
      ) : (
        <h1 className="flex justify-start items-center gap-2 font-medium text-center">
          <FaMoon className="text-lg" /> Dark Mode
        </h1>
      )}
    </button>
  );
};

export default ThemeToggle;
