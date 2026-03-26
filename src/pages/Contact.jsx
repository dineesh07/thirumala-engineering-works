import React, { useEffect } from 'react';
import mapImg from '../assets/map-location.jpg';
import iconFactory from '../assets/icon-factory.png';
import iconOffice from '../assets/icon-office.png';
import iconPhoneNew from '../assets/icon-phone-new.png';
import iconMailNew from '../assets/icon-mail-new.png';
import iconLinkedin from '../assets/social medias/Vector (3).png';
import iconYoutube from '../assets/social medias/Vector (4).png';
import iconInstagram from '../assets/social medias/Footer Social Media (Instagram).png';
import iconWhatsapp from '../assets/social medias/ic_baseline-whatsapp.png';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="section-badge faq-badge">
          <span className="dot"></span> Contact Us
        </div>
        <h2 className="contact-title">Let's Build Your<br/>Manufacturing Solution</h2>
      </div>

      <div className="contact-form-container">
        <form className="contact-form">
          <div className="contact-field">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="contact-field">
            <label>Company Name</label>
            <input type="text" placeholder="Enter your company name" />
          </div>
          <div className="contact-field">
            <label>Business Email</label>
            <input type="email" placeholder="Enter your business email" />
          </div>
          <div className="contact-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your contact number" />
          </div>
          <div className="contact-field fill-line">
            <label>Message</label>
            <textarea placeholder="Enter any additional details, special requirements, or questions for our team..."></textarea>
          </div>
          <span className="contact-note">You'll receive a response in your inbox instantly.</span>
          <div className="contact-submit-wrapper">
            <div className="contact-submit-btn-wrapper">
              <button type="submit" className="contact-submit-btn">Send Your Queries</button>
            </div>
          </div>
        </form>
      </div>

      <div className="contact-container-unified">
        {/* Row 1: Map and Addresses */}
        <div className="unified-top-row">
          <div className="map-section-unified">
            <a href="https://maps.app.goo.gl/merfhMdPXENJgiUK6" target="_blank" rel="noopener noreferrer" className="map-link">
              <div className="contact-map-container-unified">
                <img src={mapImg} alt="Factory Location Map" className="contact-map-img" />
                <div className="map-overlay">
                  <span>See on Gmap</span>
                </div>
              </div>
            </a>
          </div>

          <div className="addresses-section-unified">
            <div className="row-addresses-unified">
              <div className="contact-card address-card-new">
                <div className="hover-ellipse"></div>
                <div className="icon-box-new">
                  <div className="icon-overlay-corners"></div>
                  <img src={iconOffice} alt="Office Icon" className="card-icon-img" />
                </div>
                <div className="address-content">
                  <h3>Office Address</h3>
                  <p>No. 18/152, Guindy Industrial<br/>Estate, Chennai - 600032.</p>
                </div>
              </div>
              <div className="contact-card address-card-new">
                <div className="hover-ellipse"></div>
                <div className="icon-box-new">
                  <div className="icon-overlay-corners"></div>
                  <img src={iconFactory} alt="Factory Icon" className="card-icon-img" />
                </div>
                <div className="address-content">
                  <h3>Factory Address</h3>
                  <p>Dp - 27, Sidco, Kakkalur<br/>Industrial Estate, Thiruvallur,<br/>Tamil Nadu - 602 003.</p>
                </div>
              </div>
            </div>
            
            <div className="quote-micro-card-unified">
              <span className="quote-mark-orange quote-start">“</span>
              <p> Complete OEM manufacturing, engineered for reliability. Forged and machined components built to perform at scale. </p>
              <span className="quote-mark-orange quote-end">”</span>
            </div>
          </div>
        </div>

        {/* Row 2: Mail, Phone, and Quote Request */}
        <div className="unified-bottom-row">
          <div className="bottom-left-column">
            <div className="methods-row-unified">
              <div className="contact-card method-card-unified">
                <div className="hover-ellipse"></div>
                <div className="icon-box-new method-icon-box">
                  <div className="icon-overlay-corners"></div>
                  <img src={iconMailNew} alt="Mail Icon" className="card-icon-img" />
                </div>
                <div className="method-content">
                  <h3>Our Mail</h3>
                  <p>info@thirumalaeng.com<br/>akaruppaiya@gmail.com</p>
                </div>
              </div>

              <div className="contact-card method-card-unified">
                <div className="hover-ellipse"></div>
                <div className="icon-box-new method-icon-box">
                  <div className="icon-overlay-corners"></div>
                  <img src={iconPhoneNew} alt="Phone Icon" className="card-icon-img" />
                </div>
                <div className="method-content">
                  <h3>Our Phone</h3>
                  <p>+91 99400 30621<br/>+91 88257 17297</p>
                </div>
              </div>
            </div>

            {/* Social Media Bar moved here */}
            <div className="social-container-unified">
              <div className="social-expand-row">
                <div className="social-expand-item linkedin">
                  <div className="social-icon-box-unified">
                    <img src={iconLinkedin} alt="LinkedIn" />
                  </div>
                  <span className="social-name">LinkedIn</span>
                </div>
                <div className="social-expand-item whatsapp">
                  <div className="social-icon-box-unified">
                    <img src={iconWhatsapp} alt="WhatsApp" />
                  </div>
                  <span className="social-name">WhatsApp</span>
                </div>
                <div className="social-expand-item instagram">
                  <div className="social-icon-box-unified">
                    <img src={iconInstagram} alt="Instagram" />
                  </div>
                  <span className="social-name">Instagram</span>
                </div>
                <div className="social-expand-item youtube">
                  <div className="social-icon-box-unified">
                    <img src={iconYoutube} alt="YouTube" />
                  </div>
                  <span className="social-name">YouTube</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card quote-request-card-unified">
            <h3>Request<br/>Manufacturing Quote</h3>
            <p className="quote-sub">Takes only a few minutes to submit.</p>
            <div className="contact-submit-btn-wrapper">
              <button className="contact-submit-btn-unified">Get Your Quotation</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
