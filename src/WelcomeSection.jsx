import React from 'react';
import './WelcomeSection.css';
import WelcomeImg from "./placeholder.png";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="welcome-section">
      <div className="welcome-content">
        <h1>Welcome to Bookpublisher</h1>
        <p>Professional Book Writing Services in Mumbai</p>
      </div>
      <div className="center-aligned-image">
        <img src={WelcomeImg} alt="Center Aligned" />
      </div>
    </section>
  );
};

export default WelcomeSection;
