import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <section className="navbar-container">
                <div className="navbar">
                    <div className="navbar-company"><Link to="/">BTNASSOCIATION</Link></div>
                    <div className="navbar-menu">
                        <ul className="navbar-list">

                            <li className="navbar-item"><Link to="/">HOME</Link></li>
                            <li className="navbar-item"><Link to="/news">NEWS</Link></li>
                            <li className="navbar-item"><Link to="/events">EVENTS</Link></li>
                            <li className="navbar-item"><Link to="/about">ABOUT</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Navbar;