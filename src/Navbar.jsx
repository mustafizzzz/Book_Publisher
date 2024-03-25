import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../src/assets/logo2.png';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (sectionId) => {
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid px-md-5 px-2">

        <div className="logo-img d-flex align-items-center">
          <img src={logo2} alt="logo" />
          <p className='logo-text m-0 p-0'>Blossom Book Publication</p>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className={`nav-link ${activeLink === 'welcome' ? 'active' : ''}`} onClick={() => handleClick('welcome')}>Home</span>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>About</span>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${activeLink === 'contact-us' ? 'active' : ''}`} onClick={() => handleClick('contact-us')}>Contact</span>
            </li>
          </ul>
        </div>

      </div>

    </nav>




  );
};

export default Navbar;