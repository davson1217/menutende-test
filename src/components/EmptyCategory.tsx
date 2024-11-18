import React from 'react';
import { useDispatch } from 'react-redux';
import { setView, View } from '../redux/states/appState';
import './category.css';

const EmptyCategory: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddCategoryClick = () => {
    dispatch(setView({ view: View.CategoryAdd }));
  };

  return (
    <div className="no-category-container">
      <p>No categories to display</p>
      <button className="btn" onClick={handleAddCategoryClick}>Add New</button>
    </div>
  );
};

export default EmptyCategory;


