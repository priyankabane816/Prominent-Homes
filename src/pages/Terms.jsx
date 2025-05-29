import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer';

const Terms = () => {
  return (
    <>
        <main className="main">
      <div className="page-title" data-aos="fade">
             <div className="heading">
               <Container>
                 <Row className="d-flex text-left row">
                   <Col lg={8}>
                     <h1>Terms and Conditions</h1>
                     <p className="mb-0">
                     By accessing or using ProminentHomes’ services, you agree to comply with our terms, ensuring a secure and respectful experience for all users.
                     </p>
                   </Col>
                 </Row>
               </Container>
             </div>
             <nav className="breadcrumbs">
               <Container>
                 <ol>
                   <li><a href="/">Home</a></li>
                   <li className="current">Terms & Conditions</li>
                 </ol>
               </Container>
             </nav>
           </div>
           <div className="container">
            <div className="row">
                  <div className="col-lg-12 par">
            <p>Our website is intended for personal and informational use related to real estate services only. Users are prohibited from misusing content, interfering with the platform’s functionality, or attempting unauthorized access to our systems.
                </p><p>
            By accessing our website or using any services offered by ProminentHomes, you acknowledge and agree to be bound by these Terms and Conditions. If you do not agree with any part of the terms, you should refrain from using our platform.   </p><p>
            All property listings, descriptions, and pricing are subject to change without prior notice. While we strive for accuracy, ProminentHomes is not liable for any errors or omissions in property details or content presented on the site. </p><p>
            You are responsible for maintaining the confidentiality of your login credentials and all activities under your account. Users must provide accurate information when filling forms or making inquiries, and must refrain from submitting misleading or harmful content.   </p><p>
           All content on ProminentHomes’ platform, including logos, images, text, and layouts, are protected by copyright laws and remain the property of ProminentHomes. Unauthorized reproduction or use of any materials is strictly prohibited.    </p><p>ProminentHomes reserves the right to modify, suspend, or terminate access to the site or services at any time without notice. We may also update these terms periodically, and continued use of our platform signifies your acceptance of the revised terms.</p>
           </div>
            </div>
            </div>
         
        </main>
        <Footer/>
    </>
  )
}

export default Terms