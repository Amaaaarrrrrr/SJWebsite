import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, User, LogIn, MessageSquare, HelpCircle, FileText, Calendar, GraduationCap, Phone, Folder } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => { setMenuOpen(!menuOpen); };

  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo.png" alt="Logo" className="logo-image" /></div>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/"><Home />Home</Link></li>
        <li><Link to="/aboutus"><BookOpen />About Us</Link></li>
        <li><Link to="/blogs"><FileText />Blogs and Insights</Link></li>
        <li><Link to="/bookings"><Calendar />Bookings</Link></li>
        <li><Link to="/programs"><GraduationCap />Programs</Link></li>
        <li><Link to="/contactus"><Phone />Contact Us</Link></li>
        <li><Link to="/testimonials"><MessageSquare />Testimonials</Link></li>
        <li><Link to="/case-studies"><Folder />Case Studies</Link></li>
        <li><Link to="/faqs"><HelpCircle />FAQs</Link></li>
        {/* <li><Link to="/auth"><LogIn />Signup/Login</Link></li> */}
        {/* <li><Link to="/profile"><User />Profile</Link></li> */}
        {/* <li><Link to="/DataAnalysis"><FileText />Data Analysis</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
