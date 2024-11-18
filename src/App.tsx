import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store'; 
import { setView, View } from './redux/states/appState';
import AddCategory from './components/CategoryAdd';
import CategoryList from './components/CategoryList';
import EmptyCategory from './components/EmptyCategory';
import { fetchCategories } from './redux/slices/categoryThunks';
import './app.css';


const App: React.FC = () => {
  const { title, view } = useSelector((state: RootState) => state.app);
  const { categories, loading } = useSelector((state: RootState) => state.category);
  const dispatch = useDispatch<AppDispatch>(); 

 
  useEffect(() => {
    dispatch(fetchCategories()); 
    dispatch(setView({ view: View.CategoryList })); 
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (view === View.CategoryAdd) {
      return <AddCategory />;
    }
    if (categories.length === 0) {
      return <EmptyCategory />;
    }
    return <CategoryList />;
  };

  return (
    <div className="app-container">
      <div className="app-top" >
        <h1 > {title}</h1>
      </div>
      <div className="app-bottom" style={{ margin: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
