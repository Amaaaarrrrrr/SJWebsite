import React from 'react';

const programsData = [
  {
    id: 1,
    title: "Business Consultancy",
    description: "We offer tailored business consultancy services designed to optimize your operations, increase profitability, and streamline processes. Our expert consultants work with you to identify pain points and deliver actionable solutions. ",
    image: "/business-consultancy.jpg",
  },
  {
    id: 2,
    title: "Training and Workshops",
    description: "Our training programs provide practical skills in areas like digital marketing, project management, and data analytics. Through hands-on workshops, we equip your team with the knowledge to grow and thrive in today's competitive market.",
    image: "/training-workshops.jpg",
  },
  {
    id: 3,
    title: "Monitoring & Evaluation Support",
    description: "We help organizations optimize their monitoring and evaluation processes, ensuring effective program tracking and reporting. Our services improve project outcomes through better data management and analysis.",
    image: "/monitoring-evaluation.jpg",
  },
  {
    id: 4,
    title: "Data Analytics Setup",
    description: "With our data analytics services, we help organizations set up efficient systems to collect, analyze, and interpret data. These insights can drive informed decisions, improve performance, and give your business a competitive edge.",
    image: "/data-analytics.jpg",
  },
];

const Programs = () => {
  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-navyBlue mb-12">
          Our Programs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-navyBlue mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <a
                  href="/bookings" 
                  className="inline-block bg-deepGreen text-white py-3 px-6 rounded-full hover:bg-teal transition"
                >
                  Book Us Now
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
