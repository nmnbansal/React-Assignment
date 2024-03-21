const payloadLoggerMiddleware = store => next => action => {
    console.log('Payload:', action.payload);
    return next(action);
  };
  
  export default payloadLoggerMiddleware;
  