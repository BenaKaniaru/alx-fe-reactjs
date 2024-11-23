import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "8px",
        marginBottom: "20px",
        width: "100%",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
