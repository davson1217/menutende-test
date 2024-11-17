import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
  id: string;
  name: string;
}

interface CategoryState {
  categories: Category[];
  isModalOpen: boolean;
  isDeleteModalOpen: boolean;
  selectedCategory: string | null;
  selectedCategoryName: string | null;
}

const initialState: CategoryState = {
  categories: [],
  isModalOpen: false,
  isDeleteModalOpen: false,
  selectedCategory: null,
  selectedCategoryName: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setDeleteModalState: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<{ id: string | null; name: string | null }>) => {
      state.selectedCategory = action.payload.id;
      state.selectedCategoryName = action.payload.name;
    },
  },
});

export const {
  setCategories,
  addCategory,
  deleteCategory,
  setModalState,
  setDeleteModalState,
  setSelectedCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
