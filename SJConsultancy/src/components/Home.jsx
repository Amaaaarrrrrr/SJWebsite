import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Empowering Innovation and Technology",
    "Your Partner in Business Growth",
    "Transforming Ideas into Reality",
    "Driving Success Through Data",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prevTagline) => (prevTagline + 1) % taglines.length);
    }, 3000); // Change tagline every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [taglines.length]);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Logo Section */}
      <header className="logo-section text-center text-white">
        <div className="overlay">
          <h1 className="text-4xl font-bold mb-4">BIZITEL SOLUTION</h1>
          <p className="text-lg mb-6">{taglines[currentTagline]}</p>
          <div className="cta-buttons">
            <a href="/bookings" className="cta-button">
              Book Us Now
            </a>
            <a href="/contactus" className="cta-button">
              Contact Us
            </a>
          </div>
          <div class="scroll-indicator">
            <span></span>
          </div>
        </div>
      </header>

      {/* Emphasized Data Analytics Section */}
      <section className="DataAnalysis-section py-12 px-4 md:px-12">
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
      <section className="SIYBTraining-section py-12 px-4 md:px-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">SIYB Training</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Empower entrepreneurs and businesses with our SIYB (Start and Improve Your Business) training programs. Gain the skills and knowledge needed for sustainable growth and success.
        </p>
        <div className="text-center">
          <Link to="/SIYBTraining" className="cta-button">Learn More</Link>
        </div>
        <div className="flex justify-center mt-8">
          <img src="/SIYBTraining.jpg" alt="SIYB Training" className="rounded-lg shadow-md w-2/3" />
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
            BIZITEL  SOLUTION is a premier  Research, Data Analytics, business development, and training firm specializing in SIYB (Start and Improve Your Business) training and Monitoring & Evaluation (M&E) . Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making.
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
    <div className="service-container flex flex-col items-start gap-6">
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
    <div className="service-container flex flex-col items-start gap-6">
      <div className="service-text">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">Monitoring and Evaluation</h3>
        <p className="text-lg text-gray-700">
          Our Monitoring and Evaluation (M&E) services are designed to help businesses and organizations track their progress, measure outcomes, and assess the effectiveness of their projects. We utilize robust M&E frameworks that provide actionable insights.
        </p>
      </div>
    </div>

    {/* Service 4 */}
    <div className="service-container flex flex-col items-start gap-6">
      <div className="service-text">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">Data Analytics Setup</h3>
        <p className="text-lg text-gray-700">
          Our Data Analytics Setup service enables organizations to collect, process, and analyze data effectively. We provide comprehensive data strategies that help you make informed decisions, predict trends, and gain a competitive edge.
        </p>
      </div>
    </div>
     {/* Service 5 */}
    <div className="service-container flex flex-col items-start gap-6">
      <div className="service-text">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">Research</h3>
        <p className="text-lg text-gray-700">
          Our Research services provide in-depth insights and analysis to help businesses make data-driven decisions. We specialize in market research, feasibility studies, and industry trend analysis to support your strategic goals.
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


{/* Case Studies Section */}
<section className="case-studies-section py-12 px-4 md:px-12">
  <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Case Studies</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Case Study 1 */}
    <div className="case-study bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <img src="/case1.jpeg" alt="Case Study 1" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-navyBlue mb-2">Improving Operational Efficiency</h3>
      <p className="text-gray-700 mb-4">
        Learn how we helped a manufacturing company streamline their operations and reduce costs.
      </p>
      <a href="/case-studies/1" className="text-deepGreen font-bold hover:underline">
        Read More
      </a>
    </div>

    {/* Case Study 2 */}
    <div className="case-study bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <img src="/case2.jpeg" alt="Case Study 2" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-navyBlue mb-2">Boosting Online Presence</h3>
      <p className="text-gray-700 mb-4">
        Discover how we transformed a retail business’s digital marketing strategy.
      </p>
      <a href="/case-studies/2" className="text-deepGreen font-bold hover:underline">
        Read More
      </a>
    </div>

    {/* Case Study 3 */}
    <div className="case-study bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <img src="/case3.jpeg" alt="Case Study 3" className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-navyBlue mb-2">Data-Driven Decision Making</h3>
      <p className="text-gray-700 mb-4">
        See how we implemented data analytics to improve decision-making for a tech startup.
      </p>
      <a href="/case-studies/3" className="text-deepGreen font-bold hover:underline">
        Read More
      </a>
    </div>
  </div>
</section>
{/* FAQs and Contact Us Section */}
<section className="faqs-contact-section py-12 px-4 md:px-12 bg-lightGray">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* FAQs Section */}
    <div className="faqs-section">
      <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">FAQs</h2>
      <div className="faq-list">
        {/* FAQ 1 */}
        <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
          <h3
            className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
            onClick={() => toggleFAQ(1)}
          >
            What services do you offer?
          </h3>
          {activeFAQ === 1 && (
            <p className="text-gray-700">
              We offer business consultancy, training and workshops, monitoring and evaluation, and data analytics setup.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
          <h3
            className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
            onClick={() => toggleFAQ(2)}
          >
            How can I book a consultation?
          </h3>
          {activeFAQ === 2 && (
            <p className="text-gray-700">
              You can book a consultation by visiting our{' '}
              <a href="/bookings" className="text-deepGreen font-bold hover:underline">
                Bookings
              </a>{' '}
              page.
            </p>
          )}
        </div>

         {/* FAQ 3 */}
    <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
      <h3
        className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
        onClick={() => toggleFAQ(3)}
      >
        Do you provide customized solutions?
      </h3>
      {activeFAQ === 3 && (
        <p className="text-gray-700">
          Yes, we tailor our solutions to meet the unique needs of each business we work with.
        </p>
      )}
    </div>

    {/* FAQ 4 */}
    <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
      <h3
        className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
        onClick={() => toggleFAQ(4)}
      >
        What industries do you specialize in?
      </h3>
      {activeFAQ === 4 && (
        <p className="text-gray-700">
          We specialize in various industries, including retail, manufacturing, technology, and more.
        </p>
      )}
    </div>

    {/* FAQ 5 */}
    <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
      <h3
        className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
        onClick={() => toggleFAQ(5)}
      >
        What is your pricing model?
      </h3>
      {activeFAQ === 5 && (
        <p className="text-gray-700">
          Our pricing model is flexible and depends on the scope and complexity of the project. Contact us for a detailed quote.
        </p>
      )}
    </div>

    {/* FAQ 6 */}
    <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
      <h3
        className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
        onClick={() => toggleFAQ(6)}
      >
        Do you offer remote consultations?
      </h3>
      {activeFAQ === 6 && (
        <p className="text-gray-700">
          Yes, we offer remote consultations via video conferencing to accommodate clients from different locations.
        </p>
      )}
    </div>

    {/* FAQ 7 */}
    <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
      <h3
        className="text-xl font-bold text-navyBlue mb-4 cursor-pointer"
        onClick={() => toggleFAQ(7)}
      >
        How long does a typical project take?
      </h3>
      {activeFAQ === 7 && (
        <p className="text-gray-700">
          The duration of a project depends on its scope and complexity. We work closely with clients to establish realistic timelines.
        </p>
      )}
    </div>
      </div>
    </div>

  {/* Contact Us Section */}
  <div className="contact-us-section bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Contact Us</h2>
            <p>Do you have any more questions?</p>
            <br />
            {formSubmitted && (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 text-center">
                Thank you! Your message has been submitted.
              </div>
            )}
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepGreen"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepGreen"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepGreen"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-deepGreen text-white py-3 px-8 rounded-full hover:bg-teal transition"
                >
                  Submit
                </button>
              </div>
            </form>
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
