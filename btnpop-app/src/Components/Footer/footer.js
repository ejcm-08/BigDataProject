import './footer.css';
import React from 'react';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>&copy; 2025 BTNPop. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;