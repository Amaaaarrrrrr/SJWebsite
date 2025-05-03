import React from 'react';
import TrainingJourneyTimeline from './TrainingJourneyTimeline'; // Adjust path as needed
import UpcomingTrainings from './UpcomingTrainings';
const SiybTraining = () => {
  return (
    
    <div className="siyb-training-page p-6 max-w-6xl mx-auto space-y-10">
      <h1 className="siyb-training-title text-4xl font-bold text-green-700">Start and Improve Your Business (SIYB) Training</h1>

      {/* Description of SIYB Framework */}
      <TrainingJourneyTimeline />
      <section className="siyb-framework-section">
        <h2 className="siyb-framework-title text-2xl font-semibold mb-2">📘 What is the SIYB Framework?</h2>
        <p className="siyb-framework-description text-gray-700 text-lg">
          SIYB (Start and Improve Your Business) is a practical, action-oriented training program developed by the
          <a href="https://www.ilo.org/global/topics/cooperatives/WCMS_175470/lang--en/index.htm" target="_blank" rel="noopener noreferrer" className="siyb-framework-link text-green-600 underline ml-1">
            International Labour Organization (ILO)
          </a>
          . It equips entrepreneurs and small business owners with essential knowledge and skills to launch and grow sustainable businesses.
        </p>
      </section>

      {/* Types of Trainings */}
      <section className="siyb-training-types-section">
        <h2 className="siyb-training-types-title text-2xl font-semibold mb-2">📚 Types of Trainings Offered</h2>
        <ul className="siyb-training-types-list list-disc list-inside space-y-2 text-gray-800 text-base">
          <li><strong>GYB – Generate Your Business Idea:</strong> For aspiring entrepreneurs looking to explore business opportunities.</li>
          <li><strong>SYB – Start Your Business:</strong> For those ready to take the first step in launching their enterprise.</li>
          <li><strong>IYB – Improve Your Business:</strong> For existing business owners aiming to enhance operations, profitability, and growth.</li>
        </ul>
      </section>

      {/* Target Audience */}
      <section className="siyb-target-audience-section">
        <h2 className="siyb-target-audience-title text-2xl font-semibold mb-2">🎯 Who is this training for?</h2>
        <p className="siyb-target-audience-description text-gray-700 text-base">
          Our programs are tailored for:
        </p>
        <ul className="siyb-target-audience-list list-disc list-inside text-gray-800 mt-2">
          <li>Youth & recent graduates</li>
          <li>Women entrepreneurs</li>
          <li>Micro, Small & Medium Enterprises (MSMEs)</li>
          <li>Cooperative societies</li>
          <li>Refugees and vulnerable groups</li>
        </ul>
      </section>

      {/* Schedule and Registration */}
      <section>
      <UpcomingTrainings />
      </section>

      {/* Testimonials */}
      <section className="siyb-testimonials-section">
        <h2 className="siyb-testimonials-title text-2xl font-semibold mb-2">💬 What Participants Say</h2>
        <div className="siyb-testimonials-grid grid md:grid-cols-2 gap-6">
          <blockquote className="siyb-testimonial bg-white shadow p-4 rounded-lg border-l-4 border-green-600 text-gray-700 italic">
            “The SYB training gave me the confidence and tools to finally start my beauty business. The mentorship was a game-changer!”<br />
            <span className="siyb-testimonial-author block mt-2 font-bold text-green-700">— Sarah N., Nairobi</span>
          </blockquote>
          <blockquote className="siyb-testimonial bg-white shadow p-4 rounded-lg border-l-4 border-green-600 text-gray-700 italic">
            “As a cooperative manager, the IYB training helped us streamline operations and increase our member engagement.”<br />
            <span className="siyb-testimonial-author block mt-2 font-bold text-green-700">— Peter M., Eldoret</span>
          </blockquote>
        </div>
      </section>

      <section className="siyb-online-training-section grid md:grid-cols-2 gap-6 items-center">
  <div>
    <h2 className="siyb-online-training-title text-2xl font-semibold mb-2">💻 Online & Blended Learning Options</h2>
    <p className="siyb-online-training-description text-gray-700 text-base">
      Can’t attend in person? No worries. We offer SIYB training online through interactive e-learning platforms and virtual workshops.
    </p>
    <a
      href="/programs"
      className="siyb-online-training-button inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
    >
      Explore E-Learning →
    </a>
  </div>
  <div>
    <img
      src="/SIYB1.jpg"
      alt="Online Training"
      className="siyb-online-training-image rounded-xl shadow-md w-full"
    />
  </div>
</section>


    </div>
  );
};

export default SiybTraining;
