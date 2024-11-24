// src/components/Post.jsx
import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // Retrieves the dynamic parameter from the URL

  return (
    <div>
      <h2>Post Page</h2>
      <p>Displaying details for post ID: {id}</p>
    </div>
  );
};

export default Post;
