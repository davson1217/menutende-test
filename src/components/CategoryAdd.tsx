import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, fetchCategories } from "../redux/slices/categoryThunks";
import { setView, View } from "../redux/states/appState";
import type { AppDispatch } from "../redux/store";
import "./category.css";

const AddCategory: React.FC = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddCategory = async () => {
    if (categoryName) {
      await dispatch(addCategory(categoryName));
      setCategoryName("");
      dispatch(setView({ view: View.CategoryList }));
      await dispatch(fetchCategories());
    }
  };

  const handleBackClick = () => {
    dispatch(setView({ view: View.CategoryList }));
  };

  return (
    <div className="add-category-container">
      <div className="back-arrow" onClick={handleBackClick}>
        ← Back to Categories
      </div>
      <div className="form-container">
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          className="input"
        />
        <button className="btn" onClick={handleAddCategory}>
          Create
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
