import * as types from "./types";

export function fetchUserPending() {
  return {
    type: types.FETCH_USER_PENDING
  };
}

export function fetchUserSuccess(user) {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: user
  };
}

export function fetchUserError(error) {
  return {
    type: types.FETCH_USER_ERROR,
    payload: error
  };
}
