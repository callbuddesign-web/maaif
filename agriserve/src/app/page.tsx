import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import MinisterWelcome from '@/app/components/MinisterWelcome';
import DirectoratesSection from '@/app/components/DirectoratesSection';
import NewsSection from '@/app/components/NewsSection';
import NewsletterCTA from '@/app/components/NewsletterCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MinisterWelcome />
      <DirectoratesSection />
      <NewsSection />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}