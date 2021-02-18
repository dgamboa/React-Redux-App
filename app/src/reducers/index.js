import { FETCH_USER_LOADING, FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "../actions";
import { initialUser, initialFollowers } from "../modules/UserData";

const initialState = {
  user: initialUser,
  followers: initialFollowers,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(FETCH_USER_LOADING):
      return ({
        ...state,
        isFetching: true
      })
    case(FETCH_USER_SUCCESS):
      return ({
        ...state,
        isFetching: false,
        user: action.payload
      })
    case(FETCH_USER_FAIL):
      return ({
        ...state,
        isFetching: false,
        error: "User " + action.payload
      })
    default:
      return state;
  }
}