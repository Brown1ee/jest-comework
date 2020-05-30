import React from 'react';
import { render } from '@testing-library/react';

import UserDetailsHeader from './UserDetailsHeader';

describe('<UserDetailsHeader />', function () {
  it('should renders user details header', () => {
    const publicRepos = 12;
    const following = 45;
    const followers = 100;

    const { getByTestId } = render((
      <UserDetailsHeader
        publicRepos={publicRepos}
        following={following}
        followers={followers}
      />
    ));

    expect(getByTestId('user-details-public-repos')).toHaveTextContent(publicRepos);
    expect(getByTestId('user-details-followers')).toHaveTextContent(followers);
    expect(getByTestId('user-details-following')).toHaveTextContent(following);
  });
});

