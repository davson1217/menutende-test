import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, setCategories, setView } from "../redux/states/appState";
import { RootState } from "../redux/store";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./reuseables/Button";
import CategoriesCard from "./reuseables/CategoriesCard";

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

  const fetchCategoryLists = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/categories/8931"
      );
      const res: Response = await response.json();
      setLoading(false);
      if (res.success) {
        dispatch(setCategories(res.categories));
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
        // throw new Error(err.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCategoryLists();
  }, []);

  const navigateToAddCategories = () => {
    dispatch(setView({ view: View.CategoryAdd }));
  };

  const handleCategoryDeletion: (id: string) => Promise<void> = async (id) => {
    try {
      await fetch(
        `https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/category/8931/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then((response) => {
          if (response.success) {
            fetchCategoryLists();
          }
        });
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <div className="categories_lists_container">
      <Button title="Add New" onClick={navigateToAddCategories} />
      <div className="categories_card_div">
        {loading ?
          <div className="loader"></div> :
            categories.length > 0
             ?
            categories.map((category: Category) => (
              <CategoriesCard
                category={category.category}
                id={category.id}
                handleCategoryDeletion={handleCategoryDeletion}
                key={category.id}
              />
            ))
          
         : (
          <>
            <p>No new categories to display</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryLists;
