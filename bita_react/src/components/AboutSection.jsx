import React from 'react';
import { ShieldCheck, Award, Users, Activity, Terminal } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section-padding relative" id="about">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-badge mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>About BITA CLOUD INFO TECH</span>
          </div>
          <h2 className="section-title text-white">
            Engineering the <span className="gradient-text-cyan">Future of Cloud & Analytics</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Certified data architects and software engineers dedicated to high-performance cloud infrastructure and data visualization.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 glass-panel p-8 space-y-6 border-slate-800">
            <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span>Enterprise Innovation & Software Mastery</span>
            </h3>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              At <strong className="text-white font-semibold">BITA CLOUD INFO TECH</strong>, we specialize in delivering enterprise-grade software development, cloud infrastructure management, and cutting-edge data analytics solutions. Our team of certified cloud architects and data engineers design robust pipelines, interactive Power BI visualizations, and secure database backends tailored to accelerate business growth.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Whether modernizing legacy data systems into Microsoft Fabric or building automated Azure Data Factory workflows, we ensure seamless scalability, top-tier security, and real-time operational clarity.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Certified Engineers</h4>
                  <p className="text-xs text-slate-400">Azure & Fabric Experts</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Dedicated Support</h4>
                  <p className="text-xs text-slate-400">24/7 Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Telemetry HUD Card */}
          <div className="lg:col-span-5 glass-panel p-6 border-cyan-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                BITA SYSTEM METRICS HUD
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                LIVE TELEMETRY
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Enterprise Pipelines</span>
                  <span className="text-2xl font-bold font-mono text-cyan-400">50+ Deployed</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">ONLINE</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Daily Volume Processed</span>
                  <span className="text-2xl font-bold font-mono text-purple-400">10M+ Records</span>
                </div>
                <span className="text-xs font-mono text-purple-400">AUTO-SCALE</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Power BI Dashboard Uptime</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">99.95% SLA</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
