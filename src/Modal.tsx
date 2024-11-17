import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './redux/categorySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Category } from './redux/categorySlice';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCategoryCreated: (newCategory: Category) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const dispatch = useDispatch();

  const createCategory = async (name: string) => {
    try {
      const response = await fetch('https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/add-category/sharon-8920', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: name }),
        
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          dispatch(addCategory({ id: data.result.id, name: data.result.category }));
          onClose();
        }
      }
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleCreate = () => {
    if (categoryName.trim()) {
      createCategory(categoryName);
      setCategoryName('');
    } else {
      alert('Please enter a category name');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close">
          <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <h2>Add Category</h2>
        <input className="input"
          type="text"
          placeholder="new category here..."
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button className="modal-submit" onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Modal;
