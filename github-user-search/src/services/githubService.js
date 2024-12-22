import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

export const fetchAdvancedSearch = async ({ username, location, minRepos }) => {
  try {
    // Construct the query string
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // Make the API request
    const response = await axios.get(`${BASE_URL}${query}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error;
  }
};
