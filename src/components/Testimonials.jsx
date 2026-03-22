import React from 'react';
import tataLogo from '../assets/testimonials/tata-logo.jpg';

const testimonials = [
  {
    quote: 'A manufacturing partner we can rely on.',
    body: 'Working with Thirumala has simplified our sourcing process. Their ability to handle forging and machining under one roof has reduced lead times and improved production consistency.',
    company: 'Tata Engineering',
    role: 'OEM Manufacturing Partner',
    logo: tataLogo,
  },
  {
    quote: 'A manufacturing partner we can rely on.',
    body: 'Working with Thirumala has simplified our sourcing process. Their ability to handle forging and machining under one roof has reduced lead times and improved production consistency.',
    company: 'Tata Engineering',
    role: 'OEM Manufacturing Partner',
    logo: tataLogo,
  },
  {
    quote: 'A manufacturing partner we can rely on.',
    body: 'Working with Thirumala has simplified our sourcing process. Their ability to handle forging and machining under one roof has reduced lead times and improved production consistency.',
    company: 'Tata Engineering',
    role: 'OEM Manufacturing Partner',
    logo: tataLogo,
  },
];

const TestimonialCard = ({ item }) => (
  <div className="testimonial-card">
    <div className="testimonial-quote-mark">"</div>
    <h4 className="testimonial-quote">{item.quote}</h4>
    <p className="testimonial-body">{item.body}</p>
    <div className="testimonial-author">
      <img src={item.logo} alt={item.company} className="testimonial-logo" />
      <div className="testimonial-author-info">
        <span className="testimonial-company">{item.company}</span>
        <span className="testimonial-role">{item.role}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const col1 = [...testimonials, ...testimonials];
  const col2 = [...testimonials, ...testimonials].reverse();

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span> Testimonials
        </div>
        <h2 className="section-title">Trusted by Leading Industrial Brands</h2>
      </div>

      <div className="testimonials-columns">
        {/* Column 1 — scrolls up */}
        <div className="testimonials-col-wrapper">
          <div className="testimonials-col scroll-up">
            {col1.map((item, i) => (
              <TestimonialCard key={`c1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Column 2 — scrolls down */}
        <div className="testimonials-col-wrapper">
          <div className="testimonials-col scroll-down">
            {col2.map((item, i) => (
              <TestimonialCard key={`c2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
