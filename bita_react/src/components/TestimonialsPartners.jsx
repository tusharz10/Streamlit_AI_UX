import React from 'react';
import { Quote, Building2, ShieldCheck } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

const partners = [
  'Microsoft Azure', 'Power BI', 'Databricks', 'SQL Server', 'Azure Data Factory', 'Microsoft Fabric'
];

const testimonials = [
  {
    quote: 'BITA CLOUD transformed our fragmented enterprise data into automated real-time Azure pipelines and Power BI dashboards in record time.',
    author: 'Sarah Jenkins',
    role: 'Chief Data Officer',
    company: 'Global Logistics Corp'
  },
  {
    quote: 'Their deep expertise in Azure Data Factory and Microsoft Fabric saved our organization months of manual architecture work.',
    author: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'FinTech Dynamics'
  },
  {
    quote: 'The interactive 3D architecture stage helped our executive board align instantly on our cloud migration vision.',
    author: 'Elena Rostova',
    role: 'Head of Enterprise Architecture',
    company: 'Apex Healthcare'
  }
];

export default function TestimonialsPartners() {
  return (
    <section className="section-padding theme-bg-primary border-y theme-border">
      <div className="container space-y-24">
        {/* Partner Tech Wall */}
        <div className="space-y-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[2px] theme-text-muted font-bold">
            Trusted Enterprise Ecosystem & Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 text-xl font-heading font-extrabold theme-text-primary hover:text-[var(--accent-lime)] transition-colors cursor-pointer"
              >
                <Building2 className="w-5 h-5 text-[var(--accent-lime)]" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="section-badge-master mx-auto">
              <span>Client Endorsements</span>
            </div>
            <h2 className="section-title-master theme-text-primary">
              What <span className="text-[var(--accent-lime)] bg-[var(--bg-secondary)] border theme-border px-2 py-0.5 rounded">Enterprise Leaders Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <Tilt3DCard key={idx} className="master-card p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-[var(--accent-lime)]" />
                  <p className="theme-text-secondary text-base leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t theme-border flex items-center justify-between">
                  <div>
                    <h4 className="font-heading font-bold theme-text-primary text-sm">{item.author}</h4>
                    <p className="text-xs theme-text-muted">{item.role}, {item.company}</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[var(--accent-lime)]" />
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
