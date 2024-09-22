import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/create-user">Create User</Link>
    </nav>
  );
}

export default Navbar;