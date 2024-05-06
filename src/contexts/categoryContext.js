import React, { useEffect, useState } from "react";
import { getCategories } from "../api/category.js";

export const CategoryContext = React.createContext();

function CategoryProvider({ children }) {
  const [categories, setcategories] = useState([]);

  const handleGetCategories = () => {
    getCategories()
      .then((res) => {
        setcategories(res);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  const value = {
    categories,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
export default CategoryProvider;
