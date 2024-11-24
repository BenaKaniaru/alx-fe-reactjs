import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic `id` from the route

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Displaying content for blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
