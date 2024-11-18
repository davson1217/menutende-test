import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum View {
    None,
    CategoryList,
    CategoryAdd,
}

interface CounterState {
    title: string;
    view: View;
}

const initialState: CounterState = {
    title: 'Menutender',
    view: View.CategoryAdd
}

export const appState = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<{ view: View }>) => {
            state.view = action.payload.view;
        }
    },
})

export const { setView } = appState.actions;

export default appState.reducer;
