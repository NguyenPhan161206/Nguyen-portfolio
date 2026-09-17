import React, { useState } from 'react';
import { FLAGSHIP_PROJECTS, SECONDARY_PROJECTS } from '../data/portfolioData';
import { SecondaryProject } from '../types';

interface ProjectsSectionProps {
  onSelectSecondaryProject: (project: SecondaryProject) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectSecondaryProject }) => {
  // Interactive sensor simulator state for UMT-TBS
  const [sensorDistance, setSensorDistance] = useState(1.2); // meters
  const [isSimulatingAlert, setIsSimulatingAlert] = useState(false);
  const [copiedSQL, setCopiedSQL] = useState(false);

  // Trigger simulated ultrasonic ping event
  const triggerSensorPing = () => {
    setIsSimulatingAlert(true);
    const newDist = (Math.random() * 1.5 + 0.3).toFixed(2);
    setSensorDistance(parseFloat(newDist));
    setTimeout(() => {
      setIsSimulatingAlert(false);
    }, 1800);
  };

  const sqlPolicyCode = `CREATE POLICY "recruiter_access_only"
ON public.job_applications
FOR SELECT USING (
  auth.uid() IN (
    SELECT employer_id
    FROM job_listings
    WHERE id = job_applications.listing_id
  )
);`;

  const copySQL = () => {
    navigator.clipboard.writeText(sqlPolicyCode).then(() => {
      setCopiedSQL(true);
      setTimeout(() => setCopiedSQL(false), 2000);
    });
  };

  const umtProject = FLAGSHIP_PROJECTS.find((p) => p.id === 'umt-tbs')!;
  const snakeProject = FLAGSHIP_PROJECTS.find((p) => p.id === 'snake-ann')!;
  const joblinkProject = FLAGSHIP_PROJECTS.find((p) => p.id === 'joblink')!;

  return (
    <section id="featured-projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#272a32] pb-6">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-[#4edea3] font-bold">01 //</span>
            <span className="font-mono text-xs uppercase text-[#4cd7f6] tracking-wider font-semibold">
              SYSTEM SCHEMATICS &amp; REPOSITORIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">
            Flagship Engineering Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[#bbcabf] max-w-md leading-relaxed">
          Full-lifecycle implementations: from micro-controller pinout constraints and custom neural loss surfaces to
          RLS-guarded cloud APIs.
        </p>
      </div>

      {/* Flagship 1: UMT-TBS-official */}
      <div className="rounded-xl bg-[#1d1f27] border border-[#3c4a42]/40 shadow-xl overflow-hidden transition-all duration-300 hover:border-[#4edea3]/40 hover:shadow-[0_0_30px_rgba(78,222,163,0.15)]">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ffb4ab] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#03b5d3] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block"></span>
            <span className="ml-2 font-mono text-xs text-[#bbcabf]">{umtProject.fileHeader}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#4edea3]/10 text-[#4edea3] uppercase font-bold border border-[#4edea3]/20">
            {umtProject.categoryBadge}
          </span>
        </div>

        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {umtProject.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-0.5 rounded-full font-mono text-xs ${
                    tag.includes('<50ms')
                      ? 'bg-[#4edea3]/20 text-[#4edea3] font-bold border border-[#4edea3]/30'
                      : tag.includes('ESP32')
                      ? 'bg-[#272a32] text-[#4cd7f6]'
                      : tag.includes('Gitleaks')
                      ? 'bg-[#93000a]/20 text-[#ffb4ab] border border-[#ffb4ab]/30'
                      : 'bg-[#272a32] text-[#bbcabf]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#e1e2ec] tracking-tight">{umtProject.title}</h3>

            <p className="text-sm text-[#bbcabf] leading-relaxed">{umtProject.description}</p>

            {/* Highlights */}
            <div className="space-y-2.5 pt-1">
              {umtProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span
                    className="material-symbols-outlined text-[18px] shrink-0 mt-0.5"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs text-[#bbcabf] leading-relaxed">
                    <strong className="text-[#e1e2ec] font-semibold">{item.title} </strong>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={umtProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#4edea3] text-[#003824] font-mono text-xs font-bold hover:shadow-[0_0_16px_rgba(78,222,163,0.35)] transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>Inspect Repository (UMT-TBS-official)</span>
              </a>

              <button
                type="button"
                onClick={triggerSensorPing}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-[#4cd7f6] font-mono text-xs font-semibold border border-[#4cd7f6]/30 transition-all"
                title="Test simulated packet stream"
              >
                <span className="material-symbols-outlined text-[16px]">radar</span>
                <span>Simulate Ultrasonic Ping</span>
              </button>

              <span className="font-mono text-xs text-[#bbcabf] flex items-center gap-1.5 ml-auto">
                <span className="h-2 w-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                {umtProject.statusBadge}
              </span>
            </div>
          </div>

          {/* Architecture Visual Diagram */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-[#0b0e15] border border-[#272a32] font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[#86948a] border-b border-[#1d1f27] pb-2">
                <span className="font-bold text-[#4cd7f6]">ARCHITECTURAL SCHEMATIC</span>
                <span className="text-[11px]">FreeRTOS Kernel</span>
              </div>

              {/* Inline Architectural Flow SVG */}
              <div className="w-full py-2 relative">
                {isSimulatingAlert && (
                  <div className="absolute inset-0 bg-[#4edea3]/10 border border-[#4edea3] rounded flex items-center justify-center backdrop-blur-[1px] animate-pulse z-10">
                    <span className="font-mono text-xs font-bold text-[#4edea3] px-2 py-1 bg-[#10131a] rounded border border-[#4edea3]">
                      COLLISION RADAR: {sensorDistance}m • TRIGGERED (&lt;50ms)
                    </span>
                  </div>
                )}
                <svg
                  className="w-full text-[#bbcabf]"
                  fill="none"
                  viewBox="0 0 400 210"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Sensor Node Box */}
                  <rect x="10" y="20" width="110" height="70" rx="6" fill="#1d1f27" stroke="#3c4a42" strokeWidth="1" />
                  <text x="20" y="45" fill="#4edea3" fontFamily="monospace" fontSize="11" fontWeight="bold">
                    ESP32-S3 (Tail)
                  </text>
                  <text x="20" y="62" fill="#bbcabf" fontFamily="monospace" fontSize="9">
                    6x JSN-SR04T
                  </text>
                  <text x="20" y="76" fill="#bbcabf" fontFamily="monospace" fontSize="9">
                    Non-blocking
                  </text>

                  {/* Cabin Node Box */}
                  <rect
                    x="260"
                    y="20"
                    width="130"
                    height="70"
                    rx="6"
                    fill="#1d1f27"
                    stroke="#3c4a42"
                    strokeWidth="1"
                  />
                  <text x="270" y="45" fill="#4cd7f6" fontFamily="monospace" fontSize="11" fontWeight="bold">
                    ESP32-S3 (Cabin)
                  </text>
                  <text x="270" y="62" fill="#bbcabf" fontFamily="monospace" fontSize="9">
                    LVGL v9 Display
                  </text>
                  <text x="270" y="76" fill="#bbcabf" fontFamily="monospace" fontSize="9">
                    Audio Alarm Matrix
                  </text>

                  {/* Critical ESP-NOW Arrow */}
                  <path d="M120 55 L260 55" stroke="#4edea3" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="258,52 265,55 258,58" fill="#4edea3" />
                  <text x="145" y="48" fill="#4edea3" fontFamily="monospace" fontSize="9" fontWeight="bold">
                    ESP-NOW (&lt;50ms)
                  </text>

                  {/* ThingsBoard Cloud Node */}
                  <rect
                    x="135"
                    y="130"
                    width="130"
                    height="60"
                    rx="6"
                    fill="#1d1f27"
                    stroke="#3c4a42"
                    strokeWidth="1"
                  />
                  <text x="150" y="153" fill="#d0bcff" fontFamily="monospace" fontSize="11" fontWeight="bold">
                    ThingsBoard
                  </text>
                  <text x="150" y="170" fill="#bbcabf" fontFamily="monospace" fontSize="9">
                    MQTT Core Telemetry
                  </text>

                  {/* Telemetry Arrows */}
                  <path d="M325 90 L325 160 L265 160" stroke="#4cd7f6" strokeWidth="1.5" />
                  <polygon points="267,157 260,160 267,163" fill="#4cd7f6" />
                  <text x="332" y="135" fill="#4cd7f6" fontFamily="monospace" fontSize="8">
                    Wi-Fi/4G
                  </text>
                </svg>
              </div>

              {/* Latency Benchmark Metrics */}
              <div className="pt-1 grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded bg-[#1d1f27] border border-[#272a32] flex flex-col">
                  <span className="text-[#86948a]">Max Measured Ping</span>
                  <span className="font-bold text-[#4edea3] text-sm font-mono">34.2 ms</span>
                </div>
                <div className="p-2.5 rounded bg-[#1d1f27] border border-[#272a32] flex flex-col">
                  <span className="text-[#86948a]">Sensor Poll Freq</span>
                  <span className="font-bold text-[#4cd7f6] text-sm font-mono">20 Hz / ch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flagship 2: Snake_ANN */}
      <div className="rounded-xl bg-[#1d1f27] border border-[#3c4a42]/40 shadow-xl overflow-hidden transition-all duration-300 hover:border-[#4cd7f6]/40 hover:shadow-[0_0_30px_rgba(76,215,246,0.15)]">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ffb4ab] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#03b5d3] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block"></span>
            <span className="ml-2 font-mono text-xs text-[#bbcabf]">{snakeProject.fileHeader}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#4cd7f6]/10 text-[#4cd7f6] uppercase font-bold border border-[#4cd7f6]/20">
            {snakeProject.categoryBadge}
          </span>
        </div>

        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {snakeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-0.5 rounded-full font-mono text-xs ${
                    tag.includes('Learned')
                      ? 'bg-[#d0bcff]/20 text-[#d0bcff] font-bold border border-[#d0bcff]/30'
                      : tag.includes('TensorFlow')
                      ? 'bg-[#272a32] text-[#4cd7f6]'
                      : 'bg-[#272a32] text-[#bbcabf]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#e1e2ec] tracking-tight">{snakeProject.title}</h3>

            <p className="text-sm text-[#bbcabf] leading-relaxed">{snakeProject.description}</p>

            {/* Highlights */}
            <div className="space-y-2.5 pt-1">
              {snakeProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span
                    className="material-symbols-outlined text-[18px] shrink-0 mt-0.5"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs text-[#bbcabf] leading-relaxed">
                    <strong className="text-[#e1e2ec] font-semibold">{item.title} </strong>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={snakeProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:shadow-[0_0_16px_rgba(76,215,246,0.35)] transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                <span>Inspect Repository (Snake_ANN)</span>
              </a>

              <span className="font-mono text-xs text-[#bbcabf] flex items-center gap-1.5 ml-auto">
                <span className="h-2 w-2 rounded-full bg-[#4cd7f6]"></span>
                {snakeProject.statusBadge}
              </span>
            </div>
          </div>

          {/* Neural Heuristic Performance Card */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-[#0b0e15] border border-[#272a32] font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[#86948a] border-b border-[#1d1f27] pb-2">
                <span className="font-bold text-[#4cd7f6]">EMPIRICAL WIN-RATE GAIN</span>
                <span className="text-[11px]">N = 500 Runs / Grid</span>
              </div>

              {/* Bar Chart Comparison SVG */}
              <div className="w-full py-2">
                <svg
                  className="w-full text-[#bbcabf] font-mono"
                  fill="none"
                  viewBox="0 0 320 150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="50" y1="20" x2="50" y2="120" stroke="#32353d" strokeWidth="1" />
                  <line x1="50" y1="120" x2="300" y2="120" stroke="#32353d" strokeWidth="1" />

                  {/* Grid labels */}
                  <text x="15" y="45" fill="#86948a" fontSize="9">
                    10x10
                  </text>
                  <text x="15" y="75" fill="#86948a" fontSize="9">
                    20x20
                  </text>
                  <text x="15" y="105" fill="#86948a" fontSize="9">
                    50x50
                  </text>

                  {/* 10x10 Bar */}
                  <rect x="52" y="36" width="160" height="12" rx="2" fill="#32353d" />
                  <rect x="52" y="36" width="210" height="12" rx="2" fill="#4cd7f6" />
                  <text x="268" y="46" fill="#4cd7f6" fontSize="9" fontWeight="bold">
                    91%
                  </text>

                  {/* 20x20 Bar */}
                  <rect x="52" y="66" width="130" height="12" rx="2" fill="#32353d" />
                  <rect x="52" y="66" width="185" height="12" rx="2" fill="#4edea3" />
                  <text x="243" y="76" fill="#4edea3" fontSize="9" fontWeight="bold">
                    79%
                  </text>

                  {/* 50x50 Bar */}
                  <rect x="52" y="96" width="85" height="12" rx="2" fill="#32353d" />
                  <rect x="52" y="96" width="145" height="12" rx="2" fill="#d0bcff" />
                  <text x="203" y="106" fill="#d0bcff" fontSize="9" fontWeight="bold">
                    64%
                  </text>

                  <text x="52" y="140" fill="#86948a" fontSize="9">
                    ANN Learned vs Manhattan Baseline (+28% Avg Win Rate)
                  </text>
                </svg>
              </div>

              <div className="p-2.5 rounded bg-[#1d1f27] border border-[#272a32] text-[11px] flex justify-between items-center">
                <span className="text-[#bbcabf]">Loss Convergence (MSE):</span>
                <span className="text-[#4edea3] font-mono font-bold">0.0041 (Epoch 120)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flagship 3: Joblink */}
      <div className="rounded-xl bg-[#1d1f27] border border-[#3c4a42]/40 shadow-xl overflow-hidden transition-all duration-300 hover:border-[#d0bcff]/40 hover:shadow-[0_0_30px_rgba(208,188,255,0.15)]">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ffb4ab] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#03b5d3] inline-block"></span>
            <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block"></span>
            <span className="ml-2 font-mono text-xs text-[#bbcabf]">{joblinkProject.fileHeader}</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#b090ff]/20 text-[#d0bcff] uppercase font-bold border border-[#d0bcff]/20">
            {joblinkProject.categoryBadge}
          </span>
        </div>

        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              {joblinkProject.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-0.5 rounded-full font-mono text-xs ${
                    tag.includes('RLS')
                      ? 'bg-[#4edea3]/20 text-[#4edea3] font-bold border border-[#4edea3]/30'
                      : tag.includes('Next.js')
                      ? 'bg-[#272a32] text-[#4cd7f6]'
                      : 'bg-[#272a32] text-[#bbcabf]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#e1e2ec] tracking-tight">{joblinkProject.title}</h3>

            <p className="text-sm text-[#bbcabf] leading-relaxed">{joblinkProject.description}</p>

            {/* Highlights */}
            <div className="space-y-2.5 pt-1">
              {joblinkProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span
                    className="material-symbols-outlined text-[18px] shrink-0 mt-0.5"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs text-[#bbcabf] leading-relaxed">
                    <strong className="text-[#e1e2ec] font-semibold">{item.title} </strong>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions & Status */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={joblinkProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#272a32] text-[#e1e2ec] font-mono text-xs font-semibold hover:bg-[#32353d] hover:text-[#4edea3] border border-[#3c4a42]/40 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
                <span>Inspect Repository ({joblinkProject.repoName})</span>
              </a>

              <span className="font-mono text-xs text-[#4edea3] flex items-center gap-1.5 ml-auto">
                <span className="h-2 w-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                {joblinkProject.statusBadge}
              </span>
            </div>
          </div>

          {/* SQL Policy Visual Preview */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 rounded-xl bg-[#0b0e15] border border-[#272a32] font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[#86948a] border-b border-[#1d1f27] pb-1.5">
                <span className="text-[#4edea3] font-bold">SQL / RLS Policy Guard</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">PostgreSQL 16</span>
                  <button
                    type="button"
                    onClick={copySQL}
                    className="text-[#4cd7f6] hover:text-[#e1e2ec] transition-colors p-1 rounded bg-[#1d1f27]"
                    title="Copy SQL snippet"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copiedSQL ? 'done' : 'content_copy'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-3 rounded bg-[#1d1f27] font-mono text-[12px] text-[#bbcabf] leading-relaxed overflow-x-auto">
                <p>
                  <span className="text-[#d0bcff]">CREATE POLICY</span>{' '}
                  <span className="text-[#4cd7f6]">"recruiter_access_only"</span>
                </p>
                <p>
                  <span className="text-[#d0bcff]">ON</span> public.job_applications
                </p>
                <p>
                  <span className="text-[#d0bcff]">FOR SELECT USING</span> (
                </p>
                <p className="pl-4">
                  auth.uid() <span className="text-[#d0bcff]">IN</span> (
                </p>
                <p className="pl-8">
                  <span className="text-[#d0bcff]">SELECT</span> employer_id
                </p>
                <p className="pl-8">
                  <span className="text-[#d0bcff]">FROM</span> job_listings
                </p>
                <p className="pl-8">
                  <span className="text-[#d0bcff]">WHERE</span> id = job_applications.listing_id
                </p>
                <p className="pl-4">)</p>
                <p>);</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#86948a] pt-1">
                <span>Verification: 100% Policy Pass</span>
                <span className="text-[#4edea3] font-bold">Zero Leaks Detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Projects Grid */}
      <div className="pt-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-[#e1e2ec] tracking-tight">
            Additional Systems &amp; Research Implementations
          </h3>
          <span className="font-mono text-xs text-[#bbcabf]">{SECONDARY_PROJECTS.length} Active Repositories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECONDARY_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectSecondaryProject(project)}
              className="p-5 rounded-xl bg-[#1d1f27] border border-[#272a32] flex flex-col justify-between gap-3 transition-all duration-200 hover:bg-[#272a32] hover:border-[#3c4a42] cursor-pointer group shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-[22px] transition-transform duration-200 group-hover:scale-110"
                    style={{ color: project.iconColor }}
                  >
                    {project.icon}
                  </span>
                  <span className="font-mono text-[11px] text-[#86948a] uppercase">{project.domain}</span>
                </div>
                <h4 className="text-base font-bold text-[#e1e2ec] group-hover:text-[#4edea3] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-[#bbcabf] leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#272a32] text-xs">
                <span className="font-mono text-[11px] font-medium" style={{ color: project.iconColor }}>
                  {project.techStack}
                </span>
                <span className="font-mono text-[11px] text-[#86948a]">{project.highlightMetric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
