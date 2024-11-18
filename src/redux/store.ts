

import { configureStore } from '@reduxjs/toolkit';
import AppState from "./states/appState";  
import categoryReducer from './slices/categorySlice';  

export const store = configureStore({
  reducer: {
    app: AppState,       
    category: categoryReducer,  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;






