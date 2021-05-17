import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import "../css/homePage.css";

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickSearchIcon = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <div id="search-panel-container">
      <div id="search-panel">
        <SearchIcon
          style={{ color: "lightblue", paddingLeft: "10px" }}
          onClick={handleClickSearchIcon}
        />
        <input ref={inputRef} type="text" id="search-input" />
      </div>
      <div id="buttons">
        <button>Check it ~</button>
        <button>Go random</button>
      </div>
    </div>
  );
};

export { HomePage };
