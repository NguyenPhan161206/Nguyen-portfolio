import React from 'react';
import { PERSONAL_INFO, FLAGSHIP_PROJECTS, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#191b23] border border-[#3c4a42] rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[22px]">description</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#e1e2ec]">
              CURRICULUM VITAE • PHAN HỮU BÌNH NGUYÊN
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Phan%20Huu%20Binh%20Nguyen`}
              className="px-3 py-1.5 rounded-lg bg-[#4edea3] text-[#003824] font-mono text-xs font-bold hover:shadow-[0_0_12px_rgba(78,222,163,0.4)] transition-all"
            >
              Contact Direct
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#86948a] hover:text-[#e1e2ec] hover:bg-[#272a32] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* CV Content Document Layout */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8 text-sm text-[#bbcabf] font-sans">
          {/* Header Identity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#272a32]">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#e1e2ec] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-xs text-[#4edea3] font-semibold">
                AI Engineer • Applied AI for Economics &amp; Business
              </p>
              <p className="text-xs text-[#bbcabf]">
                {PERSONAL_INFO.location} • {PERSONAL_INFO.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={PERSONAL_INFO.avatarUrl}
                onError={(e) => {
                  e.currentTarget.src = PERSONAL_INFO.fallbackAvatarUrl;
                }}
                alt="Portrait"
                className="w-16 h-16 rounded-xl object-cover ring-2 ring-[#4edea3]/40"
              />
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-bold border-b border-[#272a32] pb-1">
              EDUCATION &amp; ACADEMIC HONORS
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-bold text-[#e1e2ec] text-base">UMT - University of Management and Technology</p>
                <p className="text-xs text-[#bbcabf]">Bachelor of Science in Computer Science (Major: Artificial Intelligence)</p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs mt-1 sm:mt-0">
                <span className="text-[#4edea3] font-bold">GPA: 3.39 / 4.0 (Honor Roll)</span>
                <p className="text-[#86948a]">2024 – 2028</p>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ec]">AIT Thailand Scholar (2026)</span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ec]">Samsung Innovation Campus SIC</span>
              <span className="px-2.5 py-1 rounded bg-[#272a32] text-[#e1e2ec]">Cisco Certified Fundamentals</span>
            </div>
          </div>

          {/* Flagship Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-bold border-b border-[#272a32] pb-1">
              ENGINEERING REPOSITORIES &amp; FLAGSHIP SYSTEMS
            </h2>
            {FLAGSHIP_PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 p-4 rounded-xl bg-[#1d1f27] border border-[#272a32]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#e1e2ec] hover:text-[#4edea3] transition-colors"
                  >
                    {proj.title}
                  </a>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#0b0e15] text-[#4cd7f6]">
                    {proj.tags.slice(0, 3).join(', ')}
                  </span>
                </div>
                <p className="text-xs text-[#bbcabf]">{proj.description}</p>
              </div>
            ))}
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-bold border-b border-[#272a32] pb-1">
              LEADERSHIP &amp; COMMUNITY
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold text-[#e1e2ec]">{exp.role}</p>
                  <span className="font-mono text-xs text-[#4edea3]">{exp.period}</span>
                </div>
                <p className="font-mono text-xs text-[#4cd7f6]">{exp.organization}</p>
                <p className="text-xs text-[#bbcabf]">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Matrix */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-bold border-b border-[#272a32] pb-1">
              TECHNICAL PROFICIENCY MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-[#1d1f27]">
                  <p className="font-mono font-bold text-[#d0bcff]">{cat.title}</p>
                  <p className="text-[#bbcabf] mt-1">{cat.skills.map((s) => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0b0e15] border-t border-[#272a32] flex items-center justify-between text-xs font-mono">
          <span className="text-[#86948a]">Format: PDF Render Mode Verified</span>
          <button
            onClick={() => window.print()}
            className="px-4 py-1.5 rounded bg-[#272a32] hover:bg-[#32353d] text-[#e1e2ec] font-semibold transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
