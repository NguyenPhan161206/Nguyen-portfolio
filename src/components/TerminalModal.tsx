import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, FLAGSHIP_PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCV: () => void;
}

interface CommandLog {
  id: number;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenCV }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 1,
      command: 'system --boot',
      output: (
        <div className="text-xs text-[#bbcabf] space-y-1">
          <p className="text-[#4edea3]">Phan Hữu Bình Nguyên v2.5 Interactive Terminal Initialized.</p>
          <p>Type <span className="text-[#4cd7f6] font-bold">help</span> to view available system routines.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="text-xs space-y-1">
            <p className="text-[#4edea3] font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 gap-1 text-[#bbcabf] pl-2 font-mono">
              <div><span className="text-[#4cd7f6]">whoami</span> - Developer overview</div>
              <div><span className="text-[#4cd7f6]">projects</span> - Flagship repositories</div>
              <div><span className="text-[#4cd7f6]">skills</span> - Technical arsenal</div>
              <div><span className="text-[#4cd7f6]">cv</span> - Open Master CV modal</div>
              <div><span className="text-[#4cd7f6]">contact</span> - Direct channels</div>
              <div><span className="text-[#4cd7f6]">status</span> - System telemetry</div>
              <div><span className="text-[#4cd7f6]">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs text-[#bbcabf] space-y-1">
            <p className="text-[#e1e2ec] font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.title})</p>
            <p>Major: Applied AI for Economics &amp; Business • UMT IT Honor Student (GPA {PERSONAL_INFO.gpa})</p>
            <p className="text-[#4cd7f6]">{PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-2">
            <p className="text-[#4edea3] font-bold">FLAGSHIP REPOSITORIES:</p>
            {FLAGSHIP_PROJECTS.map((proj) => (
              <div key={proj.id} className="pl-2 border-l border-[#4edea3]/40">
                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#4cd7f6] font-bold hover:underline"
                >
                  {proj.title}
                </a>
                <p className="text-[#bbcabf]">{proj.tags.join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-2">
            <p className="text-[#4edea3] font-bold">TECHNICAL SKILLS:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title} className="pl-2">
                <span className="text-[#d0bcff] font-semibold">{cat.title}:</span>{' '}
                <span className="text-[#bbcabf]">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'cv':
        onOpenCV();
        output = <p className="text-[#4edea3] text-xs">Master Curriculum Vitae modal dispatched.</p>;
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1">
            <p>Email: <span className="text-[#4edea3]">{PERSONAL_INFO.email}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#4cd7f6] underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#4cd7f6] underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'status':
        output = (
          <div className="text-xs space-y-1 text-[#bbcabf]">
            <p>Kernel: <span className="text-[#4edea3]">FreeRTOS / Linux 6.8</span></p>
            <p>Telemetry Daemon: <span className="text-[#4edea3] animate-pulse">STREAMING 240Hz</span></p>
            <p>Latency: <span className="text-[#4cd7f6]">34.2ms peer-to-peer</span></p>
            <p>Availability: <span className="text-[#4edea3]">Ready for Q3/Q4 AI Engineering Internships</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-[#ffb4ab] text-xs">
            command not found: {cleanCmd}. Type <span className="text-[#4cd7f6]">help</span> for valid routines.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: input,
        output,
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[520px] bg-[#10131a] border border-[#3c4a42] rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="h-3 w-3 rounded-full bg-[#ffb4ab] hover:opacity-80 transition-opacity"
              title="Close terminal"
            ></button>
            <span className="h-3 w-3 rounded-full bg-[#03b5d3]"></span>
            <span className="h-3 w-3 rounded-full bg-[#10b981]"></span>
            <span className="ml-2 text-xs text-[#bbcabf]">terminal://nguyenphan@umt-node</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#86948a] hover:text-[#e1e2ec] transition-colors p-1"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Terminal Content Buffer */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3">
          {history.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4edea3] font-bold">&gt;</span>
                <span className="text-[#e1e2ec]">{log.command}</span>
              </div>
              <div className="pl-3">{log.output}</div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-[#0b0e15] border-t border-[#272a32] flex items-center gap-2"
        >
          <span className="text-[#4edea3] font-bold text-sm">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'skills', 'cv'..."
            className="flex-1 bg-transparent text-[#e1e2ec] text-xs font-mono focus:outline-none placeholder:text-[#86948a]"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-[#272a32] hover:bg-[#32353d] text-[#4edea3] text-xs font-semibold"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};
