import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum View {
    None,
    CategoryList,
    CategoryAdd,
}

export interface CategoryState{
    id: string;
    category: string;
}
interface CounterState {
    title: string;
    view: View;
    categories: CategoryState[];
}

const initialState: CounterState = {
    title: 'Menutender',
    view: View.CategoryAdd,
    categories: []
}

export const appState = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<{view: View}>) => {
            state.view = action.payload.view;
        },
        setCategories: (state, action: PayloadAction<CategoryState[]>) => {
            state.categories = action.payload;
        }
    },
})

export const { setView, setCategories } = appState.actions

export default appState.reducer