import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setView } from "./redux/states/appState";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import ThemeToggle from "./components/ThemeToggle";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "./redux/service/category";
import { CategoryResponse, ViewType } from "./utils/types";
import { toast } from "sonner";
import Loader from "./components/Loader";

function App() {
  const { view } = useSelector((state: RootState) => state.app);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  const {
    data,
    isLoading: isFetching,
    refetch,
  } = useGetCategoriesQuery("dreal-martins");
  const [addCategory, { isLoading: isAdding }] = useAddCategoryMutation();
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();

  const categories = data?.categories || [];

  useEffect(() => {
    dispatch(setView({ view: ViewType.CategoryList }));
  }, [categories.length, dispatch]);

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteCategory({ username: "dreal-martins", categoryId }).unwrap();
      refetch();
      toast.success("Category deleted successfully!");
    } catch (error: unknown) {
      if (error instanceof TypeError) {
        toast.error("Network error: Unable to reach the server.");
      } else if (isCategoryError(error)) {
        console.error("Failed to delete category:", error);
        toast.error(
          error.data?.message || "Failed to delete category. Please try again."
        );
      } else {
        console.error("Unexpected error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  const handleAddCategory = async (name: string) => {
    if (name.trim()) {
      try {
        await addCategory({
          username: "dreal-martins",
          category: name,
        }).unwrap();
        refetch();
        toast.success("Category added successfully!");
      } catch (error: unknown) {
        if (error instanceof TypeError) {
          toast.error("Network error: Unable to reach the server.");
        } else if (isCategoryError(error)) {
          console.error("Failed to add category:", error);
          toast.error(
            error.data?.message || "Failed to add category. Please try again."
          );
        } else {
          console.error("Unexpected error:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    } else {
      toast.warning("Category name cannot be empty.");
    }
  };

  const isOverallLoading = isFetching || isAdding || isDeleting;

  if (isOverallLoading) return <Loader darkMode={darkMode} />;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Menutender</h1>
        <ThemeToggle />
      </header>
      <main className="p-4 flex justify-center">
        <div className="w-full max-w-2xl">
          {view === ViewType.CategoryAdd ? (
            <AddCategory
              onCreate={handleAddCategory}
              onBack={() => dispatch(setView({ view: ViewType.CategoryList }))}
              darkMode={darkMode}
            />
          ) : (
            <CategoryList
              categories={categories}
              onAdd={() => dispatch(setView({ view: ViewType.CategoryAdd }))}
              onDelete={handleDelete}
              darkMode={darkMode}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

// Helper function to check if error is of type CategoryResponse
function isCategoryError(error: unknown): error is CategoryResponse {
  return (
    error != null &&
    typeof error === "object" &&
    "data" in error &&
    "message" in (error as any).data
  );
}
