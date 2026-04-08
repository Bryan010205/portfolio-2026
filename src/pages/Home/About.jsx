import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal'; 
import './About.css';

// 💡 PATH: Ensure you have your portrait image in the assets folder
import aboutPortrait from '../../assets/about_portrait.jpg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Reveal>
        <div className="portfolio-container">
          <h2 className="section-title">Something about me</h2>
          
          <div className="about-grid">
            {/* 1. VISUAL SECTION */}
            <motion.div 
              className="about-visuals"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="about-image-wrapper">
                <img 
                  src={aboutPortrait} 
                  alt="Bryan Vo - Graphic & UX/UI Designer" 
                  className="about-main-img"
                />
                <div className="about-decor-plus">+</div>
                <div className="about-decor-circle"></div>
              </div>
            </motion.div>
            
            {/* 2. CONTENT SECTION (Professional & Heartfelt English) */}
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="about-subtitle">
                ✦ Dreaming in <span className="highlight-text">Pixels</span>, Living with <span className="highlight-text">Purpose</span>
              </h3>
              
              <div className="about-description">
                <p>
                  I have always believed that <strong>design is a silent language</strong>—a medium where every pixel carries a mission to connect humanity with technology. To me, this is more than just a career; it is how I define the world around me.
                </p>
                <p>
                  Rooted in a passion for the high-energy visuals of the gaming world, my dream is to become a <strong>Bridge Designer</strong>—one who creates more than just interfaces, but lasting emotional bridges between users and digital products.
                </p>
                <p>
                  My ultimate goal is to apply <strong>strategic UX/UI thinking</strong> to solve real-world problems and bring sustainable value to the community. I strive every day to ensure that every product bearing the name Bryan Vo is a blend of kindness, technical precision, and the soul of a digital artist.
                </p>
              </div>

              {/* Decorative Footer Line */}
              <div className="about-footer-line">
                <motion.div 
                  className="line-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <span className="quote-small">"My goal is not just to create visuals, but to build memorable experiences."</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;