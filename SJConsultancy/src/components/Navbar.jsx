import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Phone,
  GraduationCap,
  ChevronDown,
  FileText,
  BarChart2,
  Briefcase,
  Layers,
  Calendar,
  User,
  LogIn,
  Search,
  MessageSquare,
  Folder,
  HelpCircle,
} from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
        <li>
          <Link to="/" onClick={closeMenu}>
            <Home />
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={closeMenu}>
            <BookOpen />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contactus" onClick={closeMenu}>
            <Phone />
            Contact Us
          </Link>
        </li>

        <li>
          <Link to="/bookings" onClick={closeMenu}>
            <Calendar />
            Bookings
          </Link>
        </li>

        <li>
          <Link to="/programs" onClick={closeMenu}>
            <GraduationCap />
            Programs
          </Link>
        </li>

        <li>
          <Link to="/testimonials" onClick={closeMenu}>
            <MessageSquare />
            Testimonials
          </Link>
        </li>

        <li>
          <Link to="/case-studies" onClick={closeMenu}>
            <Folder />
            Case Studies
          </Link>
        </li>

        <li>
          <Link to="/faqs" onClick={closeMenu}>
            <HelpCircle />
            FAQs
          </Link>
        </li>

        <li>
          <Link to="/auth" onClick={closeMenu}>
            <LogIn />
            Signup/Login
          </Link>
        </li>

        <li>
          <Link to="/profile" onClick={closeMenu}>
            <User />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;