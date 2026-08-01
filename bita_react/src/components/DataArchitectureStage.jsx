import React, { useState } from 'react';
import { Server, Cpu, Database, BarChart3, ArrowRight, Zap, CheckCircle2, RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

const pipelineSteps = [
  {
    id: 'all',
    title: 'Full End-to-End Pipeline',
    tag: 'COMPLETE ARCHITECTURE'
  },
  {
    id: 'ingestion',
    title: '1. Multi-Source Load',
    tag: 'RAW DATA LOAD'
  },
  {
    id: 'scalable',
    title: '2. Scalable ETL Compute',
    tag: 'AUTO-ELASTIC SCALE'
  },
  {
    id: 'business',
    title: '3. Business-Ready Lakehouse',
    tag: 'GOLD CURATED LAYER'
  },
  {
    id: 'analytics',
    title: '4. Power BI & AI Serving',
    tag: 'EXECUTIVE ANALYTICS'
  }
];

export default function DataArchitectureStage() {
  const [activeStep, setActiveStep] = useState('all');

  return (
    <Tilt3DCard className="w-full h-full rounded-2xl bg-white border border-[#ececec] p-6 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
      {/* Top Header & Step Selector */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececec] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] animate-ping"></span>
            <span className="font-heading font-extrabold text-sm text-[#111111] uppercase tracking-wider">
              Enterprise Data Architecture Snapshot
            </span>
          </div>

          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#111111] text-[#a3e635]">
            BUSINESS-READY DATA PIPELINE
          </span>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {pipelineSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-3 py-1.5 rounded-md text-[11px] font-mono font-bold uppercase transition-all ${
                activeStep === step.id
                  ? 'bg-[#111111] text-[#a3e635] shadow-md'
                  : 'bg-[#f7f7f7] border border-[#ececec] text-[#555555] hover:text-[#111111]'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Arrow Architecture Diagram Flow Stage */}
      <div className="p-4 rounded-xl bg-[#f7f7f7] border border-[#ececec] space-y-6 relative">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] font-bold">
          <span>ANIMATED DIRECTIONAL PIPELINE FLOW</span>
          <span className="text-[#111111] flex items-center gap-1">
            <RefreshCw className="w-3 h-3 text-[#a3e635] animate-spin" /> LIVE TRANSMISSION
          </span>
        </div>

        {/* 4 Pipeline Stage Nodes with Arrow Diagram Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative items-center">
          {/* Node 1: Ingestion */}
          <div className={`p-3 rounded-xl border transition-all ${
            activeStep === 'all' || activeStep === 'ingestion' 
              ? 'bg-white border-[#111111] shadow-md ring-2 ring-[#a3e635]' 
              : 'bg-white/60 border-[#ececec] opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <img src="/assets/tech/sql.svg" alt="SQL" className="w-6 h-6 object-contain" />
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#f7f7f7] text-[#111111]">RAW</span>
            </div>
            <h4 className="font-heading font-bold text-xs text-[#111111]">Multi-Source Load</h4>
            <p className="text-[10px] text-[#555555] mt-1 font-mono">SQL, REST, SaaS, IoT</p>
          </div>

          {/* Node 2: Scalable Compute */}
          <div className={`p-3 rounded-xl border transition-all ${
            activeStep === 'all' || activeStep === 'scalable' 
              ? 'bg-white border-[#111111] shadow-md ring-2 ring-[#a3e635]' 
              : 'bg-white/60 border-[#ececec] opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <img src="/assets/tech/azure.svg" alt="ADF" className="w-6 h-6 object-contain" />
              <img src="/assets/tech/databricks.svg" alt="Databricks" className="w-6 h-6 object-contain" />
            </div>
            <h4 className="font-heading font-bold text-xs text-[#111111]">Scalable ETL</h4>
            <p className="text-[10px] text-[#555555] mt-1 font-mono">ADF & PySpark Engine</p>
          </div>

          {/* Node 3: Business Ready Storage */}
          <div className={`p-3 rounded-xl border transition-all ${
            activeStep === 'all' || activeStep === 'business' 
              ? 'bg-white border-[#111111] shadow-md ring-2 ring-[#a3e635]' 
              : 'bg-white/60 border-[#ececec] opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-6 h-6 rounded bg-[#111111] text-[#a3e635] flex items-center justify-center text-[10px] font-bold">F</div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#111111] text-[#a3e635]">GOLD</span>
            </div>
            <h4 className="font-heading font-bold text-xs text-[#111111]">Fabric OneLake</h4>
            <p className="text-[10px] text-[#555555] mt-1 font-mono">Business-Ready DWH</p>
          </div>

          {/* Node 4: Power BI & AI */}
          <div className={`p-3 rounded-xl border transition-all ${
            activeStep === 'all' || activeStep === 'analytics' 
              ? 'bg-white border-[#111111] shadow-md ring-2 ring-[#a3e635]' 
              : 'bg-white/60 border-[#ececec] opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <img src="/assets/tech/powerbi.svg" alt="Power BI" className="w-6 h-6 object-contain" />
              <img src="/assets/tech/openai.svg" alt="OpenAI" className="w-6 h-6 object-contain" />
            </div>
            <h4 className="font-heading font-bold text-xs text-[#111111]">Power BI & AI</h4>
            <p className="text-[10px] text-[#555555] mt-1 font-mono">Real-time Insights</p>
          </div>
        </div>

        {/* Animated Directional Flow Arrow Stream */}
        <div className="py-1">
          <svg className="w-full h-8" viewBox="0 0 400 30" fill="none">
            <path 
              d="M 10 15 L 390 15" 
              stroke="#111111" 
              strokeWidth="2.5" 
              strokeDasharray="6 6"
              className="animate-[dash_1.5s_linear_infinite]"
            />
            <polygon points="388,10 398,15 388,20" fill="#a3e635" />
          </svg>
        </div>
      </div>

      {/* Tech Snapshot & Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
        <div className="p-3 rounded-lg bg-[#f7f7f7] border border-[#ececec]">
          <span className="text-[10px] text-[#888888] block uppercase">Multi-Source</span>
          <span className="text-xs font-bold text-[#111111]">Heterogeneous</span>
        </div>
        <div className="p-3 rounded-lg bg-[#f7f7f7] border border-[#ececec]">
          <span className="text-[10px] text-[#888888] block uppercase">Scale Compute</span>
          <span className="text-xs font-bold text-[#111111]">Auto-Elastic</span>
        </div>
        <div className="p-3 rounded-lg bg-[#f7f7f7] border border-[#ececec]">
          <span className="text-[10px] text-[#888888] block uppercase">Data Readiness</span>
          <span className="text-xs font-bold text-[#111111]">Gold Curated</span>
        </div>
        <div className="p-3 rounded-lg bg-[#f7f7f7] border border-[#ececec]">
          <span className="text-[10px] text-[#888888] block uppercase">Serving Latency</span>
          <span className="text-xs font-bold text-[#111111]">&lt; 180ms</span>
        </div>
      </div>

      {/* Bottom Proof Tag */}
      <div className="p-3 rounded-xl bg-[#111111] text-white flex items-center justify-between text-xs">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#a3e635]" />
          <span>Governance & SLA Compliant</span>
        </span>
        <span className="text-[#a3e635] font-mono font-bold uppercase text-[10px]">
          100% BUSINESS READY
        </span>
      </div>
    </Tilt3DCard>
  );
}
