import React from 'react';
import './WelcomeSection.css';
import WelcomeImg from "../src/assets/startImage1.jpg";

const WelcomeSection = () => {
  return (

    <section id="welcome" className="welcome-section">
      <div className="pattern-dots">
        <div className="welcome-main-box px-5">
          <div className="welcome-content ">
            <h1>Welcome to Blossom Book Publication</h1>
            <p>Professional Book Writing Services in Mumbai</p>
          </div>
          <div className="center-aligned-image">
            <img src={WelcomeImg} alt="Center Aligned" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default WelcomeSection;
