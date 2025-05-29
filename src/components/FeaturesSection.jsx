import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './FeaturesSection.css'; // Optional for custom styling
import { FaHome } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';
import { GiHouseKeys } from 'react-icons/gi';

const featuresList = [
  {
    icon: <FaHome/>,
    title: 'Buy a Home',
    desc: 'Find your dream home with access to verified listings, expert guidance, and neighborhood insights that make your decision easy and confident.',
    delay: 300,
  },
  {
    icon: <MdSell/>,
    title: 'Sell Your Property',
    desc: 'Maximize your property value with our marketing expertise, professional staging advice, and a network of ready buyers.',
    delay: 400,
  },
  {
    icon: <GiHouseKeys/>,
    title: 'Property Management',
    desc: 'We handle everything from tenant screening to maintenance, helping landlords protect their investments and enjoy peace of mind.',
    delay: 500,
  },

];

const FeaturesSection = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          {/* Image Column */}
          
          {/* Text and Icons */}
          <div className="col-lg-12 d-flex flex-column justify-content-center feat" data-aos="fade-up" data-aos-delay="200">
            <h3>Find Your Perfect Property with Ease</h3>
            <p>
              Discover exceptional real estate opportunities tailored to your lifestyle. Whether you're buying, selling, or investing, our expert team ensures a seamless experience.
            </p>
             <div className="row">
               
                     {featuresList.map((feature, index) => (
                         <div className="col-lg-4">
                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={feature.delay} key={index}>
                          <span>{feature.icon}</span>
                            <div>
                            <h4>
                                <a href="#" className="stretched-link">
                                {feature.title}
                                </a>
                            </h4>
                            <p>{feature.desc}</p>
                            </div>
                        </div>
                        </div>
                        ))}
                    
             </div>
            {/* Icon Boxes */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
