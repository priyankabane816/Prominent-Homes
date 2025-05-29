import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Properties from './pages/Properties';
import PropertyDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
       <Route path="/servicedetails" element={<ServiceDetails />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Privacy" element={<PrivacyPolicy />} />
      <Route path="/Terms" element={<Terms/>} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  
  );
}

export default App
