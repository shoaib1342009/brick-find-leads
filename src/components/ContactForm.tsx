
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    bhk: '',
    budget: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send to your backend/Google Sheets
    console.log('Form submitted:', formData);
    
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 30 minutes.",
    });

    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      bhk: '',
      budget: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Expert Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Fill in your details and our property experts will contact you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-gray-600">info@bookmybrick.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 premium-gradient rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9AM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ RERA verified properties only</li>
                  <li>✓ Zero brokerage for buyers</li>
                  <li>✓ Expert guidance throughout</li>
                  <li>✓ Best price guarantee</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Configuration</Label>
                    <Select value={formData.bhk} onValueChange={(value) => setFormData({...formData, bhk: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select BHK" />
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
                  
                  <div>
                    <Label>Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
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
                </div>

                <div>
                  <Label>Preferred Time to Call</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="When should we call?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM-12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-4PM)</SelectItem>
                      <SelectItem value="evening">Evening (4PM-8PM)</SelectItem>
                      <SelectItem value="anytime">Anytime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full cta-button py-3 text-lg">
                  Get Expert Consultation
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our privacy policy. We'll contact you within 30 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
