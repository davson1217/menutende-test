import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./states/appState";
import themeReducer from "./states/themeState";
import api from "./service/api";

const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
