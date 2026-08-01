import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformGrid from './components/PlatformGrid';
import ShowcaseCarousel from './components/ShowcaseCarousel';
import AiBlueprintSimulator from './components/AiBlueprintSimulator';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <PlatformGrid />
        <ShowcaseCarousel />
        <AiBlueprintSimulator />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
