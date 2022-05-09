import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="d-flex">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
