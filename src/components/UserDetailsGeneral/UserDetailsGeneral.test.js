import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import UserDetailsGeneral from './UserDetailsGeneral';

const location = 'California, LA';
const email = 'john.doe@mail.com';
const login = 'john.doe';
const company = 'TestInc';

describe('<UserDetailsGeneral />', function () {
  it('should renders general user details', () => {
    const { getByTestId, queryByTestId } = render((
      <UserDetailsGeneral
        location={location}
        email={email}
        company={company}
        login={login}
      />
    ));

    const repoUrl = `https://github.com/${login}`;

    expect(getByTestId('user-details-repo-link')).toHaveTextContent(repoUrl);
    expect(getByTestId('user-details-repo-link')).toHaveAttribute('href', repoUrl);

    expect(queryByTestId('show-email-button')).not.toBeNull();

    expect(getByTestId('user-details-company')).toHaveTextContent(company);
    expect(getByTestId('user-details-location')).toHaveTextContent(location);
  });

  it('should renders user email when show email clicked', async () => {

    const { getByTestId } = render((
      <UserDetailsGeneral
        location={location}
        email={email}
        company={company}
        login={login}
      />
    ));

    fireEvent.click(getByTestId('show-email-button'));

    expect(getByTestId('user-details-email')).toHaveTextContent(email);

  });
});

