import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/tew-logo.png';
import logoDark from '../assets/tew-logo-dark.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  const logo = isContact ? logoDark : logoLight;

  // Smooth scroll logic that jumps or loads to hash anchors
  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false); // Close menu on click
    if (!isContact) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isContact ? 'navbar-light' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/" className="navbar-logo-link" onClick={() => setIsMenuOpen(false)}>
        <img src={logo} alt="TEW Logo" className="navbar-logo" />
      </Link>
      
      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`nav-link ${!isContact ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <a href="/#capabilities" className="nav-link" onClick={e => handleNavClick(e, 'capabilities')}>Capabilities</a>
        <a href="/#about" className="nav-link" onClick={e => handleNavClick(e, 'about')}>About us</a>
        <a href="/#facilities" className="nav-link" onClick={e => handleNavClick(e, 'facilities')}>Facilities</a>
        
        {/* Contact button moved inside nav-links for mobile */}
        <div className="mobile-contact-container">
          <Link to="/contact" className={`contact-btn ${isContact ? 'contact-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
      
      {/* Desktop Contact Button wrapper */}
      <div className="contact-btn-wrapper desktop-only">
        <Link to="/contact" className={`contact-btn ${isContact ? 'contact-active' : ''}`}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
