import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import VisionSection from '../components/VisionSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/footer';
import 'aos/dist/aos.css';

const About = () => {
  return (
 <main className="main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <Container>
            <Row className="d-flex text-left row">
              <Col lg={8}>
                <h1>Experience The Ultimate in Comfort and Luxury as You Search for Your Dream Residence.</h1>
                <p className="mb-0">
                Uncover the epitome of comfort and luxury as you embark on a journey to find your dream home. With our curated selection of properties, each designed to fulfill your desires and aspirations, your search ends here.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <nav className="breadcrumbs">
          <Container>
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">About</li>
            </ol>
          </Container>
        </nav>
      </div>
      <AboutSection/>
      <StatsSection/>
      <VisionSection/>
      <FeaturesSection/>
      <Footer/>
  </main>
  )
}

export default About