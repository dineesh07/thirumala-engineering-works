import React, { useState } from 'react';
import { animate } from 'framer-motion';

const faqData = [
  {
    q: 'What industries do you serve?',
    a: 'We serve automotive, heavy engineering, oil & gas, agricultural equipment, and general industrial OEMs requiring forged and machined components at scale.',
  },
  {
    q: 'Do you provide custom manufacturing?',
    a: 'Yes. We manufacture components based on customer drawings, specifications, and OEM requirements.',
  },
  {
    q: 'What materials do you forge?',
    a: 'We forge steel, brass, aluminum, and copper based on application needs.',
  },
  {
    q: 'What is your production capacity?',
    a: 'Our facility handles high-volume production runs with consistent throughput, supported by in-house tooling and multi-shift operations.',
  },
  {
    q: 'Do you follow quality standards?',
    a: 'Yes. We follow strict in-process inspection and quality control procedures aligned with OEM and industrial standards at every production stage.',
  },
  {
    q: 'How can I request a quote?',
    a: 'You can submit your requirements using the Get a Quote form above, or contact our engineering team directly for a tailored quotation.',
  },
  {
    q: 'Do you support prototype runs?',
    a: 'Yes. We support small prototype batches as well as full-scale production, helping OEMs validate designs before committing to large orders.',
  },
  {
    q: 'How do you ensure manufacturing quality?',
    a: 'We use in-house tooling, controlled process parameters, and dedicated quality inspection at each stage — from raw material intake to final dispatch.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleQuoteClick = () => {
    const section = document.getElementById('quote-section');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, y, {
        type: 'spring',
        mass: 1,
        stiffness: 44.44,
        damping: 10,
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-body">

        {/* Left — accordion list */}
        <div className="faq-list">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}
              onClick={() => toggleAccordion(i)}
            >
              <div className="faq-header">
                <span className="faq-question">{item.q}</span>
                <div className="faq-icon-box">
                  <div className="faq-icon-hline" />
                  <div className="faq-icon-vline" />
                </div>
              </div>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — static info */}
        <div className="faq-info-wrapper">
          <div className="faq-info">
            <div className="section-badge faq-badge">
              <span className="dot"></span> FAQ's
            </div>
            <h2 className="faq-title">Answers You Can Trust</h2>
            <p className="faq-desc">
              Clear answers to common questions about our OEM manufacturing capabilities,
              end-to-end processes, quality assurance practices, and how we work as a
              reliable manufacturing partner for industrial businesses.
            </p>
          </div>
        </div>

      </div>

      {/* CTA Banner */}
      <div className="faq-cta">
        <div className="faq-cta-left">
          <div className="section-badge faq-badge">
            <span className="dot"></span> Next Step
          </div>
          <h3 className="faq-cta-title">You're Clear on the Process.<br/>Let's Apply It.</h3>
          <p className="faq-cta-desc">
            Share your component details with confidence, choose the right manufacturing
            category, provide inputs, and we'll handle the rest with precision.
          </p>
        </div>
        <div className="faq-cta-right">
          <span className="faq-cta-note">Takes only a few minutes to submit.</span>
          <button className="faq-cta-btn" onClick={handleQuoteClick}>Share Your Requirement</button>
        </div>
      </div>

    </section>
  );
};

export default FAQSection;
