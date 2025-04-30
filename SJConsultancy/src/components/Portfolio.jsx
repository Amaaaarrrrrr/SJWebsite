import React from 'react';

const Portfolio = () => {
  const analyticsProjects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Developed a machine learning model to predict customer churn for a subscription-based service, resulting in a 15% reduction in churn rate.',
      image: '/junprediction.jpg', 
      link: '/project/customer-churn', 
    },
    {
      title: 'Sales Forecasting',
      description: 'Created a time series model to forecast future sales, improving inventory management and reducing stockouts by 10%.',
      image: '/sales-forecasting.jpg',
      link: '/project/sales-forecasting', 
    },
    {
      title: 'Marketing Campaign Optimization',
      description: 'Analyzed marketing campaign data to identify high-performing channels and optimize ad spend, increasing conversion rates by 20%.',
      image: '/marketing-optimization.jpg', 
      link: '/project/marketing-optimization', 
    },
  ];

  const syibImpactStories = [
    {
      businessName: 'Mama Mboga Grocery',
      before: 'Faced challenges with inventory management and tracking sales, leading to losses and difficulties in planning.',
      after: 'Implemented basic accounting practices and inventory control techniques learned from the SIYB program, resulting in a 30% increase in profits and better financial planning.',
      image: '/logo.jpg',
      link: 'https://www.mamamboga.go.ke/', 
    },
    {
      businessName: 'John\'s Carpentry Workshop',
      before: 'Struggled to attract new customers and manage finances effectively, limiting business growth.',
      after: 'Developed a marketing strategy and improved financial management skills through the SIYB program, leading to a 40% increase in customer base and improved profitability.',
      image: '/johns-carpentry-before-after.jpg', // Replace with actual image
      link: '/story/johns-carpentry', // Replace with actual link
    },
  ];

  const partners = [
    { name: 'ILO', logo: '/lucas-green.jpeg' },
    { name: 'Local Government', logo: '/portfolio.png' },
    { name: 'Business Incubator X', logo: '/incubator-x-logo.png' },
    { name: 'Development Partner Y', logo: '/dev-partner-y-logo.png' },
  ];

  return (
    <section className="portfolio-section py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-navyBlue mb-6">Our Portfolio</h2>

      {/* Analytics Projects */}
      <div className="analytics-projects mb-8">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">Analytics Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h4 className="font-semibold text-lg text-gray-700 mb-2">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} className="mt-2 rounded-md" />}
              {project.link && (
                <a href={project.link} className="text-deepGreen hover:text-teal mt-2 block">
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SIYB Programs */}
      <div className="syib-programs mb-8">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">SIYB Programs - Impact Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {syibImpactStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h4 className="font-semibold text-lg text-gray-700 mb-2">{story.businessName}</h4>
              <p className="text-gray-600">
                <span className="font-bold">Before:</span> {story.before}
                <br />
                <span className="font-bold">After:</span> {story.after}
              </p>
              {story.image && <img src={story.image} alt={story.businessName} className="mt-2 rounded-md" />}
              {story.link && (
                <a href={story.link} className="text-deepGreen hover:text-teal mt-2 block">
                  Read Full Story
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partnerships */}
      <div className="partnerships">
        <h3 className="text-2xl font-semibold text-navyBlue mb-4">Partnerships</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <img src="/lucas-green.jpeg" alt={partner.name} className="mx-auto h-16" />
              <p className="text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;