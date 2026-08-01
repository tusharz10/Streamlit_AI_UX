import React, { useState } from 'react';
import { Cpu, Zap, Sliders, Server, HardDrive, BarChart3, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AiBlueprintSimulator() {
  const [sourcesCount, setSourcesCount] = useState(8);
  const [orchestrator, setOrchestrator] = useState('Azure Data Factory');
  const [analyticsTarget, setAnalyticsTarget] = useState('Real-time Executive Dashboards (Power BI)');
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprintResult, setBlueprintResult] = useState(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setBlueprintResult(null);

    setTimeout(() => {
      const recs = [
        `Recommended Topology: ${orchestrator} connected to Microsoft Fabric OneLake & Azure SQL Data Warehouse.`,
        `Throughput Capability: Concurrent parallel ingestion from ${sourcesCount} active data sources with sub-200ms query latency.`,
        `Target Outcome: Direct Lake integration delivering live real-time metrics for ${analyticsTarget}.`,
        `Security & Compliance: Automated Azure Key Vault secret rotation, RBAC, and TLS 1.3 encrypted data movement.`
      ];

      const metrics = {
        throughput: `${(sourcesCount * 1.45).toFixed(1)}M records/day`,
        latency: '< 180 ms',
        costSavings: `${Math.min(25 + sourcesCount * 1.2, 55).toFixed(0)}% lower TCO`,
        uptime: '99.95% SLA'
      };

      setBlueprintResult({ recs, metrics });
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section className="section-padding relative" id="ai-insights">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-badge mx-auto">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="section-title text-white">
            AI Architecture & <span className="gradient-text-cyan">Blueprint Generator</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Configure your enterprise parameters below to simulate optimal cloud data pipeline topology and performance benchmarks in real-time.
          </p>
        </div>

        {/* Form + Topology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Card */}
          <div className="lg:col-span-5 glass-panel p-6 space-y-6 border-cyan-500/30">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-cyan-400 font-mono text-sm">
              <Sliders className="w-4 h-4" />
              <span>CONFIGURE PIPELINE PARAMETERS</span>
            </div>

            {/* Parameter 1: Data Sources */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-slate-300">Number of Enterprise Data Sources:</label>
                <span className="text-cyan-400 font-bold">{sourcesCount} Sources</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={sourcesCount} 
                onChange={(e) => setSourcesCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1 (Standard)</span>
                <span>15 (Enterprise)</span>
                <span>30+ (Global)</span>
              </div>
            </div>

            {/* Parameter 2: Orchestrator */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-300">Primary Pipeline Orchestrator:</label>
              <select 
                value={orchestrator}
                onChange={(e) => setOrchestrator(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
              >
                <option value="Azure Data Factory">Azure Data Factory (Hybrid & Cloud ETL)</option>
                <option value="Microsoft Fabric">Microsoft Fabric (SaaS Lakehouse)</option>
                <option value="Azure Synapse Analytics">Azure Synapse Analytics (Big Data Warehousing)</option>
              </select>
            </div>

            {/* Parameter 3: Analytics Outcome */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-slate-300">Target Analytics Outcome:</label>
              <select 
                value={analyticsTarget}
                onChange={(e) => setAnalyticsTarget(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
              >
                <option value="Real-time Executive Dashboards (Power BI)">Real-time Executive Dashboards (Power BI)</option>
                <option value="Predictive Machine Learning Pipelines">Predictive Machine Learning Pipelines</option>
                <option value="Automated SQL Data Warehouse Ingestion">Automated SQL Data Warehouse Ingestion</option>
              </select>
            </div>

            {/* Generate Button */}
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-cyan w-full justify-center py-3.5 text-sm uppercase tracking-wider font-bold"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 animate-spin text-black" />
                  <span>Synthesizing Topology...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>⚡ Generate Architecture Blueprint</span>
                </span>
              )}
            </button>
          </div>

          {/* Interactive Topology Graph & Output */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Node Diagram */}
            <div className="glass-panel p-6 border-slate-800 relative">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE SIMULATED TOPOLOGY DIAGRAM
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center items-center relative py-4">
                {/* Node 1: Sources */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex flex-col items-center gap-2">
                  <Server className="w-6 h-6 text-cyan-400" />
                  <span className="text-[11px] font-mono text-white font-bold">{sourcesCount} Data Sources</span>
                  <span className="text-[9px] text-slate-400 font-mono uppercase">Ingestion</span>
                </div>

                {/* Node 2: Orchestrator */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/40 flex flex-col items-center gap-2">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <span className="text-[11px] font-mono text-white font-bold truncate max-w-full px-1">{orchestrator.split(' ')[0]}</span>
                  <span className="text-[9px] text-slate-400 font-mono uppercase">Transform</span>
                </div>

                {/* Node 3: Storage */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col items-center gap-2">
                  <HardDrive className="w-6 h-6 text-emerald-400" />
                  <span className="text-[11px] font-mono text-white font-bold">SQL / Lakehouse</span>
                  <span className="text-[9px] text-slate-400 font-mono uppercase">Storage</span>
                </div>

                {/* Node 4: Power BI */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 flex flex-col items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                  <span className="text-[11px] font-mono text-white font-bold">Power BI AI</span>
                  <span className="text-[9px] text-slate-400 font-mono uppercase">Analytics</span>
                </div>
              </div>
            </div>

            {/* Generated Output Box */}
            <div className="glass-panel p-6 border-cyan-500/30 min-h-[220px] flex flex-col justify-between">
              {blueprintResult ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      SIMULATION COMPLETE - TOPOLOGY SPECIFICATION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      OPTIMIZED
                    </span>
                  </div>

                  {/* Telemetry Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-center font-mono">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Daily Vol.</span>
                      <span className="text-cyan-400 font-bold text-sm">{blueprintResult.metrics.throughput}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Latency</span>
                      <span className="text-purple-400 font-bold text-sm">{blueprintResult.metrics.latency}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">TCO Savings</span>
                      <span className="text-emerald-400 font-bold text-sm">{blueprintResult.metrics.costSavings}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Uptime SLA</span>
                      <span className="text-amber-400 font-bold text-sm">{blueprintResult.metrics.uptime}</span>
                    </div>
                  </div>

                  {/* Spec Recommendations */}
                  <div className="space-y-2">
                    {blueprintResult.recs.map((rec, idx) => (
                      <p key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400 space-y-2">
                  <Cpu className="w-8 h-8 mx-auto text-cyan-400/40 animate-pulse" />
                  <p className="text-sm font-mono">
                    Click <strong className="text-white">'⚡ Generate Architecture Blueprint'</strong> to simulate custom data architecture recommendations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
