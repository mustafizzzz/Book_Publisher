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

  return (
    <section id="testimonials" className="testimonials-section">

      <div className="testimonial-text mb-5">
        <p className='text-center m-0 mb-4'>What our clients say</p>
        <h2 className='text-center'>Client Reviews</h2>
      </div>


      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="row  px-3 justify-content-center">
              {/* Bootstrap Cards for LG Screen (3 cards) */}
              <div className="col-md-3  col-sm-10">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star-half-alt active-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Excellent Writing Opportunities</div>
                    <div className="testimonial">
                      With the writing jobs provided by this company, I was able to earn a good income by writing novels, books, and more. It's a fantastic platform for writers looking to make money through their writing skills.
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Amit Kumar</div>
                        <p className="text-muted designation">2 June,2023</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-md-3  d-none d-md-block">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star-half-alt active-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Transformative Writing Experience</div>
                    <div className="testimonial">
                      The writing opportunities provided here have been transformative for me. I've been able to express my creativity through writing novels, books, and more, while also earning a good income. This platform truly empowers writers to pursue their passion and succeed financially.
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Sneha Patel</div>
                        <p className="text-muted designation">15 August, 2023</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-3  d-none d-md-block">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Exceptional Writing Platform</div>
                    <div className="testimonial">
                      This writing platform has exceeded my expectations in every way. I've found a plethora of writing opportunities that have allowed me to showcase my skills and earn a substantial income. It's truly a game-changer for aspiring writers.
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Rahul Sharma</div>
                        <p className="text-muted designation">25 January, 2024</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row  px-3 justify-content-center">
              {/* Bootstrap Cards for LG Screen (3 cards) */}
              <div className="col-md-3  col-sm-10">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star-half-alt active-star" />
                      <span className="far fa-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Excellent Writing Opportunities</div>
                    <div className="testimonial">
                      I am thrilled with the writing opportunities provided by this platform. It has allowed me to explore my passion for writing and earn a steady income. I highly recommend it to anyone looking to pursue a career in writing.
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Priya Patel</div>
                        <p className="text-muted designation">10 October, 2023</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-3  d-none d-md-block">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star-half-alt active-star" />
                      <span className="far fa-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Fantastic Writing Opportunities</div>
                    <div className="testimonial">
                      The writing opportunities offered by this company have been nothing short of amazing. I've been able to showcase my talent and earn a decent income through my writing projects. Highly recommended!
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Rahul Sharma</div>
                        <p className="text-muted designation">15 January, 2024</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-3  d-none d-md-block">
                <div className="owl-item">
                  <div className="card d-flex flex-column">
                    <div className="mt-2">
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star active-star" />
                      <span className="fas fa-star-half-alt active-star" />
                      <span className="far fa-star" />
                      <span className="far fa-star" />
                    </div>
                    <div className="main font-weight-bold pb-2 pt-1">Exceptional Writing Services</div>
                    <div className="testimonial">
                      I am truly impressed by the exceptional writing services provided by this company. Their platform has allowed me to explore my creative talents and earn a substantial income through writing projects. Highly recommended for aspiring writers!
                    </div>
                    <div className="d-flex flex-row profile pt-4 mt-auto">
                      <i className="bi bi-person-circle fs-2 me-2"></i>
                      <div className="d-flex flex-column pl-2">
                        <div className="name">Neha Gupta</div>
                        <p className="text-muted designation">8 November, 2023</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev d-none d-lg-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next d-none d-lg-block" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </section>
  );
};

export default TestimonialsSection;
