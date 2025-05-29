import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesSection from '../components/ServicesSection';
import ServiceBenefits from '../components/ServiceBenefits';
import Footer from '../components/footer';

const Services = () => {
  return (
    <div>
        <div className="page-title" data-aos="fade">
        <div className="heading">
          <Container>
            <Row className="d-flex text-left">
              <Col lg={8}>
                <h1>Service We Offer</h1>
                <p className="mb-0">
               We offer a comprehensive suite of services spanning multiple disciplines to meet the diverse needs of our clients. With a commitment to excellence and innovation, we specialize in four core areas: Construction & Engineering, Mechanical & Engineering, Development & Engineering, and Basic Industrial & Chemical Engineering.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <nav className="breadcrumbs">
          <Container>
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Services</li>
            </ol>
          </Container>
        </nav>
      </div>
      <ServicesSection/>
      <ServiceBenefits/>
      <Footer/>
    </div>
  )
}

export default Services