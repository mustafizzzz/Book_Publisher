import React from 'react';
import './FeaturesSection.css';
import Features1 from "./features1.png";
import Features2 from "./features2.png";
import Features3 from "./features3.png";

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="feature-heading">
        <p>Services provided by Bookpublisher</p>
        <h2>Features</h2>
      </div>
      <div className="features-container">
        <div className="feature">
          <img src={Features1} alt="Feature 1" />
          <h1>Book Writing</h1>
          <p>Professional book writing services tailored to <br />your needs.</p>
        </div>
        <div className="feature">
          <img src={Features2} alt="Feature 2" />
          <h1>Book Editing</h1>
          <p>Expert book editing services to polish your <br />manuscript.</p>
        </div>
        <div className="feature">
          <img src={Features3} alt="Feature 3" />
          <h1>Book Publishing</h1>
          <p>Comprehensive book publishing services to <br />bring your book to market.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
