import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Thêm useLocation
import { AnimatePresence } from 'framer-motion'; // Thêm AnimatePresence
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
  // 🪄 Lấy vị trí URL hiện tại để làm "chìa khóa" cho chuyển cảnh
  const location = useLocation();

  return (
    <div className="portfolio-container">
      {/* Tự động cuộn lên đầu khi chuyển trang */}
      <ScrollToTop />
      
      {/* Thanh điều hướng luôn cố định */}
      <Navbar />

      {/* 🪄 PHÉP THUẬT: AnimatePresence bọc ngoài Routes 🪄 */}
      {/* mode="wait" giúp trang cũ biến mất xong mới hiện trang mới, tránh bị chồng chéo */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <main>
              <Hero />
              <About /> 
              <CoreValues />
              <Projects /> 
            </main>
          } />

          {/* Trang chi tiết dự án */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;