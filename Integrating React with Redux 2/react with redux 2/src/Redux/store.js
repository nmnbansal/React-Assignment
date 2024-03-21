// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import footballReducer from './reducer';

// Combine reducers
const rootReducer = combineReducers({
  football: footballReducer,
  // Add more reducers if needed
});

// Create store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
