import React from 'react';
import { ShieldCheck, Award, Users, Terminal, Globe, Cpu } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#0c1017] border-y border-white/10 text-white" id="about">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="section-badge-master">
            <span>About BITA CLOUD INFO TECH</span>
          </div>
          <h2 className="section-title-master text-white">
            Combining Technology with <span className="text-[#a3e635] bg-white/10 px-2 py-0.5 rounded">Human Creativity</span>
          </h2>
          <p className="section-subtitle-master text-[#e2e8f0]">
            Global technology consulting firm dedicated to building trusted enterprise architectures, automated ETL pipelines, and high-performance software products.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <Tilt3DCard className="lg:col-span-7 master-card p-8 md:p-10 space-y-6 bg-slate-900/80 border-white/10">
            <h3 className="font-heading text-3xl font-extrabold text-white flex items-center gap-3">
              <Terminal className="w-7 h-7 text-[#a3e635] bg-white/10 p-1 rounded-md" />
              <span>Enterprise Software & Data Engineering</span>
            </h3>

            <p className="text-[#e2e8f0] text-base leading-relaxed font-normal">
              At <strong className="text-white font-semibold">BITA CLOUD INFO TECH</strong>, we combine world-class software engineering with human creativity. Our team of certified cloud architects and data engineers design robust pipelines, interactive Power BI visualizations, and secure database backends tailored to accelerate business growth.
            </p>

            <p className="text-[#e2e8f0] text-base leading-relaxed font-normal">
              Whether modernizing legacy data systems into Microsoft Fabric or building automated Azure Data Factory workflows, we ensure seamless scalability, top-tier security, and real-time operational clarity for Fortune 500 enterprises.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-[#a3e635] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Certified Architects</h4>
                  <p className="text-xs text-[#94a3b8]">Azure & Fabric Experts</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-[#a3e635] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Global Operations</h4>
                  <p className="text-xs text-[#94a3b8]">24/7 Enterprise Support</p>
                </div>
              </div>
            </div>
          </Tilt3DCard>

          {/* Careers Recruitment Banner */}
          <Tilt3DCard className="lg:col-span-5 master-card p-8 bg-slate-950 text-white space-y-6 border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#a3e635] text-xs font-mono tracking-wider uppercase font-bold">
              <span>Careers at BITA</span>
            </div>

            <h3 className="font-heading text-3xl font-extrabold text-white leading-tight">
              Join Our Global Engineering Team.
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              We are always seeking visionaries, cloud architects, data engineers, and AI developers to build the future of enterprise technology.
            </p>

            <div className="pt-4">
              <a href="#contact" className="btn-master-primary w-full justify-center text-sm py-3.5">
                <span>View Career Opportunities</span>
              </a>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
}
