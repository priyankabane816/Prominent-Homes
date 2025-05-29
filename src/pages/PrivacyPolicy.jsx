import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
     <main className="main">
      <div className="page-title" data-aos="fade">
             <div className="heading">
               <Container>
                 <Row className="d-flex text-left row">
                   <Col lg={8}>
                     <h1>Privacy Policy</h1>
                     <p className="mb-0">
                     At ProminentHomes, we respect your privacy and ensure your personal data is securely handled with transparency and trust
                     </p>
                   </Col>
                 </Row>
               </Container>
             </div>
             <nav className="breadcrumbs">
               <Container>
                 <ol>
                   <li><a href="/">Home</a></li>
                   <li className="current">Privacy Policy</li>
                 </ol>
               </Container>
             </nav>
           </div>
           <div className="container">
            <div className="row">
                  <div className="col-lg-12 par">
            <p>ProminentHomes is your trusted partner in finding the perfect property, whether you're searching for a family home, investment opportunity, or luxurious estate. With a commitment to quality and transparency, we make real estate simple and rewarding. Our expert team guides you through every step with confidence and care.
                </p><p>
            From modern city apartments to peaceful countryside villas, we offer an extensive portfolio of residential and commercial properties. Each listing is carefully selected to match a variety of budgets, lifestyles, and preferences. We believe in delivering more than just a house—we deliver a place to call home.     </p><p>
            Our experienced agents have deep knowledge of local markets and current trends, ensuring you make informed decisions. We provide detailed property reports, honest advice, and complete documentation assistance. At ProminentHomes, you're never just a client—you're family.     </p><p>
            We leverage the latest in real estate tech to make your search easier and faster. With our interactive maps, virtual tours, and instant property alerts, you can explore and shortlist homes from anywhere. Your dream property is just a click away.     </p><p>
            Customer satisfaction is at the heart of everything we do. We listen, understand your needs, and tailor solutions that fit your lifestyle and goals. Whether buying, renting, or selling, we ensure the process is smooth, transparent, and stress-free.     </p><p>Over the years, ProminentHomes has earned the trust of thousands of happy homeowners and investors. Our reputation is built on honesty, integrity, and results. Let us help you make your next move with confidence and peace of mind.</p>
           </div>
            </div>
            </div>
         
        </main>
        <Footer/>
    </>

  )
}

export default PrivacyPolicy