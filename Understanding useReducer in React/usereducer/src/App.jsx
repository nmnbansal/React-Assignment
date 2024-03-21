import { useReducer } from 'react';

const initialState = {
  theme: 'light',
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`App ${state.theme}`}>
      <h1>Theme Toggle</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
      <p>Current Theme: {state.theme}</p>
    </div>
  );
};

export default App;
