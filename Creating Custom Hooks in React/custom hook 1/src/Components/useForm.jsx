// useForm.js
import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
