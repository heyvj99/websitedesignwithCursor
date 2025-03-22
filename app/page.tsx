import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden">
      <Navigation />
      <Hero />
      <UseCases />
      <Features />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
} 