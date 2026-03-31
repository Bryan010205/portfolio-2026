import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Thêm dòng này
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <Routes>
        {/* TRANG CHỦ: Phải đưa Projects vào trong này thì nó mới hiện ở trang chủ */}
        <Route path="/" element={
          <main>
            <Hero />
            <CoreValues />
            
            {/* THÊM DÒNG NÀY VÀO ĐÂY NÈ HOÀNG! */}
            <Projects /> 
          </main>
        } />

        {/* TRANG CHI TIẾT DỰ ÁN */}
        <Route path="/project" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;