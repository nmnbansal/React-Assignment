import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Redux/reducers';
import actionTypeLoggerMiddleware from '../MiddleWares/actionTypeLoggerMiddleware';
import payloadLoggerMiddleware from '../MiddleWares/payloadLoggerMiddleware';

const middleware = applyMiddleware(actionTypeLoggerMiddleware, payloadLoggerMiddleware);

const store = createStore(rootReducer, middleware);
export default store;
