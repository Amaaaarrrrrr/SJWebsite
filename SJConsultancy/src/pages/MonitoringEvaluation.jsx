import React from 'react';
import { BarChart2, ClipboardCheck, Target, GraduationCap } from 'lucide-react';
import MEDashboard from './MEDashboard';
const MonitoringEvaluation = () => {
  return (
    <div className="monitoring-evaluation-page px-6 py-12 max-w-6xl mx-auto">
      <h1 className="monitoring-evaluation-title text-3xl font-bold mb-6 text-green-800 text-center">📊 Monitoring & Evaluation (M&E)</h1>

      <p className="monitoring-evaluation-description text-gray-700 text-lg mb-10 text-center">
        Our Monitoring & Evaluation services empower organizations to track, assess, and optimize the impact of their
        projects and programs. We help you turn data into insights that guide smart decisions and sustainable growth.
      </p>

      {/* Key Services */}
      <MEDashboard />
      <div className="monitoring-evaluation-services grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <ServiceCard
          icon={<BarChart2 className="monitoring-evaluation-icon text-green-600 w-8 h-8" />}
          title="Impact Assessments"
          desc="We measure outcomes and real-world change brought about by your programs and projects."
        />
        <ServiceCard
          icon={<ClipboardCheck className="monitoring-evaluation-icon text-green-600 w-8 h-8" />}
          title="M&E Frameworks"
          desc="We design logical frameworks, indicator matrices, and custom data collection tools."
        />
        <ServiceCard
          icon={<Target className="monitoring-evaluation-icon text-green-600 w-8 h-8" />}
          title="Performance Tracking"
          desc="Track KPIs, milestones, and deliverables in real time using modern dashboards and reports."
        />
        <ServiceCard
          icon={<GraduationCap className="monitoring-evaluation-icon text-green-600 w-8 h-8" />}
          title="Capacity Building"
          desc="We offer training and mentorship in Results-Based Management and Theory of Change."
        />
      </div>

      {/* Image + Timeline */}
      <div className="monitoring-evaluation-process flex flex-col md:flex-row gap-10 items-center mb-16">
        <img className="monitoring-evaluation-image rounded-xl shadow-md w-full md:w-1/2"
          src="/data.jpg"
          alt="Data monitoring"
          
        />
        <div className="monitoring-evaluation-steps space-y-4 md:w-1/2">
          <h3 className="monitoring-evaluation-process-title text-xl font-semibold text-green-700">🛠 Our Process</h3>
          <ul className="monitoring-evaluation-process-list space-y-3 text-gray-700">
            <li><strong>1. Planning:</strong> Define goals, KPIs, and data sources.</li>
            <li><strong>2. Data Collection:</strong> Use surveys, interviews, and field tools.</li>
            <li><strong>3. Analysis:</strong> Interpret data to generate actionable insights.</li>
            <li><strong>4. Reporting:</strong> Clear visual reports and stakeholder dashboards.</li>
            <li><strong>5. Action:</strong> Inform strategy, policy, or course correction.</li>
          </ul>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="monitoring-evaluation-testimonials bg-green-50 py-8 px-6 rounded-xl shadow-inner mb-12">
        <h3 className="monitoring-evaluation-testimonials-title text-2xl text-green-800 font-semibold mb-6 text-center">🌟 What Our Partners Say</h3>
        <div className="monitoring-evaluation-testimonials-text text-center text-gray-700 italic max-w-3xl mx-auto">
          “Thanks to your M&E support, we were able to restructure our program based on evidence, not assumptions. Our funders loved the clarity in our new reports.” <br />
          <span className="monitoring-evaluation-testimonials-author font-bold not-italic text-sm block mt-2">– Program Director, Local NGO</span>
        </div>
      </div>

      {/* CTA */}
      <div className="monitoring-evaluation-cta text-center">
        <h3 className="monitoring-evaluation-cta-title text-xl font-semibold text-gray-800 mb-4">📥 Ready to elevate your project impact?</h3>
        <a href='/bookings' className="monitoring-evaluation-cta-button bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
};

// ServiceCard subcomponent
const ServiceCard = ({ icon, title, desc }) => (
  <div className="monitoring-evaluation-service-card bg-white shadow-sm border border-green-100 rounded-xl p-6 flex items-start space-x-4 hover:shadow-md transition">
    {icon}
    <div>
      <h4 className="monitoring-evaluation-service-card-title text-lg font-semibold text-gray-800">{title}</h4>
      <p className="monitoring-evaluation-service-card-description text-gray-600">{desc}</p>
    </div>
  </div>
);

export default MonitoringEvaluation;