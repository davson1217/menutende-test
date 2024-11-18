import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../redux/slices/categoryThunks';
import type { AppDispatch } from '../redux/store';
import './category.css';
 

interface CategoryCardProps {
  id: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <div className="category-card">
      <button className="delete-btn" onClick={handleDelete}>
        ❌
      </button>
      <span className="category-name">{name}</span>
    </div>
  );
};

export default CategoryCard;
