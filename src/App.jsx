import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// SỬA Ở ĐÂY: Vì file của bạn đang nằm trong thư mục "pages" 
// nên mình phải import từ "./pages/ProjectDetail" mới đúng nha!
import ProjectDetail from './pages/ProjectDetail';

// Tạm thời ẩn các phần của trang chủ để tập trung làm trang chi tiết dự án
// import Hero from './components/Hero';
// import About from './components/About';
// import CoreValues from './components/CoreValues';
// import Projects from './components/Projects';

function App() {
  return (
    <div className="portfolio-container">
      {/* Navbar luôn xuất hiện ở đầu trang */}
      <Navbar />

      <main>
        {/* Component hiển thị nội dung chi tiết dự án coffee packaging */}
        <ProjectDetail />
      </main>

      {/* Footer luôn xuất hiện ở cuối trang */}
      <Footer />
    </div>
  );
}

export default App;