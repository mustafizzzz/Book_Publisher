import React, { useState } from 'react';
import './ContactUsSection.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact-us" className="contact-us-section">
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactUsSection;
