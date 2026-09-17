import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 mb-10 border-b border-[#272a32] pb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-[#4edea3] font-bold">03 //</span>
          <span className="font-mono text-xs uppercase text-[#4cd7f6] tracking-wider font-semibold">
            TECHNICAL ARSENAL
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">
          Categorized Skills &amp; Tooling
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.title;
          return (
            <div
              key={cat.title}
              onClick={() => setSelectedCategory(isSelected ? null : cat.title)}
              className={`p-6 rounded-xl bg-[#1d1f27] border transition-all duration-300 shadow-md flex flex-col justify-between gap-5 cursor-pointer group ${
                isSelected
                  ? 'border-[#4edea3] bg-[#272a32] shadow-[0_0_25px_rgba(78,222,163,0.15)]'
                  : 'border-[#272a32] hover:border-[#3c4a42] hover:bg-[#272a32]'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="p-2.5 rounded-lg material-symbols-outlined text-[24px] transition-transform duration-200 group-hover:scale-105"
                    style={{
                      backgroundColor: `${cat.color}15`,
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-bold text-[#e1e2ec] group-hover:text-[#4edea3] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                        skill.highlight
                          ? 'bg-[#0b0e15] font-bold border'
                          : 'bg-[#272a32] text-[#bbcabf] hover:text-[#e1e2ec]'
                      }`}
                      style={
                        skill.highlight
                          ? {
                              borderColor: `${cat.color}40`,
                              color: cat.color,
                            }
                          : undefined
                      }
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#272a32] font-mono text-[11px] text-[#bbcabf] leading-relaxed">
                {cat.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
