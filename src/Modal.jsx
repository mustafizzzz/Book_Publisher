// Modal.jsx

import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>Close</button>
        <h2>Contact info</h2>
        {/* Your contact form content goes here */}
        <form className='form-style'>
          <label htmlFor="name">Name:</label>
          <input className='input-style' type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input className='input-style' type="email" id="email" name="email" />
          <label htmlFor="phone">Phone:</label>
          <input className='input-style' type="text" id="phone" name="phone" />
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
