import React from "react";
import { LoaderProps } from "../../utils/types";

const Loader: React.FC<LoaderProps> = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex items-center gap-2 animate-pulse">
        <span className="text-4xl font-bold">Menutender</span>
        <div
          className={`w-6 h-6 border-4 border-t-4 border-red-500 rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
