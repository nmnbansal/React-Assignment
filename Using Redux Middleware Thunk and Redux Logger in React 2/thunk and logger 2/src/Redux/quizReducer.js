// redux/reducers/quizReducer.js
import { FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE } from '../Redux/actionTypes';

const initialState = {
  quiz: [],
  error: null
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: action.payload,
        error: null
      };
    case FETCH_QUIZ_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default quizReducer;

// Add more reducers as needed for authentication
