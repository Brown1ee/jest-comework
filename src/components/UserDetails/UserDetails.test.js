import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import { getUsersDetails } from '../../services';
import { useSearchPageContext } from '../SearchPageContext';

import UserDetails from './UserDetails';

jest.mock('../../services');

jest.mock('../SearchPageContext', () => ({
  useSearchPageContext: jest.fn()
}));

const MOCK_USER = {
  id: 1,
  login: 'testLogin',
  name: 'Test name',
  avatar_url: 'avatar-url',
  public_repos: 12,
  followers: 35,
  following: 40,
  company: 'TestInc',
  location: 'California, LA',
  email: 'some.mail@test.com'
};

describe('<UserDetails />', function () {
  it('should renders empty user details when user was not selected', () => {
    useSearchPageContext.mockImplementation(() => ({}));

    const { container: { firstChild } } = render(<UserDetails />)

    expect(firstChild).toBeNull();

  });

  it('should renders user details when user was selected', async () => {
    useSearchPageContext.mockImplementation(() => ({
      userLogin: MOCK_USER.login,
    }));

    getUsersDetails.mockResolvedValue(MOCK_USER);

    const { debug, queryByTestId } = render(<UserDetails />);

    await waitForElement(() => queryByTestId('user-details'))

  });

});

