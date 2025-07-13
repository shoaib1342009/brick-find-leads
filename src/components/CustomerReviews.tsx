
import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      review: "Excellent experience with Book My Brick. They helped me find my dream home in Powai. Very professional and transparent.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Pune",
      rating: 5,
      review: "Found the perfect 3BHK apartment through Book My Brick. The team was very supportive throughout the process.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 4,
      review: "Great service and genuine listings. The RERA verification gave me confidence in making the purchase.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      review: "Highly recommend Book My Brick for property investment. They provided excellent market insights.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Rohit Singh",
      location: "Delhi",
      rating: 5,
      review: "Smooth transaction and excellent customer service. Got the best deal in Gurgaon through their platform.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Kavya Nair",
      location: "Bangalore",
      rating: 4,
      review: "Professional team with deep market knowledge. They made my home buying journey stress-free.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from happy homeowners
          </p>
        </div>
      </div>

      {/* First Row - Moving Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-right hover:pause-animation">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`row1-${index}`}
              className="min-w-[280px] w-[280px] mx-3 bg-white rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative">
        <div className="flex animate-scroll-left hover:pause-animation">
          {duplicatedReviews.map((review, index) => (
            <div
              key={`row2-${index}`}
              className="min-w-[280px] w-[280px] mx-3 bg-white rounded-lg shadow-md p-4 flex-shrink-0"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-600">{review.location}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
