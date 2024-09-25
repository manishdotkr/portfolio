import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavbarItem text="About" active />
        <NavbarItem text="Resume" />
        <NavbarItem text="Portfolio" />
        <NavbarItem text="Blog" />
        <NavbarItem text="Contact" />
      </ul>
    </nav>
  );
}

function NavbarItem({ text, active }) {
  return (
    <li className="navbar-item">
      <button className={`navbar-link ${active ? 'active' : ''}`} data-nav-link>{text}</button>
    </li>
  );
}

export default Navbar;
