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
      console.log("Loading")
      return state;
    case(FETCH_USER_SUCCESS):
      console.log("Success")
      return state;
    case(FETCH_USER_FAIL):
      console.log("Fail")
      return state;
    default:
      return state;
  }
}