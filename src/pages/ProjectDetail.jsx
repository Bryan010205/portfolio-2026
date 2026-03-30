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
          <img src={projectHero} alt="Trung Nguyen Legend Instant Coffee Packaging" />
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
            This project focuses on revitalizing the visual identity for <strong>Trung Nguyen Legend</strong>'s instant coffee line. 
            The objective was to craft a comprehensive packaging system that honors traditional heritage while embracing modern aesthetic 
            standards. By applying advanced 3D visualization techniques, I aimed to bridge the gap between 2D graphic layouts 
            and realistic commercial presentations, ensuring the brand's premium essence is captured in every pixel.
          </p>
        </div>
        <div className="skills-content">
          <div className="section-header">
            <h2>Skills</h2>
            <span className="plus-icon">+</span>
          </div>
          <ul className="skills-list">
            <li>Adobe Photoshop (Layout & Branding)</li>
            <li>Adobe After Effects (3D Compositing)</li>
            <li>Visual Storytelling</li>
          </ul>
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION */}
      <section className="problem-solution">
        <div className="problem-box">
          <h3>The Challenge</h3>
          <p>
            Coffee is more than a drink; it's a "vibe." The primary challenge was maintaining visual consistency across multiple sides 
            of the packaging while integrating complex cultural motifs. Technically, I faced a significant hurdle in 
            <strong> 3D spatial compositing</strong>. Mapping 2D assets onto a realistic 3D model in After Effects without previous experience 
            proved to be an intensive, time-consuming process that demanded a steep learning curve in motion graphics and 3D lighting.
          </p>
        </div>

        <div className="solution-box">
          <div className="section-header">
            <span className="decor-triangle">▷</span>
            <h3>Strategic Solution</h3>
            <span className="close-icon">✕</span>
          </div>
          <div className="solution-inner">
            <p>
              I initiated deep-dive market research into premium coffee branding to refine the color palette and typography. 
              To solve the technical barrier, I adopted an <strong>agile learning approach</strong>: dissecting professional YouTube 
              workflows, experimenting with 3D camera tracking, and iterating based on peer feedback and instructor guidance. 
              The final result is a seamless fusion of graphic design and 3D simulation that effectively communicates the 
              product's high-end market positioning.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <h2>Design Process</h2>
          <div className="decor-circle">○</div>
        </div>

        <div className="process-grid">
          <div className="process-item large">
            <img src={process1} alt="Conceptual Paper Sketch" />
            <span className="label-btn">Conceptual Sketch</span>
          </div>
          <div className="process-item">
            <img src={process2} alt="Digital Layout Drafting" />
            <span className="label-btn">Digital Drafting</span>
          </div>

          <div className="process-item">
            <div className="placeholder-img">3D Projection / Top side</div>
            <span className="label-btn">Technical Mapping</span>
          </div>
          <div className="process-item large">
            <img src={process3} alt="Final Packaging Front View" />
            <span className="label-btn">Final Render</span>
          </div>
          
          <div className="process-item full-width">
            <div className="placeholder-img">Side Panel / Nutritional Info Layout</div>
            <span className="label-btn">Detail Execution</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;