import React from 'react';
import { motion } from 'framer-motion';
import './VideoProject.css';
import storyboard from '../assets/storyboard.jpeg';
import videoProcess from '../assets/video_process.jpeg';

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
            This project is an emotional advanced typography music video featuring the song <strong>"Hero"</strong> by Cash Cash. 
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

      {/* 4. SOLUTION */}
      <section className="challenge-section solution-section">
        <motion.div
          className="challenge-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="decor-triangle">▷</span>
          <h2>The Solution</h2>
        </motion.div>

        <motion.div
          className="challenge-cards solution-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              number: '01',
              title: `The "Aha!" Moment: Inspiration from TikTok`,
              text: `The creative direction for this project actually started with a bit of luck. I happened to see a TikTok clip of A Silent Voice, and the lyrics of 'Hero' by Cash Cash immediately started playing in my head. The connection between the song's energy and the film's emotional redemption arc was so perfect that I knew I had to bring them together.`
            },
            {
              number: '02',
              title: 'Mastering the Skill: Beyond the Classroom',
              text: `Even though Advanced Typography was a brand-new skill for me, I didn't let that stop me. I spent hours researching tutorials on YouTube and professional design websites to understand what this engine could really do. Most importantly, I constantly reached out to my instructor, Jett, during class to refine my techniques and ensure my work met professional standards.`
            },
            {
              number: '03',
              title: 'Sourcing the Visuals: Curating the Best Footage',
              text: `Since I wanted a high-quality 'Pro Result,' I didn't just grab the first video I saw. I scoured YouTube and specialized anime clip websites to find the cleanest, most impactful footage available. This allowed me to work with a solid visual foundation, which is crucial when you're overlaying complex motion graphics.`
            },
            {
              number: '04',
              title: 'From Reference to Storyboard: Learning to Move',
              text: `My storyboarding process was deeply tied to my technical research. While studying Advanced Typography examples, I paid close attention to how professional designers moved their cameras through 3D space. I took those camera-movement concepts and integrated them into my own storyboard, allowing me to develop a more dynamic and immersive experience for the final video.`
            }
          ].map((item) => (
            <motion.div key={item.number} className="challenge-card solution-card" variants={fadeUp}>
              <span className="challenge-number">{item.number}</span>
              <h4 className="challenge-title">{item.title}</h4>
              <p className="challenge-text">"{item.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. REFERENCES */}
      <section className="challenge-section">
        <motion.div
          className="challenge-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="decor-triangle">▷</span>
          <h2>References</h2>
        </motion.div>

        <motion.div
          className="process-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="process-item" variants={fadeUp}>
            <img src={storyboard} alt="Storyboard" />
            <span className="label-btn">Storyboard</span>
          </motion.div>
          <motion.div className="process-item" variants={fadeUp}>
            <img src={videoProcess} alt="Video Process" />
            <span className="label-btn">Video Process</span>
          </motion.div>
          {[
            { id: 'iHSZZqXtPXA', label: 'Reference 01' },
            { id: '44x_TrwABoY', label: 'Reference 02' },
          ].map((ref) => (
            <motion.div className="process-item" variants={fadeUp} key={ref.id}>
              <a href={`https://youtu.be/${ref.id}`} target="_blank" rel="noopener noreferrer" className="ref-thumb-link">
                <div className="ref-thumb-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${ref.id}/maxresdefault.jpg`}
                    alt={ref.label}
                  />
                  <div className="ref-play-icon">▶</div>
                </div>
              </a>
              <span className="label-btn">{ref.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default VideoProject;
