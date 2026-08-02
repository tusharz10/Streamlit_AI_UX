import React, { useState } from 'react';
import { CheckCircle2, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

const techPlatforms = [
  {
    id: 'ai',
    title: 'Artificial Intelligence & OpenAI',
    category: 'Predictive Intelligence',
    icon: '/assets/tech/openai.svg',
    badge: 'OpenAI / Claude AI',
    shortDesc: 'Building predictive machine learning pipelines, LLM agentic workflows, and automated AI data intelligence.',
    specs: [
      'OpenAI GPT-4o & Claude AI integration for enterprise knowledge bases.',
      'PySpark & Databricks Machine Learning model deployment.',
      'Automated feature store ingestion & real-time inference endpoints.'
    ]
  },
  {
    id: 'adf',
    title: 'Azure Data Factory',
    category: 'Pipeline Automation',
    icon: '/assets/tech/azure.svg',
    badge: 'ETL / ELT Pipelines',
    shortDesc: 'Orchestrating robust Azure Data Factory ETL/ELT pipelines for enterprise data integration at scale.',
    specs: [
      'Self-hosted Integration Runtimes for hybrid cloud-on-prem data movement.',
      'Dynamic Parameterized Pipelines with Copy, Data Flow, & Lookup activities.',
      'Automated trigger scheduling and end-to-end telemetry monitoring.'
    ]
  },
  {
    id: 'powerbi',
    title: 'Power BI Analytics',
    category: 'Business Intelligence',
    icon: '/assets/tech/powerbi.svg',
    badge: 'Interactive Visuals',
    shortDesc: 'Transforming complex data into real-time interactive Power BI executive reporting dashboards.',
    specs: [
      'Advanced DAX measures, row-level security (RLS), & dynamic bookmarking.',
      'DirectQuery & Composite Model optimization for high data volumes.',
      'Seamless integration with Fabric Lakehouse OneLake datasets.'
    ]
  },
  {
    id: 'sqlserver',
    title: 'SQL Server & Data Lake',
    category: 'Relational Database',
    icon: '/assets/tech/sql.svg',
    badge: 'High-Speed Storage',
    shortDesc: 'High-performance SQL Server database backends optimized for transactional and analytical workloads.',
    specs: [
      'Stored Procedure & T-SQL optimization for ultra-fast query execution.',
      'Columnstore indexing for high-density analytical compression.',
      'Always On High Availability & role-based access security.'
    ]
  },
  {
    id: 'databricks',
    title: 'Databricks & PySpark',
    category: 'Big Data Processing',
    icon: '/assets/tech/databricks.svg',
    badge: 'Unified Data & AI',
    shortDesc: 'Scalable PySpark data frame transformations, Delta Lake storage, and distributed cluster compute.',
    specs: [
      'Delta Lake ACID transactions and time-travel query auditing.',
      'PySpark distributed processing for multi-terabyte datasets.',
      'MLflow experiment tracking and automated model registry.'
    ]
  },
  {
    id: 'dbt',
    title: 'dbt & Modern Data Stack',
    category: 'Transformation Engine',
    icon: '/assets/tech/dbt.png',
    badge: 'Data Transformation',
    shortDesc: 'Modular T-SQL/SQL data transformations with version control, testing, and automated documentation.',
    specs: [
      'Modular SQL model building with Jinja templating and macros.',
      'Automated data quality testing and schema validation.',
      'Lineage graphs and automated documentation generation.'
    ]
  }
];

export default function PlatformGrid() {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section className="section-padding theme-bg-secondary border-y theme-border" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-5xl mb-16 space-y-4">
          <div className="section-badge-master">
            <span>Capabilities & Stack</span>
          </div>
          <h2 className="section-title-master theme-text-primary sm:whitespace-nowrap">
            Enterprise <span className="text-[var(--accent-lime)] bg-[var(--bg-primary)] border theme-border px-2 py-0.5 rounded">Azure Data & AI Stack</span>
          </h2>
          <p className="section-subtitle-master theme-text-secondary">
            Production-proven Azure cloud data engineering, Microsoft Fabric lakehouses, Power BI analytics, and enterprise AI models.
          </p>
        </div>

        {/* Services Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPlatforms.map((tech) => (
            <Tilt3DCard
              key={tech.id}
              className="master-card p-8 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedTech(tech)}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl theme-bg-secondary border theme-border p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img
                      src={tech.icon}
                      alt={tech.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded bg-[#a3e635] text-[#07090e] font-extrabold">
                    {tech.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono theme-text-secondary uppercase tracking-wider block font-semibold">{tech.category}</span>
                  <h3 className="font-heading text-2xl font-bold theme-text-primary group-hover:text-[#a3e635] transition-colors">
                    {tech.title}
                  </h3>
                  <p className="theme-text-secondary text-sm leading-relaxed font-normal">
                    {tech.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t theme-border flex items-center justify-between text-xs font-semibold theme-text-primary group-hover:text-[#a3e635]">
                <span>Inspect Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      {/* Tech Spec Deep-Dive Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn theme-text-primary">
          <Tilt3DCard className="master-card max-w-xl w-full p-8 relative theme-bg-primary border theme-border">
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 p-2 theme-text-secondary hover:theme-text-primary rounded-md theme-bg-secondary border theme-border"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl theme-bg-secondary border theme-border p-2.5 flex items-center justify-center">
                <img src={selectedTech.icon} alt={selectedTech.title} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-mono theme-text-secondary uppercase tracking-wider">{selectedTech.category}</span>
                <h3 className="font-heading text-2xl font-bold theme-text-primary">{selectedTech.title}</h3>
              </div>
            </div>

            <p className="theme-text-secondary text-sm mb-6 leading-relaxed">
              {selectedTech.shortDesc}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider theme-text-secondary border-b theme-border pb-2 font-bold">
                Technical Specifications & Architecture
              </h4>
              {selectedTech.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 text-sm theme-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedTech(null)}
                className="btn-master-secondary text-xs py-2.5 px-4"
              >
                Close Spec
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedTech(null)}
                className="btn-master-primary text-xs py-2.5 px-4"
              >
                Request Consultation
              </a>
            </div>
          </Tilt3DCard>
        </div>
      )}
    </section>
  );
}
