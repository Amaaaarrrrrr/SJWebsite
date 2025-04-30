import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    inquiryType: '', // Added inquiryType to the form data
    firstName: '',
    lastName: '',
    email: '',
    county: '',
    company: '',
    jobTitle: '',
    message: '',
    privacyAcknowledgement: false,
    otherInquiryDetails: '', // Added for "Other" inquiry details
  });

  const [submissionError, setSubmissionError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear any previous submission error when the user changes the form
    setSubmissionError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.privacyAcknowledgement) {
      setSubmissionError('Please acknowledge the privacy statement to proceed.');
      return;
    }

    // Handle form submission logic here (e.g., send data to an API)
    console.log(formData);
    // Reset the form after successful submission (optional)
    setFormData({
      inquiryType: '',
      firstName: '',
      lastName: '',
      email: '',
      county: '',
      company: '',
      jobTitle: '',
      message: '',
      privacyAcknowledgement: false,
      otherInquiryDetails: '', // Clear the "Other" details as well
    });
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-navyBlue mb-8">Reach Us Now</h2>
      <p className="text-lg text-gray-700 text-center mb-6">
        Get in touch with one of our professionals, specialist groups, or offices.
        Mandatory fields are marked with an asterisk (*).
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="inquiryType" className="block text-gray-700 text-sm font-bold mb-2">
            Inquiry type*
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          >
            <option value="">Select Inquiry Type</option>
            {/* <option value="general">General Submission</option> */}
            <option value="specific">SYIB Training</option>
            <option value="data-analysis">Data Analysis</option>
            <option value="consultation">Consultation</option>
            <option value="partnership">Partnership</option>
            <option value="feedback">Feedback</option>
            <option value="M&E Report">M&E Report</option>
            <option value="other">Other</option>
            {/* Add more inquiry types as needed */}
          </select>
        </div>

        {/* Conditionally render the "Other" details input */}
        {formData.inquiryType === 'other' && (
          <div className="mb-4">
            <label htmlFor="otherInquiryDetails" className="block text-gray-700 text-sm font-bold mb-2">
              Please specify your inquiry:
            </label>
            <input
              type="text"
              id="otherInquiryDetails"
              name="otherInquiryDetails"
              placeholder="Enter details here"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
              required // You can make this required if needed
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="county" className="block text-gray-700 text-sm font-bold mb-2">
            County*
          </label>
          <select
            id="county"
            name="county"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          >
           <option value="">--Select County--</option>
  <option value="Baringo">Baringo</option>
  <option value="Bomet">Bomet</option>
  <option value="Bungoma">Bungoma</option>
  <option value="Busia">Busia</option>
  <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
  <option value="Embu">Embu</option>
  <option value="Garissa">Garissa</option>
  <option value="Homa Bay">Homa Bay</option>
  <option value="Isiolo">Isiolo</option>
  <option value="Kajiado">Kajiado</option>
  <option value="Kakamega">Kakamega</option>
  <option value="Kericho">Kericho</option>
  <option value="Kiambu">Kiambu</option>
  <option value="Kilifi">Kilifi</option>
  <option value="Kirinyaga">Kirinyaga</option>
  <option value="Kisii">Kisii</option>
  <option value="Kisumu">Kisumu</option>
  <option value="Kitui">Kitui</option>
  <option value="Kwale">Kwale</option>
  <option value="Laikipia">Laikipia</option>
  <option value="Lamu">Lamu</option>
  <option value="Machakos">Machakos</option>
  <option value="Makueni">Makueni</option>
  <option value="Mandera">Mandera</option>
  <option value="Marsabit">Marsabit</option>
  <option value="Meru">Meru</option>
  <option value="Migori">Migori</option>
  <option value="Mombasa">Mombasa</option>
  <option value="Murang'a">Murang'a</option>
  <option value="Nairobi">Nairobi</option>
  <option value="Nakuru">Nakuru</option>
  <option value="Nandi">Nandi</option>
  <option value="Narok">Narok</option>
  <option value="Nyamira">Nyamira</option>
  <option value="Nyandarua">Nyandarua</option>
  <option value="Nyeri">Nyeri</option>
  <option value="Samburu">Samburu</option>
  <option value="Siaya">Siaya</option>
  <option value="Taita-Taveta">Taita-Taveta</option>
  <option value="Tana River">Tana River</option>
  <option value="Tharaka-Nithi">Tharaka-Nithi</option>
  <option value="Trans Nzoia">Trans Nzoia</option>
  <option value="Turkana">Turkana</option>
  <option value="Uasin Gishu">Uasin Gishu</option>
  <option value="Vihiga">Vihiga</option>
  <option value="Wajir">Wajir</option>
  <option value="West Pokot">West Pokot</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
            Company / Organization*
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company / Organization"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Job title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Job title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            maxLength="2500"
            onChange={handleChange}
            required
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            {formData.message.length}/2500
          </p>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="privacyAcknowledgement"
              className="form-checkbox h-5 w-5 text-deepGreen"
              checked={formData.privacyAcknowledgement}
              onChange={handleChange}
              required
            />
            <span className="ml-2 text-gray-700 text-sm">
              Acknowledgement for the online privacy statement*
            </span>
          </label>
        </div>

        {submissionError && (
          <div className="text-red-500 text-sm mb-4" role="alert">
            {submissionError}
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-deepGreen hover:bg-teal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;