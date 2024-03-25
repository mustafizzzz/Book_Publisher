import React, { useState } from 'react';
import './ServicesSection.css';
import Service1Img from "./features1.png";
import Service2Img from "./features2.png";
import Service3Img from "./features3.png";
import Modal from './ModalFrom';
import ModalFrom from './ModalFrom';

const ServicesSection = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <section id="services" className="services-section">
      <p>Blossom Book Publication - Services in Mumbai</p>
      <h2>Services</h2>
      <div className='service-section row border'>

        <div className='service col-md-3'>

          <h3>Book Publishing</h3>
          <p>Get your book published with Blossom Book Publication.</p>
          <button onClick={handleOpen}>Get Started</button>
        </div>
        <div className='service col-md-3'>

          <h3>Book Publishing</h3>
          <p>Get your book published with Blossom Book Publication.</p>
          <button onClick={handleOpen}>Get Started</button>
        </div>
        <div className='service col-md-3'>
          <h3>Book Publishing</h3>
          <p>Get your book published with Blossom Book Publication.</p>
          <button onClick={handleOpen}>Get Started</button>
        </div>

        <ModalFrom open={open} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default ServicesSection;
