import React, { useState } from 'react';
import './ContactUsSection.css';
import { db } from './firebase';
import { set, ref } from 'firebase/database';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await set(ref(db, 'contactUs'), formData);
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      alert('Something went wrong! Please try again later.');
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id="contact-us" className="contact-us-section px-md-2 px-4">
      <div className='contact-info'>
        <h2>Get in touch with us</h2>
        <h1>Contact Us</h1>
        <p>Mumbai, india</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button type="submit" className='btn btn-warning btn-lg'>Submit</button>
      </form>
    </section>
  );
};

export default ContactUsSection;
