import React, { useCallback, useState } from "react";

import { useSearchPageContext } from "../SearchPageContext";

import "./SearchBox.scss";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const { setUserLogin } = useSearchPageContext();

  const handleOnChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleOnKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        setQuery("");
        setUserLogin(event.target.value);
      }
    },
    [setUserLogin]
  );

  return (
    <div className="search-box">
      <div className="search-box__input">
        <input
          type="text"
          data-testid="search-box-input"
          placeholder="Search an user and press enter..."
          value={query}
          onKeyDown={handleOnKeyDown}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {};

export default SearchBox;
