import React from 'react';
import CountUp from 'react-countup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './StatsSection.css'; // Optional CSS
import FunFact from '../assets/img/funfact-img.png';

const statsData = [
  {
    icon: 'bi-emoji-smile color-blue',
    end: 232,
    label: 'Happy Clients',
  },
  {
    icon: 'bi-journal-richtext color-orange',
    end: 521,
    label: 'Completed Projects',
  },
  {
    icon: 'bi-headset color-green',
    end: 25,
    label: 'Years of Experience',
  },
  {
    icon: 'bi-people color-pink',
    end: 20,
    label: 'Location Covered',
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <img src={FunFact} alt="FunFact" className="funfact"></img>
          </div>
          <div className="col-lg-6">
             {statsData.map((stat, index) => (
            <div className="col-lg-6 col-md-12" key={index} style={{float: 'right'}}>
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className={`bi ${stat.icon} flex-shrink-0`}></i>
                <div>
                  <span className="purecounter">
                    <CountUp end={stat.end} duration={1.5} />
                  </span>
                  <p>{stat.label}</p>
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

export default StatsSection;
