import React from 'react';
import cap1 from '../assets/capabilities/cap1.jpg';
import cap2 from '../assets/capabilities/cap2.jpg';
import cap3 from '../assets/capabilities/cap3.jpg';

const capabilities = [
  {
    title: 'Hot Forged Components',
    shortDesc: 'We manufacture steel, brass, aluminum, and copper forged',
    fullDesc: [
      'We manufacture steel, brass, aluminum, and copper forged components engineered for superior strength, durability, and long service life. Our controlled hot forging process enhances grain structure, improves load-bearing capacity, and minimizes material waste.',
      'With in-house tooling, process control, and quality inspection, we deliver consistent, high-volume forged parts that meet demanding industrial and OEM standards-ideal for applications requiring reliability under extreme conditions.'
    ],
    img: cap3,
  },
  {
    title: 'Machined Components',
    shortDesc: 'Our advanced CNC machining capabilities enable the production of complex, tight-tolerance',
    fullDesc: [
      'Our advanced CNC machining capabilities enable the production of complex, tight-tolerance components with excellent dimensional accuracy and surface finish. We handle a wide range of materials and geometries to meet diverse industrial and automotive requirements.',
      'From single prototypes to large-scale production runs, our machining process ensures repeatability, precision, and consistent output-supporting OEMs with dependable components that integrate seamlessly into their assemblies.'
    ],
    img: cap2, 
  },
  {
    title: 'Custom Manufacturing',
    shortDesc: 'We offer end-to-end custom manufacturing solutions built around your',
    fullDesc: [
      'We offer end-to-end custom manufacturing solutions built around your drawings, specifications, and production goals. Our engineering team collaborates closely with OEM partners to understand functional requirements, optimize designs, and plan efficient manufacturing workflows.',
      'From concept support and material selection to full-scale production, Thirumala acts as a long-term manufacturing partner-delivering flexible, reliable solutions tailored to your business needs.'
    ],
    img: cap1,
  }
];

const Capabilities = () => {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span> Manufacturing Capabilities
        </div>
        <h2 className="section-title">Built for Industrial Scale</h2>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap, idx) => (
          <div className="capability-card" key={idx}>
            <img src={cap.img} alt={cap.title} className="capability-img" />
            <div className="capability-overlay">
              <div className="capability-content">
                <h3>{cap.title}</h3>
            <div className="cap-desc-container">
                <p className="cap-short-text">
                  {cap.shortDesc}<span className="read-more"> Read more...</span>
                </p>
                <div className="cap-full-text">
                  {cap.fullDesc.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </div>
              </div>
              <button className="capability-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
