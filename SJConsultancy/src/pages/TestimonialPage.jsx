import React from 'react';
import Testimonial from '../components/Testimonial'; // Import the Testimonial component

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <header className="testimonial-page-header bg-deepGreen text-white py-12">
        <h1 className="testimonial-page-title text-4xl font-bold text-center">Client Testimonials</h1>
        <p className="testimonial-page-subtitle text-lg text-center mt-4">
          Hear directly from our clients about the impact of our services.
        </p>
      </header>

      {/* Testimonial Section */}
      <Testimonial />
    </div>
  );
};

export default TestimonialPage;