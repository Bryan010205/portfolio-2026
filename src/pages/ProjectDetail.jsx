import React from 'react';
import './ProjectDetail.css';
import projectHero from '../assets/ProjectHero.jpg';
import process1 from '../assets/Projectprocess1.jpg';
import process2 from '../assets/Projectprocess2.jpg';
import process3 from '../assets/Projectprocess3.jpg';

const ProjectDetail = () => {
  return (
    <div className="project-detail-page">
      {/* 1. HERO SECTION */}
      <section className="project-hero">
        <div className="hero-img-wrapper">
          <img src={projectHero} alt="Instant Coffee Packaging" />
          <div className="decor-zigzag top-left">〰</div>
          <div className="decor-circle top-right">○</div>
        </div>
      </section>

      {/* 2. OVERVIEW & SKILLS */}
      <section className="project-info-grid">
        <div className="overview-content">
          <div className="section-header">
            <span className="decor-triangle">▷</span>
            <h2>Overview</h2>
          </div>
          <p>
            The goal of this project was to design a complete product packaging concept, 
            including branding and logo design, while demonstrating an understanding 
            of Photoshop for layout design and Adobe After Effects for creating a 
            realistic 3D presentation.
          </p>
        </div>
        <div className="skills-content">
          <div className="section-header">
            <h2>Skills</h2>
            <span className="plus-icon">+</span>
          </div>
          <ul>
            <li>Photoshop</li>
            <li>After Effect</li>
          </ul>
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION */}
      <section className="problem-solution">
        <div className="problem-box">
          <h3>Problem</h3>
          <p>
            This project was about coffee so every logo, slogan, images need to be related to coffee vibe. 
            The most problem that I felt so heavy should be putting product on 3D in After Effect. 
            At the time of making it, I had no ideas of how to use After Effect and it took me a huge amount of time.
          </p>
        </div>

        <div className="solution-box">
          <div className="section-header">
            <span className="decor-triangle">▷</span>
            <h3>Solution</h3>
            <span className="close-icon">✕</span>
          </div>
          <div className="solution-inner">
            <p>
              I had some research about coffee brands to get inspiration such as logo, slogan, how the packaging should looks like... 
              From that point, I designed every sides with data from research. For 3D After Effect, I watched some videos on Youtube 
              as well as asking from instructor for more techniques or feedbacks from my classmates.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <h2>Process</h2>
          <div className="decor-circle">○</div>
        </div>

        <div className="process-grid">
          {/* Row 1: Sketch */}
          <div className="process-item large">
            <img src={process1} alt="Paper sketch" />
            <span className="label-btn">Paper sketch</span>
          </div>
          <div className="process-item">
            <img src={process2} alt="Digital sketch" />
            <span className="label-btn">digital sketch</span>
          </div>

          {/* Row 2: Sides */}
          <div className="process-item">
            <div className="placeholder-img">Top side</div> {/* Dùng placeholder nếu chưa có ảnh riêng */}
            <span className="label-btn">Top side</span>
          </div>
          <div className="process-item large">
            <img src={process3} alt="Front side" />
            <span className="label-btn">Front side</span>
          </div>
          
          <div className="process-item full-width">
            <div className="placeholder-img">Left side / Detail layout</div>
            <span className="label-btn">Left side</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;