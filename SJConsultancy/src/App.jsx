import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Home';
import Blogs from './components/Blogs';
import BlogDetails from './pages/BlogDetails';
import Register from './components/Register';
import UserProfile from './components/User';
import BookingPage from './pages/BookingPage';
import CaseStudies from './pages/CaseStudies';
import ContactUs from './pages/ContactUs';
import FAQPage from './pages/FAQPage';
import PaymentPage from './pages/PaymentPage';
import ProgramsPage from './pages/ProgramsPage';
import TestimonialPage from './pages/TestimonialPage';
import AuthPage from './pages/AuthPage';
import AboutUs from './components/AboutUs';
import AuthBar from './components/AuthBar';

// New service pages
import SiybTraining from './pages/SiybTraining';
import DataAnalytics from './pages/DataAnalytics';
import MonitoringEvaluation from './pages/MonitoringEvaluation';
import BusinessConsultancy from './pages/BusinessConsultancy';

function App() {
  return (
    <Router>
      <AuthBar />
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudies />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Service Routes */}
        <Route path="/services/siyb-training" element={<SiybTraining />} />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route path="/services/monitoring-evaluation" element={<MonitoringEvaluation />} />
        <Route path="/services/business-consultancy" element={<BusinessConsultancy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;