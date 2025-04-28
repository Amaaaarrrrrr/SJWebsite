import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  BookOpen,
  LogIn,
  MessageSquare,
  HelpCircle,
  FileText,
  Calendar,
  GraduationCap,
  Phone,
  Folder,
  User,
  ChevronDown,
} from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <nav className="navbar">
      <div className="logo"><img src="/logo.png" alt="Logo" className="logo-image" /></div>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {/* Main Links */}
        <li>
          <Link to="/">
            <Home />
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus">
            <BookOpen />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contactus">
            <Phone />
            Contact Us
          </Link>
        </li>
        {/* <li>
          <Link to="/auth">
            <LogIn />
            Signup/Login
          </Link>
        </li> */}

        {/* Services Dropdown */}
        <li className="dropdown">
          <button onClick={toggleServices} className="dropdown-toggle">
            <GraduationCap />
            Services <ChevronDown />
          </button>
          {servicesOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blogs">
                  <FileText />
                  Blogs and Events
                </Link>
              </li>
              <li>
                <Link to="/bookings">
                  <Calendar />
                  Bookings
                </Link>
              </li>
              <li>
                <Link to="/programs">
                  <GraduationCap />
                  Programs
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Resources Dropdown */}
        <li className="dropdown">
          <button onClick={toggleResources} className="dropdown-toggle">
            <Folder />
            Resources <ChevronDown />
          </button>
          {resourcesOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/testimonials">
                  <MessageSquare />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/case-studies">
                  <Folder />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/faqs">
                  <HelpCircle />
                  FAQs
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Profile Dropdown */}
        <li className="dropdown">
          <button onClick={toggleProfile} className="dropdown-toggle">
            <User />
            Profile <ChevronDown />
          </button>
          {profileOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile">
                  <User />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/logout">
                  <LogIn />
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;