import React from 'react';
import buildingImg from '../assets/img/img-1.png'; // adjust the path as per your project
import { FaEye } from 'react-icons/fa';
import './VisionSection.css';

const VisionSection = () => {
  const data = [
    {
      title: 'Our Values',
      content: `From the outset, integrity has been the cornerstone of our operations. We believe in transparency, honesty, and ethical business practices in all our dealings. `,
    },
    {
      title: 'Our Approach',
      content: `At BuildUp Homes, we understand that buying or selling a home is more than just a transaction—it's a deeply personal journey. That's why we take a personalized approach to every client interaction, taking the time to listen, understand, and exceed expectations. `,
    },
    {
      title: 'Our Achievements',
      content: `Over the years, BuildUp Homes has earned a reputation for excellence in the real estate industry. Our portfolio boasts a diverse range of properties, from luxury estates to affordable housing developments, each crafted with meticulous attention to detail and quality craftsmanship.`,
    },
    {
      title: 'Our Future',
      content: `As we look to the future, BuildUp Homes remains committed to our core values and principles. We envision a tomorrow where every individual has access to safe, comfortable, and affordable housing options. With innovation as our compass and integrity as our guide, we will continue to build dreams, one brick at a time.`,
    },
  ];

  return (
    <section className="vision-section">
      <div className="container">
        <div class="row">
          <div className="col-lg-12">
             <div className="section-title" data-aos="fade-up">
                  <button className="btn btn-light text-orange small rounded-pill mb-2">
                    <FaEye className="me-1" /> Our Vision
                  </button>
                  <h3 className="section-title"> Empowering innovation and excellence to shape a better tomorrow.</h3>
                </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              
              {data.map((item, idx) => (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className={`vision-item ${idx === 2 ? "spl" : ""}`}>
                    <h4 className="vision-title">
                      <span className="circle-icon" />
                      {item.title}
                    </h4>
                    <p className="vision-text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img src={buildingImg} alt="Building" className="img-fluid" style={{height:'515px'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
