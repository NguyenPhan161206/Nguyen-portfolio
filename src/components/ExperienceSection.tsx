import React from 'react';
import { EXPERIENCES, CREDENTIALS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 mb-10 border-b border-[#272a32] pb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-[#4edea3] font-bold">02 //</span>
          <span className="font-mono text-xs uppercase text-[#4cd7f6] tracking-wider font-semibold">
            TRACK RECORD &amp; LEADERSHIP
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">
          Leadership &amp; Academic Expeditions
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl bg-[#1d1f27] border border-[#272a32] shadow-md flex flex-col gap-2 relative transition-all duration-200 hover:bg-[#272a32] hover:border-[#3c4a42]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#e1e2ec]">{exp.role}</h3>
                <span
                  className={`font-mono text-xs px-3 py-1 rounded-full font-semibold border border-current/20 ${exp.periodBadgeColor}`}
                >
                  {exp.period}
                </span>
              </div>
              <span className="font-mono text-xs text-[#4cd7f6] font-medium">{exp.organization}</span>
              <p className="text-sm text-[#bbcabf] leading-relaxed pt-1">{exp.description}</p>

              {/* Bullets if available */}
              {exp.bullets && (
                <ul className="pt-2 space-y-1.5 border-t border-[#272a32]/60 mt-2">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#bbcabf]">
                      <span className="text-[#4edea3] font-mono mt-0.5">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Credentials & Honors (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
          <div className="p-6 rounded-xl bg-[#191b23] border border-[#272a32] shadow-md space-y-6">
            <h3 className="text-xl font-bold text-[#e1e2ec] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4edea3]">military_tech</span>
              <span>Credentials &amp; Honors</span>
            </h3>

            <div className="space-y-3">
              {CREDENTIALS.map((cred, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#1d1f27] border border-[#272a32]/80">
                  <span className={`font-mono text-xs font-bold ${cred.badgeColor}`}>{cred.badge}</span>
                  <p className="text-xs sm:text-sm text-[#e1e2ec] font-medium mt-1 leading-relaxed">
                    {cred.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Degree Trajectory Box */}
            <div className="p-5 rounded-lg bg-[#0b0e15] border border-[#272a32] text-center space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#86948a] font-semibold">
                Degree Trajectory
              </span>
              <p className="text-lg font-bold text-[#e1e2ec]">B.S. in Computer Science</p>
              <p className="font-mono text-xs text-[#4edea3] font-medium">Major: Artificial Intelligence (2024 - 2028)</p>
              <p className="font-mono text-[11px] text-[#bbcabf] pt-1">UMT IT Honors Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
