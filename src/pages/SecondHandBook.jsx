import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './SecondHandBook.css';
import Homescreen from '../assets/second-hand_book/Homescreen.png';
import Bookinfo from '../assets/second-hand_book/Bookinfo.png';
import Booklist from '../assets/second-hand_book/Booklist.png';
import Message from '../assets/second-hand_book/Message.png';
import Profilescreen from '../assets/second-hand_book/Profilescreen.png';
import Searchbooks from '../assets/second-hand_book/searchbooks.png';
import prototypeVideo from '../assets/video/bookapp_livedemo.mp4';

const SecondHandBook = () => {
  const rotationY = useMotionValue(0);
  const rotationSpring = useSpring(rotationY, { stiffness: 100, damping: 20 });

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

      {/* 5. WIREFRAME */}
      <motion.section
        className="shb-process"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="shb-centered-header">
          <h2>Wireframe</h2>
        </div>

        <div className="shb-carousel-viewport">
          <motion.div
            className="shb-carousel-container"
            style={{ rotateY: rotationSpring }}
            onPan={(event, info) => rotationY.set(rotationY.get() + info.delta.x * 0.3)}
          >
            {[
              { label: 'Login screen', src: Homescreen },
              { label: 'Home screen', src: Searchbooks },
              { label: 'Detail screen', src: Bookinfo },
              { label: 'Message screen', src: Message },
              { label: 'Profile screen', src: Profilescreen },
              { label: 'Favorite screen', src: Booklist },
            ].map((item, index, array) => {
              const angleStep = 360 / array.length;
              const theta = index * angleStep;

              return (
                <motion.div
                  className="shb-carousel-card"
                  key={item.label}
                  style={{ transform: `rotateY(${theta}deg) translateZ(220px)` }}
                >
                  <div className="shb-carousel-inner">
                    <img src={item.src} alt={item.label} draggable="false" />
                  </div>
                  <div className="shb-carousel-tag">{item.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

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
          <video className="shb-proto-video" controls style={{ width: '100%', maxHeight: 505 }}>
            <source src={prototypeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SecondHandBook;
