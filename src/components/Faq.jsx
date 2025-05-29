import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqs = [
  {
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is usually getting pre-approved for a mortgage to determine your budget. Then, you can start browsing listings and contacting real estate agents to assist you in finding the perfect property.',
  },
  {
    question: 'What are closing costs, and how much should I expect to pay?',
    answer:
      "Closing costs include fees for loan origination, appraisal, title insurance, and more. Typically, they range from 2% to 5% of the home's purchase price.",
  },
  {
    question: 'How long does it take to sell a house?',
    answer:
      "On average, it takes about 65-93 days from listing to closing, depending on market conditions, pricing strategy, and property location.",
  },
  {
    question: 'Do I need a home inspection?',
    answer:
      'A home inspection is highly recommended to uncover any potential issues before closing. It can save you from costly repairs down the road.',
  },
  {
    question: 'Can I buy a home with credit EMI system?',
    answer:
      'Yes, many lenders offer EMI plans for mortgage repayment. You should compare rates and terms to find the best mortgage EMI structure for your budget.',
  },
];

export default function FAQPage() {
  return (
    <Container className="py-5 faq">
      <Row>
        {/* Left Section */}
        <Col md={6} className="mb-4">
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">
            Welcome to our FAQ section, where we address common inquiries
            about navigating our real estate website and using its features.
            Whether you're searching for your dream home, looking to sell or
            rent a property, or simply exploring the market, we've compiled
            answers to help streamline your experience.
          </p>
          <div className="d-flex align-items-left mt-4">
           
            <div className="row">
              <h4>Can't find what you're looking for?</h4>
             <Col md={12} className="py-4">
              <NavLink to="/services" className="btn btn-secondary">
                      ← Back to Services
                    </NavLink>
                     <NavLink to="/contact">
                <Button variant="warning" className="mx-4">Contact us &rarr;</Button>
              </NavLink>
                    </Col>
                   
             
            </div>
          </div>
        </Col>

        {/* Right Section - Accordion */}
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={idx.toString()} key={idx}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}
