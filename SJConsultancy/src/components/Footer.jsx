import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-8">
      <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About Us */}
        <div className="footer-item">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p>
            BIZITEL SOLUTION is a premier research, data analytics, business development, and training firm specializing in SIYB (Start and Improve Your Business) and Monitoring & Evaluation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-item">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/data-analytics">Data Analytics</Link></li>
            <li><Link to="/siyb">SIYB Training</Link></li>
            <li><Link to="/projects">Projects / Portfolio</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/resources">Resources / Blog</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-item">
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="space-y-1">
            <li>020 Business Street</li>
            <li>Nairobi, Kenya</li>
            <li>Phone: (0) (207) 840-082</li>
            <li>Email: info@bizitelsolution.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-item">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded text-black w-full mb-2"
              aria-label="Email"
            />
            <button
              type="submit"
              className="bg-white text-green-900 px-4 py-2 rounded font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 border-t border-white pt-4">
        <p>&copy; {new Date().getFullYear()} BIZITEL SOLUTION. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
