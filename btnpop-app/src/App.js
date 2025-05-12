import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import Navbar from './Components/Navbar/navbar';
import HomeNavbar from './Components/Navbar/HomeNavbar';
import Footer from './Components/Footer/footer';
import './App.css';

function NavigationWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage ? <HomeNavbar /> : <Navbar />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className='app'>
        <NavigationWrapper />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;