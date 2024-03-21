// redux/actions/authActions.js
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // Make API call to login using provided credentials
      const response = await axios.post('https://reqres.in/api/login', credentials);
      
      // Dispatch login success action with user data
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      // Dispatch login failure action with error message
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  };
};
