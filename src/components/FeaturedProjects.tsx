
import React from 'react';
import { MapPin, Home, IndianRupee, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Sunshine Residency",
      location: "Andheri West, Mumbai",
      price: "₹1.2Cr - ₹2.8Cr",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      bhk: "2-3 BHK",
      possession: "Dec 2025",
      rera: "VERIFIED",
      badges: ["RERA", "Near Metro", "Ready Soon"],
      sqft: "850-1200 sq.ft"
    },
    {
      id: 2,
      name: "Green Valley Heights",
      location: "Whitefield, Bangalore",
      price: "₹85L - ₹1.5Cr",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop",
      bhk: "2-3 BHK",
      possession: "Ready to Move",
      rera: "VERIFIED",
      badges: ["RERA", "IT Hub", "Ready"],
      sqft: "950-1350 sq.ft"
    },
    {
      id: 3,
      name: "Royal Gardens",
      location: "Gurgaon Sector 65",
      price: "₹1.8Cr - ₹3.2Cr",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      bhk: "3-4 BHK",
      possession: "Mar 2026",
      rera: "VERIFIED",
      badges: ["RERA", "Golf Course", "Luxury"],
      sqft: "1200-1800 sq.ft"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Handpicked premium properties from verified developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="property-card overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="trust-badge">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.rera}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price</span>
                    <span className="font-semibold text-primary">{project.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Configuration</span>
                    <span className="font-medium">{project.bhk}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Area</span>
                    <span className="font-medium">{project.sqft}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Possession</span>
                    <span className="font-medium flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {project.possession}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button className="flex-1 cta-button">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
