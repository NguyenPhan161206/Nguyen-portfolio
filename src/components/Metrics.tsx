import React from 'react';
import { METRICS } from '../data/portfolioData';

export const Metrics: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {METRICS.map((metric) => (
          <div
            key={metric.id}
            className="p-6 rounded-xl bg-[#191b23] border border-[#272a32] shadow-md relative overflow-hidden transition-all duration-300 hover:border-[#3c4a42] hover:bg-[#1d1f27] group"
          >
            <div className="flex items-center justify-between pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#bbcabf] font-semibold">
                {metric.label}
              </span>
              <span
                className="material-symbols-outlined text-[24px] transition-transform duration-300 group-hover:scale-110"
                style={{ color: metric.accentColor }}
              >
                {metric.icon}
              </span>
            </div>
            <div
              className="text-4xl sm:text-5xl font-extrabold tracking-tight font-sans"
              style={{ color: metric.accentColor }}
            >
              {metric.value}
              {metric.unit && (
                <span className="text-xl sm:text-2xl text-[#bbcabf] font-normal tracking-normal ml-0.5">
                  {metric.unit}
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-[#bbcabf] pt-2">{metric.subtitle}</p>

            {/* Subtle glow border effect */}
            <div
              className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: metric.accentColor }}
            ></div>
          </div>
        ))}
      </div>

      {/* Narrative Banner */}
      <div className="mt-6 p-6 rounded-xl bg-[#272a32]/80 border border-[#3c4a42]/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg backdrop-blur-sm">
        <div className="flex items-start sm:items-center gap-4">
          <div className="p-3 rounded-lg bg-[#4edea3]/10 text-[#4edea3] shrink-0 border border-[#4edea3]/20">
            <span className="material-symbols-outlined text-[28px]">insights</span>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-[#e1e2ec] tracking-tight">
              Quantitative Fusion: Code, Hardware &amp; Economic Logic
            </h3>
            <p className="text-sm text-[#bbcabf] leading-relaxed mt-1">
              Unlike typical software-only profiles, my approach anchors algorithmic AI into tangible constraints:
              sub-50ms embedded telemetry, high-dimensional neural heuristic optimization, and enterprise financial
              risk models.
            </p>
          </div>
        </div>
        <a
          href="#skills"
          className="shrink-0 font-mono text-xs px-4 py-2.5 rounded-lg bg-[#32353d] hover:bg-[#1d1f27] text-[#4cd7f6] hover:text-[#e1e2ec] border border-[#4cd7f6]/30 transition-all flex items-center gap-2 font-semibold group"
        >
          <span>Inspect Architecture Stack</span>
          <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-y-0.5">
            south
          </span>
        </a>
      </div>
    </section>
  );
};
