import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Projects from './components/Projects'; 

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Projects /> 
    </div>
  );
}

export default App;