import React, {useEffect} from 'react';
import {RootState} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setView, View} from "./redux/states/appState";
import CategoryLists from './components/CategoryLists';
import AddCategories from './components/AddCategories';
import './App.css';

function App() {
  const {title, view} = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView({view: View.CategoryList}))
  },[]);

  let content;

  switch (view) {
    case View.CategoryAdd:
      content = <AddCategories />;
      break;
    case View.CategoryList:
      content = <CategoryLists />;
      break;
    default: content = <div>None</div>
  }

  return(
    <div>
      <div className='nav_bar'>
        <h2>{title}</h2>
      </div>
      {content}
    </div>
  )
}

export default App;
