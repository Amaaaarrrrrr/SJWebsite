import React from "react";
import FAQ from "../components/FAQs";

const FAQPage = () => {
  return (
    <section className="faq-page-section min-h-screen bg-lightGray py-12 px-4 md:px-12">
      <div className="faq-page-container max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="faq-page-title text-4xl font-bold text-center text-navyBlue mb-8">
          Frequently Asked Questions
        </h1>
        <p className="faq-page-subtitle text-lg text-center text-gray-700 mb-12">
          Have questions? We've got you covered. Browse through our frequently
          asked questions below.
        </p>

        <FAQ />
      </div>
    </section>
  );
};

export default FAQPage;