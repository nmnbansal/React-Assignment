import { useRef } from 'react';

function Task3() {
    
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    
  const formData = new FormData(formRef.current);
  const formValues = Object.fromEntries(formData.entries());

  const isValid = validateForm(formValues);

  if (isValid) {

    console.log('Form data:', formValues);

    fetch('http://localhost:3000/Form', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form submitted successfully!', data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  } else {
    alert('Form data is invalid. Please check your inputs.');
  }
};

  const validateForm = (formData) => {
    return formData.name && formData.email && formData.message;
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
        <h1>Task 3</h1>
      <div>
        <label htmlFor="name">Name:</label>&nbsp;&nbsp;
        <input type="text" id="name" name="name" required />
      </div><br />
      <div>
        <label htmlFor="email">Email:</label>&nbsp;&nbsp;
        <input type="email" id="email" name="email" required />
      </div><br />
      <div>
        <label htmlFor="message">Message:</label>&nbsp;&nbsp;<br />
        <textarea id="message" name="message" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Task3;
