import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import BrandsCarousel from '../components/BrandsCarousel';
import Capabilities from '../components/Capabilities';
import Testimonials from '../components/Testimonials';
import QuoteSection from '../components/QuoteSection';
import FAQSection from '../components/FAQSection';
import bgSparks from '../assets/1-bg.gif';

const Home = () => {
  return (
    <div className="home-wrapper">
      <img src={bgSparks} className="bg-sparks" alt="Background Sparks" />
      <Hero />
      <About />
      <BrandsCarousel />
      <Capabilities />
      <Testimonials />
      <QuoteSection />
      <FAQSection />
    </div>
  );
};

export default Home;
