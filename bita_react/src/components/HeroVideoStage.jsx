import React, { useState } from 'react';
import { Activity, Server, ShieldCheck, Sparkles, Database } from 'lucide-react';

export default function HeroVideoStage() {
  return (
    <div className="w-full rounded-2xl bg-white border border-[#ececec] p-3 shadow-2xl relative overflow-hidden group">
      {/* Top Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] text-white rounded-xl mb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635]"></span>
          <span className="ml-2 font-bold tracking-wider text-[#a3e635] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#a3e635] animate-pulse" />
            LIVE AZURE DATA STREAM
          </span>
        </div>

        <span className="px-2 py-0.5 rounded bg-white/10 text-[#a3e635] font-bold text-[10px] font-mono">
          BITA_STREAM_V4
        </span>
      </div>

      {/* Cosmic Animation Stage (Brain video removed) */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#111111] border border-[#ececec]">
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
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs font-mono z-10">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-[#a3e635]" />
            <div>
              <span className="font-bold text-white block">Fabric Lakehouse & Azure ADF Stream</span>
              <span className="text-[10px] text-gray-400">10M+ Records Ingested / Day</span>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded bg-[#a3e635] text-[#111111] font-extrabold text-[10px] uppercase">
            ACTIVE PIPELINE
          </span>
        </div>
      </div>
    </div>
  );
}
