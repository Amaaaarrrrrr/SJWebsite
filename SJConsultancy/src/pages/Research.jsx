import React from 'react';
import AnalyticsChart from './AnalyticsChart'; // adjust the path if needed

const Research = () => {
  return (
    <div className="research-page p-6 max-w-6xl mx-auto space-y-8">
      <header className="research-header text-center">
        <h1 className="research-title text-3xl font-bold">Research & Insights</h1>
        <p className="research-subtitle mt-2 text-gray-600">
          Discover how data drives our decision-making and innovation.
        </p>
      </header>

      <section className="research-analytics-section">
        <h2 className="research-analytics-title text-2xl font-semibold mb-4">Data Analytics Overview</h2>
        <div className="research-analytics-chart">
          <AnalyticsChart />
        </div>
      </section>

      <section className="research-services-section">
        <h2 className="research-services-title text-2xl font-semibold mb-4">Our Research Services</h2>
        <ul className="research-services-list list-disc list-inside space-y-2 text-gray-700">
          <li>Market trend analysis using real-time data.</li>
          <li>Custom data modeling for academic and enterprise needs.</li>
          <li>Survey and field data visualization solutions.</li>
          <li>AI-assisted predictive research frameworks.</li>
        </ul>
      </section>

      <section className="research-papers-section">
        <h2 className="research-papers-title text-2xl font-semibold mb-4">Recent Research Papers</h2>
        <div className="research-papers-list space-y-6 text-gray-700">
          <div className="research-paper">
            <h3 className="research-paper-title font-medium text-lg">• Predictive Analytics in Education</h3>
            <p className="research-paper-description text-sm">
              This research explores the use of machine learning models to analyze historical academic data and predict
              student performance and dropout risks. It demonstrates how data-driven decision-making can improve
              educational outcomes by identifying students who need support early on.
            </p>
          </div>

          <div className="research-paper">
            <h3 className="research-paper-title font-medium text-lg">• Consumer Behavior Post-COVID</h3>
            <p className="research-paper-description text-sm">
              In the wake of the global pandemic, purchasing patterns changed drastically. This study uses large-scale
              transaction data and behavioral surveys to examine how online shopping surged, which product categories
              gained or lost interest, and how consumer trust evolved across industries.
            </p>
          </div>

          <div className="research-paper">
            <h3 className="research-paper-title font-medium text-lg">• Climate Data Mapping with AI</h3>
            <p className="research-paper-description text-sm">
              This paper presents an AI-powered approach to processing climate data from satellites and sensors. By
              using deep learning models, researchers were able to identify high-risk zones for drought and flooding
              and generate maps that help governments and NGOs plan disaster response and sustainable development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;