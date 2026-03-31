import React from 'react';
import { motion } from 'framer-motion';
import './ProjectDetail.css';

// 💡 CẬP NHẬT ĐƯỜNG DẪN: Lùi 1 cấp (../)
import projectHero from '../assets/ProjectHero.jpg';
import paperSketch from '../assets/Paper_Sketch.jpg';
import digitalSketch from '../assets/Digital_Sketch.jpg';
import frontside from '../assets/Frontside.jpg';
import topside from '../assets/Topside.jpg';
import leftside from '../assets/Leftside.jpg';

const ProjectDetail = () => {
  // Biến cấu hình hiệu ứng hiện hình
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div 
      className="project-detail-page"
      initial="hidden"
      animate="visible"
    >
      {/* 1. HERO SECTION */}
      <section className="project-hero">
        <motion.div 
          className="hero-img-wrapper"
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={projectHero} alt="Trung Nguyen Legend Instant Coffee Packaging" />
          <div className="decor-zigzag top-left">〰</div>
          <div className="decor-circle top-right">○</div>
        </motion.div>
      </section>

      {/* 2. OVERVIEW & SKILLS */}
      <motion.section 
        className="project-info-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="overview-content" variants={fadeUp}>
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
        </motion.div>

        <motion.div className="skills-content" variants={fadeUp}>
          <div className="section-header">
            <h2>Skills</h2>
            <span className="plus-icon">+</span>
          </div>
          <ul className="skills-list">
            <li>Adobe Photoshop (Layout & Branding)</li>
            <li>Adobe After Effects (3D Compositing)</li>
            <li>Visual Storytelling</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* 3. CHALLENGE & STRATEGIC SOLUTION */}
      <section className="problem-solution">
        <motion.div 
          className="problem-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>The Challenge</h3>
          <p>
            The primary challenge was maintaining visual consistency across multiple sides 
            of the packaging while integrating complex cultural motifs. Mapping 2D assets onto a 
            realistic 3D model in After Effects without previous experience demanded a steep 
            learning curve in motion graphics and 3D lighting.
          </p>
        </motion.div>

        <motion.div 
          className="solution-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </section>

      {/* 4. DESIGN PROCESS */}
      <section className="process-section">
        <div className="process-header">
          <h2>Design Process</h2>
          <div className="decor-circle">○</div>
        </div>

        <motion.div 
          className="process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { img: paperSketch, label: "Conceptual Sketch", size: "large" },
            { img: digitalSketch, label: "Digital Drafting", size: "" },
            { img: topside, label: "Technical Mapping", size: "" },
            { img: frontside, label: "Final Render", size: "large" },
            { img: leftside, label: "Detail Execution", size: "full-width" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`process-item ${item.size}`}
              variants={fadeUp}
            >
              <img src={item.img} alt={item.label} />
              <span className="label-btn">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;