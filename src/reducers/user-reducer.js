import { USER } from '../actions/types';

/**
 * THIS FILE IS NOT USED IN THE APP
 * IT IS JUST A SAMPLE REDUCER
 *
 * Example of state:
 * {
 *   '123456': {
 *     id: '123456',
 *     name: 'User name',
 *     email: 'smth@test.com'
 *   },
 *   'abc12': {
 *     id: 'abc12',
 *     name: 'John Doe',
 *     email: 'world@test.com'
 *   },
 * }
 */

const addUser = (state, { user }) => ({
  ...state,
  [user.id]: user,
});

const updateUser = (state, { id, user }) => ({
  ...state,
  [id]: {
    ...state[id],
    ...user,
  },
});

const deleteUser = (state, { id }) => Object.keys(state).reduce((acc, stateId) => {
  if (stateId !== id) {
    acc[stateId] = state[stateId]
  }
  return acc
}, {});

export default (state = {}, { type, payload }) => {
  switch (type) {
    case USER.ADD_USER:
      return addUser(state, payload);
    case USER.UPDATE_USER:
      return updateUser(state, payload);
    case USER.DELETE_USER:
      return deleteUser(state, payload)
  }
  return state
}
