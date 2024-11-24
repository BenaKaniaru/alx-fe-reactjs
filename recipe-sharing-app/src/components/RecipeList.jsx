import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
            <button
              onClick={() =>
                favorites.includes(recipe.id)
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {favorites.includes(recipe.id)
                ? "Remove Favorite"
                : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
