// src/hooks/useAuth.js
import { useState } from "react";

export const useAuth = () => {
  // Simulate an authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login/logout functions
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};
