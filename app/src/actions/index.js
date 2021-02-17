import axios from "axios";
import { AUTH } from '../AUTH';

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";

export const getUser = () => dispatch => {
  dispatch( fetchUserLoading() )

  axios.get(`https://api.github.com/users/dgamboa`, {
    auth: AUTH
  })
    .then(res => {
      dispatch(fetchUserSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      // dispatch(fetchUserFail())
    })
};

export const fetchUserLoading = () => {
  return ({
    type: FETCH_USER_LOADING
  });
};

export const fetchUserSuccess = user => {
  return ({
    type: FETCH_USER_SUCCESS,
    payload: user
  });
};

export const fetchUserFail = error => {
  return ({
    type: FETCH_USER_FAIL,
    payload: error
  });
};
