import { useState, useEffect } from "react";
import recipeData from "../data.json";
import RecipeItem from "./RecipeItem";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div>
      <RecipeItem recipes={recipes} />
    </div>
  );
}
