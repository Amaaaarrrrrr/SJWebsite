import React from 'react';

const DataAnalysis = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center text-navyBlue mb-8">
        Data Analytics Services
      </h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Comprehensive Data Analysis
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We offer a full suite of data analysis services to help you unlock
          the potential of your data. From data collection and cleaning to
          advanced statistical modeling and visualization, we've got you
          covered.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Data Collection and Preparation</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Statistical Modeling</li>
          <li>Predictive Analytics</li>
          <li>Data Visualization and Reporting</li>
        </ul>
      </section>

      {/* New Sections */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Business Intelligence & Dashboards
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Transform your data into interactive dashboards and reports with our
          Business Intelligence services. We use tools like Power BI, Tableau,
          and Excel to create insightful visualizations that help you monitor
          key performance indicators (KPIs) and make data-driven decisions.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Dashboard Design and Development</li>
          <li>KPI Monitoring</li>
          <li>Data Storytelling</li>
          <li>Custom Reporting Solutions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Data Cleaning & Preparation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Ensure the accuracy and reliability of your data with our data
          cleaning and preparation services. We identify and correct errors,
          handle missing values, and transform your data into a consistent and
          usable format.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Data Profiling and Quality Assessment</li>
          <li>Data Cleansing and Transformation</li>
          <li>Data Integration</li>
          <li>Data Standardization</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Predictive Analytics & Machine Learning
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Harness the power of predictive analytics and machine learning to
          forecast future trends and outcomes. We build custom models to help
          you predict customer behavior, optimize marketing campaigns, and
          improve operational efficiency.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Predictive Modeling</li>
          <li>Machine Learning Algorithm Development</li>
          <li>Model Evaluation and Deployment</li>
          <li>Custom AI Solutions</li>
        </ul>
      </section>
      {/* End New Sections */}

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Actionable Insights
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our goal is to transform your raw data into actionable insights that
          drive business growth. We work closely with you to understand your
          specific needs and tailor our analysis to provide you with the most
          relevant and impactful information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Our Approach
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We follow a structured approach to data analysis to ensure accuracy
          and reliability.
        </p>
        <ol className="list-decimal list-inside text-gray-700">
          <li>
            <strong>Define Objectives:</strong> We work with you to clearly
            define your business objectives and identify the key questions that
            data analysis can answer.
          </li>
          <li>
            <strong>Data Collection:</strong> We gather data from various sources,
            ensuring data quality and integrity.
          </li>
          <li>
            <strong>Data Cleaning and Preparation:</strong> We clean and prepare
            the data for analysis, handling missing values and outliers.
          </li>
          <li>
            <strong>Analysis and Modeling:</strong> We use appropriate statistical
            techniques and machine learning models to analyze the data and
            identify patterns and trends.
          </li>
          <li>
            <strong>Visualization and Reporting:</strong> We create clear and
            concise visualizations and reports to communicate our findings and
            recommendations.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Tools and Technologies
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We leverage the latest tools and technologies to deliver
          high-quality data analysis services.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Python</li>
          <li>R</li>
          <li>Tableau</li>
          <li>SQL</li>
          <li>Machine Learning Libraries (scikit-learn, TensorFlow)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-navyBlue mb-4">
          Get Started Today
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us to learn more about our data analytics services and how
          we can help you achieve your business goals by <a href="/contactus" className="text-blue-500">registering here</a>. <br/>
          Our team of experts is ready to assist you with all your requests.
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

export default DataAnalysis;