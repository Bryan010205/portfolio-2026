import React from 'react';
import { motion } from 'framer-motion';
import './VideoProject.css';

const VIDEO_ID = 'Sg0D8jOaruQ';

const VideoProject = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div
      className="video-project-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 1. HERO: YouTube Embed */}
      <section className="vp-hero">
        <motion.div
          className="vp-video-wrapper"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
            title="AMV Typography Anime"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
            This project is an emotional kinetic typography music video featuring the song <strong>"Hero"</strong> by Cash Cash. 
            The visuals are curated from the anime film <strong>A Silent Voice</strong>, focusing on the complex relationship 
            and redemption arc between the main characters, Ishida and Shoko. The goal was to create a strong synergy 
            between the lyrical message and the film's narrative beats.
          </p>
        </motion.div>

        <motion.div className="skills-content" variants={fadeUp}>
          <div className="section-header">
            <h2>Skills</h2>
            <span className="plus-icon">+</span>
          </div>
          <ul className="skills-list">
            <li>Adobe After Effects</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* 3. CHALLENGE */}
      <section className="challenge-section">
        <motion.div
          className="challenge-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="decor-triangle">▷</span>
          <h2>The Challenge</h2>
        </motion.div>

        <motion.div
          className="challenge-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              number: '01',
              title: 'The Vision & Creative Spark',
              text: `I wanted to create something that wasn't just a lyric video, but a visual narrative. I chose the high-energy track 'Hero' by Cash Cash and paired it with scenes from A Silent Voice because their themes of redemption and inner strength just clicked for me. My goal was to make sure the typography felt like it was actually living inside the movie's world, not just sitting on top of it.`
            },
            {
              number: '02',
              title: 'Facing the Learning Curve',
              text: `To be honest, Kinetic Typography was a brand-new skill for me. I had to dive deep into After Effects, moving past basic text to master complex animators and expressions. It was a steep learning curve, but seeing the text pulse and move with the emotional weight of the song made every hour of practice worth it.`
            },
            {
              number: '03',
              title: 'The Storyboard Strategy',
              text: `Before I even touched the software, I had to map everything out. I used a storyboard to translate abstract musical beats into concrete visual plans. This helped me bridge the gap between my initial ideas and the technical execution, ensuring every cut and every word had a specific purpose in the story I was trying to tell.`
            }
          ].map((item) => (
            <motion.div key={item.number} className="challenge-card" variants={fadeUp}>
              <span className="challenge-number">{item.number}</span>
              <h4 className="challenge-title">{item.title}</h4>
              <p className="challenge-text">"{item.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default VideoProject;
