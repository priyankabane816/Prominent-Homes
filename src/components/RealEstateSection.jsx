import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';  // import Link from react-router-dom
import propertiesData from '../data/propertiesData';

const RealEstateSection = () => {
  const featuredProperties = propertiesData.slice(0, 3);

  return (
    <section id="real-estate" className="real-estate section">
      <Container>
        <Row className="gy-4">
          <div className="section-title" data-aos="fade-up">
            <button className="btn btn-light text-orange small rounded-pill mb-2">
              <FaBuilding className="me-1" /> Our Featured Properties
            </button>
            <h3 className="section-title">
              A curated collection of premium real estate properties tailored to your lifestyle.
            </h3>
          </div>

          {featuredProperties.map((property, index) => (
            <Col
              key={property.id}
              xl={4}
              md={6}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={property.image}
                  alt={property.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <span className="sale-rent">
                    {property.status} | {property.price}
                  </span>
                  <h3>
                    {/* Use Link instead of <a> */}
                    <NavLink to={property.link} className="stretched-link">
                      {property.title}
                    </NavLink>
                  </h3>
                  <div className="card-content d-flex flex-column justify-content-center text-center">
                    <Row className="propery-info">
                      <Col>Area</Col>
                      <Col>Beds</Col>
                      <Col>Baths</Col>
                      <Col>Garages</Col>
                    </Row>
                    <Row>
                      <Col>{property.area}</Col>
                      <Col>{property.beds}</Col>
                      <Col>{property.baths}</Col>
                      <Col>{property.garages}</Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RealEstateSection;
