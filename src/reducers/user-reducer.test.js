// import { addUser, deleteUser, updateUser } from '../actions/user-actions';

import userReducer from "./user-reducer";
import { USER } from "../actions/types";

describe("user-reducer", () => {
  it("should return default state", () => {
    const initialState = undefined;
    const action = {
      type: "an action",
    };

    const expectedState = {};
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
  it("should add new user", () => {
    const initialState = {};
    const action = {
      type: USER.ADD_USER,
      payload: {
        user: {
          id: "123456",
          name: "User name",
          email: "smth@test.com",
        },
      },
    };

    const expectedState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
    };
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it("should update user by id", () => {
    const initialState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
      "123457": {
        id: "123457",
        name: "User name",
        email: "smth@test.com",
      },
      "123458": {
        id: "123458",
        name: "User name",
        email: "smth@test.com",
      },
    };

    const action = {
      type: USER.UPDATE_USER,
      payload: {
        id: 123458,
        user: {
          id: "123458",
          name: "My name",
          email: "myemail@test.com",
        },
      },
    };

    const expectedState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
      "123457": {
        id: "123457",
        name: "User name",
        email: "smth@test.com",
      },
      "123458": {
        id: "123458",
        name: "My name",
        email: "myemail@test.com",
      },
    };
    const actualState = userReducer(initialState, action);

    expect(actualState).toEqual(expectedState);
  });

  it("should delete user by id", () => {
    const initialState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
      "123457": {
        id: "123457",
        name: "User name",
        email: "smth@test.com",
      },
      "123458": {
        id: "123458",
        name: "User name",
        email: "smth@test.com",
      },
    };

    const action = {
      type: USER.DELETE_USER,
      payload: {
        id: "123458",
      },
    };

    const expectedState = {
      "123456": {
        id: "123456",
        name: "User name",
        email: "smth@test.com",
      },
      "123457": {
        id: "123457",
        name: "User name",
        email: "smth@test.com",
      },
    };

    const actualState = userReducer(initialState, action);
    expect(actualState).toEqual(expectedState);
  });
});
