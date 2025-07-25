
import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with House Icon */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/33306de0-aa46-4e04-ab69-048a92b0cfaf.png" 
              alt="Book My Brick" 
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-primary">Book My Brick</h1>
          </div>

          {/* Profile Icon */}
          <div className="flex items-center">
            <User className="w-6 h-6 text-gray-600 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
