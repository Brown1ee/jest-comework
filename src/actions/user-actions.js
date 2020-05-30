import { USER } from './types';

export const addUser = user => ({
  type: USER.ADD_USER,
  payload: {
    user
  },
});

export const updateUser = (id, user) => ({
  type: USER.UPDATE_USER,
  payload: {
    id,
    user
  },
});

export const deleteUser = id => ({
  type: USER.DELETE_USER,
  payload: {
    id,
  },
});
