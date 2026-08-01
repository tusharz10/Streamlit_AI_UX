import React, { useState } from 'react';
import Tilt3DCard from './Tilt3DCard';
import { ArrowUpRight } from 'lucide-react';

const techList = [
  {
    id: 'adf',
    title: 'Azure Data Factory',
    category: 'Pipeline Orchestration',
    icon: '/assets/tech/azure.svg',
    color: '#00c4d6',
    glow: 'rgba(0,196,214,0.4)',
    badge: 'ETL/ELT',
    desc: 'Orchestrating hybrid cloud pipelines and automated data workflows.'
  },
  {
    id: 'powerbi',
    title: 'Power BI Analytics',
    category: 'Business Intelligence',
    icon: '/assets/tech/powerbi.svg',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
    badge: 'Analytics',
    desc: 'Interactive real-time executive reporting & DAX dashboards.'
  },
  {
    id: 'sqlserver',
    title: 'SQL Server & DWH',
    category: 'Relational Database',
    icon: '/assets/tech/sql.svg',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.4)',
    badge: 'Database',
    desc: 'High-speed columnstore indexing & transactional storage engine.'
  },
  {
    id: 'databricks',
    title: 'Databricks & PySpark',
    category: 'Big Data Processing',
    icon: '/assets/tech/databricks.svg',
    color: '#ff3621',
    glow: 'rgba(255,54,33,0.4)',
    badge: 'Delta Lake',
    desc: 'Distributed PySpark data frame transformations & Delta Lake ACID storage.'
  },
  {
    id: 'openai',
    title: 'OpenAI & Claude AI',
    category: 'Predictive AI / LLM',
    icon: '/assets/tech/openai.svg',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.4)',
    badge: 'AI & ML',
    desc: 'Agentic AI workflows, LLM knowledge bases, and real-time model inference.'
  }
];

export default function TechStack3DOrbit({ onSelectTech }) {
  const [activeTech, setActiveTech] = useState(techList[0]);

  return (
    <div className="w-full my-12 text-white">
      <div className="text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#a3e635] font-bold">
          3D Interactive Technology Stage
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1">
          Floating <span className="text-[#a3e635] bg-white/10 px-2 py-0.5 rounded">Real SVG Tech Spheres</span>
        </h3>
        <p className="text-[#e2e8f0] text-sm max-w-xl mx-auto mt-2 font-normal">
          Click any 3D technology sphere to inspect technical specifications and pipeline integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column 3D Spheres Grid Stage */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {techList.map((item) => {
            const isActive = activeTech.id === item.id;
            return (
              <Tilt3DCard
                key={item.id}
                onClick={() => {
                  setActiveTech(item);
                  if (onSelectTech) onSelectTech(item);
                }}
                className={`p-5 rounded-xl bg-slate-900/90 border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'border-[#a3e635] ring-2 ring-[#a3e635] shadow-2xl scale-105'
                    : 'border-white/10 hover:border-[#a3e635] opacity-85 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Glowing 3D Tech Sphere */}
                  <div 
                    className="w-16 h-16 rounded-full p-3 flex items-center justify-center relative shadow-md transition-transform duration-500 animate-float"
                    style={{ 
                      background: `radial-gradient(circle at 35% 35%, ${item.color}33, #0f172a)`,
                      border: `1px solid ${item.color}aa`,
                      boxShadow: `0 0 20px ${item.glow}`,
                      animationDelay: `${techList.indexOf(item) * 0.4}s`
                    }}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-8 h-8 object-contain drop-shadow-md"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#a3e635] uppercase tracking-wider block font-bold">
                      {item.badge}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-white mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>

        {/* Right Column Active 3D Focus Panel */}
        <div className="lg:col-span-5">
          <Tilt3DCard className="master-card p-7 border-white/10 relative bg-slate-950/90 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-xl p-2.5 flex items-center justify-center shadow-sm bg-slate-900 border border-white/10"
                >
                  <img src={activeTech.icon} alt={activeTech.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#94a3b8] uppercase tracking-widest block font-bold">
                    {activeTech.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white">
                    {activeTech.title}
                  </h4>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#a3e635] text-[#07090e] font-extrabold">
                ACTIVE FOCUS
              </span>
            </div>

            <p className="text-[#e2e8f0] text-sm leading-relaxed mb-6 font-normal">
              {activeTech.desc}
            </p>

            <button
              onClick={() => onSelectTech && onSelectTech(activeTech)}
              className="btn-master-primary w-full justify-center text-xs py-3 font-bold uppercase tracking-widest"
            >
              <span>Inspect Full Specifications</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Tilt3DCard>
        </div>
      </div>
    </div>
  );
}
