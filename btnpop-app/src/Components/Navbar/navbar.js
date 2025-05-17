import './navbar.css';  
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-company">BTNASSOCIATION</div>
            <div className="navbar-menu">
                <ul className="navbar-list">
<<<<<<< Updated upstream
                    <li className="navbar-item"><Link to="/">Home</Link></li>
                    <li className="navbar-item"><Link to="/news">News</Link></li>
                    <li className="navbar-item"><Link to="/events">Events</Link></li>
                    <li className="navbar-item"><Link to="/donate">Donate</Link></li>
=======
                    <li className="navbar-item"><Link to="/">HOME</Link></li>
                    <li className="navbar-item"><Link to="/news">NEWS</Link></li>
                    <li className="navbar-item"><Link to="/events">EVENTS</Link></li>
                    <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
>>>>>>> Stashed changes
                </ul>
            </div>
        </div>
    );
}

export default Navbar;