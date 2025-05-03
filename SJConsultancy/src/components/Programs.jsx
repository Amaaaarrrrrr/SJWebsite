import React from 'react';

const programsData = [
  {
    id: 1,
    title: "Business Consultancy",
    description: "We offer tailored business consultancy services designed to optimize your operations, increase profitability, and streamline processes. Our expert consultants work with you to identify pain points and deliver actionable solutions. ",
    image: "/program1.jpeg",
    link: "/services/business-consultancy",
  },
  {
    id: 2,
    title: "Training and Workshops",
    description: "Our training programs provide practical skills in areas like digital marketing, project management, and data analytics. Through hands-on workshops, we equip your team with the knowledge to grow and thrive in today's competitive market.",
    image: "/program2.jpeg",
    link: "/services/siyb-training",
  },
  {
    id: 3,
    title: "Monitoring & Evaluation Support",
    description: "We help organizations optimize their monitoring and evaluation processes, ensuring effective program tracking and reporting. Our services improve project outcomes through better data management and analysis.",
    image: "/program3.jpeg",
    link: "/services/monitoring-evaluation",
  },
  {
    id: 4,
    title: "Data Analytics Setup",
    description: "With our data analytics services, we help organizations set up efficient systems to collect, analyze, and interpret data. These insights can drive informed decisions, improve performance, and give your business a competitive edge.",
    image: "/program4.jpeg",
    link: "/services/data-analytics",
  },
  {
    id: 5,
    title: "Research & Innovation",
    description:
      "We conduct in-depth research in areas such as education, technology, climate, and consumer behavior. Our team blends academic insight with real-world impact to inform policy, improve business strategies, and guide social development.",
    image: "/program5.jpg",
    link: "/services/research",
  },
];

const Programs = () => {
  return (
    <section className="programs-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="programs-container max-w-6xl mx-auto">
        <h1 className="programs-title text-4xl font-bold text-center text-navyBlue mb-12">
          Our Programs
        </h1>

        <div className="programs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program) => (
            <div key={program.id} className="program-card bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="program-card-image w-full h-48 object-cover"
              />
              <div className="program-card-content p-6">
                <h3 className="program-card-title text-2xl font-semibold text-navyBlue mb-4">{program.title}</h3>
                <p className="program-card-description text-gray-600 mb-6">{program.description}</p>
                <a
                  href={program.link}
                  className="program-card-button inline-block bg-deepGreen text-white py-3 px-6 rounded-full hover:bg-teal transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;