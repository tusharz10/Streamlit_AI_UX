import React from 'react';

export default function StatsBanner() {
  return (
    <section className="py-20 bg-[#111111] text-white border-y border-black">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#a3e635] block">
              500+
            </span>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest font-mono">
              Enterprise Clients
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#a3e635] block">
              60+
            </span>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest font-mono">
              Global Countries
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#a3e635] block">
              10M+
            </span>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest font-mono">
              Daily Records
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
            <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#a3e635] block">
              200+
            </span>
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest font-mono">
              Technology Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
