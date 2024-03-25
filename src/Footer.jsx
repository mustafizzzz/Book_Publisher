import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className='footer-info'>
      <div className='footer-compo'>
        <h1>Bookpublisher</h1>
        <p className='para'>mumbai</p>
      </div>
      <div className='footer-compo'>
        <h1>Follow us on</h1>
        <p className='para'>f b c</p>
      </div>
      </div>
      <p className='para'>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
