import './navbar.css';
import React from 'react';
import { useState } from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <img src="https://via.placeholder.com/150" alt="" className="navbar-logo" />
            <div className="navbar-company">BTNPop</div>
            <div className="navbar-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;