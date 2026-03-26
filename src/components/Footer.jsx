import React from 'react';
import bgImage from '../assets/hero-component.gif';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div 
        className="footer-container" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="footer-overlay"></div>
        
        <div className="footer-box">
          <div className="footer-main-row">
            <div className="footer-brand-col">
              <div className="footer-brand-header">
                <div className="footer-logo-row">
                  <div className="footer-tew-badge">
                    <span className="footer-tew-text">TEW</span>
                  </div>
                  <div className="footer-company-title">Thirumala Engineering Works</div>
                </div>
                <div className="footer-brand-desc-col">
                  <div className="footer-desc-1">Complete OEM manufacturing partner delivering hot forged and precision machined components for industrial and engineering businesses.</div>
                  <div className="footer-desc-2">ISO-certified OEM manufacturing for industrial applications.</div>
                </div>
              </div>
              <div className="footer-contact-info">
                <div className="footer-contact-row">
                  <div className="contact-icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="footer-contact-text">No. 18/152, Guindy Industrial Estate, Chennai – 600032.</div>
                </div>
                <div className="footer-contact-group">
                  <div className="footer-contact-row">
                    <div className="contact-icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div className="footer-contact-text">+91 88257 17297</div>
                  </div>
                  <div className="footer-contact-row">
                    <div className="contact-icon-wrapper">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className="footer-contact-text">info@thirumalaeng.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links-row">
              <div className="footer-links-col">
                <div className="footer-link-header">Capabilities</div>
                <div className="footer-link-list">
                  <a href="#hot-forged" className="footer-link">Hot Forged Components</a>
                  <a href="#machined" className="footer-link">Machined Components</a>
                  <a href="#custom" className="footer-link">Custom OEM Solutions</a>
                  <a href="#end-to-end" className="footer-link">End-to-End Manufacturing</a>
                  <a href="#quality" className="footer-link">Quality &amp; Inspection</a>
                </div>
              </div>
              <div className="footer-links-col">
                <div className="footer-link-header">Company</div>
                <div className="footer-link-list">
                  <a href="#about" className="footer-link">About Us</a>
                  <a href="#certifications" className="footer-link">Certifications</a>
                  <a href="#industries" className="footer-link">Industries Served</a>
                  <a href="#careers" className="footer-link">Careers</a>
                  <a href="#contact" className="footer-link">Contact Us</a>
                </div>
              </div>
              <div className="footer-links-col">
                <div className="footer-link-header">Resources</div>
                <div className="footer-link-list">
                  <a href="#quote" className="footer-link">Request a Quote</a>
                  <a href="#faqs" className="footer-link">FAQs</a>
                  <a href="#supplier" className="footer-link">Supplier Information</a>
                  <a href="#privacy" className="footer-link">Privacy Policy</a>
                  <a href="#terms" className="footer-link">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom-row">
            <div className="footer-divider"></div>
            <div className="footer-copyright-row">
              <div className="footer-bottom-text">© 2025 Thirumala Engineering Works. All rights reserved.</div>
              <div className="footer-legal-links">
                <a href="#privacy" className="footer-bottom-text">Privacy Policy</a>
                <a href="#terms" className="footer-bottom-text">Terms of Service</a>
                <a href="#cookies" className="footer-bottom-text">Cookie Settings</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
