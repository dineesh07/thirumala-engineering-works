import React from 'react';
import clientsIcon from '../assets/clients-icon.png';
import forgeIcon from '../assets/forge-icon.png';
import machinesIcon from '../assets/machines-icon.png';
import medalImg from '../assets/experience-medal.png';
import bgEffectGif from '../assets/bg-effect.gif';
import clientsLogos from '../assets/clients-logos.png';
import workerIcon from '../assets/worker-icon.png';
import locationIcon from '../assets/location-icon.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <img src={clientsIcon} alt="Clients" />
          </div>
          <div className="stat-text">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <img src={forgeIcon} alt="Tons per year" />
          </div>
          <div className="stat-text">
            <h3>10,000+</h3>
            <p>Tons/Year</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon-wrapper">
            <img src={machinesIcon} alt="Machines" />
          </div>
          <div className="stat-text">
            <h3>100+</h3>
            <p>Machines</p>
          </div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <div className="about-badge">
            <span className="dot" /> About Thirumala
          </div>
          <h2 className="about-title">Your Reliable OEM Manufacturing Partner</h2>
          <p className="about-description">
            Thirumala Engineering Works is a complete OEM manufacturing company built to serve industries that require precision, scale, and consistency. We specialize in delivering high-quality forged and machined components for engineering brands, manufacturers, and industrial enterprises.
          </p>
          <p className="about-description">
            With a fully equipped in-house infrastructure of forging units, machining facilities, and quality control systems, we offer end-to-end manufacturing under one roof reducing dependency, lead time, and operational risk for our clients.
          </p>
          <div className="about-links">
            <a href="#about" className="about-btn">
              <span className="btn-text">Know Us More...</span>
              <svg className="btn-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </a>
            <div className="clients-logos">
              <span className="clients-label">100+ MANUFACTURING CLIENTS</span>
              <img src={clientsLogos} alt="Client Logos" className="clients-logos-img" />
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-wrapper">
            <img src={bgEffectGif} alt="Background Effect" className="about-main-img" />
            
            {/* Floating Badges */}
            <div className="floating-badge employee-badge">
              <div className="badge-header">
                <div className="badge-icon">
                  <img src={workerIcon} alt="Worker" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="badge-info">
                  <strong>25,000+</strong>
                  <span>Employee</span>
                </div>
              </div>
              <div className="badge-details">
                Skilled Workforce<br/>Across Operations
              </div>
            </div>

            <div className="experience-medal">
              <img src={medalImg} alt="16 Years Experience" />
            </div>

            <div className="floating-badge location-badge">
              <div className="badge-header">
                <div className="badge-icon">
                  <img src={locationIcon} alt="Location" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="badge-info">
                  <strong>15+</strong>
                  <span>Location</span>
                </div>
              </div>
              <div className="badge-details">
                Wide Industrial Presence<br/>Across Regions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
