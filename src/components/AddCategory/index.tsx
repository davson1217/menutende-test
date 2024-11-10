import React, { useState, FormEvent } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AddCategoryProps } from "../../utils/types";

const AddCategory: React.FC<AddCategoryProps> = ({
  onCreate,
  onBack,
  darkMode,
}) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (categoryName.trim()) onCreate(categoryName);
    setCategoryName("");
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className={`font-medium flex justify-start items-center gap-1 border-[2px] px-2.5 py-1.5 rounded-lg ${
            darkMode
              ? "border-gray-900 hover:bg-gray-900 hover:text-white"
              : "border-gray-100 hover:bg-gray-100 hover:text-black"
          }`}
        >
          <FaLongArrowAltLeft className="font-semibold text-lg" />
          Back
        </button>
        <h2 className="text-xl font-semibold">Add Category</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="mt-4 w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white outline-none text-black "
        />
        <button
          type="submit"
          className={`mt-6 w-full p-2 rounded-lg font-medium text-lg ${
            darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
