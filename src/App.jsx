import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// 1. Import các thành phần hỗ trợ
import ScrollToTop from './components/ScrollToTop';

// 2. Import các thành phần Layout
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

  // 🪄 PHÉP THUẬT CƯỠNG ÉP: Đảm bảo luôn về đầu trang khi load lần đầu
  useEffect(() => {
    // Timeout nhẹ 100ms để chờ DOM load xong rồi mới cuộn
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Component này sẽ xử lý cuộn khi chuyển giữa các Route */}
      <ScrollToTop />
      
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              /* Dùng React.Fragment hoặc thẻ div để bọc các section trang chủ */
              <div className="home-wrapper">
                <section id="hero"><Hero /></section>
                <section id="about"><About /></section>
                <section id="values"><CoreValues /></section>
                <section id="projects"><Projects /></section>
              </div>
            } 
          />

          {/* Trang chi tiết dự án */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          
          {/* 🪄 DÒNG CỨU CÁNH: Nếu gõ bậy bạ URL thì tự về trang chủ */}
          <Route path="*" element={<Hero />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;