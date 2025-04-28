import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Keys to Growing Your Business Successfully",
    image: "/blog1.jpeg",
    date: "April 20, 2025",
    author: "Jane Samwel",
  },
  {
    id: 2,
    title: "The Power of Data Analytics in Business Growth",
    image: "/blog2.jpeg",
    date: "April 15, 2025",
    author: "S.J Consultancy Team",
  },
  {
    id: 3,
    title: "Monitoring & Evaluation: Why Your Projects Need It",
    image: "/blog3.webp",
    date: "April 10, 2025",
    author: "Jane Samwel",
  },
  {
    id: 4,
    title: "How SIYB Training Helps Entrepreneurs Thrive",
    image: "/blog4.jpeg",
    date: "March 30, 2025",
    author: "S.J Consultancy Team",
  },
  {
    id: 5,
    title: "Top 7 Mistakes to Avoid When Starting a Business",
    image: "/blog5.jpg",
    date: "March 25, 2025",
    author: "Jane Samwel",
  },
  {
    id: 6,
    title: "Using Power BI to Gain Insights into Your Market",
    image: "/blog6.webp",
    date: "March 18, 2025",
    author: "S.J Consultancy Team",
  },
];

const galleryImages = [
  { src: "/gallery1.jpeg", caption: "Conference Meetings" },
  { src: "/gallery2.jpg", caption: "Business Night Out" },
  { src: "/gallery3.png", caption: "Community Outreach Program" },
  { src: "/gallery4.webp", caption: "Cultural Events" },
  { src: "/gallery5.jpg", caption: "Startup Mentorship Program" },
  { src: "/gallery6.avif", caption: "Mentorship Training Program" },
  { src: "/gallery7.jpg", caption: "Annual Business Summit" },
  { src: "/gallery8.webp", caption: "Leadership Training" },
  { src: "/gallery9.jpg", caption: "Registration Program" },
  { src: "/gallery10.webp", caption: "Celebrating Success Stories" },
];

const Blogs = () => {
  return (
    <section className="blogs-section bg-lightGray py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gallery Section */}
        <div className="blogs-gallery">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navyBlue mb-8">
            Our Events
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="blogs-gallery-item">
                <img
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <div className="blogs-gallery-caption">
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blogs Section */}
        <div className="blogs-list">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navyBlue mb-8">
            Blog & Insights
          </h2>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blogs-item bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {post.date} | {post.author}
                  </p>
                  <h3 className="text-xl font-semibold text-navyBlue mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover more insights and tips in this blog post.
                  </p>
                  <Link to={`/blogs/${post.id}`}>
                    <button className="bg-gold text-navyBlue px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;