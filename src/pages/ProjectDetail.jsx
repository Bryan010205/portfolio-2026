import React from 'react';
import './ProjectDetail.css';
import projectHero from '../assets/ProjectHero.jpg';
import paperSketch from '../assets/Paper_Sketch.jpg';
import digitalSketch from '../assets/Digital_Sketch.jpg';
import frontside from '../assets/Frontside.jpg';
import topside from '../assets/Topside.jpg';
import leftside from '../assets/Leftside.jpg';

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
            and realistic commercial presentations.
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

      {/* 3. CHALLENGE & STRATEGIC SOLUTION */}
      <section className="problem-solution">
        {/* Phần Challenge căn giữa */}
        <div className="problem-box">
          <h3>The Challenge</h3>
          <p>
            The primary challenge was maintaining visual consistency across multiple sides 
            of the packaging while integrating complex cultural motifs. Mapping 2D assets onto a 
            realistic 3D model in After Effects without previous experience demanded a steep 
            learning curve in motion graphics and 3D lighting.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Phần Solution - Đã đưa tiêu đề ra ngoài để căn giữa tuyệt đối */}
        <div className="solution-box">
          <h3>Strategic Solution</h3> 

          <div className="solution-inner">
            <div className="section-header">
              <span className="decor-triangle">▷</span>
              <span className="close-icon">✕</span>
            </div>
            <p>
              I initiated deep-dive market research into premium coffee branding to refine the color palette. 
              The final result is a seamless fusion of graphic design and 3D simulation that effectively 
              communicates the product's high-end market positioning.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DESIGN PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <h2>Design Process</h2>
          <div className="decor-circle">○</div>
        </div>

        <div className="process-grid">
          <div className="process-item large">
            <img src={paperSketch} alt="Conceptual Paper Sketch" />
            <span className="label-btn">Conceptual Sketch</span>
          </div>
          <div className="process-item">
            <img src={digitalSketch} alt="Digital Layout Drafting" />
            <span className="label-btn">Digital Drafting</span>
          </div>

          <div className="process-item">
            <img src={topside} alt="Top Side Technical Mapping" />
            <span className="label-btn">Technical Mapping</span>
          </div>
          <div className="process-item large">
            <img src={frontside} alt="Final Packaging Front View" />
            <span className="label-btn">Final Render</span>
          </div>
          
          <div className="process-item full-width">
            <img src={leftside} alt="Full Panel Layout Detail" />
            <span className="label-btn">Detail Execution</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;