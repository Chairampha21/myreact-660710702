import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
//import Footer from './components/Footer';

// Import Pages
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
// import BookDetailPage from './pages/BookDetailPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './components/NotFound';

// Import CSS
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      
      {/* Main Content - เปลี่ยนตาม route */}
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />
          
          {/* หน้ารายการหนังสือทั้งหมด */}
          <Route path="/books" element={<BookListPage />} />
          
          {/* หน้ารายละเอียดหนังสือ - ใช้ dynamic parameter */}
          {/* <Route path="/books/:bookId" element={<BookDetailPage />} /> */}
          
          {/* หน้าหมวดหมู่ - ใช้ dynamic parameter */}
          {<Route path="/category/:categoryId" element={<CategoryPage />} /> }
          
          {/* หน้าเกี่ยวกับเรา */}
          {<Route path="/about" element={<AboutPage />} />}
          
          {/* หน้าติดต่อ */}
          {<Route path="/contact" element={<ContactPage />} />}
          
          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer - แสดงในทุกหน้า */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;