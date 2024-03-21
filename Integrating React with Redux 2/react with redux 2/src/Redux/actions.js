// src/actions/footballActions.js
import axios from 'axios';
import {
  FETCH_FOOTBALL_MATCHES_REQUEST,
  FETCH_FOOTBALL_MATCHES_SUCCESS,
  FETCH_FOOTBALL_MATCHES_FAILURE,
} from './actionTypes';

// Async action to fetch football matches
export const fetchFootballMatches = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FOOTBALL_MATCHES_REQUEST });
    try {
      const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?page=2');
      dispatch({ type: FETCH_FOOTBALL_MATCHES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_FOOTBALL_MATCHES_FAILURE });
    }
  };
};
