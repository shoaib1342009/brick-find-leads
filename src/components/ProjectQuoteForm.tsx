
import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectQuoteFormProps {
  project: {
    id: string;
    name: string;
    location: string;
    bhk: string;
    price: string;
  };
  onClose: () => void;
}

const ProjectQuoteForm = ({ project, onClose }: ProjectQuoteFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    configuration: '',
    budget: '',
    preferredCallTime: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', {
      ...formData,
      projectName: project.name,
      projectLocation: project.location,
      timestamp: new Date().toISOString()
    });
    
    // Here you would typically send the data to your backend/Google Sheets
    setIsSubmitted(true);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Our expert will call you shortly to discuss {project.name}.
            </p>
            <Button onClick={onClose} className="cta-button">
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Get Quote for {project.name}</CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600">{project.location} • {project.price}</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
              />
            </div>

            <div>
              <Label htmlFor="configuration">Configuration Interested</Label>
              <select
                id="configuration"
                name="configuration"
                value={formData.configuration}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Select Configuration</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Select Budget Range</option>
                <option value="20-30L">₹20-30 Lakhs</option>
                <option value="30-50L">₹30-50 Lakhs</option>
                <option value="50L-1Cr">₹50L-1Cr</option>
                <option value="1Cr+">₹1Cr+</option>
              </select>
            </div>

            <div>
              <Label htmlFor="preferredCallTime">Preferred Call Time</Label>
              <select
                id="preferredCallTime"
                name="preferredCallTime"
                value={formData.preferredCallTime}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Select Preferred Time</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                <option value="Anytime">Anytime</option>
              </select>
            </div>

            <div>
              <Label htmlFor="comments">Comments / Requirements (Optional)</Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Any specific requirements or comments..."
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 cta-button">
                Submit Quote Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectQuoteForm;
