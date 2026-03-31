import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About'; // 1. THÊM DÒNG NÀY
import CoreValues from './components/CoreValues';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="portfolio-container">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            
            {/* 2. ĐƯA ABOUT VÀO ĐÂY NÈ HOÀNG! */}
            <About /> 
            
            <CoreValues />
            <Projects /> 
          </main>
        } />

        <Route path="/project" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;