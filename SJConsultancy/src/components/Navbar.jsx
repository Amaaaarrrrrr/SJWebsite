import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing (instead of <a> tags)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src="/logo.png" alt="Logo" className="logo-image" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/blogs">Blogs and Insights</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/auth">Signup/Login</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
