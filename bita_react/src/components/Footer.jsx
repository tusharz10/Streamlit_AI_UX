import React from 'react';
import { ArrowUp, Building2, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-black relative z-10">
      <div className="container space-y-16">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#a3e635] text-[#111111] font-bold flex items-center justify-center text-sm">
                B
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                BITA <span className="text-[#a3e635]">CLOUD</span> INFO TECH
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
              We build the future through technology. Enterprise technology consulting, automated cloud data engineering, Power BI visual analytics, and custom software solutions.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[#a3e635] text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Data Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Power BI Analytics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Azure Data Factory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Microsoft Fabric SaaS</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SQL Server Optimization</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[#a3e635] text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#industries" className="hover:text-white transition-colors">Healthcare & Life Sciences</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Banking & Finance</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Retail & Consumer Goods</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industrial Manufacturing</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Automotive & Mobility</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[#a3e635] text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About BITA</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Careers & Hiring</a></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Slide Decks & Work</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="https://wa.me/918982296014" target="_blank" rel="noopener noreferrer" className="hover:text-[#a3e635] transition-colors font-bold">WhatsApp Direct</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400 font-mono">
          <p>© {new Date().getFullYear()} <strong>BITA CLOUD INFO TECH</strong>. All rights reserved. Enterprise Technology Consulting.</p>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded bg-white/10 text-[#a3e635] hover:bg-[#a3e635] hover:text-[#111111] transition-all flex items-center gap-1.5 font-bold uppercase tracking-widest"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
