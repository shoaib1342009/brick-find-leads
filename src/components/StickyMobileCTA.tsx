
import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyMobileCTA = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your properties. Please share more details.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleGetDetails = () => {
    // Scroll to contact form or open modal
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 md:hidden">
      <div className="grid grid-cols-3 gap-2 p-3">
        <Button 
          onClick={handleWhatsApp}
          className="flex flex-col items-center py-3 bg-green-500 hover:bg-green-600 text-white"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs">WhatsApp</span>
        </Button>
        
        <Button 
          onClick={handleCall}
          className="flex flex-col items-center py-3 bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs">Call Now</span>
        </Button>
        
        <Button 
          onClick={handleGetDetails}
          className="flex flex-col items-center py-3 cta-button text-black"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-xs">Get Details</span>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
