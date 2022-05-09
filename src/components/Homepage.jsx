import React from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
const Homepage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (job) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${job}&limit=10`
      );
      if (response.ok) {
        let data = await response.json();
        setSearchResult(data.data);
      }
      console.log("✅Search went well!");
    } catch (error) {
      console.log("❌ There is an error: ", error);
    }
  };
  console.log("Search result: ", searchResult);
  return (
    <div>
      <h1>Homepage</h1>
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Results searchResult={searchResult} />
    </div>
  );
};

export default Homepage;
