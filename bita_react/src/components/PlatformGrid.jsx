import React, { useState } from 'react';
import { Database, Cpu, Layout, Cloud, Shield, CheckCircle2, X, ExternalLink } from 'lucide-react';

const techPlatforms = [
  {
    id: 'adf',
    title: 'Azure Data Factory',
    category: 'Pipeline Orchestration',
    icon: 'https://symbols.getvecta.com/stencil_27/36_data-factory.e36cbf28ed.png',
    fallbackIcon: Cpu,
    glowColor: 'cyan',
    badge: 'ETL / ELT Automation',
    shortDesc: 'Orchestrating robust data pipelines for hybrid, scalable, and automated ETL/ELT workflows across enterprise systems.',
    specs: [
      'Self-hosted Integration Runtimes for hybrid cloud-on-prem data movement.',
      'Dynamic Parameterized Pipelines with Copy, Data Flow, & Lookup activities.',
      'Automated trigger scheduling (Tumbling Window, Event-based).',
      'End-to-End monitoring with Azure Monitor & Log Analytics.'
    ]
  },
  {
    id: 'powerbi',
    title: 'Power BI & Fabric Analytics',
    category: 'Executive Business Intelligence',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png',
    fallbackIcon: Layout,
    glowColor: 'gold',
    badge: 'Interactive Visuals',
    shortDesc: 'Transform raw complex data into interactive, real-time dashboards and executive visual insights on SaaS & Fabric.',
    specs: [
      'Advanced DAX measures, row-level security (RLS), & dynamic bookmarking.',
      'DirectQuery & Composite Model optimization for high data volumes.',
      'Paginated Reports & mobile-optimized executive dashboard design.',
      'Seamless integration with Fabric Lakehouse OneLake datasets.'
    ]
  },
  {
    id: 'sqlserver',
    title: 'SQL Server & Data Warehouse',
    category: 'High-Speed Relational Engine',
    icon: 'https://symbols.getvecta.com/stencil_27/79_sql-database-generic.494ff6320e.png',
    fallbackIcon: Database,
    glowColor: 'purple',
    badge: 'Transactional Storage',
    shortDesc: 'Reliable, high-performance database foundation built for secure transactions and high-speed analytical queries.',
    specs: [
      'Stored Procedure & T-SQL optimization for ultra-fast query execution.',
      'Columnstore indexing for high-density analytical compression.',
      'High Availability (Always On Availability Groups) & disaster recovery.',
      'Role-based access security, encryption at rest, & automated backups.'
    ]
  },
  {
    id: 'azure',
    title: 'Microsoft Azure Cloud',
    category: 'Enterprise Infrastructure',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png',
    fallbackIcon: Cloud,
    glowColor: 'cyan',
    badge: 'Cloud Modernization',
    shortDesc: 'Scalable, secure cloud solutions covering cloud migration, infrastructure optimization, and managed cloud services.',
    specs: [
      'Enterprise Tenant Setup with Key Vault secrets management.',
      'Virtual Networks (VNet), Private Endpoints, & NSG security rules.',
      'Azure Synapse & Blob Storage integration for big data pipelines.',
      'Cost optimization using Azure Resource Management & Advisor rules.'
    ]
  },
  {
    id: 'fabric',
    title: 'Microsoft Fabric SaaS',
    category: 'Unified SaaS Data Lakehouse',
    icon: 'https://davidalzamendi.com/wp-content/uploads/2023/05/Fabric_final_x256.png',
    fallbackIcon: Shield,
    glowColor: 'emerald',
    badge: 'Next-Gen Analytics',
    shortDesc: 'Unified SaaS data analytics platform for seamless data lakehouse integration, real-time analytics, and scaling.',
    specs: [
      'OneLake unified storage eliminating data siloing.',
      'Direct Lake mode for instant Power BI queries without data duplication.',
      'Integrated PySpark notebooks for predictive machine learning.',
      'Real-Time Intelligence with KQL database queries.'
    ]
  }
];

export default function PlatformGrid() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section className="section-padding relative" id="platform">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-badge mx-auto">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Core Data Architecture Stack</span>
          </div>
          <h2 className="section-title text-white">
            Enterprise Data & <span className="gradient-text-cyan">Analytics Platform</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Powering enterprise transformation with robust Microsoft Azure cloud pipelines, Fabric Lakehouse, SQL Data Warehousing, and real-time Power BI reporting.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPlatforms.map((tech) => (
            <div 
              key={tech.id} 
              className="glass-panel p-6 flex flex-col justify-between group cursor-pointer hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
              onClick={() => setSelectedTech(tech)}
            >
              {/* Top Card Ambient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-800 p-2.5 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                    <img 
                      src={tech.icon} 
                      alt={tech.title} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <tech.fallbackIcon className="w-8 h-8 text-cyan-400 hidden" />
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/20 text-cyan-300">
                    {tech.badge}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{tech.category}</span>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {tech.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                <span>Inspect Specifications</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Spec Deep-Dive Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass-panel max-w-xl w-full p-8 relative border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.25)]">
            <button 
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 p-2">
                <img src={selectedTech.icon} alt={selectedTech.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedTech.category}</span>
                <h3 className="font-heading text-2xl font-bold text-white">{selectedTech.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              {selectedTech.shortDesc}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                Technical Highlights & Features
              </h4>
              {selectedTech.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setSelectedTech(null)}
                className="btn-glass text-xs py-2 px-4"
              >
                Close Spec
              </button>
              <a 
                href="#contact" 
                onClick={() => setSelectedTech(null)}
                className="btn-cyan text-xs py-2 px-4"
              >
                Request Architecture Review
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
