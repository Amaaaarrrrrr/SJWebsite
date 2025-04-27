import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Logo Section */}
     {/* Logo Section */}
     <header className="logo-section text-center text-white">
        <div className="overlay">
          <h1 className="text-4xl font-bold mb-4">S.J Consultancy</h1>
          <p className="text-lg mb-6">Empowering Innovation and Technology</p>
          <div className="cta-buttons">
            <a href="/bookings" className="cta-button">Book Us Now</a>
            <a href="/contactus" className="cta-button">Contact Us</a>
          </div>
        </div>
      </header>

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
              S.J Consultancy is a premier business development and training firm specializing in SIYB (Start and Improve Your Business) training, Data Analytics, and Monitoring & Evaluation (M&E) Research. Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making.
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
      {/* Quotes */}
      <section className="py-12 px-4 md:px-12 bg-deepGreen text-white text-center">
        <p className="italic text-lg">"Innovation distinguishes between a leader and a follower." — Steve Jobs</p>
        <p className="italic text-lg mt-4">"Success usually comes to those who are too busy to be looking for it." — Henry David Thoreau</p>
      </section>


      {/* Services Section */}
      <section className="services-section py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Our Services</h2>
        <div className="service-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text on the Left */}
          <div className="service-text">
            <h3 className="text-2xl font-semibold text-navyBlue mb-4">Business Consultancy</h3>
            <p className="text-lg text-gray-700">
              Our Business Consultancy service helps organizations streamline their operations, improve efficiency, and develop strategies for sustainable growth. We work closely with businesses to identify challenges, analyze market trends, and create tailored solutions that drive success.
            </p>
          </div>
          {/* Image on the Right */}
          <div className="service-image">
            <img
              src="/business-consultancy.jpg"
              alt="Business Consultancy"
              className="rounded-image"
            />
          </div>
        </div>

        <div className="service-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Image on the Left */}
          <div className="service-image order-last md:order-first">
            <img
              src="/training-workshops.jpg"
              alt="Training and Workshops"
              className="rounded-image"
            />
          </div>
          {/* Text on the Right */}
          <div className="service-text">
            <h3 className="text-2xl font-semibold text-navyBlue mb-4">Training and Workshops</h3>
            <p className="text-lg text-gray-700">
              We offer specialized training and workshops that focus on empowering your team with the skills and knowledge they need to thrive in today's dynamic business environment. Our hands-on, practical approach ensures that your employees are equipped with real-world solutions.
            </p>
          </div>
        </div>

        <div className="service-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Text on the Left */}
          <div className="service-text">
            <h3 className="text-2xl font-semibold text-navyBlue mb-4">Monitoring and Evaluation</h3>
            <p className="text-lg text-gray-700">
              Our Monitoring and Evaluation (M&E) services are designed to help businesses and organizations track their progress, measure outcomes, and assess the effectiveness of their projects. We utilize robust M&E frameworks that provide actionable insights.
            </p>
          </div>
          {/* Image on the Right */}
          <div className="service-image">
            <img
              src="/monitoring-evaluation.jpg"
              alt="Monitoring and Evaluation"
              className="rounded-image"
            />
          </div>
        </div>

        <div className="service-item grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image on the Left */}
          <div className="service-image order-last md:order-first">
            <img
              src="/data-analytics.jpg"
              alt="Data Analytics Setup"
              className="rounded-image"
            />
          </div>
          {/* Text on the Right */}
          <div className="service-text">
            <h3 className="text-2xl font-semibold text-navyBlue mb-4">Data Analytics Setup</h3>
            <p className="text-lg text-gray-700">
              Our Data Analytics Setup service enables organizations to collect, process, and analyze data effectively. We provide comprehensive data strategies that help you make informed decisions, predict trends, and gain a competitive edge.
            </p>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">Certified SIYB Trainers</h3>
            <p className="text-gray-600">
              Our trainers are certified by the SIYB program and possess extensive experience in delivering high-quality business training.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">Proven Track Record</h3>
            <p className="text-gray-600">
              We have a proven track record of using data-driven business solutions to help companies grow and succeed in competitive markets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">Customized Approach</h3>
            <p className="text-gray-600">
              We take a client-centric approach, tailoring our solutions to meet the unique needs of each business we work with.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">Practical Training</h3>
            <p className="text-gray-600">
              Our hands-on training methodologies ensure that participants gain practical skills they can apply immediately in their work.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">Strong Professional Network</h3>
            <p className="text-gray-600">
              We leverage our strong network of industry professionals and partners to offer opportunities for growth, collaboration, and success.
            </p>
          </div>
        </div>
      </section>
        
       {/* Contact Us */}
       <section className="py-12 px-4 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 text-center">
          Have questions or want to collaborate? We'd love to hear from you!
        </p>
        <div className="text-center mt-6">
          <a href="/contactus" className="inline-block bg-deepGreen text-white py-3 px-8 rounded-full hover:bg-teal transition">
            Contact Us
          </a>
        </div>
      </section>

      {/* News */}
      <section className="py-12 px-4 md:px-12 bg-lightGray">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">News & Updates</h2>
        <p className="text-lg text-gray-700 text-center">
          Stay tuned for the latest news and announcements from S.J Consultancy.
        </p>
      </section>
    </div>
  );
};

export default Home;
