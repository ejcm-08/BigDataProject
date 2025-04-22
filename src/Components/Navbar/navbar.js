import './navbar.css';
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <img src="https://via.placeholder.com/40" alt="Logo" className="navbar-logo" />
            <div className="navbar-company">BTNASSOCIATION</div>
            <div className="navbar-menu">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="#about">News</a></li>
                    <li className="navbar-item"><a href="#services">Events</a></li>
                    <li className="navbar-item"><a href="#contact">Donate</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
