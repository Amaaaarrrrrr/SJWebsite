import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFormSubmitted(true); // Show the notification
    setTimeout(() => setFormSubmitted(false), 3000); // Hide the notification after 3 seconds
  };

  return (
    <div>
      {/* Navigation Ribbon */}
      <nav className="bg-navyBlue py-4 text-white">
        <div className="container mx-auto px-4 md:px-12 flex justify-around">
          <Link to="/DataAnalysis" className="hover:text-teal">Data Analytics</Link>
          <Link to="/syib-training" className="hover:text-teal">SIYB Training</Link>
          <Link to="/other-services" className="hover:text-teal">Other Services</Link>
        </div>
      </nav>

      {/* Logo Section */}
      <header className="logo-section text-center text-white">
        <div className="overlay">
          <h1 className="text-4xl font-bold mb-4">BIZITEL SOLUTION</h1>
          <p className="text-lg mb-6 moving-text">WHAT WE DO... Empowering Growth, Innovation, and Success through Data-Driven Insights and Strategic Solutions.</p>
          {/* <p className="text-base mb-6 text-black">WHO WE ARE... BIZITEL SOLUTION is a premier research, data analytics, business development, and training firm specializing in SIYB and Monitoring & Evaluation (M&E). */}
            {/* Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making. */}
          {/* </p> */}
          <div className="cta-buttons">
            <a href="/bookings" className="cta-button">Book Us Now</a>
            <a href="/contactus" className="cta-button">Contact Us</a>
            <a href="/portfolio" className="cta-button">Portfolio</a>
          </div>
        </div>
      </header>

      {/* Emphasized Data Analytics Section */}
      <section className="data-analytics-section py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Data Analytics</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Unlock the power of your data with our comprehensive data analytics services. We transform raw data into actionable insights, helping you make informed decisions and drive business growth.
        </p>
        <div className="text-center">
          <Link to="/DataAnalysis" className="cta-button">Learn More</Link>
        </div>
        <div className="flex justify-center mt-8">
          <img src="/portfolio.jpg" alt="Data Analytics" className="rounded-lg shadow-md w-2/3" />
        </div>
      </section>

      {/* Emphasized SIYB Training Section */}
      <section className="syib-training-section py-12 px-4 md:px-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">SIYB Training</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Empower entrepreneurs and businesses with our SIYB (Start and Improve Your Business) training programs. Gain the skills and knowledge needed for sustainable growth and success.
        </p>
        <div className="text-center">
          <Link to="/syib-training" className="cta-button">Learn More</Link>
        </div>
        <div className="flex justify-center mt-8">
          <img src="/syib-training.jpg" alt="SIYB Training" className="rounded-lg shadow-md w-2/3" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-12 px-4 md:px-12">
        <div className="about-us-container">
          {/* Left Side: Gallery */}
          <div className="gallery">
            <img
              src="/about1.jpg"
              alt="About Us 1"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Side: About Us Information */}
          <div className="about-us-info">
            <h2 className="text-3xl font-bold text-navyBlue mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              BIZITEL SOLUTION is a premier Research, Data Analytics, business development, and training firm specializing in SIYB (Start and Improve Your Business) training and Monitoring & Evaluation (M&E). Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making. We are committed to driving impactful, data-informed decisions that foster long-term success.
            </p>
            <a
              href="/aboutus"
              className="discover-more-button inline-block bg-deepGreen text-white py-3 px-8 rounded-full hover:bg-teal transition"
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Taglines Section */}
      <section className="taglines-section py-12 px-4 md:px-12 bg-lightGray text-center">
        <h3 className="text-2xl font-bold text-navyBlue mb-6">Our Taglines</h3>
        <p className="text-lg text-gray-700 mb-4">Empowering Growth</p>
        <p className="text-lg text-gray-700 mb-4">Transforming Data into Actionable Insights</p>
        <p className="text-lg text-gray-700 mb-4">Training the Entrepreneurs of Tomorrow</p>
        <p className="text-lg text-gray-700 mb-4">Building a Sustainable Future through Research</p>
        <p className="text-lg text-gray-700 mb-4">Data-Driven Decisions, Real-World Impact</p>
      </section>

      {/* Services Section */}
      <section className="services-section py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Service 1 */}
          <div className="service-container flex flex-col md:flex-row items-center gap-6">
            <div className="service-image">
              <img
                src="/program1.jpeg"
                alt="Business Consultancy"
                className="rounded-image"
              />
            </div>
            <div className="service-text">
              <h3 className="text-2xl font-semibold text-navyBlue mb-4">Business Consultancy</h3>
              <p className="text-lg text-gray-700">
                Our Business Consultancy service helps organizations streamline their operations, improve efficiency, and develop strategies for sustainable growth. We work closely with businesses to identify challenges, analyze market trends, and create tailored solutions that drive success.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-container flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="service-image">
              <img
                src="/program2.jpeg"
                alt="Training and Workshops"
                className="rounded-image"
              />
            </div>
            <div className="service-text">
              <h3 className="text-2xl font-semibold text-navyBlue mb-4">Training and Workshops</h3>
              <p className="text-lg text-gray-700">
                We offer specialized training and workshops that focus on empowering your team with the skills and knowledge they need to thrive in today's dynamic business environment. Our hands-on, practical approach ensures that your employees are equipped with real-world solutions.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-container flex flex-col md:flex-row items-center gap-6">
            <div className="service-image">
              <img
                src="/program3.jpeg"
                alt="Monitoring and Evaluation"
                className="rounded-image"
              />
            </div>
            <div className="service-text">
              <h3 className="text-2xl font-semibold text-navyBlue mb-4">Monitoring and Evaluation</h3>
              <p className="text-lg text-gray-700">
                Our Monitoring and Evaluation (M&E) services are designed to help businesses and organizations track their progress, measure outcomes, and assess the effectiveness of their projects. We utilize robust M&E frameworks that provide actionable insights.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-container flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="service-image">
              <img
                src="/program4.jpeg"
                alt="Data Analytics Setup"
                className="rounded-image"
              />
            </div>
            <div className="service-text">
              <h3 className="text-2xl font-semibold text-navyBlue mb-4">Data Analytics Setup</h3>
              <p className="text-lg text-gray-700">
                Our Data Analytics Setup service enables organizations to collect, process, and analyze data effectively. We provide <br/>comprehensive data strategies that help you make informed decisions, predict trends, and gain a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us and Testimonials Section */}
      <section className="why-testimonials-section py-12 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Why Choose Us */}
          <div className="why-choose-us bg-deepBlue p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Why Choose Us</h2>
            <h3 className="text-xl font-semibold text-gold mb-4">Data-Driven & SIYB Expertise</h3>
            <p className="text-white mb-4">
              We combine data analytics with SIYB methodologies to empower businesses and entrepreneurs for sustainable growth.
            </p>
            <h3 className="text-xl font-semibold text-gold mb-4">Advanced Analytics Techniques</h3>
            <p className="text-white mb-4">
              We utilize cutting-edge tools and methodologies, including machine learning and predictive modeling, to uncover hidden patterns and forecast future trends.
            </p>
            <h3 className="text-xl font-semibold text-gold mb-4">Customized Data & Training Solutions</h3>
            <p className="text-white">
              We tailor both our data analytics and SIYB training to your specific business needs, ensuring relevant and impactful insights and skills.
            </p>
          </div>

          {/* Testimonials */}
          <div className="testimonials">
            <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">What Our Clients Say</h2>
            <p className="text-gray-700 italic mb-6">
              "BIZITEL SOLUTION transformed our business operations and helped us achieve sustainable growth."
            </p>
            <h4 className="text-navyBlue font-bold mb-6">— John Doe, CEO</h4>
            <p className="text-gray-700 italic mb-6">
              "The training workshops were incredibly insightful and practical. Our team is now more confident and skilled."
            </p>
            <h4 className="text-navyBlue font-bold mb-6">— Jane Smith, Manager</h4>
            <p className="text-gray-700 italic">
              "Their data analytics setup gave us the tools we needed to make informed decisions and stay ahead of the competition."
            </p>
            <h4 className="text-navyBlue font-bold">— Sarah Lee, Business Owner</h4>
          </div>
        </div>
      </section>

      {/* Contact Form Section
      <section className="contact-form-section py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Get in Touch</h2>
        <form onSubmit={handleFormSubmit} className="contact-form bg-white p-8 shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-semibold text-navyBlue mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-semibold text-navyBlue mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="text-lg font-semibold text-navyBlue mb-2">Message</label>
            <textarea
              id="message"
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-deepGreen text-white py-3 px-8 rounded-full hover:bg-teal transition"
            >
              Send Message
            </button>
          </div>
          {formSubmitted && (
            <div className="mt-4 text-green-500 text-center">
              Your message has been sent! We'll get back to you shortly.
            </div>
          )}
        </form>
      </section> */}

      {/* FAQ Section */}
      <section className="faq-section py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item mb-4">
            <div
              onClick={() => toggleFAQ(0)}
              className="faq-question cursor-pointer text-lg text-navyBlue font-semibold mb-2"
            >
              What services do you offer?
            </div>
            {activeFAQ === 0 && (
              <div className="faq-answer text-gray-700">
                We offer business consultancy, training and workshops, monitoring and evaluation, and data analytics setup.
              </div>
            )}
          </div>

          <div className="faq-item mb-4">
            <div
              onClick={() => toggleFAQ(1)}
              className="faq-question cursor-pointer text-lg text-navyBlue font-semibold mb-2"
            >
              How can I book a training session?
            </div>
            {activeFAQ === 1 && (
              <div className="faq-answer text-gray-700">
                You can book a training session through our website or by contacting us directly.
              </div>
            )}
          </div>

          <div className="faq-item mb-4">
            <div
              onClick={() => toggleFAQ(2)}
              className="faq-question cursor-pointer text-lg text-navyBlue font-semibold mb-2"
            >
              How long do the workshops last?
            </div>
            {activeFAQ === 2 && (
              <div className="faq-answer text-gray-700">
                Our workshops typically last between 1-2 days depending on the topic and level of detail.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
