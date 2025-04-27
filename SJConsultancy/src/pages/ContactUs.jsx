import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setIsSubmitted(true);
        setIsError(false);
      } else {
        setIsError(true);
      }
    }, 1000);
  };

  return (
    <section className="contact-us-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="contact-us-container max-w-4xl mx-auto">
        <h1 className="contact-us-title text-4xl font-bold text-center text-navyBlue mb-12">
          Contact Us
        </h1>

        {isSubmitted && !isError && (
          <div className="contact-us-success-message bg-green-200 text-green-800 p-4 rounded-lg mb-6">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}

        {isError && (
          <div className="contact-us-error-message bg-red-200 text-red-800 p-4 rounded-lg mb-6">
            Oops! Something went wrong. Please fill out all fields.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="contact-us-form bg-white p-8 rounded-2xl shadow-md"
        >
          <div className="contact-us-form-group mb-4">
            <label
              htmlFor="name"
              className="contact-us-form-label block text-lg font-medium text-navyBlue mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact-us-form-input w-full px-4 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>

          <div className="contact-us-form-group mb-4">
            <label
              htmlFor="email"
              className="contact-us-form-label block text-lg font-medium text-navyBlue mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-us-form-input w-full px-4 py-2 border rounded-lg shadow-sm"
              required
            />
          </div>

          <div className="contact-us-form-group mb-6">
            <label
              htmlFor="message"
              className="contact-us-form-label block text-lg font-medium text-navyBlue mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-us-form-textarea w-full px-4 py-2 border rounded-lg shadow-sm"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-us-submit-button w-full bg-deepGreen text-white py-3 rounded-lg hover:bg-teal transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;