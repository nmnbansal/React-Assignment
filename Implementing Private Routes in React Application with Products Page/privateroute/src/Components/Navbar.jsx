import { Link } from 'react-router-dom';
import './Navbar.css'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li> {/* Add login link */}
      </ul>
    </nav>
  );
}

export default Navigation;
