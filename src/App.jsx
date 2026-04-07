import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// 1. Import các thành phần hỗ trợ (Utilities)
import ScrollToTop from './components/ScrollToTop';

// 2. Import các thành phần Layout (Dùng chung)
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// 3. Import các Sections của trang Home
import Hero from './pages/Home/Hero';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';

// 4. Import các Page và Component lẻ khác
import CoreValues from './components/CoreValues/CoreValues';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();

  return (
    <div className="portfolio-container">
      {/* Tự động cuộn lên đầu khi chuyển trang */}
      <ScrollToTop />
      
      {/* Thanh điều hướng luôn cố định */}
      <Navbar />

      {/* AnimatePresence giúp chuyển cảnh mượt mà */}
      <AnimatePresence mode="wait">
        {/* Quan trọng: location.pathname giúp React Router biết chính xác bạn đang ở đâu */}
        <Routes location={location} key={location.pathname}>
          
          {/* TRANG CHỦ: Chứa toàn bộ Hero, About, CoreValues, Projects */}
          <Route path="/" element={
            <main className="home-page">
              <Hero />
              <About /> 
              <CoreValues />
              <Projects /> 
            </main>
          } />

          {/* TRANG CHI TIẾT DỰ ÁN */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Dòng này để "chống cháy": Nếu URL sai, nó tự quay về trang chủ */}
          <Route path="*" element={
            <main>
              <Hero />
              <About /> 
              <CoreValues />
              <Projects /> 
            </main>
          } />
          
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;