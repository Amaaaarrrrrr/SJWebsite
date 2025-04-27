// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">S.J Consultancy</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/blogs">Blogs and Insights</a></li>
        <li><a href="/bookings">Bookings</a></li>
        <li><a href="/programs">Programs</a></li>
        <li><a href="/contactus">Contact Us</a></li>
        <li><a href="/testimonials">Testimonials</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/auth">Signup/Login</a></li>
        <li><a href="/profile">👤 Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;