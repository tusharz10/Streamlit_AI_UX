import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="container max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.15)] mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Next-Gen Enterprise Cloud & Analytics</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight max-w-4xl mx-auto">
          Building the Future with <span className="gradient-text-cyan">Data</span>:
          <br />
          Accelerate Data <span className="gradient-text-emerald">Visualization</span> & Insights
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
          <strong className="text-white font-semibold">BITA CLOUD INFO TECH</strong> empowers enterprise teams with ultra-scalable cloud architectures, automated Azure Data Factory ETL/ELT pipelines, real-time Power BI executive dashboards, and high-performance software systems.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#platform" className="btn-cyan text-base font-semibold">
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a href="#showcase" className="btn-glass text-base font-medium">
            <span>Interactive Slides</span>
          </a>

          <a 
            href="https://wa.me/918982296014" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp-direct text-sm font-semibold"
          >
            <span>Instant Consultation</span>
          </a>
        </div>

        {/* Metrics & Badges */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-2xl mx-auto">
          <div className="space-y-1">
            <div className="text-cyan-400 font-mono font-bold text-2xl lg:text-3xl flex items-center justify-center gap-1">
              <span>50+</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Pipelines Deployed</p>
          </div>
          <div className="space-y-1">
            <div className="text-purple-400 font-mono font-bold text-2xl lg:text-3xl flex items-center justify-center gap-1">
              <span>99.9%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Platform Uptime</p>
          </div>
          <div className="space-y-1">
            <div className="text-emerald-400 font-mono font-bold text-2xl lg:text-3xl flex items-center justify-center gap-1">
              <span>Real-Time</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Power BI Analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

