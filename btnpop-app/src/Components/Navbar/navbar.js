import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Reset scroll lock and menu state when route changes
    useEffect(() => {
        document.body.style.overflow = '';
        setIsOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    return (
        <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
            <div className="navbar-company">
                <Link to="/">BTNASSOCIATION</Link>
            </div>
            
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link to="/" onClick={toggleMenu}>HOME</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/news" onClick={toggleMenu}>NEWS</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/events" onClick={toggleMenu}>EVENTS</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;