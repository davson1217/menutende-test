import { configureStore } from '@reduxjs/toolkit'
import AppState from "./states/appState";

export const store = configureStore({
    reducer: {
        app: AppState,
    },
})

export type RootState = ReturnType<typeof store.getState>