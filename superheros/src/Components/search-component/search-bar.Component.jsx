import React from "react";
import "./search-bar.style.css";

export const SearchBar = (ev) => (
  <input
    className="searchBar"
    placeholder="Search Heros"
    type="search"
    onChange={ev.Search}
  />
);
