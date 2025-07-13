
import React from 'react';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'RERA Verified',
      description: '100% RERA registered properties'
    },
    {
      icon: Award,
      title: 'Premium Builders',
      description: 'Only trusted and reputed developers'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Dedicated property consultants'
    },
    {
      icon: CheckCircle,
      title: 'Legal Clarity',
      description: 'Complete documentation support'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 search-section-spacing">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
