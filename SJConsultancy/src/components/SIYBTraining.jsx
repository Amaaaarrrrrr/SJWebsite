import React from 'react';

const SIYBTraining = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-navyBlue mb-8">
        SIYB Training Programs
      </h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Start and Improve Your Business (SIYB)
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our SIYB training programs, developed by the International Labour
          Organization (ILO), are designed to empower aspiring and existing
          entrepreneurs with the essential skills to start, manage, and grow
          sustainable businesses. We focus on practical, hands-on learning to
          ensure immediate applicability.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Generate Viable Business Ideas:</strong> Identify opportunities and assess feasibility.</li>
          <li><strong>Develop a Comprehensive Business Plan:</strong> Outline your strategy for success.</li>
          <li><strong>Master Marketing and Sales:</strong> Attract and retain customers.</li>
          <li><strong>Manage Finances Effectively:</strong> Track income, expenses, and profitability.</li>
          <li><strong>Improve Operations and Productivity:</strong> Streamline processes and maximize efficiency.</li>
          <li><strong>Lead and Motivate Your Team:</strong> Build a strong and productive workforce.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Who Should Attend?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our SIYB training programs are ideal for:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Aspiring Entrepreneurs:</strong> Ready to turn your ideas into reality.</li>
          <li><strong>New Business Owners:</strong> Seeking a solid foundation for growth.</li>
          <li><strong>Small Business Managers:</strong> Aiming to improve performance and profitability.</li>
          <li><strong>Cooperative Members:</strong> Looking to enhance business skills.</li>
          <li><strong>Individuals Seeking Career Advancement:</strong> Gaining entrepreneurial skills.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Training Methodology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We employ a highly interactive and participatory training methodology,
          emphasizing learning by doing:
        </p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>
            <strong>Interactive Lectures and Discussions:</strong> Engaging sessions covering key concepts.
          </li>
          <li>
            <strong>Practical Exercises and Simulations:</strong> Applying knowledge in realistic scenarios.
          </li>
          <li>
            <strong>Real-World Case Studies:</strong> Analyzing successful and unsuccessful businesses.
          </li>
          <li>
            <strong>Role-Playing and Group Activities:</strong> Developing communication and teamwork skills.
          </li>
          <li>
            <strong>Action Planning:</strong> Creating personalized plans for business improvement.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Benefits of SIYB Training
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Upon completion of our SIYB training programs, you will:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Gain a Comprehensive Understanding of Business Principles:</strong> Master the fundamentals of successful entrepreneurship.</li>
          <li><strong>Develop Practical Skills for Effective Business Management:</strong> Implement proven strategies for growth.</li>
          <li><strong>Learn to Identify and Capitalize on Business Opportunities:</strong> Spot and exploit market gaps.</li>
          <li><strong>Enhance Your Decision-Making Capabilities:</strong> Make informed choices for optimal results.</li>
          <li><strong>Expand Your Professional Network:</strong> Connect with fellow entrepreneurs and industry experts.</li>
          <li><strong>Receive a Certificate of Completion:</strong> Validate your newly acquired skills.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Take the Next Step
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ready to transform your business dreams into reality? Contact us today
          to discover how our SIYB training programs can empower you to achieve
          sustainable success or <a href="/contactus" className="text-deepGreen hover:text-teal font-semibold">book a consultation</a> to discuss your specific needs.
        </p>
        <a
          href="/contactus"
          className="inline-block bg-deepGreen text-white py-3 px-8 rounded-full hover:bg-teal transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SIYBTraining;