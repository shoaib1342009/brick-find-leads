
import React from 'react';
import { CheckCircle, Shield, Users, Award } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "RERA Verified",
      description: "All projects are RERA registered and verified"
    },
    {
      icon: Users,
      title: "500+ Happy Families",
      description: "Successfully helped families find their dream homes"
    },
    {
      icon: CheckCircle,
      title: "Trusted Partner",
      description: "Authorized channel partner with top builders"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional real estate consultation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Book My Brick?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect home with complete transparency and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 premium-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
