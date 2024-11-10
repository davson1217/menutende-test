import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, CategoryState } from "../../utils/types";

const initialState: CategoryState = { categories: [] };

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.categories = state.categories.filter(
        (cat) => cat.id !== action.payload
      );
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { addCategory, removeCategory, setCategories } =
  categorySlice.actions;
export default categorySlice.reducer;
