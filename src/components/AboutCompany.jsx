import React from 'react';
import { FaInfoCircle, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './AboutCompany.css'; // Optional for extra styles

const AboutCompany = () => {
  return (
    <section className="py-5 about-company-section">
      <div className="container">
        
        <div className="about section-title mb-4" data-aos="fade-up">
          <button className="btn btn-light text-orange small rounded-pill mb-2">
            <FaInfoCircle className="me-1" /> Who we are?
          </button>
          <h2 className="fw-bold text-dark">
            A Legacy of Excellence in Real Estate Company
          </h2>
        </div>

        <div className="row align-items-center" data-aos="fade-up" data-aos-delay="100">
          {/* Left Images */}
          <div className="col-lg-4 position-relative d-flex flex-column align-items-center">
            <div className="img-container mb-3 position-relative">
              <img src="src/assets/img/sidebar.jpg" alt="Glass Building" className="img-fluid rounded-4 shadow glass"/>
              
            </div>
           
          </div>

          {/* Right Content */}
          <div className="col-lg-8 mt-4 mt-lg-0">
            <div className="para">
                 <p>
              Welcome to <strong>Prominent Homes</strong>, where our commitment to
              exceptional service and dedication to our clients set us apart. With a rich history
              steeped in integrity and professionalism, we have been a cornerstone of the real
              estate industry for 10 years.
            </p>
            <p>
              At BuildUp Real Estate Company, we believe that every property transaction is more
              than just a deal – it's an opportunity to make dreams a reality and build lasting
              relationships. Our team of experienced professionals is passionate about guiding
              clients through every step of their real estate journey, whether they're buying,
              selling, or investing.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaCheckCircle className="text-orange me-2" />
                100% trusted and reliable
              </li>
              <li className="mb-2">
                <FaCheckCircle className="text-orange me-2" />
                AN award winning real estate company
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-orange me-2" />
                10+ years industrial experience
              </li>
            </ul>
             <NavLink to="/about" >
            <button className="btn btn-orange px-4">
              Know More <span className="ms-1">→</span>
            </button>
          </NavLink>
            
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
