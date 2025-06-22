
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Phone, MessageCircle, FileText, Clock, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectQuoteForm from '@/components/ProjectQuoteForm';
import { getProjectById } from '@/utils/projectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${project.name} at ${project.location}. Please share more details.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const amenityIcons = {
    'Gym': '🏋️',
    'Swimming Pool': '🏊',
    'Kids Play Area': '🎪',
    'Parking': '🚗',
    'Garden': '🌳',
    'Lift': '🛗',
    'CCTV': '📹',
    '24x7 Water': '💧',
    'Power Backup': '⚡'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute top-4 left-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/')}
            className="bg-white/90 hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h1>
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{project.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="text-xl md:text-2xl font-bold">{project.price}</div>
              <div className="flex gap-2">
                {project.badges.map((badge) => (
                  <Badge key={badge} className="trust-badge">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="sticky top-16 bg-white border-b shadow-sm z-40 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3">
            <Button onClick={handleCall} className="bg-blue-500 hover:bg-blue-600">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={() => setShowQuoteForm(true)} className="cta-button">
              <FileText className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Builder</p>
                    <p className="font-semibold">{project.builder}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Area</p>
                    <p className="font-semibold">{project.totalArea}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Possession</p>
                    <p className="font-semibold flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.possession}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">RERA Number</p>
                    <p className="font-semibold">{project.reraNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                      {project.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Configuration</p>
                    <p className="font-semibold">{project.bhk}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price & Configuration */}
            <Card>
              <CardHeader>
                <CardTitle>Price & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Area (sq.ft)</th>
                        <th className="text-left py-2">All-Inclusive Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.priceTable.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 font-medium">{row.type}</td>
                          <td className="py-3">{row.area}</td>
                          <td className="py-3 font-semibold text-primary">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {project.offers && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="font-medium text-yellow-800">Special Offers: {project.offers}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{amenityIcons[amenity] || '✓'}</span>
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Location Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.locationHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Map Embed */}
                <div className="mt-6 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Map Location</p>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleCall} className="w-full bg-blue-500 hover:bg-blue-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button onClick={() => setShowQuoteForm(true)} className="w-full cta-button">
                  <FileText className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-semibold">{project.price.split(' - ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RERA Status</span>
                    <Badge className="trust-badge">Verified</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Possession</span>
                    <span className="font-semibold">{project.possession}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Quote Form Modal */}
      {showQuoteForm && (
        <ProjectQuoteForm 
          project={project}
          onClose={() => setShowQuoteForm(false)}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
