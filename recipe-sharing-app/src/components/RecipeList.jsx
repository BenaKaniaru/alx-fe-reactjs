import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes available. Add one!</p>
      )}

      {RecipeList.length > 0}
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
