// src/reducers/footballReducer.js
import {
  FETCH_FOOTBALL_MATCHES_REQUEST,
  FETCH_FOOTBALL_MATCHES_SUCCESS,
  FETCH_FOOTBALL_MATCHES_FAILURE,
} from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
};

const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOTBALL_MATCHES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_FOOTBALL_MATCHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        footballMatches: action.payload,
      };
    case FETCH_FOOTBALL_MATCHES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        footballMatches: [],
      };
    default:
      return state;
  }
};

export default footballReducer;
