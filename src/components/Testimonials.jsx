import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaComments } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css';

const testimonials = [
  {
    name: 'Sarah Thompson',
    title: 'Marketing Director at BrightEdge',
    image: 'src/assets/img/testimonials/testimonials-1.jpg',
    text: 'Absolutely fantastic experience! The team delivered exactly what we envisioned, and the process was smooth from start to finish.',
  },
  {
    name: 'David Kim',
    title: 'Founder of NovaTech',
    image: 'src/assets/img/testimonials/testimonials-2.jpg',
    text: 'Their attention to detail and commitment to quality really stood out. We’ll definitely be working with them again!',
  },
  {
    name: 'Emily Rodriguez',
    title: 'CEO of StyleSavvy',
    image: 'src/assets/img/testimonials/testimonials-3.jpg',
    text: 'I was blown away by the professionalism and speed of delivery. Highly recommended for anyone needing expert service.',
  },
  {
    name: 'James Patel',
    title: 'COO at EcoBuild',
    image: 'src/assets/img/testimonials/testimonials-4.jpg',
    text: 'They brought our ideas to life in a way that exceeded our expectations. Support was top-notch too!',
  },
  {
    name: ' Ava Johnson',
    title: 'Product Manager at ClickCore',
    image: 'src/assets/img/testimonials/testimonials-5.jpg',
    text: 'We saw immediate improvements after launch. Their work has made a real difference to our business!',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
       <Container className="section-title" data-aos="fade-up">
           <div className="section-title" data-aos="fade-up">
          <button className="btn btn-light text-orange small rounded-pill mb-2">
            <FaComments className="me-1" /> Testimonials
          </button>
          <h3 className="section-title"> What our clients say about us.</h3>
      </div>
       </Container>
   

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 1 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>{item.text}</p>
                <div className="profile mt-auto">
                  <img src={item.image} className="testimonial-img" alt={item.name} />
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
