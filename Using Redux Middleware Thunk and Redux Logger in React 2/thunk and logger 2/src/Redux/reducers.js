// redux/reducers/index.js
import { combineReducers } from 'redux';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
  // Add more reducers as needed for authentication
});

export default rootReducer;
