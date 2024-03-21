import React, { useState, useMemo, useCallback } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validate = useCallback(() => {
    const newErrors = {
      name: formData.name.length < 3 ? 'Name must be at least 3 characters' : '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email) ? 'Invalid email address' : '',
      password: formData.password.length < 6 ? 'Password must be at least 6 characters' : '',
      confirmPassword: formData.confirmPassword !== formData.password ? 'Passwords do not match' : ''
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  }, [formData]);

  return { formData, setFormData, errors, validate };
};

const App = React.memo(function Form() {
  const { formData, setFormData, errors, validate } = useForm();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, [setFormData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log('Form data:', formData);
    } else {
      console.log('Form is invalid');
    }
  }, [formData, validate]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <div className="error">{errors.name}</div>
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        <div className="error">{errors.email}</div>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <div className="error">{errors.password}</div>
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        <div className="error">{errors.confirmPassword}</div>
      </div>
      <button type="submit" disabled={!Object.values(errors).every(error => error === '')}>
        Submit
      </button>
    </form>
  );
});

App.displayName = 'Form'; // Add display name

export default App;
