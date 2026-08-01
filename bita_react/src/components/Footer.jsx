import React from 'react';
import { ArrowUp, Heart, Shield, Cpu } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#05070a] relative z-10 text-slate-400">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-cyan-500/30 p-1 bg-slate-900">
            <img src="/BITA_LOGO.png" alt="BITA Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-heading font-bold text-white text-base">
            BITA <span className="gradient-text-cyan">CLOUD</span> INFO TECH
          </span>
        </div>

        <p className="text-xs font-mono text-center text-slate-400">
          © {new Date().getFullYear()} <strong>BITA CLOUD INFO TECH</strong>. All rights reserved. Cloud Infrastructure & Software Engineering.
        </p>

        <button 
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 hover:border-cyan-400 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
          title="Back to Top"
        >
          <span>TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
