import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import DonatePage from './pages/DonatePage';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <main className="grid-container">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;