import hammerImg from '../assets/hammer.png';
import heroFrame1 from '../assets/hero-frame-1.png';
import heroFrame2 from '../assets/hero-frame-2.png';
import glowBg from '../assets/glow-bg.png';
import { animate } from 'framer-motion';

const Hero = () => {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('capabilities');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, y, {
        type: 'spring',
        mass: 1,
        stiffness: 100,
        damping: 15,
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <section className="hero">
      <div className="badge">
        #1 on OEM manufacturing
      </div>
      
      <h1 className="hero-title">
        Complete <span className="oem-icon-container"><i className="oem-icon"></i></span>EM Manufacturing Solutions <br /> for Industrial Engineering Needs
      </h1>
      
      <p className="hero-subtitle">
        Thirumala Engineering Works is a trusted OEM partner, delivering forged and precision-machined components with end-to-end engineering solutions for industrial brands, all under one roof.
      </p>
      
      <div className="hero-cta-wrapper">
        <a href="#capabilities" className="hero-cta" onClick={handleExploreClick}>Explore Capabilities</a>
      </div>
      
      <div className="hero-visual-container">
        {/* The glow effect sits in the hero container but will visually underlap About Us */}
        <img src={glowBg} className="glow-layer" alt="" />
        
        <img src={heroFrame2} className="floating-frame frame-left" alt="Left Frame" />
        
        <img src={hammerImg} className="hero-main-visual" alt="3D Component" />
        
        <img src={heroFrame1} className="floating-frame frame-right" alt="Right Frame" />
      </div>
    </section>
  );
};

export default Hero;
