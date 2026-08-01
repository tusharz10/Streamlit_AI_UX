import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, MessageSquare, Zap, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,240,255,0.1)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/30 p-1 bg-slate-950/80 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <img 
              src="/BITA_LOGO.png" 
              alt="BITA Logo" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = 'https://avatars.githubusercontent.com/u/155072885?v=4'; }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-wide text-white group-hover:text-cyan-400 transition-colors">
              BITA <span className="gradient-text-cyan">CLOUD</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Info Tech Services
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400/70" /> Platform
          </a>
          <a href="#showcase" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            Showcase
          </a>
          <a href="#ai-insights" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-purple-400/80" /> AI Blueprint
          </a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/918982296014" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp-direct text-sm py-2 px-4"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-400 bg-slate-900/60 border border-slate-800 rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            <a 
              href="#platform" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>Platform & Tech Stack</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a 
              href="#showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>Interactive Showcase</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a 
              href="#ai-insights" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>AI Architecture Blueprint</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>About BITA</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60 flex items-center justify-between"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
            <div className="pt-2">
              <a 
                href="https://wa.me/918982296014" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp-direct w-full justify-center text-center py-3"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Chat on WhatsApp (+91 89822 96014)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
