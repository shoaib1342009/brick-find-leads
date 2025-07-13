
import React from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import TrustSection from '@/components/TrustSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import CustomerReviews from '@/components/CustomerReviews';
import BlogSection from '@/components/BlogSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection />
      <TrustSection />
      <FeaturedProjects />
      <CustomerReviews />
      <BlogSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
