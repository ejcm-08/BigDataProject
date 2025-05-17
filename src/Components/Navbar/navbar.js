import './navbar.css';  
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-company">BTNASSOCIATION</div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/">HOME</Link></li>
                    <li className="navbar-item"><Link to="/news">NEWS</Link></li>
                    <li className="navbar-item"><Link to="/events">EVENTS</Link></li>
                    <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;