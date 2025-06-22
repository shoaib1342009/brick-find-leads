
import React, { useState } from 'react';
import { Search, MapPin, Home, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SearchSection = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    budget: '',
    bhk: '',
    propertyType: ''
  });

  const handleSearch = () => {
    console.log('Search initiated with:', searchData);
    // Navigate to listings page with filters
  };

  return (
    <section className="premium-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Find Your Dream Home
          </h2>
          <p className="text-xl text-blue-100">
            Discover RERA verified properties from trusted builders
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by city, area..."
                  className="pl-10"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Budget</label>
              <Select value={searchData.budget} onValueChange={(value) => setSearchData({...searchData, budget: value})}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <IndianRupee className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Select budget" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50">Under ₹50L</SelectItem>
                  <SelectItem value="50-100">₹50L - ₹1Cr</SelectItem>
                  <SelectItem value="100-200">₹1Cr - ₹2Cr</SelectItem>
                  <SelectItem value="200-500">₹2Cr - ₹5Cr</SelectItem>
                  <SelectItem value="above-500">Above ₹5Cr</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* BHK */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">BHK</label>
              <Select value={searchData.bhk} onValueChange={(value) => setSearchData({...searchData, bhk: value})}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Home className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Select BHK" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1rk">1 RK</SelectItem>
                  <SelectItem value="1bhk">1 BHK</SelectItem>
                  <SelectItem value="2bhk">2 BHK</SelectItem>
                  <SelectItem value="3bhk">3 BHK</SelectItem>
                  <SelectItem value="4bhk">4+ BHK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Type</label>
              <Select value={searchData.propertyType} onValueChange={(value) => setSearchData({...searchData, propertyType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={handleSearch}
            className="w-full cta-button py-4 text-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Properties
          </Button>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          {[
            'Near Metro',
            'Ready to Move',
            'Budget Homes',
            'Luxury Projects'
          ].map((category) => (
            <button key={category} className="bg-white/10 backdrop-blur-sm text-white rounded-lg p-4 hover:bg-white/20 transition-all">
              <span className="font-medium">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
