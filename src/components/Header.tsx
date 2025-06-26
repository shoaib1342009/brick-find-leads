
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable Home Button */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/b3b0b81b-aa6c-452e-ac09-0863ad54770c.png" 
              alt="Book My Brick Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Book My Brick</h1>
              <p className="text-xs text-gray-500">Verified Properties</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-primary">Call Now</p>
              <p className="text-xs text-gray-500">+91 98765 43210</p>
            </div>
            <Button size="sm" className="cta-button text-black">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
