import React from 'react';
import {
  BsGeoAlt,
  BsTelephone,
  BsClock,
  BsTwitterX,
  BsFacebook,
  BsInstagram,
  BsLinkedin
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background py-5">
      <div className="container">
        <div className="row gy-3">
          {/* Address */}
          <div className="col-lg-3 col-md-6 d-flex">
            <BsGeoAlt className="icon me-2 mt-1" />
            <div className="address">
              <h4>Address</h4>
              <p className="mb-0">24 MG Road, Indiranagar, </p>
              <p>Bengaluru, Karnataka 560038, India</p>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 d-flex">
            <BsTelephone className="icon me-2 mt-1" />
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Phone:</strong> <span>+91 9538734393</span><br />
                <strong>Email:</strong> <span>mano.m776@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-3 col-md-6 d-flex">
            <BsClock className="icon me-2 mt-1" />
            
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br />
                <strong>Sunday:</strong> <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-lg-3 col-md-6">
             <h4>Quick Links</h4>
              <p className="terms">
               <NavLink to="/terms"><span>Terms & Conditions</span></NavLink>  <br/>
                <NavLink to="/privacy"><span>Privacy Policy</span></NavLink>
              </p>
            <h4>Follow Us</h4>
            <div className="social-links d-flex gap-3">
              <a href="#" className="twitter text-dark"><BsTwitterX /></a>
              <a href="#" className="facebook text-dark"><BsFacebook /></a>
              <a href="#" className="instagram text-dark"><BsInstagram /></a>
              <a href="#" className="linkedin text-dark"><BsLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-4">
        <p>
          © <span>Copyright</span>{' '}
          <strong className="px-1 sitename">Prominent Homes</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
