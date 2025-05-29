import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection'; // Adjust path if needed
import AboutCompany from '../components/AboutCompany';
import RealEstateSection from '../components/RealEstateSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/footer';


const Home = () => {
  return (
    <>
        <HeroSection/>
        <ServicesSection limit={3} showViewAll={true}/>
        <AboutCompany/>
        <RealEstateSection />
        <Testimonials />
        <Footer/>
    
    </>
  )
}

export default Home