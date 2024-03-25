import React, { useState } from 'react';
import "./LandingPage.css";
import WelcomeImg from "./placeholder.png";
import Features1 from "./features1.png"
import Features2 from "./features2.png"
import Features3 from "./features3.png"
import Trustedby1 from "./trustedby1.png"
import Trustedby2 from "./trustedby2.png"
import Trustedby3 from "./trustedby3.png"
const LandingPage = () => {
  // State for contact form inputs
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    message: ''
  });

  // State for FAQs
  const [faqs, setFaqs] = useState([
    {
      question: 'Question 1',
      answer: 'Answer to question 1',
      isOpen: false
    },
    {
      question: 'Question 2',
      answer: 'Answer to question 2',
      isOpen: false
    },
    {
      question: 'Question 3',
      answer: 'Answer to question 3',
      isOpen: false
    }
  ]);

  // Handle input change in the contact form
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  // Toggle navbar menu
  const toggleMenu = () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Welcome Section */}
      <section id="welcome">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing features and services!</p>
      </section>

      {/* Center Aligned Image */}
      <div className="center-aligned-image">
        <img src={WelcomeImg} alt="Center Aligned" />
      </div>

      <div className="sectiontitles">
        <h2>Services</h2>
      </div>
      <section id="features">
        
        <div className="feature">
          <img src={Features1} alt="Feature 1" />
          <p>Feature 1 description</p>
        </div>
        <div className="feature">
          <img src={Features2} alt="Feature 2" />
          <p>Feature 2 description</p>
        </div>
        <div className="feature">
          <img src={Features3} alt="Feature 3" />
          <p>Feature 3 description</p>
        </div>
      </section>
      <div className="sectiontitles">
        <h2>Services</h2>
      </div>
      <section id="services">
        
        <div className="service">
          <img src={WelcomeImg} alt="Service 1" />
          <p>Service 1 description</p>
        </div>
        <div className="service">
          <img src={WelcomeImg} alt="Service 2" />
          <p>Service 2 description</p>
        </div>
        <div className="service">
          <img src={WelcomeImg} alt="Service 3" />
          <p>Service 3 description</p>
        </div>
      </section>
      <div className="sectiontitles">
        <h2>Services</h2>
      </div>
      {/* Trusted Partners Section */}
      <section id="trusted-partners">
        
        <div className="partner">
          <img src={Trustedby1} alt="Partner 1" />
        </div>
        <div className="partner">
          <img src={Trustedby2} alt="Partner 2" />
        </div>
        <div className="partner">
          <img src={Trustedby3} alt="Partner 3" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"Testimonial 1"</p>
          <p>- Testimonial Author 1</p>
        </div>
        <div className="testimonial">
          <p>"Testimonial 2"</p>
          <p>- Testimonial Author 2</p>
        </div>
        <div className="testimonial">
          <p>"Testimonial 3"</p>
          <p>- Testimonial Author 3</p>
        </div>
      </section>


      {/* FAQs Section */}
      <section id="faqs">
        <h2>FAQs</h2>
        {/* FAQs content goes here */}
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            {faq.isOpen && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* Contact Us Section */}
      <section id="contact-us">
        <h2>Contact Us</h2>
        {/* Contact form goes here */}
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

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;