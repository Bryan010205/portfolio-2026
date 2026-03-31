import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 1. Import các thành phần hỗ trợ (Utilities)
import ScrollToTop from './components/ScrollToTop';

// 2. Import các thành phần Layout (Dùng chung)
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// 3. Import các Sections của trang Home (Lấy từ pages/Home)
import Hero from './pages/Home/Hero';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';

// 4. Import các Page và Component lẻ khác
import CoreValues from './components/CoreValues/CoreValues';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="portfolio-container">
      {/* Tự động cuộn lên đầu khi chuyển trang */}
      <ScrollToTop />
      
      {/* Thanh điều hướng luôn xuất hiện ở đầu */}
      <Navbar />

      <Routes>
        <Route path="/" element={
          <main>
            {/* Các section trên trang chủ sẽ xếp chồng lên nhau */}
            <Hero />
            <About /> 
            <CoreValues />
            <Projects /> 
          </main>
        } />

        {/* Trang chi tiết dự án */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      {/* Chân trang luôn xuất hiện ở cuối */}
      <Footer />
    </div>
  );
}

export default App;