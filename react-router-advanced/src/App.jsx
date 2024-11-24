import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Post from "./components/Post";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

const Home = () => <h2>Home Page</h2>;

export default App;
