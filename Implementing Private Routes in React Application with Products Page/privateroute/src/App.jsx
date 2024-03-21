
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Login from './Components/Login';
import Navbar from './Components/Navbar'; 
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/products" element={<PrivateRoute token={token} element={<Products />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;
