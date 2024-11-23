import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Preparation Time: {recipe.time} minutes</p>
          </div>
        ))
      ) : (
        <p>No recipes found matching your search.</p>
      )}
    </div>
  );
};

export default RecipeList;
