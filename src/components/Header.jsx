import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo-2.png';
import './Header.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const collapseRef = useRef(null);

  const closeMobileMenu = () => {
    const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  };

  return (
    <header className="header fixed-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light">
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" className="logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu" ref={collapseRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link" onClick={closeMobileMenu}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/properties" className="nav-link" onClick={closeMobileMenu}>
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
