// src/pages/ServiceDetail.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import {
 
  FaCheckCircle,
  FaHeadset,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Faq from '../components/Faq';
import Footer from '../components/footer';

const services = [
  {
    id: 'Initial Consultation and Needs Assessment',
    label: 'Initial Consultation and Needs Assessment',
    img: '/assets/img/services-webdesign.jpg',
    heading: 'Initial Consultation and Needs Assessment',
    paragraphs: [
      'The process begins with an initial consultation between the client and the construction and engineering service provider. During this meeting, the client discusses their project goals, requirements, budget, and timeline. The service provider may conduct a site visit to assess the project site and gather relevant information.'
    ],
    bullets: [
      'Project scoping: define scope, deliverables, and success metrics',
      'Budget alignment: preliminary cost estimates and funding considerations',
      'Timeline planning: key milestones, phasing, and your target completion date',
      'Site analysis: review site layout, access, utilities, and environmental constraints',
      'Regulatory overview: identify permits, code requirements, and approval processes'
    ],
    more: `Once we’ve captured your needs, you’ll receive a concise “Needs Assessment Report” that includes:
        - A summary of your objectives and constraints  
        - A high‑level feasibility review  
        - Next‑step recommendations (detailed design, permitting, or value‑engineering options)  

        From there, we’ll schedule a follow‑up to finalize the scope and move seamlessly into design and engineering.`
  },
  {
  id:      'proposal-agreement',
  label:   'Proposal and Agreement',
  img:     '/assets/img/services-proposal.jpg',
  heading: 'Proposal & Agreement',
  paragraphs: [
    'After understanding your needs, we prepare a detailed proposal outlining scope, deliverables, timelines, and costs. This document ensures total transparency before any work begins.'
  ],
  bullets: [
    'Scope definition: tasks, responsibilities, and milestones',
    'Cost breakdown: line‑item pricing and payment terms',
    'Timeline overview: key dates for design, permitting, and construction',
    'Terms & conditions: warranties, change‑order process, and liabilities'
  ],
  more: `Once you review and approve the proposal, we execute a formal agreement to kick off the next phase—ensuring both parties are aligned on expectations and deliverables.`
},
{
  id:      'design-planning',
  label:   'Design and Planning Phase',
  img:     '/assets/img/services-design-planning.jpg',
  heading: 'Design & Planning Phase',
  paragraphs: [
    'Our multidisciplinary team refines concepts into detailed plans, coordinating architecture, structure, MEP, and site logistics to create a unified, buildable design package.'
  ],
  bullets: [
    'Architectural floor plans, elevations, and 3D renderings',
    'Structural calculations and foundation design',
    'MEP schematics and system layouts',
    'Site planning: grading, drainage, utilities, and access'
  ],
  more: `Deliverables include a comprehensive “Design Development Package” that serves as the blueprint for permit applications and contractor bids.`
},
{
  id:      'permitting-approvals',
  label:   'Permitting and Approvals',
  img:     '/assets/img/services-permitting.jpg',
  heading: 'Permitting & Approvals',
  paragraphs: [
    'We handle all interactions with authorities having jurisdiction—submitting plans, responding to review comments, and securing the necessary permits so you never miss a start‑date.'
  ],
  bullets: [
    'Complete permit application preparation',
    'Coordination with planning, building, fire, and environmental agencies',
    'Response to plan‑check comments and drawing revisions',
    'Tracking and reporting approval status and conditions'
  ],
  more: `Our streamlined process minimizes delays—once permits are in hand, your contractor can mobilize immediately.`
},
{
  id:      'procurement-scheduling',
  label:   'Procurement and Scheduling',
  img:     '/assets/img/services-procurement.jpg',
  heading: 'Procurement & Scheduling',
  paragraphs: [
    'We develop a detailed procurement plan and construction schedule—securing materials, equipment, and subcontractors on time and on budget.'
  ],
  bullets: [
    'Bid solicitation and subcontractor selection',
    'Long‑lead item identification and ordering',
    'Master schedule creation with critical‑path analysis',
    'Logistics planning for deliveries and site staging'
  ],
  more: `Our precise scheduling tools keep every trade coordinated, ensuring materials arrive when needed and work flows without interruption.`
},
{
  id:      'construction-execution',
  label:   'Construction Execution',
  img:     '/assets/img/services-construction.jpg',
  heading: 'Construction Execution',
  paragraphs: [
    'On‑site management ensures the design intent is faithfully executed—overseeing quality, safety, and progress from groundbreaking through final finishes.'
  ],
  bullets: [
    'Daily site supervision and safety inspections',
    'Quality control checks at each construction milestone',
    'Coordination of trades, materials, and equipment',
    'Change‑order management and real‑time cost tracking'
  ],
  more: `We maintain rigorous oversight, keeping your project on schedule while upholding the highest standards of craftsmanship and safety.`
},
{
  id:      'project-management',
  label:   'Project Management and Coordination',
  img:     '/assets/img/services-pm.jpg',
  heading: 'Project Management & Coordination',
  paragraphs: [
    'Our PM team acts as the single point of contact—aligning stakeholders, managing risks, and ensuring timely decisions throughout the project lifecycle.'
  ],
  bullets: [
    'Weekly progress meetings and reporting',
    'Risk identification and mitigation planning',
    'Stakeholder communication and approvals',
    'Document control and RFI/submittal management'
  ],
  more: `Proactive coordination minimizes surprises and keeps everyone working toward the same milestones and quality benchmarks.`
},
{
  id:      'quality-assurance-control',
  label:   'Quality Assurance and Control',
  img:     '/assets/img/services-quality.jpg',
  heading: 'Quality Assurance & Control',
  paragraphs: [
    'We implement a rigorous QA/QC program—verifying materials, workmanship, and systems performance to ensure compliance with specs and industry standards.'
  ],
  bullets: [
    'Material testing and certification reviews',
    'On‑site workmanship inspections and checklists',
    'System performance commissioning (mechanical, electrical, plumbing)',
    'Final punch‑list generation and closure'
  ],
  more: `Our comprehensive QA/QC approach delivers a defect‑free handover and peace of mind that your project meets or exceeds all expectations.`
}
  
];

export default function ServiceDetails() {

      const [activeTab, setActiveTab] = useState(services[0].id);

  const current = services.find(s => s.id === activeTab);

  return (
    <>
    <div className="page-title" data-aos="fade">
            <div className="heading">
              <Container>
                <Row className="d-flex text-left row">
                  <Col lg={8}>
                    <h1>Service Details</h1>
                    <p className="mb-0">
                     From the inception of a project to its successful completion, our construction and engineering division provides end-to-end solutions for residential, commercial, and industrial developments. We excel in project management, architectural design, structural engineering, and construction supervision, ensuring that every project is delivered with precision, on..
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <nav className="breadcrumbs">
              <Container>
                <ol>
                  <li><a href="/">Home</a></li>
                  <li className="current">Service Details</li>
                </ol>
              </Container>
            </nav>
          </div>
       <section id="service-details" className="service-details section">
      <Container>
        <Row className="gy-5">
          {/* NAVIGATION */}
          <Col lg={4} data-aos="fade-up" data-aos-delay="100">
            <div className="service-box mb-4">
              <h4>Services List</h4>
              <Nav variant="pills" className="flex-column services-list">
                {services.map(svc => (
                  <Nav.Item key={svc.id}>
                    <Nav.Link
                      eventKey={svc.id}
                      active={svc.id === activeTab}
                      onClick={() => setActiveTab(svc.id)}
                    >
                      < FaCheckCircle className="me-2" />
                      <span>{svc.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            <div className="help-box d-flex flex-column justify-content-center align-items-center p-4 border rounded">
              <FaHeadset size="2em" className="mb-2" />
              <h4>Have a Question?</h4>
              <p className="d-flex align-items-center mt-2 mb-1">
                <FaPhone className="me-2" /> <span>+91 9538734393</span>
              </p>
              <p className="d-flex align-items-center mb-0">
                <FaEnvelope className="me-2" />{' '}
                <a href="mailto:mano.m776@gmail.com">mano.m776@gmail.com</a>
              </p>
            </div>
          </Col>

          {/* CONTENT */}
          <Col lg={8} data-aos="fade-up" data-aos-delay="200" className="tab-cnt">
            {/* <Image src={current.img} fluid className="services-img mb-4" /> */}
            <h3>{current.heading}</h3>
            {current.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="mb-3">
              {current.bullets.map((b, i) => (
                <li key={i}>
                  <FaCheckCircle className="me-2 text-success" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p>{current.more}</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Faq/>
    <Footer/>
    </>
  
  );
}
