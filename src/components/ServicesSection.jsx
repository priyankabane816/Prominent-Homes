// src/pages/ServicesSection.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  FaBuilding, FaRoad, FaTools,
  FaMountain, FaLeaf, FaHardHat
} from 'react-icons/fa';


const iconMap = {
  FaBuilding: <FaBuilding />,
  FaRoad: <FaRoad />,
  FaTools: <FaTools />,
  FaMountain: <FaMountain />,
  FaLeaf: <FaLeaf />,
  FaHardHat: <FaHardHat />,
};

export default function ServicesSection({ limit, showViewAll }) {
  const [services, setServices] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/services')
  .then(response => {
    const data = response.data;

    // If the data is wrapped in { default: [...] }, unwrap it
    const servicesArray = Array.isArray(data) ? data :
                          Array.isArray(data.default) ? data.default : [];

    console.log('Cleaned services:', servicesArray);
    setServices(servicesArray);
  })
  .catch(error => {
    console.error('Error fetching services:', error);
  });
}, []);

const servicesToShow = limit && Array.isArray(services) ? services.slice(0, limit) : services;


  return (
    <section id="services" className="services section">
      <Container className="section-title" data-aos="fade-up">
        <div className="mb-4" data-aos="fade-up">
          <button className="btn btn-light text-orange small rounded-pill mb-2">
            <FaTools className="me-1" />
            Our Services
          </button>
          <h2 className="fw-bold text-dark">We Provide The Best Service</h2>
        </div>
      </Container>

      <Container>
        <Row className="gy-4">
          {Array.isArray(servicesToShow) && servicesToShow.length > 0 ? (
            servicesToShow.map((svc) => (
              <Col
                lg={4}
                md={6}
                key={svc.id}
                data-aos="fade-up"
                data-aos-delay={svc.delay}
              >
                <div className="service-item position-relative p-4 rounded shadow-sm h-100">
                  <div className="icon mb-3" style={{ fontSize: '2rem', color: '#28a745' }}>
                    {iconMap[svc.icon] || <FaTools />}
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.description || svc.desc}</p>
                  <NavLink to="/servicedetails" className="stretched-link" />
                </div>
              </Col>
            ))
          ) : (
            <p>No services available.</p>
          )}

         {showViewAll && (
            <div className="text-center mt-4">
              <button className="btn btn-orange px-4" style={{ float: 'right' }}>
                <NavLink to="/services" style={{ color: '#fff' }}>
                  View All Services
                </NavLink>
                <span className="ms-1">→</span>
              </button>
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
}