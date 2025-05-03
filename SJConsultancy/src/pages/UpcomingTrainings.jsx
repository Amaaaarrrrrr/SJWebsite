import React from 'react';

const trainings = [
  {
    title: "GYB – Generate Your Business Idea",
    date: "June 10–12, 2025",
    audience: "Youth and aspiring entrepreneurs",
    location: "Nairobi Training Center",
  },
  {
    title: "SYB – Start Your Business",
    date: "July 1–5, 2025",
    audience: "Women-led MSMEs",
    location: "Kisumu Business Hub",
  },
  {
    title: "IYB – Improve Your Business",
    date: "August 20–24, 2025",
    audience: "Established small businesses and cooperatives",
    location: "Mombasa Innovation Centre",
  },
  {
    title: "SIYB Online Bootcamp",
    date: "September 9–13, 2025",
    audience: "Remote learners, youth & rural SMEs",
    location: "Online (Zoom)",
  },
];

const UpcomingTrainings = () => {
  return (
    <section className="my-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-10 text-green-700">📅 Upcoming SIYB Trainings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t.title}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {t.date}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Audience:</strong> {t.audience}</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Location:</strong> {t.location}</p>
            
                <a href="/programs">
                    Book Now
                </a>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingTrainings;
