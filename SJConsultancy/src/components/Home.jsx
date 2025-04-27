import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Logo Section */}
      <header>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          S.J Consultancy
        </h1>
        <p>Empowering Innovation and Technology</p>
      </header>

      {/* About Us */}
      <section>
        <h2>About Us</h2>
        <p>
          S.J Consultancy is a trusted provider of technology solutions and business consultancy services. 
          We are passionate about helping businesses grow through innovation and tailored strategies.
        </p>
      </section>

      {/* Our Services */}
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Training & Certification</li>
          <li>Consulting Services</li>
          <li>Research & Development</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      {/* News */}
      <section>
        <h2>News & Updates</h2>
        <p>Stay tuned for the latest news and announcements from S.J Consultancy.</p>
      </section>
    </div>
  );
};

export default Home;
