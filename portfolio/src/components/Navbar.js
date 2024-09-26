import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavbarItem text="About" to="/" />
        <NavbarItem text="Resume" to="/resume" />
        <NavbarItem text="Portfolio" to="/portfolio" />
        <NavbarItem text="Blog" to="/blog" />
        <NavbarItem text="Contact" to="/contact" />
      </ul>
    </nav>
  );
}

function NavbarItem({ text, to }) {
  return (
    <li className="navbar-item">
      <Link to={to} className="navbar-link">
        {text}
      </Link>
    </li>
  );
}

export default Navbar;
