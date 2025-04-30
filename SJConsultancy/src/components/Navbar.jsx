import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Phone,
  GraduationCap,
  ChevronDown,
  FileText,
  Calendar,
  Folder,
  MessageSquare,
  HelpCircle,
  User,
  LogIn,
} from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // Function to close the menu

  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleResources = () => setResourcesOpen(!resourcesOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.jpeg" alt="Logo" className="logo-image" />
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

        {/* Services Dropdown */}
        <li className="dropdown">
          <button onClick={toggleServices} className="dropdown-toggle">
            <GraduationCap />
            Services <ChevronDown />
          </button>
          {servicesOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blogs" onClick={closeMenu}>
                  <FileText />
                  Blogs and Events
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
            </ul>
          )}
        </li>

        {/* Profile Dropdown
        <li className="dropdown">
          <button onClick={toggleProfile} className="dropdown-toggle">
            <User />
            Profile <ChevronDown />
          </button>
          {profileOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile" onClick={closeMenu}>
                  <User />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/logout" onClick={closeMenu}>
                  <LogIn />
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;