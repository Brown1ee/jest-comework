import React from 'react';

import PageTitle from '../PageTitle';
import SearchBox from '../SearchBox';
import SearchPageContextProvider from '../SearchPageContext';
import UserDetails from '../UserDetails';

import './SearchPage.scss'

const SearchPage = () => (
  <SearchPageContextProvider>
    <div className="header">
      <div className="header-content">
        <PageTitle label="Github user details" />
        <SearchBox />
      </div>
    </div>
    <div className="content">
      <UserDetails />
    </div>
  </SearchPageContextProvider>
);

export default SearchPage;
