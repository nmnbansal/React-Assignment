import { useDispatch } from 'react-redux';
import { ACTION_TYPE_ONE } from './Redux/actionTypes';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch({ type: ACTION_TYPE_ONE, payload: { } });
  };

  return (
    <div>
      <h2>My Component</h2>
      <button onClick={handleDispatch}>Dispatch Action</button>
    </div>
  );
};

export default MyComponent;
