import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV, onOpenTerminal }) => {
  // Live streaming telemetry packet counter to make the terminal card feel truly alive
  const [packetCount, setPacketCount] = useState(14820);
  const [activeFrequency, setActiveFrequency] = useState(240);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about" className="relative w-full overflow-hidden pt-8 pb-16 lg:pb-24">
      {/* Top Ambient Glow Fields */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#4edea3]/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#4cd7f6]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-96 left-10 w-72 h-72 bg-[#d0bcff]/10 rounded-full blur-[110px] pointer-events-none"></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Terminal Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#272a32] border border-[#3c4a42]/50 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
              </span>
              <span className="font-mono text-xs text-[#bbcabf]">~/developer/portfolio $</span>
              <span className="font-mono text-xs text-[#4edea3] font-semibold">status --active</span>
            </div>

            {/* Master Title with Gradient Glow */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase text-[#4cd7f6] font-semibold">
                Applied AI • Deep Systems • Economics
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-[#4edea3] via-[#4cd7f6] to-[#d0bcff]">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#bbcabf] max-w-2xl leading-relaxed">
              AI Engineer specializing in{' '}
              <span className="text-[#e1e2ec] font-medium">Applied AI for Economics &amp; Business</span> • 3rd-year
              UMT IT Honor Student (<span className="text-[#4edea3] font-semibold">GPA {PERSONAL_INFO.gpa}</span>).
              Bridging high-speed embedded nodes, deep neural search, and enterprise production systems.
            </p>

            {/* Dual CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#featured-projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4edea3] text-[#003824] font-mono text-sm font-bold transition-all duration-300 hover:shadow-[0_0_24px_rgba(78,222,163,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Flagship Systems</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#272a32] text-[#e1e2ec] hover:text-[#4cd7f6] hover:bg-[#32353d] border border-[#3c4a42]/40 transition-all duration-200 font-mono text-sm font-medium"
              >
                <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">terminal</span>
                <span>View Master CV / Terminal</span>
              </button>
            </div>

            {/* Quick Micro-Tech Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-mono text-xs text-[#86948a] mr-1 font-semibold">STACK:</span>
              <span className="px-3 py-1 rounded-full bg-[#191b23] border border-[#3c4a42]/30 text-[#4cd7f6] font-mono text-xs font-medium">
                PyTorch / TF
              </span>
              <span className="px-3 py-1 rounded-full bg-[#191b23] border border-[#3c4a42]/30 text-[#4edea3] font-mono text-xs font-medium">
                ESP32-S3 / FreeRTOS
              </span>
              <span className="px-3 py-1 rounded-full bg-[#191b23] border border-[#3c4a42]/30 text-[#d0bcff] font-mono text-xs font-medium">
                Agentic RAG
              </span>
              <span className="px-3 py-1 rounded-full bg-[#191b23] border border-[#3c4a42]/30 text-[#bbcabf] font-mono text-xs font-medium">
                Next.js 16
              </span>
            </div>
          </div>

          {/* Right Terminal Developer Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#1d1f27] border border-[#3c4a42]/40 rounded-xl shadow-2xl overflow-hidden relative group transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(78,222,163,0.2)]">
              {/* Terminal Header Strip */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ffb4ab] inline-block"></span>
                  <span className="h-3 w-3 rounded-full bg-[#03b5d3] inline-block"></span>
                  <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block"></span>
                </div>
                <span className="font-mono text-xs text-[#86948a]">nguyenphan@umt-node:~</span>
                <span className="material-symbols-outlined text-[16px] text-[#86948a]">dns</span>
              </div>

              {/* Card Body: Avatar & Interactive Prompt */}
              <div className="p-5 sm:p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      alt="Phan Hữu Bình Nguyên portrait"
                      src={PERSONAL_INFO.avatarUrl}
                      onError={(e) => {
                        e.currentTarget.src = PERSONAL_INFO.fallbackAvatarUrl;
                      }}
                      className="w-20 h-20 rounded-xl object-cover ring-2 ring-[#4edea3]/50 shadow-lg"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#4edea3] ring-2 ring-[#1d1f27]"
                      title="Node online"
                    ></span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h2 className="text-xl font-bold text-[#e1e2ec] tracking-tight">{PERSONAL_INFO.name}</h2>
                    <span className="font-mono text-xs text-[#4cd7f6] font-medium">{PERSONAL_INFO.title}</span>
                    <span className="font-mono text-xs text-[#bbcabf] flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px] text-[#4edea3]">location_on</span>
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* CLI Console Log Box */}
                <div className="p-4 rounded-lg bg-[#0b0e15] border border-[#272a32] font-mono text-xs space-y-2.5 shadow-inner">
                  <div>
                    <span className="text-[#4edea3] font-bold">&gt;</span>{' '}
                    <span className="text-[#e1e2ec] font-semibold">whoami</span>
                    <p className="text-[#bbcabf] pl-3">Phan Hữu Bình Nguyên (UMT AI Major, Exp. 2028)</p>
                  </div>
                  <div>
                    <span className="text-[#4edea3] font-bold">&gt;</span>{' '}
                    <span className="text-[#e1e2ec] font-semibold">focus</span>
                    <p className="text-[#4cd7f6] pl-3">
                      ["Edge IoT / AIoT", "Deep Learning & Neural Heuristics", "Agentic RAG & Full-stack"]
                    </p>
                  </div>
                  <div>
                    <span className="text-[#4edea3] font-bold">&gt;</span>{' '}
                    <span className="text-[#e1e2ec] font-semibold">location</span>
                    <p className="text-[#d0bcff] pl-3">HCMC, VN | Available for AI/ML Internships</p>
                  </div>
                  <div className="pt-1 flex items-center justify-between text-[#4edea3] border-t border-[#1d1f27]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#4edea3] font-bold">&gt;</span>
                      <span className="text-[#bbcabf]">telemetry_daemon:</span>
                      <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-[#4edea3]/20 text-[#4edea3] font-mono animate-pulse font-semibold">
                        STREAMING {activeFrequency}Hz
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#86948a]">#{packetCount}</span>
                  </div>
                </div>

                {/* Quick Link Row */}
                <div className="flex items-center justify-between pt-1 text-[#bbcabf] font-mono text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4edea3]"></span>
                    Ready for Q3/Q4 Internships
                  </span>
                  <a
                    href="https://umt.edu.vn"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#86948a] hover:text-[#4edea3] transition-colors"
                  >
                    umt.edu.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
