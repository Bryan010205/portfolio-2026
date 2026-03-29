import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Projects from './components/Projects';
import Footer from './components/Footer'; // Thêm dòng này

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Projects />
      <Footer /> {/* Thêm dòng này */}
    </div>
  );
}

export default App;