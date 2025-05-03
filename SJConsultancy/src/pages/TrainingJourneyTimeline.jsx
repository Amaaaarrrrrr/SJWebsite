import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PlayCircle, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Plan',
    description: 'Generate Your Business Idea (GYB)',
    icon: <Lightbulb className="training-step-icon w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Start',
    description: 'Start Your Business (SYB)',
    icon: <PlayCircle className="training-step-icon w-8 h-8 text-green-500" />,
  },
  {
    title: 'Improve',
    description: 'Improve Your Business (IYB)',
    icon: <TrendingUp className="training-step-icon w-8 h-8 text-blue-500" />,
  },
];

const TrainingJourneyTimeline = () => {
  return (
    <div className="training-journey-container my-16 relative px-4">
      <h2 className="training-journey-title text-2xl font-semibold mb-10 text-center text-gray-800">🚀 Your SIYB Training Journey</h2>

      {/* Timeline line */}
      <div className="training-journey-line absolute left-1/2 md:left-[15%] top-0 bottom-0 w-1 bg-green-300 md:w-full md:h-1 md:top-1/2 md:left-0 md:bottom-auto md:right-0 md:transform md:translate-y-1/2 hidden md:block"></div>
      <div className="training-journey-line-mobile absolute left-4 top-0 bottom-0 w-1 bg-green-300 md:hidden"></div>

      {/* Steps */}
      <div className="training-journey-steps flex flex-col md:flex-row md:justify-between md:items-center space-y-12 md:space-y-0 md:space-x-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="training-step relative z-10 md:w-1/3"
          >
            <div className="training-step-card flex items-center md:flex-col md:items-center text-center bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:border-green-300 transition">
              <div className="training-step-icon-container mb-4 hover:scale-110 transition">{step.icon}</div>
              <div>
                <h3 className="training-step-title text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="training-step-description text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>

            {/* Connecting dot */}
            <div className="training-step-dot-mobile absolute left-[-1.3rem] top-7 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow md:hidden"></div>
            <div className="training-step-dot-desktop hidden md:block absolute top-[-1.3rem] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrainingJourneyTimeline;