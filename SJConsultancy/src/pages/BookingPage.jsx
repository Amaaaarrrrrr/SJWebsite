// src/pages/booking.jsx
import React from 'react';
import Booking from '../components/Booking';
import { Link } from 'react-router-dom';

const BookingPage = () => {
  return (
    <section className="bg-lightGray py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navyBlue">Schedule Your Consultation</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Ready to grow your business, strengthen your team, or get data-driven results? Fill out the form below and let's connect!
          </p>
        </div>

        <Booking />

        <div className="text-center mt-10">
          <Link to="/" className="text-deepGreen hover:text-teal font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
