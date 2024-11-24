import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = false; // Change this based on your authentication logic
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
