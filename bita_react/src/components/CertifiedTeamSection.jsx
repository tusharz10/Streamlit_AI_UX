import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

const certificationBadges = [
  {
    id: 1,
    title: 'Azure Data Engineer Associate',
    subtitle: 'Microsoft Certified Professional',
    badge: '/badges/1.svg',
    desc: 'Expertise in designing and implementing data storage, processing, and pipeline security on Microsoft Azure.',
    code: 'DP-203'
  },
  {
    id: 2,
    title: 'Power BI Data Analyst Associate',
    subtitle: 'Microsoft Certified Professional',
    badge: '/badges/2.svg',
    desc: 'Advanced DAX modeling, interactive report design, and enterprise Power BI governance.',
    code: 'PL-300'
  },
  {
    id: 3,
    title: 'Azure Solutions Architect Expert',
    subtitle: 'Microsoft Certified Professional',
    badge: '/badges/3.svg',
    desc: 'Mastery in designing cloud migration, hybrid networking, disaster recovery, and Key Vault security.',
    code: 'AZ-305'
  },
  {
    id: 4,
    title: 'Fabric Analytics Engineer Associate',
    subtitle: 'Microsoft Certified Professional',
    badge: '/badges/4.svg',
    desc: 'Unified SaaS OneLake lakehouse architecture, Direct Lake Power BI, and PySpark engineering.',
    code: 'DP-600'
  },
  {
    id: 5,
    title: 'Databricks Data Engineer',
    subtitle: 'Certified Data & AI Specialist',
    badge: '/badges/5.svg',
    desc: 'Delta Lake pipelines, PySpark data frame transformations, and predictive machine learning models.',
    code: 'DB-ENG'
  },
  {
    id: 6,
    title: 'DevOps & Security Specialist',
    subtitle: 'Certified Cloud Platform Engineer',
    badge: '/badges/6.svg',
    desc: 'Automated CI/CD GitHub Actions, Docker/Kubernetes containerization, and infrastructure as code (IaC).',
    code: 'AZ-400'
  }
];

export default function CertifiedTeamSection() {
  return (
    <section className="section-padding theme-bg-secondary border-y theme-border" id="certified-teams">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="section-badge-master">
            <Award className="w-4 h-4 text-[#a3e635]" />
            <span>Certified Developer Teams</span>
          </div>
          <h2 className="section-title-master theme-text-primary">
            We Have <span className="text-[#a3e635] bg-[var(--bg-secondary)] border theme-border px-2.5 py-0.5 rounded">Certified Developer Teams</span>
          </h2>
          <p className="section-subtitle-master theme-text-secondary">
            Our engineering organization is composed of certified Microsoft Azure Data Engineers, Fabric Analytics Engineers, Power BI Analysts, and Cloud Architects.
          </p>
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationBadges.map((cert) => (
            <Tilt3DCard key={cert.id} className="master-card p-8 flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  {/* Badge Image */}
                  <div className="w-20 h-20 rounded-2xl theme-bg-primary border theme-border p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img 
                      src={cert.badge} 
                      alt={cert.title} 
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded bg-[#a3e635] text-[#07090e]">
                    {cert.code}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono theme-text-secondary uppercase tracking-wider block font-semibold">
                    {cert.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold theme-text-primary">
                    {cert.title}
                  </h3>
                  <p className="theme-text-secondary text-sm leading-relaxed font-normal">
                    {cert.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t theme-border flex items-center justify-between text-xs font-semibold theme-text-primary">
                <span className="flex items-center gap-1.5 text-[#a3e635] font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Official Credential
                </span>
                <span className="font-mono theme-text-secondary">VERIFIED</span>
              </div>
            </Tilt3DCard>
          ))}
        </div>

        {/* Trust Proof Banner */}
        <div className="mt-16 p-8 rounded-2xl theme-bg-primary theme-text-primary flex flex-col md:flex-row items-center justify-between gap-8 border theme-border shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl font-extrabold theme-text-primary flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-7 h-7 text-[#a3e635]" />
              <span>100% Certified Enterprise Engineering Force</span>
            </h3>
            <p className="theme-text-secondary text-sm font-normal">
              Every data pipeline, report, and cloud deployment is architected by certified professionals with proven enterprise credentials.
            </p>
          </div>

          <a href="#contact" className="btn-master-primary shrink-0 text-sm py-3.5 px-6">
            <span>Engage Certified Team</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
