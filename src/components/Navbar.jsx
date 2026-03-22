import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/tew-logo.png';
import logoDark from '../assets/tew-logo-dark.png';

const Navbar = () => {
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  const logo = isContact ? logoDark : logoLight;

  // Smooth scroll logic that jumps or loads to hash anchors
  const handleNavClick = (e, targetId) => {
    if (!isContact) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isContact ? 'navbar-light' : ''}`}>
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="TEW Logo" className="navbar-logo" />
      </Link>
      
      <div className="nav-links">
        <Link to="/" className={`nav-link ${!isContact ? 'active' : ''}`}>Home</Link>
        <a href="/#capabilities" className="nav-link" onClick={e => handleNavClick(e, 'capabilities')}>Capabilities</a>
        <a href="/#about" className="nav-link" onClick={e => handleNavClick(e, 'about')}>About us</a>
        <a href="/#facilities" className="nav-link" onClick={e => handleNavClick(e, 'facilities')}>Facilities</a>
      </div>
      
      <div className="contact-btn-wrapper">
        <Link to="/contact" className={`contact-btn ${isContact ? 'contact-active' : ''}`}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
