import React from 'react';
import { SecondaryProject } from '../types';

interface SecondaryProjectModalProps {
  project: SecondaryProject | null;
  onClose: () => void;
}

export const SecondaryProjectModal: React.FC<SecondaryProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-[#191b23] border border-[#3c4a42] rounded-xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="px-5 py-3.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ color: project.iconColor }}
            >
              {project.icon}
            </span>
            <span className="font-mono text-xs font-bold text-[#e1e2ec] uppercase">
              {project.domain} • SYSTEM SPECIFICATION
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#86948a] hover:text-[#e1e2ec] transition-colors p-1"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#e1e2ec]">{project.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono text-xs font-bold text-[#4edea3]">{project.techStack}</span>
              <span className="text-[#86948a]">•</span>
              <span className="font-mono text-xs text-[#4cd7f6]">{project.highlightMetric}</span>
            </div>
          </div>

          <p className="text-sm text-[#bbcabf] leading-relaxed">{project.description}</p>

          {project.detailedNotes && (
            <div className="p-4 rounded-lg bg-[#0b0e15] border border-[#272a32] space-y-2">
              <span className="font-mono text-[11px] text-[#4edea3] uppercase font-bold tracking-wider">
                Engineering Architecture &amp; Methodology
              </span>
              <p className="text-xs text-[#bbcabf] leading-relaxed">{project.detailedNotes}</p>
            </div>
          )}

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#272a32]">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#272a32] hover:bg-[#32353d] text-xs font-mono text-[#e1e2ec] font-semibold transition-colors"
            >
              Close Specification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
