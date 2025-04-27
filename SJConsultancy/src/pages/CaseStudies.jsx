import React from "react";
import { Link, useParams } from "react-router-dom";
import CaseStudy from "../components/CaseStudy";

// Sample case study data
const caseStudiesData = [
  {
    id: 1,
    title: "Boosting Sales by 150% with Data Analytics",
    content: "Full detailed story about how the business achieved 150% sales growth using deep data analytics, marketing optimizations, and leadership dashboards. We worked closely to identify key bottlenecks and new customer segments. Through personalized campaigns and inventory management, the client not only boosted profits but improved customer loyalty. Results were visible within just three months of implementation.",
    image: "/case1.jpeg",
  },
  {
    id: 2,
    title: "Empowering Startups with SIYB Training",
    content: "Our SIYB program helped numerous first-time business owners turn their ideas into sustainable ventures. Using business simulation games, real-life case discussions, and one-on-one mentorship, participants gained hands-on experience. We tracked performance metrics and profitability over a 6-month span, seeing success rates that outpaced regional norms. Communities benefited greatly from the job creation that followed.",
    image: "/case2.jpeg",
  },
  {
    id: 3,
    title: "Optimizing Business Operations for SMEs",
    content: "We worked with a local SME to streamline operations and reduce inefficiencies. Implementing lean management practices led to a 30% improvement in overall operational efficiency. The workflow was automated, inventory processes improved, and training was provided to staff. The company saw increased productivity, higher customer satisfaction, and greater profitability in a short span of 3 months.",
    image: "/case3.jpeg",
  },
  {
    id: 4,
    title: "Transforming a Consultancy Firm's Client Acquisition Strategy",
    content: "We revamped the client acquisition process for a consultancy firm by implementing strategic marketing initiatives. These included optimized CRM systems, LinkedIn outreach strategies, and personalized onboarding. The consultancy saw a 25% increase in client retention, a boost in new leads, and a notable improvement in overall revenue.",
    image: "/case4.jpeg",
  },
  {
    id: 5,
    title: "Enhancing Monitoring & Evaluation Systems for NGOs",
    content: "We helped an NGO enhance its monitoring and evaluation (M&E) system, leading to better donor reporting and project improvements. Mobile-based data collection tools and monthly review sessions streamlined the process, improving donor confidence and increasing funding renewals by 40%.",
    image: "/case5.jpeg",
  },
  {
    id: 6,
    title: "Driving Growth Through Strategic Partnerships",
    content: "A tech startup looking to scale leveraged strategic partnerships. By collaborating with influencers and complementary businesses, they experienced a 300% growth in their user base within 6 months. This growth also led to new funding opportunities and faster product development.",
    image: "/case6.jpeg",
  },
];

const CaseStudies = () => {
  const { id } = useParams();

  if (id) {
    const caseStudy = caseStudiesData.find((item) => item.id === parseInt(id));

    if (!caseStudy) {
      return (
        <section className="case-studies-not-found bg-lightGray py-12 px-4 md:px-12 min-h-screen text-center">
          <h2 className="case-studies-not-found-title text-2xl font-bold text-navyBlue">Case Study Not Found</h2>
          <Link to="/case-studies" className="case-studies-not-found-link text-deepGreen hover:underline mt-4 block">
            ← Back to Case Studies
          </Link>
        </section>
      );
    }

    return (
      <section className="case-study-detail bg-lightGray py-12 px-4 md:px-12 min-h-screen">
        <div className="case-study-detail-container max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="case-study-detail-image w-full h-64 object-cover rounded-xl mb-6"
          />
          <h1 className="case-study-detail-title text-4xl font-bold text-navyBlue mb-6">{caseStudy.title}</h1>
          <p className="case-study-detail-content text-gray-600 text-lg mb-8">{caseStudy.content}</p>
          <Link
            to="/case-studies"
            className="case-study-detail-back-link bg-deepGreen text-white px-6 py-3 rounded-full hover:bg-teal transition"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="case-studies-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="case-studies-container max-w-6xl mx-auto">
        <h1 className="case-studies-title text-4xl font-bold text-center text-navyBlue mb-12">
          Case Studies
        </h1>
        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy) => (
            <CaseStudy key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;