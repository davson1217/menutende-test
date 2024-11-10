export interface Category {
  id: number;
  name: string;
}

export interface CategoryState {
  categories: Category[];
}

export enum ViewType {
  None,
  CategoryList,
  CategoryAdd,
  EmptyCategory,
}

export interface CounterState {
  title: string;
  view: ViewType;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
}

export interface CategoryError {
  success: boolean;
  message: string;
}

export type CategoryResponse = ApiResponse<CategoryError>;

export interface AddCategoryProps {
  onCreate: (name: string) => void;
  onBack: () => void;
  darkMode: boolean;
}

export interface CategoryListProps {
  categories: { id: string; category: string }[];
  onAdd: () => void;
  onDelete: (categoryId: string) => void;
  darkMode: boolean;
}

export interface LoaderProps {
  darkMode: boolean;
}
