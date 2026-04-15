import React from 'react';
import { motion } from 'framer-motion';
import About from './Home/About';
import CoreValues from '../components/CoreValues/CoreValues';

const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <About />
      <CoreValues />
    </motion.main>
  );
};

export default AboutPage;
