import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navComponents from '../config/navConfig';
import "../assets/css/navbar.css"

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const currentPage = navComponents.find(item => item.to === location.pathname);
    if (currentPage) {
      setActiveLink(currentPage.page);
    }
  }, [location.pathname]);

  const handleNavClick = (linkText) => {
    setActiveLink(linkText);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navComponents.map(({ page, to }) => (
          <li className="navbar-item" key={page}>
            <Link to={to}>
              <button
                className={`navbar-link ${activeLink === page ? 'active' : ''}`}
                data-nav-link
                onClick={() => handleNavClick(page)}
              >
                {page}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;