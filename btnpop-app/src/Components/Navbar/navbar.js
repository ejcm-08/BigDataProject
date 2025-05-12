import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-company"><Link to="/">BTNASSOCIATION</Link></div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/">HOME</Link></li>
                    <li className="navbar-item"><Link to="/news">NEWS</Link></li>
                    <li className="navbar-item"><Link to="/events">EVENTS</Link></li>
                    <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;