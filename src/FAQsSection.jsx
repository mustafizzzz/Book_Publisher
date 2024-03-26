import React, { useState } from 'react';
import './FAQsSection.css';

const FAQsSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What services does Blossom Book Publication provide?',
      answer: 'Blossom Book Publication provides book writing services.',
      isOpen: false
    },
    {
      id: 2,
      question: 'Where is Blossom Book Publication located?',
      answer: 'Blossom Book Publication is located in Mumbai.',
      isOpen: false
    },
    {
      id: 3,
      question: 'Can Blossom Book Publication help with publishing a book?',
      answer: 'Yes, Blossom Book Publication can assist with publishing a book',
      isOpen: false
    },
    {
      id: 4,
      question: 'How long does it take to write a book with Blossom Book Publication?',
      answer: 'The time required to write a book depends on various factors, such as the complexity of the content and the clients requirements.',
      isOpen: false
    },
    {
      id: 5,
      question: 'What genres of books does Blossom Book Publication specialize in?',
      answer: 'Blossom Book Publication specializes in various genres, including fiction, non-fiction, self-help, and biographies.',
      isOpen: false
    },
    {
      id: 6,
      question: 'Does Blossom Book Publication provide editing and proofreading services?',
      answer: 'Yes, Blossom Book Publication offers editing and proofreading services to ensure the quality of the final manuscript',
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
    <section id="faqs" className="faqs-section px-md-1 px-4">
      <p>frequently asked questions</p>
      <h2>FAQs</h2>
      {faqs.map(faq => (
        <div key={faq.id} className={`faq-item ${faq.isOpen ? 'active' : ''}`} onClick={() => toggleFAQ(faq.id)}>
          <div className="question-box d-flex justify-content-between">

            <h3>{faq.question}</h3>
            <i className={`bi ${faq.isOpen ? 'bi-caret-up-fill' : ' bi-caret-down-fill'} fs-5`}></i>
          </div>

          <p className='parastyle'>{faq.answer}</p>

        </div>
      ))}
    </section>
  );
};

export default FAQsSection;
