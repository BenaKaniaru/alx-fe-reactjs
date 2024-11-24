import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts", // Query key
    fetchPosts, // Fetching function
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes (300,000ms)
      staleTime: 1000 * 60 * 2, // Data is considered fresh for 2 minutes
      refetchOnWindowFocus: true, // Refetch data when the window is focused
      keepPreviousData: true, // Keep previous data while new data is being fetched
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
