import React, { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, addCategory, deleteCategory, setModalState, setDeleteModalState, setSelectedCategory } from './redux/categorySlice';
import DeleteModal from './DeleteModal';
import { Category } from './redux/categorySlice';
import { RootState } from './redux/store';
import Modal from './Modal';
import loadingImage from './assets/Pills.jpeg';
import './mainPage.css';



const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { categories, isModalOpen, isDeleteModalOpen, selectedCategory, selectedCategoryName } = useSelector(
    (state: RootState) => state.category
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch(
          'https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/categories/sharon-8920'
        );
        const data = await response.json();
        if (data.success && Array.isArray(data.categories)) {
          dispatch(
            setCategories(
              data.categories.map((item: any) => ({
                id: item.id,
                name: item.category,
              }))
            )
          );
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchCategories();
  }, [dispatch]);

  const handleCategoryCreated = (newCategory: Category) => {
    dispatch(addCategory(newCategory));
  };

  const handleDelete = async () => {
    if (selectedCategory) {
      try {
        const response = await fetch(
          `https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/category/sharon-8920`,
          {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: selectedCategory }),
          }
        );
        if (response.ok) {
          dispatch(deleteCategory(selectedCategory));
          dispatch(setDeleteModalState(false));
        }
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category.id) {
      dispatch(setSelectedCategory({ id: null, name: null }));
    } else {
      dispatch(setSelectedCategory({ id: category.id, name: category.name }));
    }
  };

  return (
    <div>
      <div className="button-container">
        {selectedCategory && (
          <button className="delete" onClick={() => dispatch(setDeleteModalState(true))}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
        <button onClick={() => dispatch(setModalState(true))}>CREATE &nbsp;+</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(setModalState(false))}
        onCategoryCreated={handleCategoryCreated}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => dispatch(setDeleteModalState(false))}
        onDelete={handleDelete}
        categoryName={selectedCategoryName}
      />

      <div className="container">
        <div className="grid-container">
          {isLoading ? (
            <p>Loading category...</p>
          ) : categories.length > 0 ? (
            categories.map((category: Category) => (
              <div
                key={category.id}
                className="box"
                onClick={() => handleCategoryClick(category)}
                style={{
                  border: selectedCategory === category.id ? '0.64px solid #A4454E' : '0.64px solid #454545',
                  color: selectedCategory === category.id ? '#A4454E' : '#454545',
                }}
              >
                {category.name}
              </div>
            ))
          ) : (
            <img src={loadingImage} alt="Loading" className="loading-image" />
          )}
        </div>

        {categories.length === 0 && !isLoading && <p>Your categories will appear here</p>}
      </div>
    </div>
  );
};

export default MainPage;
