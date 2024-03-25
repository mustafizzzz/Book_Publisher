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
      <p className='fs-4'>Blossom Book Publication - Services in Mumbai</p>
      <h2 className='mb-5'>Services</h2>

      <div className='provided-services row  m-0 p-0 justify-content-around mb-5'>

        <div className='service col-md-3 border shadow'>

          <h1 className='text-center fw-bold'>Basic Plan</h1>
          <h2>₹5,500/-</h2>
          <h2>Payout</h2>
          <p>You Have To Just Copy All The Instructions (Content) In All Capital Letters That We Provide In Novel Book</p>
          <ul className='plan-info'>
            <li>Total Pages: 110</li>
            <li>Novel book pages 55 front and 55 back</li>
            <li>Time Duration: 5 days</li>
            <li>Book Security (Compulsory Amount): ₹1,050/-</li>
          </ul>
          <div className="service-btn d-flex justify-content-center">

            <button onClick={handleOpen}>Choose plan</button>
          </div>
        </div>

        <div className='service col-md-3 border shadow'>

          <h1 className='text-center fw-bold'>Medium Plan</h1>
          <h2>₹12,500/-</h2>
          <h2>Payout</h2>
          <p>You Have To Just Copy All The Instructions (Content) In All Capital Letters That We Provide In Novel Book</p>
          <ul className='plan-info'>
            <li>Total Pages: 170</li>
            <li>Novel book pages 85 front and 85 back</li>
            <li>Time Duration: 7 days</li>
            <li>Book Security (Compulsory Amount): ₹1,650/-</li>
          </ul>
          <div className="service-btn d-flex justify-content-center">

            <button onClick={handleOpen}>Choose plan</button>
          </div>
        </div>

        <div className='service col-md-3 border shadow'>

          <h1 className='text-center fw-bold'>Pro Plan</h1>
          <h2>₹17,500</h2>
          <h2>Payout</h2>
          <p>You Have To Just Copy All The Instructions (Content) In All Capital Letters That We Provide In Novel Book</p>
          <ul className='plan-info'>
            <li>Total Pages: 170</li>
            <li>Novel book pages 130 front and 130 back</li>
            <li>Time Duration: 10 days</li>
            <li>Book Security (Compulsory Amount): ₹1,750/-</li>
          </ul>
          <div className="service-btn d-flex justify-content-center">

            <button onClick={handleOpen}>Choose plan</button>
          </div>
        </div>

        <ModalFrom open={open} handleClose={handleClose} />
      </div>

      <div className='provided-services row  m-0 p-0 justify-content-evenly mb-5'>

        <div className='service col-md-3 border shadow'>
          <h1 className='text-center fw-bold'>हिंदी योजना</h1>
          <h2>₹10,500/-/-</h2>
          <h2>भुगतान</h2>
          <p>आपको सभी निर्देशों (सामग्री) को जो उपन्यास पुस्तक में हम प्रदान करते हैं, सभी कैपिटल अक्षरों में कॉपी करना होगा।</p>
          <ul className='plan-info'>
            <li>कुल पृष्ठ: 260</li>
            <li>नॉवेल पुस्तक के पृष्ठ 130 सामने और 130 पीछे</li>
            <li>समय अवधि: 10 दिन</li>
            <li>पुस्तक सुरक्षा (अनिवार्य राशि): ₹1,750/-</li>
          </ul>
          <div className="service-btn d-flex justify-content-center">
            <button onClick={handleOpen}>योजना चुनें</button>
          </div>
        </div>

        <div className='service col-md-3 border shadow'>

          <h1 className='text-center fw-bold'>Monthly Plan</h1>
          <h2>₹27,000/-</h2>
          <h2>Payout</h2>
          <p>You Have To Just Copy All The Instructions (Content) In All Capital Letters That We Provide In Novel Book</p>
          <ul className='plan-info'>
            <li>Total Pages: 500</li>
            <li>Novel book pages 250 front and 250 back</li>
            <li>Time Duration: 25 days</li>
            <li>Book Security (Compulsory Amount): ₹2,750/-</li>
          </ul>
          <div className="service-btn d-flex justify-content-center">

            <button onClick={handleOpen}>Choose plan</button>
          </div>
        </div>



        <ModalFrom open={open} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default ServicesSection;
