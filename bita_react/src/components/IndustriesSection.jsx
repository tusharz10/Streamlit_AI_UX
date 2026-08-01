import React from 'react';
import { HeartPulse, Landmark, ShoppingBag, Factory, Car, Zap, ArrowRight } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

const industryVerticals = [
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    icon: HeartPulse,
    desc: 'HIPAA-compliant data pipelines, clinical trial analytics, and real-time patient care dashboards.'
  },
  {
    id: 'finance',
    title: 'Banking & Financial Services',
    icon: Landmark,
    desc: 'Ultra-low latency transaction indexing, fraud risk models, and automated compliance reporting.'
  },
  {
    id: 'retail',
    title: 'Retail & Consumer Goods',
    icon: ShoppingBag,
    desc: 'Omnichannel inventory forecasting, customer lifetime value modeling, and supply chain ETL.'
  },
  {
    id: 'manufacturing',
    title: 'Industrial & Manufacturing',
    icon: Factory,
    desc: 'IoT telemetry ingestion, predictive equipment maintenance, and factory floor BI insights.'
  },
  {
    id: 'automotive',
    title: 'Automotive & Mobility',
    icon: Car,
    desc: 'Connected vehicle telemetry lakehouse, fleet management, and automated diagnostics.'
  },
  {
    id: 'energy',
    title: 'Energy & Smart Utilities',
    icon: Zap,
    desc: 'Smart grid load balancing, renewable energy predictive models, and power usage analytics.'
  }
];

export default function IndustriesSection() {
  return (
    <section className="section-padding theme-bg-primary border-y theme-border" id="industries">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-5xl mb-16 space-y-4">
          <div className="section-badge-master">
            <span>Industry Verticals</span>
          </div>
          <h2 className="section-title-master theme-text-primary sm:whitespace-nowrap">
            Tailored Engineering for <span className="text-[#a3e635] bg-[var(--bg-secondary)] border theme-border px-2 py-0.5 rounded">Global Industries</span>
          </h2>
          <p className="section-subtitle-master theme-text-secondary">
            Deep domain expertise paired with cutting-edge cloud data engineering and AI software solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryVerticals.map((ind) => (
            <Tilt3DCard key={ind.id} className="master-card p-8 flex flex-col justify-between group cursor-pointer">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl theme-bg-secondary text-[#a3e635] flex items-center justify-center group-hover:bg-[#a3e635] group-hover:text-[#07090e] transition-colors border theme-border">
                    <ind.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold theme-text-primary group-hover:text-[#a3e635] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="theme-text-secondary text-sm leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t theme-border flex items-center justify-between text-xs font-semibold theme-text-primary group-hover:text-[#a3e635]">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
