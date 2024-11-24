import React, { useMemo } from "react";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);

  const favorites = useMemo(() => {
    return favoriteIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean); // Filter out undefined recipes
  }, [favoriteIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(
          (recipe) =>
            recipe && (
              <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            )
        )
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
