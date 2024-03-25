// Modal.jsx

import React from 'react';
import './Modal.css';

// Mui imports
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const ModalFrom = ({ open, handleClose }) => {

  //mui modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 5,
    p: 0,
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phoneNumber: '',
    city: '',
    state: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setValidationErrors({
        ...validationErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      });
    } else {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Please provide the details</h3>
            <button type="button" className="btn-close" onClick={handleClose} />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
                <p className="text-danger">{validationErrors.name}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
                <p className="text-danger">{validationErrors.email}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number<span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                <p className="text-danger">{validationErrors.phoneNumber}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City<span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur} />
                <p className="text-danger">{validationErrors.city}</p>
              </div>
              <div className="btn-box-detail-plan d-flex justify-content-end">

                <button type="submit" className="btn btn-dark">Save changes</button>
              </div>
            </form>
          </div>
        </div>

      </Box>
    </Modal>
  );
};

export default ModalFrom;
