import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // if you're using AOS animations
import './AboutCompany.css'; // optional CSS for custom styles

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          {/* Left Content */}
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">Who We Are</p>
            <h4>Unleashing Potential with Creative Strategy</h4>
            <p>
              At our core, we are innovators and problem solvers. With a passion for transforming ideas into impactful results, we merge creativity with strategic thinking to empower brands, businesses, and communities to thrive in a digital world.
            </p>
            <ul>
              <li><span>We turn challenges into opportunities through bold, forward-thinking solutions.</span></li>
              <li><span>We believe in the power of storytelling to build meaningful connections.</span></li>
              <li><span>
                Our mission is to spark growth by aligning vision with action — combining design, tech, and marketing into one seamless experience.
              </span></li>
            </ul>
          </div>

          {/* Right Images */}
          <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src="src/assets/img/about-company-1.jpg" className="img-fluid" alt="About 1" />
              </div>
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-lg-12">
                    <img src="src/assets/img/about-company-2.jpg" className="img-fluid" alt="About 2" />
                  </div>
                  <div className="col-lg-12">
                    <img src="src/assets/img/about-company-3.jpg" className="img-fluid" alt="About 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
