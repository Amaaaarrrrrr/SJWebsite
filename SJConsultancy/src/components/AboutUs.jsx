import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'John has over 20 years of consulting experience, leading businesses to sustainable growth through innovative strategies.',
      image: '/john-doe.jpeg',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Consultant',
      description: 'Jane drives digital transformation for clients, specializing in analytics, technology adoption, and strategic execution.',
      image: '/jane-smith.jpeg',
    },
    {
      name: 'Mark Johnson',
      role: 'Senior Business Analyst',
      description: 'Mark’s market insights and data-driven strategies empower businesses to make smarter, results-focused decisions.',
      image: '/mark-johnson.jpeg',
    },
    {
      name: 'Emma Brown',
      role: 'Training & Development Manager',
      description: 'Emma builds powerful training solutions that transform teams, enhance technology adoption, and fuel business success.',
      image: '/emma-brown.jpeg',
    },
    {
      name: 'Lucas Green',
      role: 'Marketing Director',
      description: 'Lucas leads marketing innovation and customer engagement, crafting impactful campaigns that drive brand growth.',
      image: '/lucas-green.jpeg',
    },
  ];

  return (
    <div className="about-us-container-unique max-w-7xl mx-auto text-center p-6">

      {/* Section Title */}
      <div 
        className="about-us-title-container bg-cover bg-center py-20 px-6 rounded-lg shadow-md" 
        style={{ backgroundImage: "url('/aboutbkg.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-white mb-6">ABOUT <br/>BIZITEL SOLUTION</h1>
        <p className="text-xl text- gold mb-8 max-w-5xl mx-auto">
          <strong className="text-xl text-black mb-8 max-w-5xl mx-auto hover:text-gold hover:scale-105 transition duration-300 inline-block">
            BIZITEL SOLUTION is a premier research, data analytics, business development, and training firm specializing in SIYB and Monitoring & Evaluation (M&E).
            Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making.
          </strong>
        </p>
      </div>

      {/* Our Story */}
      <div className="bg-white p-8 rounded-lg shadow-md my-16">
        <h2 className="text-4xl font-bold text-deepGreen mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          BIZITEL SOLUTION was founded with a vision to bridge the gap between data and actionable strategies for businesses.  It began as a small team of passionate consultants, driven by the belief that every organization, regardless of size, deserves access to expert guidance and data-driven insights.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          From our early work with local entrepreneurs, we quickly recognized the transformative power of SIYB training and the critical need for effective Monitoring & Evaluation. This realization shaped our focus and led us to specialize in these areas.
        </p>
        <p className="text-lg text-gray-700">
          Today, we are proud to have partnered with numerous organizations, from startups to established enterprises, helping them achieve sustainable growth and make data-informed decisions that drive real-world impact. Our journey is one of continuous learning, innovation, and a deep commitment to our clients' success.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
        {/* Vision */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-deepGreen mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            To be the consultancy of choice that powers business excellence through innovative data-driven solutions, entrepreneurship training, and strategic partnerships.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-deepGreen mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We empower businesses, entrepreneurs, and organizations through research, strategic consulting, data analytics, and specialized training programs.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-deepGreen mb-8">Our Core Values</h2>
        <ul className="text-lg text-gray-700 space-y-4">
          <li><strong>Integrity:</strong> Upholding transparency and accountability in every engagement.</li>
          <li><strong>Innovation:</strong> Continuously delivering cutting-edge solutions for growth.</li>
          <li><strong>Excellence:</strong> Pursuing superior quality and results in everything we do.</li>
          <li><strong>Collaboration:</strong> Building strong, meaningful partnerships for mutual success.</li>
          <li><strong>Client-Centricity:</strong> Tailoring solutions to the unique needs of our clients.</li>
        </ul>
      </div>

      {/* Affiliations */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-16">
        <h2 className="text-4xl font-bold text-deepGreen mb-6">Affiliations & Partnerships</h2>
        <p className="text-lg text-gray-700">
          We proudly collaborate with leading organizations such as the International Labour Organization (ILO), government agencies, business incubators, and development partners to deliver lasting impact.
        </p>
      </div>

      {/* Meet the Team */}
      <div>
        <h2 className="text-4xl font-bold text-deepGreen mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-deepGreen mb-2">{member.name}</h3>
              <p className="text-lg font-semibold text-gray-600">{member.role}</p>
              <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-deepGreen text-white py-10 px-8 rounded-lg mt-20">
        <h3 className="text-3xl font-semibold mb-4">Ready to unlock your potential?</h3>
        <p className="text-lg mb-6">
          Partner with BIZITEL SOLUTION to leverage research, analytics, and world-class training to elevate your business. Book a free consultation now!
        </p>
        <a
          href="/bookings"
          className="bg-gold text-white py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Book Us Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
