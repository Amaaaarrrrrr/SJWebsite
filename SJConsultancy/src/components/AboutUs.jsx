import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'John has over 20 years of experience in business consulting and has successfully led numerous startups to success. His expertise lies in strategic planning and operational efficiency.',
      image: '/john-doe.jpeg',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Consultant',
      description: 'With a background in digital transformation, Jane specializes in guiding businesses through the complexities of data analytics and technology implementation to drive growth and innovation.',
      image: '/jane-smith.jpeg',
    },
    {
      name: 'Mark Johnson',
      role: 'Senior Business Analyst',
      description: 'Mark is a data-driven professional with a deep understanding of market trends. He helps clients make informed decisions based on thorough analysis and actionable insights.',
      image: '/mark-johnson.jpeg',
    },
    {
      name: 'Emma Brown',
      role: 'Training & Development Manager',
      description: 'Emma designs and facilitates training programs that empower businesses and their employees to harness the power of new technologies and skills, ensuring long-term success.',
      image: '/emma-brown.jpeg',
    },
    {
      name: 'Lucas Green',
      role: 'Marketing Director',
      description: 'Lucas is an expert in digital marketing and customer engagement strategies. He leads our efforts to create compelling campaigns that elevate our clients’ brands and drive market growth.',
      image: '/lucas-green.jpeg',
    },
  ];

  return (
    <div className="about-us-container-unique max-w-6xl mx-auto text-center">
      {/* Section Title */}
      <div className="about-us-title-container bg-cover bg-center py-16 px-4 rounded-lg shadow-md" style={{ backgroundImage: "url('/aboutbkg.jpg')" }}>
        <h1 className="about-us-title-unique text-4xl font-bold text-white mb-6">About Us</h1>
        {/* About Us Description */}
        <div className="about-us-description-container">
          <p className="about-us-description-unique text-lg text-white mb-8 max-w-4xl mx-auto">
          BIZITEL  SOLUTION is a premier  Research, Data Analytics, business development, and training firm specializing in SIYB (Start and Improve Your Business) training and Monitoring & Evaluation (M&E) . Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making.
          </p>
        </div>
      </div>

      {/* Affiliations/Partnerships Section */}
      <div className="affiliations-container bg-white p-8 rounded-lg shadow-md my-12 text-left max-w-4xl mx-auto">
<h2 className="affiliations-title text-3xl font-bold text-navyBlue mb-6 text-center">Affiliations & Partnerships</h2>
        <p className="affiliations-description text-lg text-gray-700 mb-4">
          We proudly collaborate with a diverse range of organizations to enhance our impact and deliver exceptional value to our clients. Our key affiliations and partnerships include:
        </p>
        <ul className="affiliations-list list-disc list-inside text-gray-700 space-y-2">
          <li><img src="images.png" alt="" /></li>
          <li><img src="attachment_116557550.png" alt="" /></li>
          <li><img src="mini_magick20191105-26111-aufbg7.png" alt="" /></li>
          <li><img src="SIAlogo.jpeg" alt="" /></li>
          <li><img src="technology-partner.png" alt="" /></li>
        </ul>
      </div>

      {/* Vision and Mission */}
      <div className="about-us-vision-mission-container">
        <div className="about-us-grid-unique grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Vision Section */}
          <div className="about-us-card-unique bg-white p-8 rounded-lg shadow-md">
            <h2 className="about-us-card-title-unique text-2xl font-semibold text-navyBlue mb-4">Our Vision</h2>
            <p className="about-us-card-description-unique text-lg text-gray-700">
              To become the leading consultancy firm that transforms businesses with innovative, sustainable, and data-driven solutions, creating lasting growth and value for our clients.
            </p>
          </div>

          {/* Mission Section */}
          <div className="about-us-card-unique bg-white p-8 rounded-lg shadow-md">
            <h2 className="about-us-card-title-unique text-2xl font-semibold text-navyBlue mb-4">Our Mission</h2>
            <p className="about-us-card-description-unique text-lg text-gray-700">
              Our mission is to empower businesses with customized strategies, comprehensive training, and efficient operations that enable them to thrive in today’s competitive marketplace. We aim to build strong, long-lasting partnerships with our clients, helping them realize their full potential.
            </p>
          </div>
        </div>
      </div>

      {/* Data Analytics Services Section */}
      <div className="data-analytics-services-container bg-white p-8 rounded-lg shadow-md my-12 text-left max-w-4xl mx-auto">
        <h2 className="data-analytics-services-title text-3xl font-bold text-navyBlue mb-6">Data Analytics Services</h2>
        <ul className="data-analytics-services-list list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li><strong>Business Intelligence & Dashboards:</strong> Power BI, Tableau, Excel</li>
          <li><strong>Data Cleaning & Preparation</strong></li>
          <li><strong>Predictive Analytics & Machine Learning</strong></li>
          <li><strong>M&E (Monitoring & Evaluation) Data Solutions</strong></li>
          <li><strong>Case Studies or Client Success Stories</strong></li>
          <li><strong>Tools and Technologies Used</strong></li>
          <li><strong>Industries Served:</strong> Agriculture, Health, Education, SMEs, etc.</li>
        </ul>
      </div>

      {/* Values Section */}
      <div className="about-us-values-container text-center mb-12">
        <h2 className="about-us-values-title-unique text-3xl font-bold text-navyBlue mb-6">Our Core Values</h2>
        <ul className="about-us-values-list-unique text-lg text-gray-700 space-y-4">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Excellence</li>
          <li>Collaboration</li>
          <li>Client-Centric Approach</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="about-us-team-container">
        <h2 className="about-us-team-title-unique text-3xl font-bold text-navyBlue mb-6">Meet Our Team</h2>
        <div className="about-us-team-grid-unique grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="about-us-team-card-unique bg-white p-6 rounded-lg shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="about-us-team-image-unique w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="about-us-team-name-unique text-2xl font-semibold text-navyBlue mb-2">{member.name}</h3>
              <p className="about-us-team-role-unique text-lg font-semibold text-gray-600">{member.role}</p>
              <p className="about-us-team-description-unique text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="about-us-cta-container bg-deepGreen text-white py-6 px-4 rounded-lg mt-12">
        <h3 className="about-us-cta-title-unique text-2xl font-semibold mb-4">Ready to work with us?</h3>
        <p className="about-us-cta-description-unique text-lg mb-6">
          Whether you're just starting or scaling your business, we are here to help you succeed. Book a consultation with us today and start your journey towards growth and success.
        </p>
        <a href="/bookings" className="about-us-cta-button-unique bg-gold text-white py-3 px-6 rounded-full hover:bg-yellow-400 transition">
          Book Us Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
