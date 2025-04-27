import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO of XYZ Corp',
    feedback: 'S.J Consultancy has completely transformed the way we approach business strategy. Their tailored advice and data-driven insights have helped us double our revenue in just six months.',
    videoUrl: 'https://www.youtube.com/embed/example-video-url', // Replace with actual video URLs
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Founder of ABC Ltd.',
    feedback: 'The training workshops provided by S.J Consultancy were hands-on and very insightful. We gained practical tools and strategies to enhance our business operations.',
    videoUrl: 'https://www.youtube.com/embed/example-video-url',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Marketing Director at DEF Industries',
    feedback: 'Their consulting services helped us revamp our marketing strategies. We’ve seen incredible results in both customer engagement and sales.',
    videoUrl: 'https://www.youtube.com/embed/example-video-url',
  },
];

const Testimonial = () => {
  return (
    <div className="bg-lightGray py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-navyBlue mb-12">What Our Clients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-deepGreen mb-4">{testimonial.name}</h3>
            <p className="text-gray-600 mb-4">{testimonial.role}</p>
            <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
            
            {/* Video Embed */}
            {testimonial.videoUrl && (
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="315"
                  src={testimonial.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Testimonial from ${testimonial.name}`}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
