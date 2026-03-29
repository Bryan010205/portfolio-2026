import React from 'react';
import './Hero.css';
import logo2 from '../assets/logo2.png';
import backgroundHero from '../assets/background_hero.png';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi I'm Bryan Vo</h1>
        <h2 className="hero-subtitle">I'm a Graphic & UX/UI Designer</h2>
        
        <p className="hero-description">
          Hi, I'm Bryan. I design digital experiences that balance bold visual energy 
          with structured, intentional systems. Inspired by gaming aesthetics and 
          competitive environments, I bring controlled intensity into every project— 
          combining expressive visuals with disciplined execution.
        </p>
        <p className="hero-description">
          As a UI/UX and web-focused designer, I care deeply about clarity, hierarchy, 
          and purposeful design decisions. I actively learn, adapt quickly, and refine 
          my work continuously. My goal is not just to create visuals, but to build 
          experiences that are memorable, strategic, and technically strong.
        </p>

        <button className="more-info-btn">
          More info <span className="arrow-icon">↗</span>
        </button>
      </div>

      <div className="hero-visuals">
        <div className="image-wrapper">
          {/* Lớp lót dưới cùng: Nền lượn sóng màu xanh */}
          <img src={backgroundHero} alt="Hero Background" className="hero-background" />
          
          {/* Lớp nổi lên trên: Ảnh chân dung */}
          <img src={logo2} alt="Bryan Vo Portrait" className="profile-image" />
          
          {/* Các họa tiết trang trí */}
          <div className="decorative-circle"></div>
          <div className="decorative-plus">+</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;