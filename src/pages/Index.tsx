
import React from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import TrustSection from '@/components/TrustSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <FeaturedProjects />
      <TrustSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
