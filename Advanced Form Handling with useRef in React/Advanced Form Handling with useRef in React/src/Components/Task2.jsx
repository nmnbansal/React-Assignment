import { useRef, useState } from 'react';

function Task2() {
  
  const inputRefs = {
    username: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const [validation, setValidation] = useState({
    username: '',
    email: '',
    password: '',
  });

  
  const validateUsername = (username) => {
    if (username.length < 3) {
      return 'Username must be at least 3 characters long.';
    }
    return '';
  };

  const validateEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email address.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  const handleInputChange = (fieldName, value) => {
    let feedback = '';
    switch (fieldName) {
      case 'username':
        feedback = validateUsername(value);
        break;
      case 'email':
        feedback = validateEmail(value);
        break;
      case 'password':
        feedback = validatePassword(value);
        break;
      default:
        break;
    }
    setValidation((prevFeedback) => ({
      ...prevFeedback,
      [fieldName]: feedback,
    }));
  };

  return (
    <div>
        <h1>Task 2</h1>
      <label>
        Username:
        <input
          ref={inputRefs.username}
          type="text"
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
        {validation.username && <p>{validation.username}</p>}
      </label>

      <label>
        Email:
        <input
          ref={inputRefs.email}
          type="email"
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        {validation.email && <p>{validation.email}</p>}
      </label>

      <label>
        Password:
        <input
          ref={inputRefs.password}
          type="password"
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        {validation.password && <p>{validation.password}</p>}
      </label>
    </div>
  );
}

export default Task2;
