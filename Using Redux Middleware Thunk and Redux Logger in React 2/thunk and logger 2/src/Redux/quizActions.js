// redux/actions/quizActions.js
import axios from 'axios';
import { FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE } from './actionTypes';

export const fetchQuiz = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_FAILURE, error: error.message });
    }
  };
};
