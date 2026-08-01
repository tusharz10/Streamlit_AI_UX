import React from 'react';
import { ArrowUp, Building2, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="theme-bg-secondary theme-text-primary pt-20 pb-12 border-t theme-border relative z-10">
      <div className="container space-y-16">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[var(--accent-lime)] text-[#07090e] font-bold flex items-center justify-center text-sm">
                B
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight theme-text-primary">
                BITA <span className="text-[var(--accent-lime)]">CLOUD</span> INFO TECH
              </span>
            </div>
            <p className="theme-text-secondary text-sm leading-relaxed max-w-sm font-normal">
              We build the future through technology. Enterprise technology consulting, automated cloud data engineering, Power BI visual analytics, and custom software solutions.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[var(--accent-lime)] text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm theme-text-secondary">
              <li><a href="#services" className="hover:theme-text-primary transition-colors">Cloud Data Engineering</a></li>
              <li><a href="#services" className="hover:theme-text-primary transition-colors">Power BI Analytics</a></li>
              <li><a href="#services" className="hover:theme-text-primary transition-colors">Azure Data Factory</a></li>
              <li><a href="#services" className="hover:theme-text-primary transition-colors">Microsoft Fabric SaaS</a></li>
              <li><a href="#services" className="hover:theme-text-primary transition-colors">SQL Server Optimization</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[var(--accent-lime)] text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm theme-text-secondary">
              <li><a href="#industries" className="hover:theme-text-primary transition-colors">Healthcare & Life Sciences</a></li>
              <li><a href="#industries" className="hover:theme-text-primary transition-colors">Banking & Finance</a></li>
              <li><a href="#industries" className="hover:theme-text-primary transition-colors">Retail & Consumer Goods</a></li>
              <li><a href="#industries" className="hover:theme-text-primary transition-colors">Industrial Manufacturing</a></li>
              <li><a href="#industries" className="hover:theme-text-primary transition-colors">Automotive & Mobility</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-[var(--accent-lime)] text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm theme-text-secondary">
              <li><a href="#about" className="hover:theme-text-primary transition-colors">About BITA</a></li>
              <li><a href="#about" className="hover:theme-text-primary transition-colors">Careers & Hiring</a></li>
              <li><a href="#contact" className="hover:theme-text-primary transition-colors">Contact Us</a></li>
              <li><a href="https://wa.me/918982296014" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-lime)] transition-colors font-bold">WhatsApp Direct</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t theme-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs theme-text-muted font-mono">
          <p>© {new Date().getFullYear()} <strong className="theme-text-primary">BITA CLOUD INFO TECH</strong>. All rights reserved. Enterprise Technology Consulting.</p>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded theme-bg-primary border theme-border text-[var(--accent-lime)] hover:bg-[var(--accent-lime)] hover:text-[#07090e] transition-all flex items-center gap-1.5 font-bold uppercase tracking-widest"
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
