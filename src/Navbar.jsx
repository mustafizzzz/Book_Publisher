import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="logo">Bookpublisher</div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
