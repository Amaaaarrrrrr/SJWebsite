import React, { useState } from "react";

const faqsData = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including business consulting, training, and digital marketing solutions. We specialize in helping businesses grow using data-driven strategies and personalized solutions. Our team works closely with you to understand your specific needs and provide customized strategies for growth, profitability, and sustainability.",
    },
    {
      question: "How do I get in touch with customer support?",
      answer: "You can reach out to our customer support team through the 'Contact Us' page or email us directly at support@example.com. Our team is available Monday to Friday, 9 AM - 6 PM. We strive to respond to all inquiries within 24 hours to ensure timely assistance.",
    },
    {
      question: "Can I request a custom service?",
      answer: "Yes, we offer custom services tailored to your business needs. You can discuss your requirements with our team, and we will create a personalized solution to help you achieve your goals. Whether it's developing a unique marketing strategy, creating specific training modules, or setting up data analytics tools, we are equipped to design solutions that fit your exact needs.",
    },
    {
      question: "Do you offer any discounts?",
      answer: "We occasionally offer promotional discounts for specific services. Make sure to subscribe to our newsletter or follow us on social media to stay updated on our latest offers. Additionally, we provide special rates for long-term clients and businesses enrolling in multiple services.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day refund policy for our consulting services if you are not satisfied with the outcome. If you feel that the service you received didn't meet your expectations, you can request a refund within 30 days of your purchase. Please review our full refund policy on the website for more details, including any exclusions or conditions.",
    },
    {
      question: "How long does it take to complete a consultation?",
      answer: "The duration of a consultation depends on the complexity of the service you are seeking. A typical consultation might last between 30 minutes to 2 hours, depending on the scope. We also offer ongoing consultations for long-term projects, where we meet regularly to assess progress and adjust strategies as needed.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have experience working with a variety of industries, including retail, technology, healthcare, education, and non-profit organizations. Our team has specialized knowledge of the challenges and opportunities specific to each sector, which allows us to provide highly relevant advice and solutions tailored to your industry's needs.",
    },
    {
      question: "Are your services available internationally?",
      answer: "Yes, we provide services to clients globally. With remote consultations and virtual training options, we are able to support businesses and organizations worldwide. Whether you're based in North America, Europe, Asia, or elsewhere, we can deliver the same high-quality service tailored to your local market.",
    },
    {
      question: "Do you offer post-service support?",
      answer: "Absolutely! We offer ongoing support after the initial consultation or service is completed. Whether it's follow-up consultations, troubleshooting, or advice on how to implement the solutions we provided, we are here to assist you every step of the way. Our goal is to ensure the long-term success of your business.",
    },
    {
      question: "How do I book a consultation with you?",
      answer: "You can easily book a consultation through our website by filling out the booking form on the 'Book a Consultation' page. Alternatively, you can reach us by email or phone, and our team will assist you in scheduling a convenient time. We offer both in-person and virtual consultations depending on your location and preferences.",
    },
  ];
  
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);  // Store the active question
    

  // Handle toggle of FAQ answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);  // Toggle the active index
    
  };

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-center text-navyBlue mb-8">
          Frequently Asked Questions
        </h1>
        
    

        {/* Accordion FAQ */}
        <div>
          {faqsData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left p-4 bg-navyBlue text-white font-bold rounded-lg shadow-md hover:bg-deepGreen transition"
              >
                {faq.question}
              </button>

              {activeIndex === index && (
                <div className="p-4 mt-2 bg-lightGray rounded-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
