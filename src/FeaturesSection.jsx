import React, { useState } from 'react';
import './FeaturesSection.css';
import Features1 from "../src/assets/feature1.jpg";
import Features2 from "../src/assets/feature2_1.jpg";
import Features3 from "../src/assets/feature3.jpg";

//counting trigger
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'



const FeaturesSection = () => {
  const [counterOn, setCounterOn] = useState(false);


  return (
    <>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <section id="features" className="features-section">
          <div className="feature-heading mb-5">
            <p>Some of Our Skills</p>
            <h2>Our Experties</h2>
          </div>
          <div className="features-container">

            <div className="feature">
              <img src={Features1} alt="Feature 1" />
              <h3 className='fw-bold mt-5 mb-3'>Book Publication</h3>
              <p className='m-0 mb-md-5 mb-2'>Monetize your writing hassle-free with our book publication services.</p>

              <div className='counter-count d-flex text-center justify-content-evenly  align-items-center px-md-4 px-5'>
                <i className="bi bi-journal-check"></i>
                <p className=' fw-bold m-0'>Book Published </p>
                <p className='counter-numbers fw-bolder m-0' style={{ color: 'rgb(224, 178, 38) ' }}>
                  {counterOn &&
                    <CountUp
                      start={0}
                      end={423}
                      delay={0}
                      duration={5}
                    >
                    </CountUp>
                  }+
                </p>

              </div>

            </div>

            <div className="feature">
              <img src={Features2} alt="Feature 2" />
              <h3 className='fw-bold mt-5 mb-3'>Book Developement</h3>
              <p className='m-0 mb-md-5 mb-2'>Transform your manuscript into a money-making asset with our expert book development services.</p>

              <div className='counter-count d-flex text-center justify-content-evenly  align-items-center px-md-4 px-2'>
                <i className="bi bi-check2-circle"></i>
                <p className=' fw-bold m-0'>Expert Book Developed </p>
                <p className='counter-numbers fw-bolder m-0' style={{ color: 'rgb(224, 178, 38) ' }}>
                  {counterOn &&
                    <CountUp
                      start={0}
                      end={355}
                      delay={0}
                      duration={5}
                      useEasing={true}
                    >
                    </CountUp>
                  }+
                </p>

              </div>

            </div>

            <div className="feature">
              <img src={Features3} alt="Feature 3" />
              <h3 className='fw-bold mt-5 mb-3'>Novel Writers</h3>
              <p className='m-0 mb-md-5 mb-2'>Unlock earning potential for your novels with our book publication services!</p>


              <div className='counter-count d-flex text-center justify-content-evenly  align-items-center px-md-1 px-2'>
                <i className="bi bi-people"></i>
                <p className=' fw-bold m-0'>Empowered Novel Writers </p>
                <p className='counter-numbers fw-bolder m-0' style={{ color: 'rgb(224, 178, 38) ' }}>
                  {counterOn &&
                    <CountUp
                      start={0}
                      end={412}
                      delay={0}
                      duration={5}
                      useEasing={true}
                    >
                    </CountUp>
                  }+
                </p>

              </div>

            </div>

          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default FeaturesSection;
