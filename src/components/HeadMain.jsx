import React from "react";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

const HeadMain = ({ headText, placeholderSearch }) => {
  return (
    <React.Fragment>
      <h1 className="nav-brand">{headText}</h1>
      <Search
        searchIcon={<FaSearch className="search-icon" />}
        placeholderSearch={placeholderSearch}
      />
    </React.Fragment>
  );
};

export default HeadMain;
