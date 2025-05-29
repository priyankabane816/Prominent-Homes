import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/footer';
import 'aos/dist/aos.css';
// Create a CSS file for styling if needed

const ContactPage = () => {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <Container>
            <Row className="d-flex text-left row">
              <Col lg={8}>
                <h1>Contact</h1>
                <p className="mb-0">
                 Feel free to share your query via 'Contact Us,' where our dedicated team stands ready to assist you with any needs or concerns. BuildUp prioritizes the satisfaction of every client and endeavors to exceed expectations.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <nav className="breadcrumbs">
          <Container>
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </Container>
        </nav>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <Container data-aos="fade-up" data-aos-delay="100">
            <Row className="gy-4 cnt mb-5">
              <Col lg={5}>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                  <p className="mb-0">24 MG Road, Indiranagar, Bengaluru, Karnataka 560038, India</p>
                  </div>
                </div>
              </Col>
               <Col lg={3}>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 9538734393</p>
                  </div>
                </div>
              </Col>
               <Col lg={4}>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>mano.m776@gmail.com</p>
                  </div>
                </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg={8} md={8} xs={12}>
             <div className="location" data-aos="fade-up" data-aos-delay="200">
                <iframe style={{ border: 0, width: '100%', height: '534px' }}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map">
                </iframe>
              </div>
             </Col>
              <Col lg={4} md={6} xs={12}>
            <ContactForm/>
              </Col>
            </Row>
        </Container>
      </section>
      <Footer/>
    </main>
  );
};

export default ContactPage;
