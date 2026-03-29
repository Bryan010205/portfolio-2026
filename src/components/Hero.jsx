import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi I'm Bryan Vo
          <span className="decorative-squiggle"></span>
        </h1>
        <h2 className="hero-subtitle">I'm a Graphic & UX/UI Designer</h2>
        
        <p className="hero-description">
          Hi, I'm Bryan. I design digital experiences that balance bold
          visual energy with structured, intentional systems. Inspired
          by gaming aesthetics and competitive environments, I bring
          controlled intensity into every project—combining expressive
          visuals with disciplined execution.
          <br /><br />
          As a UI/UX and web-focused designer, I care deeply about
          clarity, hierarchy, and purposeful design decisions. I actively
          learn, adapt quickly, and refine my work continuously. My
          goal is not just to create visuals, but to build experiences that
          are memorable, strategic, and technically strong.
        </p>
        
        <button className="btn-primary">
          More info <span className="arrow-icon">↗</span>
        </button>
      </div>

      <div className="hero-visuals">
        <div className="decorative-triangle"></div>
        <div className="image-wrapper">
          {/* Replace this placeholder with your actual image path later */}
          <img 
            src="https://via.placeholder.com/400x500/2A2D43/FFFFFF?text=Bryan+Photo" 
            alt="Bryan Vo Portrait" 
            className="profile-image" 
          />
        </div>
        <div className="decorative-circle"></div>
        <div className="decorative-plus">+</div>
      </div>
    </section>
  );
};

export default Hero;