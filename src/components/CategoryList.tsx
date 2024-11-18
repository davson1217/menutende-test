import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setView, View } from '../redux/states/appState';
import CategoryCard from './CategoryCard';
import './category.css';

const CategoryList: React.FC = () => {
  const { categories, loading } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="category-list-container">
    
      <button className="btn add-category-btn" onClick={() => dispatch(setView({ view: View.CategoryAdd }))}>
        Add New Category
      </button>

      
      {loading ? (
        <p>Loading...</p>
      ) : categories.length === 0 ? (
        <p>No categories found. Please add a category.</p>
      ) : (
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} id={category.id} name={category.category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryList;



