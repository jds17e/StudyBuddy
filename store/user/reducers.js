import * as types from "./types";

const initialUser = {
  pending: false,
  error: null,
  user: {}
};

function user(state = initialUser, action) {
  switch (action.type) {
    case types.FETCH_USER_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.FETCH_USER_SUCCESS:
      console.log("IN THE REDUCER: ", action.payload);
      return {
        ...state,
        pending: false,
        user: { ...action.payload }
      };
    case types.FETCH_USER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default user;
