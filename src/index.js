import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import FeaturesSection from './FeaturesSection';
import ServicesSection from './ServicesSection';
import TrustedPartnersSection from './TrustedPartnersSection';
import TestimonialsSection from './TestimonialsSection';
import FAQsSection from './FAQsSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import WhatsApp from './WhatsApp/WhatsApp';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(

    <BrowserRouter>
      <Navbar />
      <WelcomeSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TrustedPartnersSection /> */}
      <TestimonialsSection />
      <FAQsSection />
      <ContactUsSection />
      <Footer />
      <WhatsApp />
    </BrowserRouter>

  );
}
