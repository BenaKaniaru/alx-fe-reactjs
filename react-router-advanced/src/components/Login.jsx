// src/components/Login.jsx
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    alert("You are now logged in!");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
