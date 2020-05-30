import React from 'react';
import { render } from '@testing-library/react';

import UserDetailsSummary from './UserDetailsSummary';

describe('<UserDetailsSummary />', function () {
  it('should renders user details summary when name is not empty', () => {
    const avatarUrl = 'https://image.com/1.png';
    const name = 'John Doe';
    const login = 'john.doe';

    const { getByTestId } = render((
      <UserDetailsSummary
        avatarUrl={avatarUrl}
        name={name}
        login={login}
      />
    ));
    expect(getByTestId('user-details-avatar')).toHaveAttribute('src', avatarUrl);
    expect(getByTestId('user-details-name')).toHaveTextContent(name);
  });
  it('should renders user details summary when name is empty', () => {
    const avatarUrl = 'https://image.com/1.png';
    const name = '';
    const login = 'john.doe';

    const { getByTestId } = render((
      <UserDetailsSummary
        avatarUrl={avatarUrl}
        name={name}
        login={login}
      />
    ));

    expect(getByTestId('user-details-name')).toHaveTextContent(login);
  });
});

