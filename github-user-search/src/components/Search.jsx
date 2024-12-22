import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [minRepos, setMinRepos] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData || []);
    } catch (err) {
      setError("Looks like we cant find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="p-4 bg-gray-100 rounded-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter GitHub username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Repositories
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {searchResults.length > 0 ? (
                <div className="mt-4">
                    {searchResults.map((user) => (
                        <div key={user.id} className="border rounded p-4 mb-4 shadow">
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s avatar`}
                                className="w-16 h-16 rounded-full mb-2"
                            />
                            <p>Name: {user.login}</p>
                            <p>Location: {user.location || "Not specified"}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && !error && <p>No users found.</p>
            )}
        </div>
    );
};
  );
}
