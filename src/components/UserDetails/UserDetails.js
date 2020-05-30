import React, { useCallback, useEffect, useState } from 'react';

import { getUsersDetails } from '../../services';
import { useSearchPageContext } from '../SearchPageContext';
import UserDetailsGeneral from '../UserDetailsGeneral';
import UserDetailsHeader from '../UserDetailsHeader';
import UserDetailsSummary from '../UserDetailsSummary';

import './UserDetails.scss'

const UserDetails = () => {
  const { userLogin } = useSearchPageContext();
  const [user, setUser] = useState(null);

  const fetchUserDetails = useCallback(async login => {
    const response = await getUsersDetails(login);
    if (response.id) {
      setUser(response);
    }
  }, []);

  useEffect(() => {
    if (userLogin) {
      fetchUserDetails(userLogin);
    }
  }, [userLogin, fetchUserDetails]);

  if (!user) {
    return null;
  }

  return (
    <div className="user-details" data-testid="user-details">
      <UserDetailsSummary
        avatarUrl={user.avatar_url}
        name={user.name}
        login={user.login}
      />
      <div className="user-details__info">
        <UserDetailsHeader
          publicRepos={user.public_repos}
          followers={user.followers}
          following={user.following}
        />
        <UserDetailsGeneral
          login={user.login}
          company={user.company}
          email={user.email}
          location={user.location}
        />
      </div>
    </div>
  );
};

export default UserDetails;
