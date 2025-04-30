import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    date: '',
    time: '', // Added time field
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [timeError, setTimeError] = useState(''); // Added time error state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === 'time') {
      setTimeError(''); // Clear time error when time changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate time
    const selectedTime = parseInt(formData.time.split(':')[0]); // Extract hour
    if (selectedTime < 8 || selectedTime > 18) {
      setTimeError('Please select a time between 8 AM and 6 PM.');
      return;
    }

    setSuccessMessage('Thank you! Your booking has been received. You will be redirected to the payments page shortly.');
    setFormData({ name: '', email: '', service: '', message: '', date: '', time: '' }); // Clear time as well

    // Clear the success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);

    // After booking, navigate to the payment page
    setTimeout(() => {
      navigate('/payments');
    }, 2000);
  };

  return (
    <section className="booking-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="booking-container max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="booking-title text-3xl font-bold text-navyBlue mb-6 text-center">Book a Consultation / Program</h1>

        {/* Success Message */}
        {successMessage && (
          <div className="booking-success-message bg-deepGreen text-white py-3 px-6 rounded-lg mb-6 text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="booking-form-group mb-4">
            <label className="booking-form-label block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="booking-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="booking-form-group mb-4">
            <label className="booking-form-label block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="booking-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="booking-form-group mb-4">
            <label className="booking-form-label block text-gray-700 mb-2">Select Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="booking-form-select w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepGreen"
              required
            >
              <option value="">-- Choose a Service --</option>
              <option value="Business Consultancy">Business Consultancy</option>
              <option value="Training and Workshops">Training and Workshops</option>
              <option value="Monitoring & Evaluation Support">Monitoring & Evaluation Support</option>
              <option value="Data Analytics Setup">Data Analytics Setup</option>
            </select>
          </div>

          <div className="booking-form-group mb-4">
            <label className="booking-form-label block text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="booking-form-textarea w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-deepGreen"
              placeholder="Tell us more about your needs..."
            ></textarea>
          </div>

          <div className="booking-form-group mb-6">
            <label className="booking-form-label block text-gray-700 mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="booking-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          {/* Time Selection */}
          <div className="booking-form-group mb-6">
            <label className="booking-form-label block text-gray-700 mb-2">Preferred Time (8 AM - 6 PM)</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="booking-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
            {timeError && <p className="text-red-500 text-sm mt-1">{timeError}</p>}
          </div>

          <button
            type="submit"
            className="booking-submit-button bg-gold text-white py-3 px-6 rounded-full hover:bg-yellow-400 transition w-full"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;