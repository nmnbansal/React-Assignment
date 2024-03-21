// reducers/coffeeReducer.js
import { FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE } from './actionTypes';

const initialState = {
  coffeeList: [],
  error: null
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        coffeeList: action.payload,
        error: null
      };
    case FETCH_COFFEE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default coffeeReducer;
