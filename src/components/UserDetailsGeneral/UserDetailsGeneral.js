import React from 'react';

import Email from '../Email';
import GeneralInfoItem from '../GeneralInfoItem';

import './UserDetailsGeneral.scss'

const UserDetailsGeneral = ({ location, email, company, login }) => (
  <div className="user-details__general" data-testid="user-details-general">
    <GeneralInfoItem
      label="Repo"
      text={(
        <a href={`https://github.com/${login}`}
           target="_blank"
           rel="noopener noreferrer"
           data-testid="user-details-repo-link"
        >
          https://github.com/{login}
        </a>
      )}
    />
    <GeneralInfoItem
      label="Location"
      text={<span data-testid="user-details-location">{location || 'N/A'}</span>}
    />
    <GeneralInfoItem
      label="Email"
      text={(
        <span data-testid="user-details-email">
          <Email value={email} />
        </span>
      )}
    />
    <GeneralInfoItem
      label="Company"
      text={<span data-testid="user-details-company">{company || 'N/A'}</span>}
    />
  </div>
);

export default UserDetailsGeneral;
