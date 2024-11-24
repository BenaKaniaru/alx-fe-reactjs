// src/components/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This is where the nested routes will render */}
    </div>
  );
};

export default Profile;
