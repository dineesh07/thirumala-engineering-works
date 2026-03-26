import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/tew-logo.png';
import logoDark from '../assets/tew-logo-dark.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  const logo = isContact ? logoDark : logoLight;

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

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
    <>
      {/* Off-canvas Backdrop */}
      <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />
      
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
          {/* Mobile Close Button */}
          <div className="nav-close" onClick={() => setIsMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
          
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <a href="/#capabilities" className="nav-link" onClick={e => handleNavClick(e, 'capabilities')}>Capabilities</a>
          <a href="/#about" className="nav-link" onClick={e => handleNavClick(e, 'about')}>About us</a>
          <a href="/#facilities" className="nav-link" onClick={e => handleNavClick(e, 'facilities')}>Facilities</a>
          
          {/* Contact button moved inside nav-links for mobile */}
          <div className="mobile-contact-container">
            <div className="contact-btn-wrapper">
              <Link to="/contact" className={`contact-btn ${isContact ? 'contact-active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        </div>
        
        {/* Desktop Contact Button wrapper */}
        <div className="contact-btn-wrapper desktop-only">
          <Link to="/contact" className={`contact-btn ${isContact ? 'contact-active' : ''}`}>Contact Us</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
