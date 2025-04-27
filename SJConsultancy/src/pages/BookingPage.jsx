import React from 'react';
import Booking from '../components/Booking';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  return (
    <section className="booking-page-section bg-lightGray py-16 px-6 min-h-screen">
      <div className="booking-page-container max-w-6xl mx-auto">
        <div className="booking-page-header text-center mb-12">
          <h1 className="booking-page-title text-4xl font-bold text-navyBlue">Schedule Your Consultation or Program</h1>
          <p className="booking-page-subtitle mt-4 text-gray-600 text-lg">
            Ready to grow your business, strengthen your team, or get data-driven results? Fill out the form below and let's connect!
          </p>
        </div>

        <Booking />

        <div className="booking-page-back-link-container text-center mt-10">
          <Link to="/" className="booking-page-back-link text-deepGreen hover:text-teal font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;