import React, { useState } from 'react';
import { Cpu, Zap, Sliders, Server, HardDrive, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

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
        `Recommended Enterprise Topology: ${orchestrator} connected to Microsoft Fabric OneLake & Azure SQL Data Warehouse.`,
        `Throughput Capability: Concurrent parallel ingestion from ${sourcesCount} active data sources with sub-200ms query latency.`,
        `Target Outcome: Direct Lake integration delivering live real-time metrics for ${analyticsTarget}.`,
        `Security & Compliance: Automated Azure Key Vault secret rotation, RBAC, and TLS 1.3 encrypted data movement.`
      ];

      const metrics = {
        throughput: `${(sourcesCount * 1.45).toFixed(1)}M records/day`,
        latency: '< 180 ms',
        costSavings: `${Math.min(25 + sourcesCount * 1.2, 55).toFixed(0)}% TCO Savings`,
        uptime: '99.95% SLA'
      };

      setBlueprintResult({ recs, metrics });
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section className="section-padding bg-white" id="ai-insights">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="section-badge-master">
            <span>Solution Assessment Simulator</span>
          </div>
          <h2 className="section-title-master">
            Simulate Your <span className="text-[#a3e635] bg-[#111111] px-2 py-0.5 rounded">Cloud Data Architecture</span>
          </h2>
          <p className="section-subtitle-master">
            Configure your business data parameters to generate an enterprise cloud pipeline blueprint in real-time.
          </p>
        </div>

        {/* Form + Topology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Card */}
          <Tilt3DCard className="lg:col-span-5 master-card p-8 space-y-6">
            <div className="flex items-center gap-2 border-b border-[#ececec] pb-3 text-[#111111] font-mono text-xs uppercase tracking-wider font-bold">
              <Sliders className="w-4 h-4 text-[#a3e635]" />
              <span>CONFIGURE PIPELINE PARAMETERS</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <label className="text-[#555555]">Enterprise Data Sources:</label>
                <span className="text-[#111111] font-bold">{sourcesCount} Sources</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={sourcesCount} 
                onChange={(e) => setSourcesCount(Number(e.target.value))}
                className="w-full h-2 bg-[#f7f7f7] rounded-lg appearance-none cursor-pointer accent-[#a3e635] border border-[#ececec]"
              />
              <div className="flex justify-between text-[10px] text-[#888888] font-mono">
                <span>1 (Standard)</span>
                <span>15 (Enterprise)</span>
                <span>30+ (Global)</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-[#555555]">Primary Pipeline Orchestrator:</label>
              <select 
                value={orchestrator}
                onChange={(e) => setOrchestrator(e.target.value)}
                className="w-full bg-[#f7f7f7] border border-[#ececec] text-[#111111] rounded-md p-3 text-xs font-mono outline-none focus:border-[#111111] transition-colors"
              >
                <option value="Azure Data Factory">Azure Data Factory (Hybrid & Cloud ETL)</option>
                <option value="Microsoft Fabric">Microsoft Fabric (SaaS Lakehouse)</option>
                <option value="Azure Synapse Analytics">Azure Synapse Analytics (Big Data Warehousing)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-[#555555]">Target Analytics Outcome:</label>
              <select 
                value={analyticsTarget}
                onChange={(e) => setAnalyticsTarget(e.target.value)}
                className="w-full bg-[#f7f7f7] border border-[#ececec] text-[#111111] rounded-md p-3 text-xs font-mono outline-none focus:border-[#111111] transition-colors"
              >
                <option value="Real-time Executive Dashboards (Power BI)">Real-time Executive Dashboards (Power BI)</option>
                <option value="Predictive Machine Learning Pipelines">Predictive Machine Learning Pipelines</option>
                <option value="Automated SQL Data Warehouse Ingestion">Automated SQL Data Warehouse Ingestion</option>
              </select>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-master-primary w-full justify-center py-3.5 text-xs uppercase tracking-widest font-bold"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 animate-spin text-[#a3e635]" />
                  <span>Synthesizing Topology...</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#a3e635]" />
                  <span>Generate Architecture Assessment</span>
                </span>
              )}
            </button>
          </Tilt3DCard>

          {/* Topology Graph & Output */}
          <div className="lg:col-span-7 space-y-6">
            <div className="master-card p-6 border-[#ececec] relative bg-[#f7f7f7]">
              <div className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-6 flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
                SIMULATED PIPELINE TOPOLOGY DIAGRAM
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center items-center relative py-4">
                <div className="p-3 rounded-lg bg-white border border-[#ececec] shadow-sm flex flex-col items-center gap-2">
                  <Server className="w-5 h-5 text-[#111111]" />
                  <span className="text-[11px] font-mono text-[#111111] font-bold">{sourcesCount} Sources</span>
                  <span className="text-[9px] text-[#888888] font-mono uppercase">Ingestion</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#ececec] shadow-sm flex flex-col items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#111111]" />
                  <span className="text-[11px] font-mono text-[#111111] font-bold truncate max-w-full px-1">{orchestrator.split(' ')[0]}</span>
                  <span className="text-[9px] text-[#888888] font-mono uppercase">Transform</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#ececec] shadow-sm flex flex-col items-center gap-2">
                  <HardDrive className="w-5 h-5 text-[#111111]" />
                  <span className="text-[11px] font-mono text-[#111111] font-bold">Lakehouse</span>
                  <span className="text-[9px] text-[#888888] font-mono uppercase">Storage</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#ececec] shadow-sm flex flex-col items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#111111]" />
                  <span className="text-[11px] font-mono text-[#111111] font-bold">Power BI</span>
                  <span className="text-[9px] text-[#888888] font-mono uppercase">Analytics</span>
                </div>
              </div>
            </div>

            <div className="master-card p-6 border-[#ececec] min-h-[220px] flex flex-col justify-between">
              {blueprintResult ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between border-b border-[#ececec] pb-3">
                    <span className="text-xs font-mono text-[#111111] font-bold uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
                      ASSESSMENT COMPLETE - TOPOLOGY SPECIFICATION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-[#a3e635] font-bold">
                      OPTIMIZED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-lg bg-[#f7f7f7] border border-[#ececec] text-center font-mono">
                    <div>
                      <span className="text-[10px] text-[#888888] block">Daily Vol.</span>
                      <span className="text-[#111111] font-bold text-xs">{blueprintResult.metrics.throughput}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#888888] block">Latency</span>
                      <span className="text-[#111111] font-bold text-xs">{blueprintResult.metrics.latency}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#888888] block">Savings</span>
                      <span className="text-[#111111] font-bold text-xs">{blueprintResult.metrics.costSavings}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#888888] block">Uptime SLA</span>
                      <span className="text-[#111111] font-bold text-xs">{blueprintResult.metrics.uptime}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {blueprintResult.recs.map((rec, idx) => (
                      <p key={idx} className="text-xs text-[#555555] flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-[#111111] shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-[#888888] space-y-2">
                  <Cpu className="w-8 h-8 mx-auto text-[#111111]/40 animate-pulse" />
                  <p className="text-sm font-mono text-[#555555]">
                    Click <strong className="text-[#111111]">'Generate Architecture Assessment'</strong> to simulate custom data architecture recommendations.
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
