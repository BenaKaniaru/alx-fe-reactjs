import { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState();
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="grid gap-4 px-16 py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-gray-50 shadow-gray-500 shadow-md rounded border-none "
        >
          <img src={recipe.image} className="w-full rounded" alt="" />
          <div className="h-20">
            <div className="font-bold font-serif ml-2 sm:text-xs md:text-sm lg:text-base">
              {recipe.title}
            </div>
            <div className="text-base font-light italic ml-2 ">
              {recipe.summary}
            </div>
          </div>
          <div className="grid place-items-center">
            <Link to={`/recipe/${recipe.id}`}>
              <button
                className="bg-orange-400 rounded-md py-1 hover:bg-orange-300 px-2 mx-auto my-6"
                onClick={() => {
                  setRecipeId(recipe.id);
                  console.log(recipe.id);
                }}
              >
                Recipe Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
