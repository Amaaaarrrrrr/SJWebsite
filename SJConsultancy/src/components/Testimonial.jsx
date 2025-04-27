import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO of XYZ Corp',
    feedback: 'S.J Consultancy has completely transformed the way we approach business strategy. Their tailored advice and data-driven insights have helped us double our revenue in just six months.',
    videoUrl: 'DIFCMtzg7xg', 
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Founder of ABC Ltd.',
    feedback: 'The training workshops provided by S.J Consultancy were hands-on and very insightful. We gained practical tools and strategies to enhance our business operations.',
    videoUrl: '8LSt8_11wbQ',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Marketing Director at DEF Industries',
    feedback: 'Their consulting services helped us revamp our marketing strategies. We’ve seen incredible results in both customer engagement and sales.',
    videoUrl: 'Jw7s42Op2ao',
  },
  {
    id: 4,
    name: 'Michael Davis',
    role: 'Operations Manager at GHI Enterprises',
    feedback: 'S.J Consultancy helped us streamline our operations, and the efficiency gains have been remarkable. Their insights into supply chain management were invaluable.',
    videoUrl: 'HSgjpQBkR0c',
  },
  {
    id: 5,
    name: 'Sarah Lee',
    role: 'COO at JKL Solutions',
    feedback: 'The customized consulting services provided by S.J Consultancy have been game-changers for us. Their deep understanding of data analytics has led to measurable improvements in decision-making.',
    videoUrl: '0F9NViANva8',
  },
  {
    id: 6,
    name: 'David Miller',
    role: 'Founder of MNO Startups',
    feedback: 'The hands-on training and mentorship provided by S.J Consultancy were beyond what we expected. The team helped us develop a sustainable business model that we are now implementing.',
    videoUrl: 'HPVfdg86lOc',
  },
  {
    id: 7,
    name: 'Anna Williams',
    role: 'Director of HR at PQR Inc.',
    feedback: 'S.J Consultancy’s workshops on leadership and team building have transformed our company culture. Our employees are now more engaged, and productivity has increased significantly.',
    videoUrl: 'L-fm0Fvygi0',
  },
  {
    id: 8,
    name: 'James Robinson',
    role: 'Founder of STU Ltd.',
    feedback: 'The comprehensive marketing strategies and tools that S.J Consultancy provided have helped us grow our online presence. Their focus on ROI has truly paid off.',
    videoUrl: '3jgBLjumsjo',
  },
  {
    id: 9,
    name: 'Laura Davis',
    role: 'Chief Marketing Officer at VWX Corp.',
    feedback: 'S.J Consultancy has been instrumental in helping us improve our social media marketing campaigns. We’ve seen a dramatic increase in engagement and conversions.',
    videoUrl: 'VCPGMjCW0is',
  },
  {
    id: 10,
    name: 'Paul Jackson',
    role: 'Founder of YZA Technologies',
    feedback: 'We were struggling with implementing data analytics in our business, but S.J Consultancy provided the guidance and expertise we needed. Their tailored solutions have been extremely effective.',
    videoUrl: 'o-Ikkh5oxuo',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section bg-lightGray py-12 px-4 md:px-12">
    <h2 className="testimonial-section-title text-3xl font-bold text-center text-navyBlue mb-12">
      What Our Clients Say
    </h2>


    <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="testimonial-name text-xl font-semibold text-deepGreen mb-4">{testimonial.name}</h3>
            <p className="testimonial-role text-gray-600 mb-4">{testimonial.role}</p>
            <p className="testimonial-feedback text-gray-700 mb-6">{testimonial.feedback}</p>

            
            {/* Video Embed */}
            {testimonial.videoUrl && (
              <div className="testimonial-video mb-4">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${testimonial.videoUrl}`}
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
