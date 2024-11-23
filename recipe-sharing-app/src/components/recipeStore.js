import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    // Example recipes to test filtering
    {
      id: 1,
      title: "Spaghetti Bolognese",
      ingredients: ["pasta", "meat", "tomato"],
      time: 30,
    },
    {
      id: 2,
      title: "Chicken Curry",
      ingredients: ["chicken", "curry powder", "rice"],
      time: 45,
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      ingredients: ["vegetables", "soy sauce", "noodles"],
      time: 20,
    },
  ],
  searchTerm: "",
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (newRecipes) => ({ recipes: newRecipes }),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
