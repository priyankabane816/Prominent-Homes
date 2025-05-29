import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className='container-fluid container-xl position-relative d-flex align-items-center justify-content-between'>
      <Container className="p-0">
        <Row className="align-items-center">
          <Col md={6} className="banner">
            <p className="til">Welcome to ProminentHomes</p>
            <h1 className="display-5 fw-bold text-dark mb-4">
              Discover Your Dream Home and Find Your Next Haven
            </h1>
            <p className="text-muted mb-4">
              Uncover the epitome of comfort and luxury as you embark on a journey to find your dream home. 
              With our curated selection of properties, each designed to fulfill your desires and aspirations, 
              your search ends here.
            </p>
            <div className="d-flex align-items-center gap-3">
              <NavLink to="/properties">
           <Button variant="warning" className="text-white fw-bold px-4">
                Find Property →
              </Button>
          </NavLink>
              
             
            </div>
          </Col>

          <Col md={6} className="position-relative mt-4 mt-md-0">
            <div className="main-image">
              <Image src="/Prominent-Homes/img/banner-3.png" className="rounded" />
            
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default HeroSection;
