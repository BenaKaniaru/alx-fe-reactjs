import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
};

const Home = () => <h2>Home Page</h2>;

const Profile = () => <h2>Profile Page</h2>;

const Post = () => {
  const { id } = useParams();
  return <h2>Post ID: {id}</h2>;
};

export default App;
