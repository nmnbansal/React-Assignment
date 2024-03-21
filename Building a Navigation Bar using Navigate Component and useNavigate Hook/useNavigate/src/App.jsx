import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Products from './Pages/Products'
import './App.css'; 

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="*">Try</NavLink></li>
      </ul>
    </nav>
  );
}

function NavLink({ to, children }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return <a href={to} onClick={handleClick}>{children}</a>;
}

function App() {
  return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;
