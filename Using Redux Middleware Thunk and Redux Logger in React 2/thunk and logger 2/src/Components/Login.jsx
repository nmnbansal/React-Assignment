// components/Login.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); // Dispatch login action
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
