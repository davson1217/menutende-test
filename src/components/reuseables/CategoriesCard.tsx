import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface CategoryProp {
  category: string;
  id: string;
  handleCategoryDeletion: (id: string) => Promise<void>;
}
const CategoriesCard = ({
  category,
  id,
  handleCategoryDeletion,
}: CategoryProp) => {
  return (
    <div className="category_card_container">
        <div className="front_page">
            {category}
        </div>
        <div className="back_page">
            <RiDeleteBinLine fontSize={'1.4rem'} onClick={() => handleCategoryDeletion(id)} />
        </div>
    </div>
  );
};

export default CategoriesCard;
