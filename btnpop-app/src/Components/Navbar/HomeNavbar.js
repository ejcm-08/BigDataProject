import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`home-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-company"><Link to="/">BTNASSOCIATION</Link></div>
      <div className="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/">HOME</Link></li>
          <li className="navbar-item"><Link to="/news">NEWS</Link></li>
          <li className="navbar-item"><Link to="/events">EVENTS</Link></li>
          <li className="navbar-item"><Link to="/donate">ABOUT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavbar;