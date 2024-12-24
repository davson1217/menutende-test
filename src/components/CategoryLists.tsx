import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, setCategories, setView } from "../redux/states/appState";
import { RootState } from "../redux/store";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./reuseables/Button";
import CategoriesCard from "./reuseables/CategoriesCard";
import { CategoriesServices } from "../functions/CategoriesServices";

type Response = {
  success: boolean;
  categories: object[];
};

export interface Category {
  id: string;
  category: string;
}

const CategoryLists = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.app.categories
  ) as Category[];

  const categoriesServices = new CategoriesServices();

  const fetchCategoryLists = async () => {
    const res: Response = await categoriesServices.getCategories(setLoading);
    if (res.success) {
      dispatch(setCategories(res.categories));
    }
  };

  useEffect(() => {
    fetchCategoryLists();
  }, []);

  const navigateToAddCategories = () => {
    dispatch(setView({ view: View.CategoryAdd }));
  };

  const handleCategoryDeletion: (id: string) => Promise<void> = async (id) => {
    const res: Response = await categoriesServices.deleteCategories(
      setLoading,
      id
    );
    if (res.success) {
      fetchCategoryLists();
    }
  };

  return (
    <div className="categories_lists_container">
      <Button title="Add New" onClick={navigateToAddCategories} />
      <div>
        {loading ? (
          <div className="loader"></div>
        ) : categories.length > 0 ? (
          <div className="categories_card_div">
            {categories.map((category: Category) => (
              <CategoriesCard
                category={category.category}
                id={category.id}
                handleCategoryDeletion={handleCategoryDeletion}
                key={category.id}
              />
            ))}
          </div>
        ) : (
          <div className="empty_state">
            <img src="/no_result.jpg" alt="Empty State" />
            <p>No new categories to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryLists;
