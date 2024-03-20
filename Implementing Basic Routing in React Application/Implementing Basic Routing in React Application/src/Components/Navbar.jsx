import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
