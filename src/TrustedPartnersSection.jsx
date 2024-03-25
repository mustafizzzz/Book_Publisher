import React from 'react';
import './TrustedPartnersSection.css';
import Partner1Img from "./trustedby1.png";
import Partner2Img from "./trustedby2.png";
import Partner3Img from "./trustedby3.png";

const TrustedPartnersSection = () => {
  return (
    <section id="trusted-partners" className="trusted-partners-section">
      <p>Discover our trusted partners</p>
      <h2>Trusted by</h2>
      <div className='trusted-partner-section'>
      <div className="partner">
        <img src={Partner1Img} alt="Partner 1" />
      </div>
      <div className="partner">
        <img src={Partner2Img} alt="Partner 2" />
      </div>
      <div className="partner">
        <img src={Partner3Img} alt="Partner 3" />
      </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
