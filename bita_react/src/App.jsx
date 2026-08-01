import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CertifiedTeamSection from './components/CertifiedTeamSection';
import IndustriesSection from './components/IndustriesSection';
import PlatformGrid from './components/PlatformGrid';
import StatsBanner from './components/StatsBanner';
import TestimonialsPartners from './components/TestimonialsPartners';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#a3e635] selection:text-[#07090e] transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <CertifiedTeamSection />
        <IndustriesSection />
        <PlatformGrid />
        <StatsBanner />
        <TestimonialsPartners />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
