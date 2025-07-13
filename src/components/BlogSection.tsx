
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Areas to Invest in Mumbai Real Estate 2024",
      excerpt: "Discover the most promising locations for real estate investment in Mumbai with highest potential returns.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      date: "December 15, 2024",
      category: "Investment Guide"
    },
    {
      id: 2,
      title: "RERA Guidelines: What Every Home Buyer Should Know",
      excerpt: "Complete guide to understanding RERA regulations and how they protect your property investment.",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=250&fit=crop",
      date: "December 12, 2024",
      category: "Legal Guide"
    },
    {
      id: 3,
      title: "Home Loan Interest Rates: Latest Updates & Tips",
      excerpt: "Current home loan rates from top banks and strategies to get the best deal on your mortgage.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "December 10, 2024",
      category: "Finance"
    },
    {
      id: 4,
      title: "Luxury vs Affordable Housing: Making the Right Choice",
      excerpt: "Compare luxury and affordable housing options to make an informed decision for your next property purchase.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
      date: "December 8, 2024",
      category: "Buying Guide"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Real Estate Insights
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with market trends, tips, and expert advice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
