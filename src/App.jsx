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
import Projects from './pages/Home/Projects';

// 4. Import các Page và Component lẻ khác
import AboutPage from './pages/AboutPage';
import ProjectDetail from './pages/ProjectDetail';
// 🔥 QUAN TRỌNG: Import trang Creative Portrait mới của bạn
import CreativePortrait from './pages/CreativePortrait';
import VideoProject from './pages/VideoProject';
import SecondHandBook from './pages/SecondHandBook';

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

      {/* AnimatePresence giúp chuyển cảnh mượt mà */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          {/* TRANG CHỦ */}
          <Route path="/" element={
            <main className="home-page">
              <Hero />
              <Projects /> 
            </main>
          } />

          {/* TRANG ABOUT */}
          <Route path="/about" element={<AboutPage />} />

          {/* 🔥 TRANG DỰ ÁN CREATIVE PORTRAIT (Dòng này giúp link hoạt động) */}
          <Route path="/project/creative-portrait" element={<CreativePortrait />} />

          {/* TRANG AMV TYPOGRAPHY ANIME VIDEO PROJECT */}
          <Route path="/project/amv-typography" element={<VideoProject />} />

          {/* TRANG SECOND HAND TEXTBOOK APP */}
          <Route path="/project/student-book" element={<SecondHandBook />} />

          {/* TRANG CHI TIẾT DỰ ÁN CHUNG (Cho các project dùng chung template) */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Dòng này để "chống cháy": Nếu URL sai, nó tự quay về trang chủ */}
          <Route path="*" element={
            <main>
              <Hero />
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