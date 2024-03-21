import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      const token = response.data.token;
      onLogin(token);
      navigate('/'); // Navigate to the home page after successful login
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email: &nbsp;
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br /><br />
        <label>
          Password: &nbsp;
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
