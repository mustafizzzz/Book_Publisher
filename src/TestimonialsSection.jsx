import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './TestimonialsSection.css';
import img from "./placeholder1.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor vel magna eleifend fringilla.",
      author: "John Doe"
    },
    {
      id: 2,
      content: "Suspendisse potenti. Vivamus semper laoreet libero vel finibus. Mauris vel lectus non ante laoreet vehicula.",
      author: "Jane Smith"
    },
    {
      id: 3,
      content: "Praesent nec semper ligula. Nulla ac massa eu sapien interdum rutrum. Integer ultrices odio at justo facilisis volutpat.",
      author: "Michael Johnson"
    },
    {
      id: 4,
      content: "Fusce fringilla vitae lorem vel sodales. Aliquam luctus libero vel justo bibendum, nec fermentum metus fringilla.",
      author: "Emily Williams"
    },
    {
      id: 5,
      content: "Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.",
      author: "David Brown"
    },
    {
      id: 6,
      content: "In hac habitasse platea dictumst. Nunc at turpis eget dolor dictum maximus vel ut diam.",
      author: "Sarah Miller"
    }
  ];

  // Determine the number of testimonials to display per slide based on screen size
  const testimonialsPerSlide = window.innerWidth <= 768 ? 1 : 3;

  // Split testimonials into chunks based on the number of testimonials per slide
  const testimonialChunks = [];
  for (let i = 0; i < testimonials.length; i += testimonialsPerSlide) {
    testimonialChunks.push(testimonials.slice(i, i + testimonialsPerSlide));
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <p>What our clients say</p>
      <h2>Testimonials</h2>
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
                    <h1>subject</h1>
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
