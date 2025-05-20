import React from 'react';
import CustomerGrowthChart from './BarChart.jsx';
import { FaIndustry, FaTools, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const DataAnalytics = () => {
  const caseStudies = [
    {
      title: 'Agriculture Sector',
      description:
        'We helped a farming cooperative use Power BI to reduce crop spoilage by 30% through better inventory tracking.',
    },
    {
      title: 'Education Sector',
      description:
        'Using Tableau dashboards, a local university identified dropout hotspots and improved student retention by 20%.',
    },
    {
      title: 'Health Sector',
      description:
        'Our machine learning model predicted disease outbreaks, allowing early intervention and resource allocation.',
    },
  ];

  const tools = [
    'Power BI',
    'Tableau',
    'Microsoft Excel',
    'Python (Pandas, NumPy, Scikit-learn)',
    'R',
    'SQL',
    'Jupyter Notebooks',
    'Azure & Google Cloud',
  ];

  const industries = [
    'Agriculture',
    'Health',
    'Education',
    'Small & Medium Enterprises (SMEs)',
    'Finance',
    'Logistics',
    'Public Sector',
  ];

  return (
    <div className="data-analytics-page-container p-6 max-w-5xl mx-auto">
      <h1 className="data-analytics-title text-4xl font-bold text-blue-800 mb-4">Data Analytics</h1>

      <p className="data-analytics-description text-lg mb-6 text-gray-700">
        Unlock the power of your data with our comprehensive Data Analytics services. We help businesses
        transform raw data into actionable insights that drive smarter decisions, improve efficiency, and uncover
        growth opportunities.
      </p>

      <div className="data-analytics-content grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <ul className="data-analytics-services-list list-disc list-inside text-gray-800 space-y-2 text-base">
          <li><strong>Business Intelligence & Reporting:</strong> Get clear, accurate, and timely reports to stay ahead.</li>
          <li><strong>Interactive Dashboards:</strong> Visualize data with tools like <span className="text-blue-600 font-semibold">Power BI</span>, <span className="text-green-600 font-semibold">Tableau</span>, and Excel.</li>
          <li><strong>Data Cleaning & Preparation:</strong> Ensure data quality through validation, transformation, and enrichment.</li>
          <li><strong>Predictive Analytics & Machine Learning:</strong> Use statistical models to forecast trends and behaviors.</li>
          <li><strong>Customer Insights:</strong> Understand behaviors, preferences, and trends in your market.</li>
          <li><strong>Market Analysis:</strong> Stay competitive by tracking industry movements and performance indicators.</li>
          <li><strong>Monitoring & Evaluation (M&E) Data Solutions:</strong> Track performance and outcomes across projects and programs.</li>
        </ul>

        <div className="data-analytics-images space-y-4">
          <img
            src="/data-analytics.avif"
            alt="Data Analytics Overview"
            className="data-analytics-image rounded-2xl shadow-md w-full"
          />
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mt-12">
        <h1 className="data-analytics-title text-4xl font-bold text-blue-800 mb-4">
          <FaChartLine className="data-analytics-title text-blue-600" /> Case Studies & Client Success Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mt-12">
        <h1 className="data-analytics-title text-4xl font-bold text-blue-800 mb-4">
          <FaTools className="text-green-600" /> Tools & Technologies Used
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
              <FaCheckCircle className="text-blue-500" />
              <span className="text-gray-700">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="mt-12">
        <h1 className="data-analytics-title text-4xl font-bold text-blue-800 mb-4">
          <FaIndustry className="text-orange-500" /> Industries We Serve
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm text-gray-700">
              {industry}
            </div>
          ))}
        </div>
      </div>

      <CustomerGrowthChart />

      <p className="mt-10 text-md text-gray-600 italic">
        🚀 Whether you're a startup or a growing enterprise, our data analytics services help you unlock
        hidden patterns, predict future outcomes, and make impactful business moves.
      </p>
    </div>
  );
};

export default DataAnalytics;
