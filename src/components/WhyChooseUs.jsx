import React from 'react';
import { FaStar } from 'react-icons/fa';

// Dummy data for cards
const whyChooseItems = [
  {
    icon: 'src/assets/img/why-choose/icon-1.svg',
    title: 'Industry Experienced',
    description:
      'With 10 years of hands-on experience navigating the complexities of the real estate market, our team is well-equipped to guide you through every step of your property journey.',
    delay: 100,
    },
  {
    icon: 'src/assets/img/why-choose/icon-2.svg',
    title: '100% Trusted and Reliable',
    description:
      "At our real estate company, trust is not just a promise — it's our foundation. We pride ourselves on being a 100% trusted company, dedicated to transparency, integrity, and reliability in every aspect of our business.",
       delay: 200,
  },
  {
    icon: 'src/assets/img/why-choose/icon-3.svg',
    title: 'Accurate Quality',
    description:
      'We are committed to ensuring accurate quality in every property we offer. We understand that purchasing or investing in real estate is a significant decision, and accuracy and quality are paramount in this process.',
       delay: 300,
  },
  {
    icon: 'src/assets/img/why-choose/icon-4.svg',
    title: 'Modern Design',
    description:
      'In our real estate company, we recognize the importance of modern design in creating spaces that inspire, captivate, and elevate the lifestyle of our clients.',
       delay:400, 
  },
  {
    icon: 'src/assets/img/why-choose/icon-5.svg',
    title: 'Best Property Value',
    description:
      'At our real estate business, we pride ourselves on delivering the best property value to our clients. We understand that value goes beyond just the price tag—it encompasses location, amenities, market trends, and potential for appreciation.',
        delay: 500,
  },
  {
    icon: 'src/assets/img/why-choose/icon-6.svg',
    title: 'No Hidden Charge',
    description:
      'In our real estate business, transparency is paramount, which is why we pride ourselves on having no hidden charges. We believe in upfront and honest communication, ensuring clients have clarity on all costs from the beginning.',
        delay: 600,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-area section-gap py-5">
      <div className="container">
        {/* Section Header */}
         
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-12 col-md-12 col-12 text-center mt-5">
            <div className="section-head section-title">
             <div className="mb-4" data-aos="fade-up">
                <button className="btn btn-light text-orange small rounded-pill mb-2">
                  <FaStar className="me-1" />  Why choose us?
                </button>
                <h3 className="section-title">
                  A Trusted Real Estate Company in Bangladesh
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          <div className="col-lg-12 col-xl-12 col-md-12 col-12 ">
            <div className="why-choose-wrapper d-flex flex-wrap gap-4 justify-content-between">
               <div className="row">
              {whyChooseItems.map((item, idx) => (
               
                <div className="col-lg-4 col-xl-4 col-md-4 col-xs-12 col-sm-12">
                    <div className="why-choose-card py-4" key={idx}  data-aos="fade-up"
              data-aos-delay={whyChooseItems.delay}>
                  <div className="why-c-card-icon mb-3">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="why-c-card-info">
                    <h4 className="mb-2">{item.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>{item.description}</p>
                  </div>
                </div>
                </div>
               
              
              ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
