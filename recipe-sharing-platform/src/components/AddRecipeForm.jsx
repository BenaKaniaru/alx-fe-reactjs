import React, { useState } from "react";

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState("");

  function validate() {
    if (
      !formData.title.trim() ||
      !formData.ingredients.trim() ||
      !formData.steps
    ) {
      setErrors("All fields are required");
      return;
    }

    if (formData.ingredients.split(",").length < 2) {
      setErrors("Please add at least two ingredients");
      return;
    }

    setErrors("");

    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    // Simple validation
    /*if (!formData.title || !formData.ingredients || !formData.steps) {
      setError("All fields are required.");
      return;
    }

    if (formData.ingredients.split(",").length < 2) {
      setError("Please list at least two ingredients.");
      return;
    }

    setError(""); // Clear error if validation passes
    console.log("Submitted Recipe:", formData);

    // Reset form (optional)
    setFormData({
      title: "",
      ingredients: "",
      steps: "",
    });*/
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        {<div className="text-red-500 mb-4">{errors}</div>}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={(e) =>
              setFormData({ ...formData, ingredients: e.target.value })
            }
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={(e) =>
              setFormData({ ...formData, steps: e.target.value })
            }
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400 focus:outline-none"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
