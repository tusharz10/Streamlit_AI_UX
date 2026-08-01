import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import HeroVideoStage from './HeroVideoStage';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-32 flex items-center overflow-hidden theme-bg-primary" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-secondary border theme-border theme-text-primary text-xs font-semibold uppercase tracking-[2px]">
            <Award className="w-4 h-4 text-[#a3e635] p-0.5 rounded-full" />
            <span className="theme-text-primary font-bold">Certified Engineering & Developer Teams</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold theme-text-primary leading-[1.05] tracking-tight">
            Engineering the Future Through <span className="underline decoration-[#a3e635] decoration-wavy decoration-2 text-[#a3e635]">AI & Cloud</span>.
          </h1>

          <p className="theme-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            Building Intelligent Digital Products That Scale Globally. <strong className="theme-text-primary font-semibold">BITA CLOUD INFO TECH</strong> empowers enterprise leadership with automated cloud data pipelines, real-time Power BI reporting, and custom software systems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#certified-teams" className="btn-master-primary text-base">
              <span>Meet Certified Developers</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#services" className="btn-master-secondary text-base">
              <span>Explore Capabilities</span>
            </a>

            <a 
              href="https://wa.me/918982296014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-master text-sm font-semibold"
            >
              <span>Instant Consultation</span>
            </a>
          </div>

          {/* Official Microsoft & Cloud Badges Trust Ribbon */}
          <div className="pt-8 border-t theme-border space-y-3">
            <span className="text-xs font-mono theme-text-secondary uppercase tracking-widest font-bold block">
              Official Certified Engineering Credentials
            </span>
            <div className="flex flex-wrap items-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="w-12 h-12 rounded-xl theme-bg-secondary border theme-border p-1.5 flex items-center justify-center hover:scale-110 transition-transform shadow-md">
                  <img src={`/badges/${num}.svg`} alt={`Official Badge ${num}`} className="w-full h-full object-contain" />
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#a3e635] font-bold ml-2">
                <CheckCircle2 className="w-4 h-4 text-[#a3e635] bg-black/20 rounded-full p-0.5" />
                <span>100% Certified Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Attention-Grabbing MP4 Video Stage */}
        <div className="lg:col-span-6 relative">
          <HeroVideoStage />
        </div>
      </div>
    </section>
  );
}
