import { useReducer } from 'react';
import './App.css'

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const FormComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name.toUpperCase(), payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${state.email}, Password: ${state.password}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </form>
      {state.email && <div>User Email: {state.email}</div>}
      {state.password && <div>User Password: {state.password}</div>}
    </div>
  );
};

export default FormComponent;
