import { Link } from "react-router-dom";

function CaseStudy({ caseStudy }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={caseStudy.image}
        alt={caseStudy.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-navyBlue mb-2">{caseStudy.title}</h3>
        <p className="text-gray-700 mb-4">{caseStudy.excerpt}</p>
        <Link
          to={`/case-studies/${caseStudy.id}`}
          className="bg-deepGreen text-white py-2 px-6 rounded-full hover:bg-teal transition text-sm"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default CaseStudy;
