import React, { useContext, useState } from 'react';

export const SearchPageContext = React.createContext(null);

const SearchPageContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null);

  const providerValue = {
    userLogin,
    setUserLogin,
  };

  return (
    <SearchPageContext.Provider value={providerValue}>
      {children}
    </SearchPageContext.Provider>
  );
};

export const useSearchPageContext = () => useContext(SearchPageContext);

export default SearchPageContextProvider;
