import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">Something about me</h2>
      
      <div className="video-container">
        <div className="video-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="About Me Video Thumbnail" 
            className="video-thumbnail"
          />
          <button className="play-btn">
            <span className="play-icon">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;