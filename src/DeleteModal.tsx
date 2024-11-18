import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './deleteModal.css';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  categoryName: string | null;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, categoryName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content1">
        <div className="close">
          <button className="modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <h2>Delete Category</h2>
        <p>Are you sure you want to delete the category "<span>{categoryName || "Category 1"}</span>"?</p>
        <div className="modal-buttons">
          <button className="delete-button" onClick={onDelete}>Delete</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
