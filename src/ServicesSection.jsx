import React, { useState } from 'react';
import './ServicesSection.css';
import Service1Img from "./features1.png";
import Service2Img from "./features2.png";
import Service3Img from "./features3.png";
import Modal from './Modal';

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="services" className="services-section">
      <p>Bookpublisher - Services in Mumbai</p>
      <h2>Services</h2>
      <div className='service-section'>
      <div className="service">
      <p className='pbox'> Premium</p>
        <img src={Service1Img} alt="Service 1" />
        <h3>Basic Plan</h3>
        <h1>Basic features included</h1>
        <h1>Basic features included</h1>
        <button onClick={openModal}>Choose Plan</button>
      </div>
      <div className="service">
      <p className='pbox'> Premium</p>
        <img src={Service2Img} alt="Service 2" />
        <h3>Premium Plan</h3>
        <h1>Advanced features included</h1>
        <h1>Basic features included</h1>
        <h1>Basic features included</h1>
        <button onClick={openModal}>Choose Plan</button>
      </div>
      <div className="service">
      <p className='pbox'> Premium</p>
        <img src={Service3Img} alt="Service 3" />
        <h3>Pro Plan</h3>
        <h1>All features included</h1>
        <h1>Basic features included</h1>
        <h1>Basic features included</h1>
        <button onClick={openModal}>Choose Plan</button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </section>
  );
};

export default ServicesSection;
