import React from 'react';

import './UserDetailsSummary.scss'

const UserDetailsSummary = ({ avatarUrl, name, login }) => (
  <div className="user-details__summary" data-testid="user-details-summary">
    <div className="user-details__summary-bg" />
    <div className="user-details__summary-content">
      <img src={avatarUrl} alt="" className="user-details-avatar" data-testid="user-details-avatar" />
      <h4 data-testid="user-details-name">{name || login}</h4>
    </div>
  </div>
);

export default UserDetailsSummary;
