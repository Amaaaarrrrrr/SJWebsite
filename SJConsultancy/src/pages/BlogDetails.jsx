import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Keys to Growing Your Business Successfully",
    excerpt: "Building a successful business requires more than just a good idea. It takes effective strategies to sustain growth and ensure long-term success. In today's highly competitive market, entrepreneurs need to focus on key areas like customer acquisition, product development, market analysis, and financial management. These components work together to provide a solid foundation for a thriving business. Additionally, creating a unique value proposition and establishing strong relationships with clients are crucial for differentiation. Constant innovation, adaptability to market trends, and continuous improvement should be at the core of your business strategy. By following these essential principles, you can set your business on the path to long-term success.",
    image: "/blog1.jpeg",
    date: "April 20, 2025",
    author: "Jane Samwel",
  },
  {
    id: 2,
    title: "The Power of Data Analytics in Business Growth",
    excerpt: "In today's digital age, data is a powerful tool that can significantly impact business growth. Data analytics allows businesses to understand customer behavior, predict trends, and optimize decision-making. By harnessing the power of data, businesses can improve operational efficiency, enhance marketing strategies, and drive innovation. Through data analysis, small businesses can compete with larger enterprises by identifying opportunities that would otherwise go unnoticed. Understanding your market through data enables smarter investments, better customer targeting, and more effective product development. Embracing data-driven strategies helps businesses stay ahead in a rapidly evolving market. Learn how to leverage data analytics to fuel your company's success.",
    image: "/blog2.jpeg",
    date: "April 15, 2025",
    author: "S.J Consultancy Team",
  },
  {
    id: 3,
    title: "Monitoring & Evaluation: Why Your Projects Need It",
    excerpt: "Effective monitoring and evaluation (M&E) are essential for ensuring that projects achieve their intended outcomes. M&E allows project managers to track progress, identify potential issues early, and make adjustments to stay on course. A robust M&E system helps organizations maximize resources, improve efficiency, and measure impact. By evaluating the effectiveness of project activities, businesses can make informed decisions that lead to better results. M&E also plays a crucial role in reporting to stakeholders and securing future funding. Learn how to design and implement a strong M&E framework that will enhance the success of your projects and initiatives.",
    image: "/blog3.webp",
    date: "April 10, 2025",
    author: "Jane Samwel",
  },
  {
    id: 4,
    title: "How SIYB Training Helps Entrepreneurs Thrive",
    excerpt: "Start and Improve Your Business (SIYB) training provides entrepreneurs with the knowledge and skills they need to successfully launch and manage their businesses. This training covers key aspects such as business planning, financial management, marketing, and customer service. By equipping entrepreneurs with practical tools, SIYB helps reduce common startup failures. Whether you're just starting out or looking to scale, SIYB training offers valuable insights and resources to navigate challenges and seize opportunities. Entrepreneurs who undergo SIYB training gain confidence in managing their business and are better prepared to handle the complexities of the business world. Learn more about how SIYB can help you thrive as an entrepreneur.",
    image: "/blog4.jpeg",
    date: "March 30, 2025",
    author: "S.J Consultancy Team",
  },
  {
    id: 5,
    title: "Top 7 Mistakes to Avoid When Starting a Business",
    excerpt: "Starting a business can be a daunting task, and entrepreneurs often make avoidable mistakes that can hinder their success. From underestimating the importance of market research to mismanaging cash flow, these mistakes can be costly. Not having a clear business plan, neglecting customer feedback, and overextending resources are other common pitfalls. Entrepreneurs should also be mindful of choosing the right business structure and managing their time effectively. Understanding the importance of building a strong network and seeking mentorship is crucial for success. In this post, we cover the top mistakes to avoid and provide actionable advice on how to avoid them, ensuring that your startup has the best chance for success.",
    image: "/blog5.jpg",
    date: "March 25, 2025",
    author: "Jane Samwel",
  },
  {
    id: 6,
    title: "Using Power BI to Gain Insights into Your Market",
    excerpt: "Power BI is a powerful tool that can help businesses extract valuable insights from their data. By creating interactive dashboards, business owners can visualize key metrics and make data-driven decisions. Power BI allows users to integrate data from various sources, providing a comprehensive view of customer behavior, sales trends, and market performance. With real-time data updates, businesses can quickly identify opportunities and areas for improvement. Power BI’s easy-to-use interface makes it accessible to non-technical users, allowing teams to collaborate and share insights effectively. This post explores how Power BI can be used to gain a competitive edge in the market and enhance decision-making processes.",
    image: "/blog6.webp",
    date: "March 18, 2025",
    author: "S.J Consultancy Team",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  // If blog is not found, display a not-found message
  if (!blog) {
    return (
      <div className="blog-details-not-found-container min-h-screen flex flex-col items-center justify-center">
        <h2 className="blog-details-not-found-title text-3xl text-navyBlue font-bold">Blog Not Found</h2>
        <Link
          to="/blogs"
          className="blog-details-not-found-link mt-6 bg-deepGreen text-white px-6 py-3 rounded-full hover:bg-teal transition"
        >
          Go Back to Blogs
        </Link>
      </div>
    );
  }

  // If blog is found, render the blog details
  return (
    <section className="blog-details-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="blog-details-container max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-details-image w-full h-48 object-cover rounded-xl mb-6"
        />
        <p className="blog-details-meta text-sm text-gray-500 mb-2">{blog.date} | {blog.author}</p>
        <p className="blog-details-excerpt text-gray-700 text-sm">{blog.excerpt}</p>
        <h1 className="blog-details-title text-4xl font-bold text-navyBlue mb-6">{blog.title}</h1>
        <p className="blog-details-content text-gray-700 text-lg">{blog.content}</p>
  
        <div className="blog-details-back-link-container mt-8">
          <Link
            to="/blogs"
            className="blog-details-back-link bg-deepGreen text-white px-6 py-3 rounded-full hover:bg-teal transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;