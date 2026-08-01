import React, { useState } from 'react';
import { Activity, Server, ShieldCheck, Sparkles, Database } from 'lucide-react';

export default function HeroVideoStage() {
  return (
    <div className="w-full master-card p-3 shadow-2xl relative overflow-hidden group">
      {/* Top Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 theme-bg-secondary border theme-border rounded-xl mb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-lime)]"></span>
          <span className="ml-2 font-bold tracking-wider text-[var(--accent-lime)] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[var(--accent-lime)] animate-pulse" />
            LIVE AZURE DATA STREAM
          </span>
        </div>

        <span className="px-2 py-0.5 rounded theme-bg-primary border theme-border text-[var(--accent-lime)] font-bold text-[10px] font-mono">
          BITA_STREAM_V4
        </span>
      </div>

      {/* Cosmic Animation Stage */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border theme-border">
        <img 
          src="/FromKlickPinCF15LiveWallpapersVideoin2025_BlackholeBlackholewallpaperSolarsystemwallpaper-ezgif.com-optimize.gif" 
          alt="BITA Enterprise Cosmic Data Stream" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.target.src = '/BITA_LOGO.png';
          }}
        />

        {/* Video Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Floating Telemetry HUD Overlay */}
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[var(--nav-bg)] backdrop-blur-md border theme-border theme-text-primary flex items-center justify-between text-xs font-mono z-10">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-[var(--accent-lime)]" />
            <div>
              <span className="font-bold theme-text-primary block">Fabric Lakehouse & Azure ADF Stream</span>
              <span className="text-[10px] theme-text-muted">10M+ Records Ingested / Day</span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded bg-[var(--accent-lime)] text-[#07090e] font-extrabold text-[10px] uppercase">
            ACTIVE PIPELINE
          </span>
        </div>
      </div>
    </div>
  );
}
