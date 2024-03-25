import React, { useState } from 'react';
import './FAQsSection.css';

const FAQsSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What services does Bookpublisher provide?',
      answer: 'Bookpublisher provides book writing services.',
      isOpen: false
    },
    {
      id: 2,
      question: 'Where is Bookpublisher located?',
      answer: 'Bookpublisher is located in Mumbai.',
      isOpen: false
    },
    {
      id: 3,
      question: 'Can Bookpublisher help with publishing a book?',
      answer: 'Yes, Bookpublisher can assist with publishing a book',
      isOpen: false
    },
    {
      id: 4,
      question: 'How long does it take to write a book with Bookpublisher?',
      answer: 'The time required to write a book depends on various factors, such as the complexity of the content and the clients requirements.',
      isOpen: false
    },
    {
      id: 5,
      question: 'What genres of books does Bookpublisher specialize in?',
      answer: 'Bookpublisher specializes in various genres, including fiction, non-fiction, self-help, and biographies.',
      isOpen: false
    },
    {
      id: 6,
      question: 'Does Bookpublisher provide editing and proofreading services?',
      answer: 'Yes, Bookpublisher offers editing and proofreading services to ensure the quality of the final manuscript',
      isOpen: false
    }
  ]);

  const toggleFAQ = (id) => {
    setFaqs(prevFaqs =>
      prevFaqs.map(faq => ({
        ...faq,
        isOpen: faq.id === id ? !faq.isOpen : false
      }))
    );
  };

  return (
    <section id="faqs" className="faqs-section">
      <p>frequently asked questions</p>
      <h2>FAQs</h2>
      {faqs.map(faq => (
        <div key={faq.id} className={`faq-item ${faq.isOpen ? 'active' : ''}`} onClick={() => toggleFAQ(faq.id)}>
          <h3>{faq.question}</h3>
          <p className='parastyle'>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQsSection;
