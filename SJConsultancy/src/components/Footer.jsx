import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        {/* About Us */}
        <div className="footer-item">
          <h3>About Us</h3>
          <p>
            SJ Consultancy provides expert training and consulting services to help businesses grow and succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-item">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/programmes">Programmes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-item">
          <h3>Contact Info</h3>
          <ul>
            <li>123 Business Street</li>
            <li>Nairobi, Kenya</li>
            <li>Phone: +254 123 456 7890</li>
            <li>Email: info@sjconsultancy.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-item">
          <h3>Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} SJ Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;