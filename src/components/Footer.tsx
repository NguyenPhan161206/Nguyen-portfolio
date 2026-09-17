import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0b0e15] border-t border-[#272a32] py-12 text-[#bbcabf] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-[#4edea3] font-bold text-sm select-none">&gt; {PERSONAL_INFO.handle}</span>
          <span className="hidden sm:inline text-[#3c4a42]">|</span>
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All systems nominal.</span>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="text-[#86948a]">Telemetry: 240Hz</span>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#4cd7f6] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#4edea3] transition-colors"
          >
            LinkedIn
          </a>

          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-[#1d1f27] hover:bg-[#272a32] text-[#e1e2ec] transition-colors flex items-center justify-center"
            title="Scroll to top"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
