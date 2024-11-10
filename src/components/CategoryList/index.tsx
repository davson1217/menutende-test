import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CategoryListProps } from "../../utils/types";

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onAdd,
  onDelete,
  darkMode,
}) => (
  <div
    className={`p-6 rounded-lg shadow-lg ${
      darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
    }`}
  >
    <h2 className="text-xl font-semibold">Categories</h2>
    <ul className="mt-4 flex justify-start items-center gap-4 flex-wrap">
      {categories.length === 0 ? (
        <p className="text-lg font-medium">No categories to display</p>
      ) : (
        categories.map((category) => (
          <div
            key={category.id}
            className={`w-[40%] md:w-[30%] text-wrap h-[56px] flex justify-center items-center rounded-lg relative p-4 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <h1 className="font-semibold">{category.category}</h1>
            <div
              onClick={() => onDelete(category.id)}
              className="absolute -top-1 -right-1"
            >
              <FaTrashAlt className="text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))
      )}
    </ul>
    <button
      onClick={onAdd}
      className={`mt-6 w-full p-2 rounded-lg font-medium text-lg ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      Add New
    </button>
  </div>
);

export default CategoryList;
