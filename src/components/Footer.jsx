import React from 'react';
import logo from '../assets/tew-logo.png';
import bgImage from '../assets/hero-component.gif';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div 
        className="footer-container" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="footer-overlay"></div>
        
        <div className="footer-content">
          {/* Left Column: Brand & Contact */}
          <div className="footer-left">
            <div className="footer-brand">
              <img src={logo} alt="TEW Logo" className="footer-logo" />
              <h2 className="footer-company-name">
                Thirumala<br />Engineering Works
              </h2>
            </div>
            
            <p className="footer-desc">
              Complete OEM manufacturing partner delivering hot forged and precision
              machined components for industrial and engineering businesses.
            </p>
            <p className="footer-iso">
              ISO-certified OEM manufacturing for industrial applications.
            </p>

            <div className="footer-contact">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>No. 18/152, Guindy Industrial Estate, Chennai - 600032.</span>
              </div>
              <div className="contact-item-row">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+91 88257 17297</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>info@thirumalaeng.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="footer-right">
            <div className="footer-col">
              <h4>Capabilities</h4>
              <a href="#hot-forged">Hot Forged Components</a>
              <a href="#machined">Machined Components</a>
              <a href="#custom">Custom OEM Solutions</a>
              <a href="#end-to-end">End-to-End Manufacturing</a>
              <a href="#quality">Quality & Inspection</a>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#certifications">Certifications</a>
              <a href="#industries">Industries Served</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#quote">Request a Quote</a>
              <a href="#faqs">FAQs</a>
              <a href="#supplier">Supplier Information</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom">
          <p>&copy; 2025 Thirumala Engineering Works. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
