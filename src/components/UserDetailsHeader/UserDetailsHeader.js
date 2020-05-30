import React from 'react';

import './UserDetailsHeader.scss'

const UserDetailsHeader = ({ publicRepos, followers, following }) => (
  <div className="user-details__header" data-testid="user-details-header">
    <div className="user-details__header-bg" />
    <div className="user-details__header-content">
      <div className="user-details__header-item">
        <h5 data-testid="user-details-public-repos">{publicRepos}</h5>
        <span>public repos</span>
      </div>
      <div className="user-details__header-item">
        <h5 data-testid="user-details-followers">{followers}</h5>
        <span>followers</span>
      </div>
      <div className="user-details__header-item">
        <h5 data-testid="user-details-following">{following}</h5>
        <span>following</span>
      </div>
    </div>
  </div>
);

export default UserDetailsHeader;
