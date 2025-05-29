import React from "react";
import { FaBriefcase, FaShieldAlt, FaPalette, FaHome } from 'react-icons/fa';
import { MdVerified, MdNoAccounts } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import "./ServiceBenefits.css";

const benefits = [
  {
    icon: <FaBriefcase/>,
    title: "Industry Experienced",
    description:
      "With 10 years of hands-on experience navigating the complexities of the real estate market, our team is well-equipped to guide you through every step of your property journey.",
      delay: 100,
  },
  {
    icon: <FaShieldAlt/>,
    title: "100% Trusted and Reliable",
    description:
      "At our real estate company, trust is not just a promise — it's our foundation. We pride ourselves on being a 100% trusted company, dedicated to transparency, integrity, and reliability in every aspect of our business.",
      delay: 100,
  },
  {
    icon: <MdVerified/>,
    title: "Accurate Quality",
    description:
      "We are committed to ensuring accurate quality in every property we offer. We understand that purchasing or investing in real estate is a significant decision, and accuracy and quality are paramount in this process.",
      delay: 100,
  },
  {
    icon: <FaPalette/>,
    title: "Modern Design",
    description:
      "In our real estate company, we recognize the importance of modern design in creating spaces that inspire, captivate, and elevate the lifestyle of our clients.",
      delay: 100,
  },
  {
    icon: <FaHome/>,
    title: "Best Property Value",
    description:
      "We pride ourselves on delivering the best property value. Value goes beyond price — it includes location, amenities, market trends, and appreciation potential.",
      delay: 100,
  },
  {
    icon: <MdNoAccounts/>,
    title: "No Hidden Charge",
    description:
      "Transparency is paramount, which is why we pride ourselves on having no hidden charges. We ensure clients have a clear understanding of all costs involved from the very beginning.",
      delay: 100,
  },
];

const ServiceBenefits = () => {
  return (
    <section className="service-benefits section-gap">

      <div className="container">
        <div className="service-benefits-inner background-image">
           <div className="col-lg-12 col-xl-12 col-md-12 col-12 text-center mt-5">
          <div className="section-head section-title">
            <div className="mb-4" data-aos="fade-up">
                <button className="btn btn-light text-orange small rounded-pill mb-2">
                  <FaStar className="me-1" />  Our Benefits
                </button>
                <h3 className="section-title">
                  How will our services benefit you?
                </h3>
              </div>
            </div>
          </div>
         <div className="row">
            {benefits.map((benefit, index) => (
                <div className="col-md-6 mb-4" key={index}>
                <div className="s-benefits-card d-flex" data-aos="fade-up" data-aos-delay={benefits.delay} >
                    <div className="s-benefits-icon">
                     {benefit.icon}
                    </div>
                    <div className="s-benefits-info ms-3">
                    <h5>{benefit.title}</h5>
                    <p>{benefit.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
