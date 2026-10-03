import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home Kejani</span>
            </div>
            <p>Your gateway to exceptional living experiences. Luxury meets comfort.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">x</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/glamping">Glamping</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📍 123 Luxury Lane, Paradise City</p>
            <p>📞 +254 (702)-311838){'>'}</p>
            <p>✉️ hello@homekejani.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Home Kejani. All rights reserved.</p>
          <p className="pwa-badge">📱 Install our PWA for the best experience</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;