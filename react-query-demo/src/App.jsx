import React from "react";
import { QueryClient, QueryClientProvider } from "react-query"; // Import necessary React Query components
import PostsComponent from "./components/PostsComponent"; // Import your PostsComponent

// Create a query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Provide the queryClient to your app */}
      <div className="App">
        <h1>Welcome to React Query Demo</h1>
        <PostsComponent /> {/* The component where you fetch posts */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
