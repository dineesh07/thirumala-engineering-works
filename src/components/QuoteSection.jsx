import React, { useState } from 'react';

const services = [
  {
    id: 'forging',
    label: 'Hot Forging Components',
    badge: 'Get a Quote',
    title: 'Hot Forging\nManufacturing Quote',
    desc: 'Request high-strength forged components in steel, brass, aluminum, or copper — built for industrial durability and performance.',
  },
  {
    id: 'machining',
    label: 'Machined Components',
    badge: 'Get a Quote',
    title: 'Machined Components\nQuote',
    desc: 'Request precision CNC-machined parts with tight tolerances, excellent surface finish, and consistent dimensional accuracy.',
  },
  {
    id: 'custom',
    label: 'Custom OEM Solutions',
    badge: 'Get a Quote',
    title: 'Custom OEM\nManufacturing Quote',
    desc: 'Submit your drawings and specifications — we will engineer a production plan tailored to your exact OEM requirements.',
  },
];

const QuoteSection = () => {
  const [selected, setSelected] = useState('forging');
  const active = services.find(s => s.id === selected);

  return (
    <section className="quote-section" id="quote-section">
      {/* ── Tab selector ── */}
      <div className="quote-selector">
        <h3 className="quote-selector-title">Select Manufacturing Requirement</h3>
        <div className="quote-tabs">
          {services.map(s => (
            <label key={s.id} className={`quote-tab ${selected === s.id ? 'active' : ''}`}>
              <input
                type="radio"
                name="service"
                value={s.id}
                checked={selected === s.id}
                onChange={() => setSelected(s.id)}
              />
              <span className="quote-radio-ring">
                {selected === s.id && <span className="quote-radio-dot" />}
              </span>
              {s.label}
            </label>
          ))}
        </div>
      </div>

      {/* ── Two-column body ── */}
      <div className="quote-body">

        {/* Left — info panel */}
        <div className="quote-info">
          <div className="quote-info-badge">
            <span className="dot"></span> {active.badge}
          </div>
          <h2 className="quote-info-title">
            {active.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </h2>
          <p className="quote-info-desc">{active.desc}</p>

          <div className="quote-contact-card">
            <p className="quote-contact-text">"Have questions before submitting? Talk to our engineering team"</p>
            <button className="quote-contact-btn">Contact Us</button>
          </div>
        </div>

        {/* Right — form */}
        <form className="quote-form" onSubmit={e => e.preventDefault()}>
          <div className="quote-field">
            <label>Company Name</label>
            <input type="text" placeholder="e.g., ABC Engineering Pvt. Ltd." />
          </div>
          <div className="quote-field">
            <label>Full Name</label>
            <input type="text" placeholder="e.g., Ramesh Kumar" />
          </div>
          <div className="quote-field">
            <label>Business Email</label>
            <input type="email" placeholder="e.g., ramesh@company.com" />
          </div>
          <div className="quote-field">
            <label>Phone Number</label>
            <input type="tel" placeholder="e.g., 9876543210" />
          </div>
          <div className="quote-field">
            <label>Enter City / State / Country</label>
            <input type="text" placeholder="e.g., Chennai, Tamil Nadu, India" />
          </div>
          <button type="submit" className="quote-submit-btn">Get Your Quotation Now</button>
        </form>
      </div>
    </section>
  );
};

export default QuoteSection;
