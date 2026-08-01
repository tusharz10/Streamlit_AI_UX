import React from 'react';
import { ArrowRight, Award, ShieldCheck, CheckCircle2, Cpu, Database, Server, Sparkles } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-32 flex items-center overflow-hidden theme-bg-primary" id="hero">
      <div className="container">
        {/* Main Hero Expanded Header Content */}
        <div className="max-w-5xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-secondary border theme-border theme-text-primary text-xs font-semibold uppercase tracking-[2px]">
            <Award className="w-4 h-4 text-[#a3e635] p-0.5 rounded-full" />
            <span className="theme-text-primary font-bold">Certified Engineering & Developer Teams</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold theme-text-primary leading-[1.05] tracking-tight">
            Engineering the Future Through <span className="underline decoration-[#a3e635] decoration-wavy decoration-2 text-[#a3e635]">AI & Cloud</span>.
          </h1>

          <p className="theme-text-secondary text-lg sm:text-xl leading-relaxed max-w-4xl font-normal">
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

          {/* Expanded 3 Pillar Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <Tilt3DCard className="master-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl theme-bg-secondary border theme-border text-[#a3e635] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold theme-text-primary">
                Automated Cloud ETL
              </h3>
              <p className="theme-text-secondary text-xs leading-relaxed">
                Azure Data Factory pipelines with self-hosted integration runtimes for high-speed automated data movement.
              </p>
            </Tilt3DCard>

            <Tilt3DCard className="master-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl theme-bg-secondary border theme-border text-[#a3e635] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold theme-text-primary">
                Fabric Lakehouses
              </h3>
              <p className="theme-text-secondary text-xs leading-relaxed">
                Unified OneLake datasets with Direct Lake mode for instant zero-copy query execution and Power BI reports.
              </p>
            </Tilt3DCard>

            <Tilt3DCard className="master-card p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl theme-bg-secondary border theme-border text-[#a3e635] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold theme-text-primary">
                Enterprise AI Agents
              </h3>
              <p className="theme-text-secondary text-xs leading-relaxed">
                Azure OpenAI GPT-4o LLM agentic workflows, PySpark Databricks model inference, & custom AI data intelligence.
              </p>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  );
}
