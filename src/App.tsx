import React, {useEffect} from 'react';
import {RootState} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setView, View} from "./redux/states/appState";

function App() {
  const {title, view} = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView({view: View.CategoryList}))
  });

  switch (view) {
    case View.CategoryAdd:
      return <div><h1>{title}</h1><section>Add Category</section></div>;
    case View.CategoryList:
      return <div><h1>{title}</h1> <section>All Categories</section></div>
    default: return <div>NONE</div>
  }
}

export default App;
