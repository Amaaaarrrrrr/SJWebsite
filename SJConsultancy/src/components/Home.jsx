import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Logo Section */}
      <header className="text-center py-12 bg-deepGreen text-white">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          S.J Consultancy
        </h1>
        <p>Empowering Innovation and Technology</p>
      </header>

      {/* About Us */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">About Us</h2>
        <p className="text-lg text-gray-700 text-center">
        S.J Consultancy is a premier business development and training firm specializing in SIYB (Start and Improve Your Business) training, Data Analytics, and Monitoring & Evaluation (M&E) Research. Our mission is to empower entrepreneurs, businesses, and organizations with the skills, knowledge, and tools necessary for sustainable growth and decision-making.vation and tailored strategies.
        </p>
      </section>

      <section className="py-12 px-4 md:px-12 bg-lightGray">
  <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Our Services</h2>
  <div className="space-y-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-navyBlue mb-4">Business Consultancy</h3>
      <p className="text-lg text-gray-700">
        Our Business Consultancy service helps organizations streamline their operations, improve efficiency, and develop strategies for sustainable growth. We work closely with businesses to identify challenges, analyze market trends, and create tailored solutions that drive success. Whether you're a startup or an established business, our expert consultants will guide you through every step of your growth journey.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-navyBlue mb-4">Training and Workshops</h3>
      <p className="text-lg text-gray-700">
        We offer specialized training and workshops that focus on empowering your team with the skills and knowledge they need to thrive in today's dynamic business environment. Our hands-on, practical approach ensures that your employees are equipped with real-world solutions. From leadership development to technical skills training, our programs are customized to meet your specific organizational needs.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-navyBlue mb-4">Monitoring and Evaluation</h3>
      <p className="text-lg text-gray-700">
        Our Monitoring and Evaluation (M&E) services are designed to help businesses and organizations track their progress, measure outcomes, and assess the effectiveness of their projects. We utilize robust M&E frameworks that provide actionable insights, enabling you to optimize resources, make informed decisions, and improve performance across all areas of operation.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-navyBlue mb-4">Data Analytics Setup</h3>
      <p className="text-lg text-gray-700">
        In today's data-driven world, the ability to harness the power of data is crucial for business success. Our Data Analytics Setup service enables organizations to collect, process, and analyze data effectively. We provide comprehensive data strategies that help you make informed decisions, predict trends, and gain a competitive edge. Whether it's setting up dashboards, designing reporting systems, or implementing analytics tools, we provide end-to-end solutions that meet your business needs.
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
