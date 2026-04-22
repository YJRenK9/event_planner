import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
    return (
        <footer className="footer"> {/* Footer container */}
            <p>&copy; 2024 Event Planner. All rights reserved.</p> {/* Copyright notice */}
            {/* <div className="social-media"> 
                <a href="https://www.facebook.com/eventplanner" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com/eventplanner" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/eventplanner" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div> */}
        </footer>
    );
}

export default Footer;