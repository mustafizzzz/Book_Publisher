import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className="footer-main text-center text-lg-start  text-muted" style={{ background: '#4a4a4a' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span className='text-light'>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <Link to="/" className="me-4 text-white">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link to="/" className="me-4 text-white">
            <i className="fab fa-google" />
          </Link>
          <Link to="/" className="me-4 text-white">
            <i className="fab fa-instagram" />
          </Link>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="bg-body-tertiary">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <i className="bi bi-book-half me-3" />Blossom Book Publication
              </h6>
              <p>
                Embark on your journey as a writer, crafting compelling narratives that captivate readers worldwide. With dedication and creativity, transform your passion for storytelling into a lucrative venture, where every word penned holds the potential for both artistic fulfillment and financial success
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Plans
              </h6>
              <p>
                <Link to="/" className="text-reset text-decoration-none text-white">Basic</Link>
              </p>
              <p>
                <Link to="/" className="text-reset text-decoration-none text-white">Medium</Link>
              </p>
              <p>
                <Link to="/" className="text-reset text-decoration-none text-white">Pro</Link>
              </p>
              <p>
                <Link to="/" className="text-reset text-decoration-none text-white">Hindi</Link>
              </p>
              <p>
                <Link to="/" className="text-reset text-decoration-none text-white">Monthly</Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <p><i className="fas fa-home me-3" />Military Rd, Marol, Andheri East, Mumbai, Maharashtra 400059</p>
              <p>
                <i className="fas fa-envelope me-3" />
                blossombookpublication@gmail.com
              </p>
              <p><i className="fas fa-phone me-3" />+919793186798</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div className="text-center p-40" style={{ background: '#363636' }}>
        © {new Date().getFullYear()} Copyright:
        <Link className="text-reset fw-bold" to="https://blossomBookPublication.web.app/">blossomBookPublication.web.app</Link>
      </div>
      {/* Copyright */}
    </footer>


  );
};

export default Footer;
