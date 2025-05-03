import React from 'react';
import CustomerGrowthChart from './BarChart.jsx';

const DataAnalytics = () => {
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
          <li><strong>Interactive Dashboards:</strong> Visualize data with tools like <span className="text-blue-600 font-semibold">Power BI</span> and <span className="text-green-600 font-semibold">Tableau</span>.</li>
          <li><strong>Data-Driven Decision Making:</strong> Optimize operations and strategy with deep analytics.</li>
          <li><strong>Customer Insights:</strong> Understand behaviors, preferences, and trends in your market.</li>
          <li><strong>Market Analysis:</strong> Stay competitive by tracking industry movements and performance indicators.</li>
        </ul>

        <div className="data-analytics-images space-y-4">
          <img
            src="/data-analytics.avif"
            alt="Data Analytics Overview"
            className="data-analytics-image rounded-2xl shadow-md w-full"
          />
          
        </div>
      </div>

      <p className="data-analytics-footer-text mt-8 text-md text-gray-600 italic">
        🚀 Whether you're a startup or a growing enterprise, our data analytics services help you unlock
        hidden patterns, predict future outcomes, and make impactful business moves.
      </p>
      <CustomerGrowthChart />
    </div>
  );
};

export default DataAnalytics;