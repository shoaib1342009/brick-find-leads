
import React from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import TrustSection from '@/components/TrustSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <FeaturedProjects />
      <TrustSection />
      <ContactForm />
      <Footer />
      <StickyMobileCTA />
      {/* Add padding bottom for mobile to account for sticky CTA */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default Index;
