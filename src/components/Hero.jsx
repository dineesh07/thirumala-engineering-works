import hammerImg from '../assets/hammer.png';
import heroFrame1 from '../assets/hero-frame-1.png';
import heroFrame2 from '../assets/hero-frame-2.png';
import glowBg from '../assets/glow-bg.png';
import { animate, motion, useMotionValue, useSpring } from 'framer-motion';

// Separate component to handle individual image-specific hover logic
const FloatingFrame = ({ src, className, alt, delay = 0, followLeft = true, followRight = true }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // High-performance smooth spring
  const springConfig = { damping: 25, stiffness: 120 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate relative distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnet effect: follow cursor with a limited range (20% pull)
    let moveX = distanceX * 0.20;
    
    // Apply directional constraints to prevent clashing with center text
    if (!followLeft && moveX < 0) moveX *= 0.2; // Dampen movement towards left
    if (!followRight && moveX > 0) moveX *= 0.2; // Dampen movement towards right
    
    x.set(moveX); 
    y.set(distanceY * 0.20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className={className}
      animate={{ y: [0, -20, 0] }}
      transition={{ 
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay } 
      }}
      style={{ 
        position: 'absolute',
        zIndex: 110
      }}
    >
      <motion.img 
        src={src} 
        alt={alt}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          x: springX, 
          y: springY,
          width: '100%',
          height: 'auto',
          cursor: 'pointer',
          pointerEvents: 'auto' // React to mouse events
        }}
      />
    </motion.div>
  );
};

const Hero = () => {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('capabilities');
    if (section) {
      const targetY = section.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, targetY, {
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
        
        <FloatingFrame 
          src={heroFrame2} 
          className="frame-left" 
          alt="Left Frame" 
          delay={0}
          followRight={false} // Dampen movement towards center (right)
        />
        
        <img src={hammerImg} className="hero-main-visual" alt="3D Component" />
        
        <FloatingFrame 
          src={heroFrame1} 
          className="frame-right" 
          alt="Right Frame" 
          delay={3}
          followLeft={false} // Dampen movement towards center (left)
        />
      </div>
    </section>
  );
};

export default Hero;
