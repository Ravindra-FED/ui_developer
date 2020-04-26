import React from "react";
import "./Search.css";
import Icon from "./../icon/icon";

function Search(props) {
  const { placeHolder, onKeyUp } = props;

  return (
    <div className="search-bar">
      <label htmlFor="search">
        <Icon className="fas fa-search" fontSize="14px" />
      </label>
      <input placeholder={placeHolder} onKeyUp={onKeyUp} id="search" />
    </div>
  );
}

export default Search;
