import React from 'react';

export default function StatsBanner() {
  return (
    <section className="py-20 theme-bg-secondary border-y theme-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 p-6 master-card">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--accent-lime)] block">
              500+
            </span>
            <p className="text-sm font-semibold theme-text-secondary uppercase tracking-widest font-mono">
              Enterprise Clients
            </p>
          </div>

          <div className="space-y-2 p-6 master-card">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--accent-lime)] block">
              60+
            </span>
            <p className="text-sm font-semibold theme-text-secondary uppercase tracking-widest font-mono">
              Global Countries
            </p>
          </div>

          <div className="space-y-2 p-6 master-card">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--accent-lime)] block">
              10M+
            </span>
            <p className="text-sm font-semibold theme-text-secondary uppercase tracking-widest font-mono">
              Daily Records
            </p>
          </div>

          <div className="space-y-2 p-6 master-card">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--accent-lime)] block">
              200+
            </span>
            <p className="text-sm font-semibold theme-text-secondary uppercase tracking-widest font-mono">
              Technology Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
