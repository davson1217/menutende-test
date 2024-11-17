import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Navbar from './Navbar';
import MainPage from './MainPage';
import { setView, View } from "./redux/states/appState";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView({ view: View.None }));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
