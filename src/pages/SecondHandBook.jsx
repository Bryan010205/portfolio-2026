import React from 'react';
import { motion } from 'framer-motion';
import './SecondHandBook.css';
import homescreen from '../assets/homescreen.png';
import loginscreen from '../assets/loginscreen.png';
import detailscreen from '../assets/detailscreen.png';

const SecondHandBook = () => {
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
      className="shb-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 1. HERO: Presentation Slide */}
      <section className="shb-hero">
        <motion.div
          className="shb-slide-wrapper"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="shb-slide">
            <div className="shb-slide-decor-lines" aria-hidden="true">
              <div className="shb-circle-ring shb-ring-1" />
              <div className="shb-circle-ring shb-ring-2" />
            </div>
            <div className="shb-slide-code">MOXA-2540</div>
            <div className="shb-slide-body">
              <div className="shb-book-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="6" width="32" height="36" rx="3" stroke="#1a56db" strokeWidth="2.5" fill="none"/>
                  <line x1="16" y1="6" x2="16" y2="42" stroke="#1a56db" strokeWidth="2.5"/>
                  <line x1="20" y1="18" x2="34" y2="18" stroke="#1a56db" strokeWidth="1.8"/>
                  <line x1="20" y1="24" x2="34" y2="24" stroke="#1a56db" strokeWidth="1.8"/>
                  <line x1="20" y1="30" x2="28" y2="30" stroke="#1a56db" strokeWidth="1.8"/>
                </svg>
              </div>
              <h1 className="shb-slide-title">
                <span className="shb-slide-title-accent">Second-hand</span>
                <br />Textbook app
              </h1>
              <div className="shb-slide-presented">Presented by Bryan Vo</div>
            </div>
            <div className="shb-slide-dots" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => <span key={i} className="shb-dot" />)}
            </div>
          </div>
          <div className="shb-decor-zigzag" aria-hidden="true">〰</div>
          <div className="shb-decor-circle" aria-hidden="true">○</div>
        </motion.div>
      </section>

      {/* 2. OVERVIEW & SKILLS */}
      <motion.section
        className="shb-info-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="shb-overview" variants={fadeUp}>
          <div className="shb-section-header">
            <span className="shb-decor-tri">▷</span>
            <h2>Overview</h2>
          </div>
          <p>
            This project is a second-hand book app designed for students in demanding fields like business
            and medicine. In Canada, especially Vancouver, textbooks are expensive and financially
            challenging for many students. The app allows students to buy, sell, borrow, or exchange books
            with each other, helping reduce costs and make educational resources more accessible.
          </p>
        </motion.div>

        <motion.div className="shb-skills" variants={fadeUp}>
          <div className="shb-section-header shb-section-header--right">
            <h2>Skills</h2>
            <span className="shb-plus">+</span>
          </div>
          <ul className="shb-skills-list">
            <li>Figma</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* 3. PROBLEM */}
      <motion.section
        className="shb-problem"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="shb-centered-header">
          <h2>Problem</h2>
        </div>
        <p>
          At the beginning, I did not have the data on target audience (who need to borrow, buy or sell
          the book). Not only for the user data, how the app should look like also be a problem. When I
          was creating the wireframe, userflow took a long time to decide how it should work.
        </p>
      </motion.section>

      {/* 4. SOLUTION */}
      <motion.section
        className="shb-solution"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="shb-centered-header shb-centered-header--left">
          <span className="shb-decor-tri">▷</span>
          <h2>Solution</h2>
        </div>
        <div className="shb-solution-box">
          <button className="shb-close-btn" aria-label="close">✕</button>
          <p>
            To collect the user data, I created a google form and gave it to my classmates and friends.
            After I got the data, I searched some book apps layout to know about the concept as well as
            the functions and features. After that, I asked to get opinion from instructors for decision
            of user flow and overall of the app.
          </p>
        </div>
      </motion.section>

      {/* 5. PROCESS */}
      <motion.section
        className="shb-process"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="shb-centered-header">
          <h2>Process</h2>
        </div>

        <motion.div className="shb-wireframes" variants={staggerContainer}>
          {[
            { label: 'Home / Dashboard', src: homescreen },
            { label: 'Book Details Page', src: detailscreen },
            { label: 'Splash / Login Screen', src: loginscreen },
          ].map((item) => (
            <motion.div className="shb-wireframe-item" key={item.label} variants={fadeUp}>
              {item.src ? (
                <img src={item.src} alt={item.label} />
              ) : (
                <div className="shb-wireframe-placeholder" aria-label={item.label} />
              )}
              <span className="shb-label-btn">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </motion.section>

      {/* 6. PROTOTYPE */}
      <motion.section
        className="shb-prototype"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="shb-centered-header">
          <span className="shb-decor-tri">▷</span>
          <h2>Prototype</h2>
        </div>
        <div className="shb-proto-wrapper">
          <iframe
            title="Second-hand Textbook App Prototype"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKyMeoiuoh0yn3SfnkelJPY%2FUX--UI-1%3Fnode-id%3D3-6710%26viewport%3D176%252C178%252C0.28%26t%3DMqsv0XFw3fVnhG8q-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3%253A6710%26page-id%3D0%253A1"
            allowFullScreen
          />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SecondHandBook;
