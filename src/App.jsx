import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Thêm dòng này
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      <Routes>
        {/* TRANG CHỦ: Gom Hero và CoreValues lại */}
        <Route path="/" element={
          <main>
            <Hero />
            <CoreValues />
            {/* Bạn có thể thêm About hay Projects component ở đây nếu muốn */}
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