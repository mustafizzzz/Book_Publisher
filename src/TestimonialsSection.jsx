import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './TestimonialsSection.css';
import img from "./placeholder1.jpg";

const TestimonialsSection = () => {
  const clientReviews = [
    {
      id: 1,
      content: "Excellent service! The team was very professional and delivered high-quality work on time. Highly recommend!",
      author: "John Doe"
    },
    {
      id: 2,
      content: "I was impressed with the attention to detail and the level of communication throughout the project. Great experience!",
      author: "Jane Smith"
    },
    {
      id: 3,
      content: "Outstanding job! The final result exceeded my expectations. Will definitely work with them again.",
      author: "Michael Johnson"
    },
    {
      id: 4,
      content: "Professional and reliable. They understood my requirements and delivered exactly what I needed. Thank you!",
      author: "Emily Williams"
    },
    {
      id: 5,
      content: "Amazing work! The team went above and beyond to ensure everything was perfect. Very happy with the outcome.",
      author: "David Brown"
    },
    {
      id: 6,
      content: "Exceptional service! They provided valuable insights and delivered exceptional results. Highly recommended!",
      author: "Sarah Miller"
    }
  ];

  // Determine the number of testimonials to display per slide based on screen size
  const testimonialsPerSlide = window.innerWidth <= 768 ? 1 : 3;

  // Split testimonials into chunks based on the number of testimonials per slide
  const testimonialChunks = [];
  for (let i = 0; i < clientReviews.length; i += testimonialsPerSlide) {
    testimonialChunks.push(clientReviews.slice(i, i + testimonialsPerSlide));
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <p>What our clients say</p>
      <h2>Client Reviews</h2>

      <Carousel>
        {testimonialChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="testimonial-card-container">
              {chunk.map(testimonial => (
                <Card key={testimonial.id} className="testimonial-card">
                  <Card.Body>
                    <div className="stars">
                      <span role="img" aria-label="star">⭐️⭐️⭐️⭐️⭐️</span>
                    </div>
                    <h1>Subject</h1>
                    <p>{testimonial.content}</p>

                    <div className="author-profile">
                      <img src={img} alt="Profile" className="profile-pic" />
                      <div className="author-info">
                        <h3>{testimonial.author}</h3>
                        <p>Author</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}

      </Carousel>


    </section>
  );
};

export default TestimonialsSection;
