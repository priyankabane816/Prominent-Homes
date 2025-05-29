import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Nav, Tab, Carousel } from "react-bootstrap";
import ContactForm from '../components/ContactForm';
import Footer from '../components/footer';

const PropertyDetail = () => {
  const { id } = useParams();
   const [property, setProperty] = useState(null);
     const [error, setError] = useState(null);

  // Find property by id from the data
  useEffect(() => {
    console.log('Property ID:', id);
    axios.get(`http://localhost:5000/properties/${id}`)
      .then(res => setProperty(res.data))
      .catch(err => console.error("Error loading property details", err));
  }, [id]);

  if (!property) {
    return <h2>Property not found.</h2>;
  }
  if (error) {
  return <div className="text-danger">Error loading property details.</div>;
}
console.log('Floor Plan Path:', property.floor);
  return (
    <>
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <Container>
          
            <Row className="d-flex text-left row">
              <Col lg={8}>
                <h1>{property.title}</h1>
                <p className="mb-0">
                  Feel free to share your query via 'Contact Us,' where our dedicated team stands ready to assist you.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <nav className="breadcrumbs">
          <Container>
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Property</li>
            </ol>
          </Container>
        </nav>
      </div>

      {/* Property Section */}
      <section id="real-estate-2" className="real-estate-2 section">
        <Container data-aos="fade-up">
       
           <Row>
           
            <Col lg={8}>
               {/* Bootstrap Carousel */}
                  <Carousel fade interval={3000}>
                    {property.images?.map((imgUrl, index) => (
                      <Carousel.Item key={index}>
                        <img className="d-block w-100" src={imgUrl} alt={`Image of ${property.title} - Slide ${index + 1}`}  style={{ border: 0, width: "100%", height: "600px" }}/>
                      </Carousel.Item>
                    ))}
                  </Carousel>
            </Col>
              <Col lg={4} data-aos="fade-up" data-aos-delay="100">
         <ContactForm/>
              </Col>
               
          
          </Row>

          {/* Main Content */}
          <Row className="justify-content-between gy-4 mt-4">
            <Col lg={8} data-aos="fade-up">
             

              {/* Tabs */}
              <Tab.Container defaultActiveKey="description" className="tabby">
                <Nav variant="pills" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="description">Description </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="floor">Floor Plans</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="location">Location</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="description">
                  {property.desc?.map((line, index) => (
  <React.Fragment key={index}>
    {line}
    <br />
  </React.Fragment>
))}
                
                  </Tab.Pane>
                 <Tab.Pane eventKey="floor">
                  {property.floor ? (
                    <img src={property.floor} alt="Floor Plan" className="img-fluid" />
                  ) : (
                    <p>No floor plan available</p>
                  )}
                </Tab.Pane>
                  <Tab.Pane eventKey="location">
                   {property.location ? (
                      <iframe
                        src={`https://www.google.com/maps?q=${property.location}&output=embed`}
                        width="100%"
                        height="530"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <p>Location map not available.</p>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
              <Col lg={4} data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Quick Summary</h3>
                <ul>
                <li><strong>Property ID:</strong> {id}</li>
                  <li><strong>Location:</strong> {property.title}</li>
                  <li><strong>Property Type:</strong> House</li>
                  <li><strong>Status:</strong> {property.status}</li>
                  <li><strong>Area:</strong> {property.area}<sup>2</sup></li>
                  <li><strong>Beds:</strong> {property.beds}</li>
                  <li><strong>Baths:</strong> {property.baths}</li>
                  <li><strong>Garages:</strong> {property.garages}</li>
                </ul>
              </div>
            </Col>

            {/* Quick Summary */}
      
          </Row>
        </Container>
        
      </section>
      <Footer/>
    </>
  );
};

export default PropertyDetail;
