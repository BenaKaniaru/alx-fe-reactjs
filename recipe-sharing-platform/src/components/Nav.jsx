import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Recipe Sharing Platform
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add-recipe" className="hover:underline">
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}
