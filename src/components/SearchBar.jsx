import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ handleSearch, setSearchTerm, searchTerm }) => {
  return (
    <div className="d-flex">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search job"
        aria-label="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSearch(searchTerm);
        }}
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
