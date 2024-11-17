import { configureStore } from '@reduxjs/toolkit';
import appState from './states/appState';
import categoryReducer from './categorySlice';


export const store = configureStore({
    reducer: {
        app: appState,
        category: categoryReducer,
    },
});

// Define the RootState type to use across the app for type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
