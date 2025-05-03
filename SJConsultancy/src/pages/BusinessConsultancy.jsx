import React from 'react';
import {
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaRegComments,
  FaGlobeAfrica,
  FaTools,
} from 'react-icons/fa';

const BusinessConsultancy = () => {
  return (
    <div className="business-consultancy-page px-6 py-12 space-y-12 bg-gray-50">
      {/* Hero Section */}
      <div className="business-consultancy-hero text-center max-w-4xl mx-auto">
        <h1 className="business-consultancy-title text-4xl font-bold text-blue-800 mb-4">Business Consultancy</h1>
        <p className="business-consultancy-description text-lg text-gray-700">
          We provide tailored consultancy solutions to help you start, grow, and scale your business with confidence.
          Whether you're an aspiring entrepreneur or an established enterprise, our team offers data-driven insights,
          practical tools, and strategic support to fuel your journey.
        </p>
      </div>

      {/* Services Section */}
      <div className="business-consultancy-services">
        <h2 className="business-consultancy-services-title text-2xl font-semibold text-center text-gray-800 mb-6">🔍 Our Consultancy Services</h2>
        <div className="business-consultancy-services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartLine className="business-service-icon text-4xl text-green-600 mx-auto mb-4" />,
              title: "Business Strategy & Planning",
              desc: "Developing long-term strategies, business plans, and feasibility studies.",
            },
            {
              icon: <FaHandshake className="business-service-icon text-4xl text-purple-600 mx-auto mb-4" />,
              title: "SME & Startup Support",
              desc: "Tailored services for micro and small enterprises including structure, funding, and compliance.",
            },
            {
              icon: <FaLightbulb className="business-service-icon text-4xl text-yellow-500 mx-auto mb-4" />,
              title: "Innovation & Product Development",
              desc: "Helping businesses innovate, launch products, and enter new markets.",
            },
            {
              icon: <FaRegComments className="business-service-icon text-4xl text-red-500 mx-auto mb-4" />,
              title: "Executive Coaching & Mentorship",
              desc: "Leadership training and 1-on-1 mentorship for growth-focused entrepreneurs.",
            },
            {
              icon: <FaGlobeAfrica className="business-service-icon text-4xl text-blue-500 mx-auto mb-4" />,
              title: "Market Entry & Expansion",
              desc: "Guidance on entering new local or international markets with confidence.",
            },
            {
              icon: <FaTools className="business-service-icon text-4xl text-gray-700 mx-auto mb-4" />,
              title: "Operational Optimization",
              desc: "Improving systems, workflows, and technology to drive efficiency.",
            },
          ].map((item, index) => (
            <div key={index} className="business-service-card p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              {item.icon}
              <h3 className="business-service-title text-xl font-semibold mb-2">{item.title}</h3>
              <p className="business-service-description text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="business-consultancy-testimonials bg-blue-50 py-10 px-6 rounded-xl shadow-inner text-center">
        <h2 className="business-consultancy-testimonials-title text-2xl font-bold text-blue-700 mb-6">🌟 What Our Clients Say</h2>
        <div className="business-consultancy-testimonials-content space-y-6 max-w-4xl mx-auto">
          <blockquote className="business-testimonial italic text-gray-700">
            "I came in with just an idea and left with a full business model and pitch deck. Phenomenal experience."
            <br /><span className="business-testimonial-author font-bold text-blue-600">– Brenda M., Founder of MajiPure</span>
          </blockquote>
          <blockquote className="business-testimonial italic text-gray-700">
            "Their team helped us create an export strategy and secure our first international clients."
            <br /><span className="business-testimonial-author font-bold text-blue-600">– Joseph K., CEO of AgriSmart</span>
          </blockquote>
        </div>
      </div>

      {/* Visual Section */}
      <div className="business-consultancy-visual text-center">
        <h2 className="business-consultancy-visual-title text-2xl font-semibold mb-4 text-gray-800">🚀 Ready to Elevate Your Business?</h2>
        <img
          src="/consultation.avif"
          alt="Business consultancy team"
          className="business-consultancy-visual-image rounded-xl mx-auto shadow-lg max-w-3xl"
        />
        <p className="business-consultancy-visual-description mt-4 text-gray-600">
          Partner with us to navigate complexity, unlock growth, and build a thriving enterprise.
        </p>
      </div>

      {/* Call to Action */}
      <div className="business-consultancy-cta text-center mt-10">
        <h3 className="business-consultancy-cta-title text-xl font-semibold text-gray-800 mb-4">📅 Book a Free Discovery Session</h3>
        <p className="business-consultancy-cta-description text-gray-600 mb-4">Let’s explore how we can help your business grow. No pressure—just insights!</p>
        <a
          href="/bookings"
          className="business-consultancy-cta-button inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
};

export default BusinessConsultancy;