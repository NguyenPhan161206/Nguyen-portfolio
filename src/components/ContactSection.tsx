import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'internship',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionFeedback(null);

    // Simulate TLS encrypted handshake & dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionFeedback('> Transmission buffered: status 200 OK. Packet transmitted successfully via TLS socket.');
      setFormData({
        name: '',
        email: '',
        domain: 'internship',
        message: '',
      });

      // Clear feedback after 6 seconds
      setTimeout(() => {
        setSubmissionFeedback(null);
      }, 6000);
    }, 900);
  };

  return (
    <section id="contact-terminal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 mb-8">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 mb-10 border-b border-[#272a32] pb-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-[#4edea3] font-bold">04 //</span>
          <span className="font-mono text-xs uppercase text-[#4cd7f6] tracking-wider font-semibold">
            DIRECT DISPATCH
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e1e2ec] tracking-tight">Initiate Collaboration</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Quick Direct Connect Channels (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <p className="text-base text-[#bbcabf] leading-relaxed">
            Actively seeking AI Engineering, Machine Learning, and Edge IoT Internships for Q3/Q4. Open to technical
            advisory and collaborative engineering sprints.
          </p>

          {/* Copy Email Box */}
          <div className="p-4 rounded-xl bg-[#1d1f27] border border-[#272a32] flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3 min-w-0">
              <span className="material-symbols-outlined text-[#4edea3] shrink-0">mail</span>
              <span className="font-mono text-xs sm:text-sm text-[#e1e2ec] truncate">{PERSONAL_INFO.email}</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`px-3.5 py-1.5 rounded font-mono text-xs font-semibold transition-all shrink-0 ${
                copiedEmail
                  ? 'bg-[#4edea3] text-[#003824] shadow-[0_0_12px_rgba(78,222,163,0.4)]'
                  : 'bg-[#272a32] text-[#4edea3] hover:bg-[#32353d]'
              }`}
            >
              {copiedEmail ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Social Links Strip */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#1d1f27] border border-[#272a32] hover:bg-[#272a32] hover:border-[#4cd7f6]/40 transition-all flex items-center gap-3 shadow-md group"
            >
              <span className="material-symbols-outlined text-[#4cd7f6] text-[24px] group-hover:scale-110 transition-transform">
                terminal
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-[#e1e2ec]">GitHub</span>
                <span className="font-mono text-[11px] text-[#86948a] truncate">@NguyenPhan161206</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#1d1f27] border border-[#272a32] hover:bg-[#272a32] hover:border-[#4edea3]/40 transition-all flex items-center gap-3 shadow-md group"
            >
              <span className="material-symbols-outlined text-[#4edea3] text-[24px] group-hover:scale-110 transition-transform">
                share
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-[#e1e2ec]">LinkedIn</span>
                <span className="font-mono text-[11px] text-[#86948a] truncate">Nguyen Phan</span>
              </div>
            </a>
          </div>

          {/* Master Resume Download / View Action */}
          <div className="p-4 rounded-xl bg-[#272a32] border border-[#3c4a42]/50 flex items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3 min-w-0">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[24px] shrink-0">description</span>
              <div className="min-w-0">
                <h4 className="font-mono text-xs sm:text-sm font-bold text-[#e1e2ec] truncate">
                  Phan_Huu_Binh_Nguyen_CV.pdf
                </h4>
                <span className="font-mono text-[11px] text-[#bbcabf] truncate block">
                  Master Technical Profile • 2025 Release
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenCV}
              className="px-4 py-2 rounded bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(76,215,246,0.3)] transition-all shrink-0"
            >
              View CV
            </button>
          </div>
        </div>

        {/* Right: Interactive Terminal Console Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="w-full rounded-xl bg-[#1d1f27] border border-[#3c4a42]/40 shadow-2xl overflow-hidden">
            {/* Header bar */}
            <div className="px-4 py-2.5 bg-[#0b0e15] border-b border-[#272a32] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ffb4ab] inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-[#03b5d3] inline-block"></span>
                <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block"></span>
                <span className="ml-2 font-mono text-xs text-[#86948a]">connect@phanhuubinhnguyen:~</span>
              </div>
              <span className="font-mono text-xs text-[#4edea3] font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                ENCRYPTED_TLS
              </span>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs">
                <span>&gt;</span>
                <span className="text-[#e1e2ec]">dispatch_message --target="nguyenphan" --protocol=fast</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#bbcabf]">RECRUITER / SENDER NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-[#0b0e15] border border-[#272a32] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] shadow-inner transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-[#bbcabf]">RETURN EMAIL PROTOCOL</label>
                  <input
                    type="email"
                    required
                    placeholder="elena@deepmind.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-[#0b0e15] border border-[#272a32] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] shadow-inner transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-[#bbcabf]">OPPORTUNITY DOMAIN</label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full px-3.5 py-2 rounded bg-[#0b0e15] border border-[#272a32] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] shadow-inner transition-colors"
                >
                  <option value="internship">AI / Machine Learning Engineering Internship</option>
                  <option value="aiot">Edge IoT &amp; Embedded Systems Architecture</option>
                  <option value="research">Academic / RAG / Algorithmic Research</option>
                  <option value="fullstack">Full-Stack SaaS / Next.js Development</option>
                  <option value="other">General Technical Discussion</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-[#bbcabf]">PAYLOAD / MESSAGE BODY</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hello Nguyen, we reviewed your UMT-TBS-official and Snake_ANN repositories and would love to schedule a preliminary technical interview..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded bg-[#0b0e15] border border-[#272a32] text-[#e1e2ec] font-mono text-xs focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] shadow-inner transition-colors resize-none"
                ></textarea>
              </div>

              {/* Feedback Alert */}
              {submissionFeedback && (
                <div className="p-3 rounded bg-[#4edea3]/10 border border-[#4edea3]/40 text-[#4edea3] font-mono text-xs animate-fade-in">
                  {submissionFeedback}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[11px] text-[#86948a]">
                  Direct socket queue: Ready
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#4edea3] text-[#003824] font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(78,222,163,0.4)] transition-all duration-200 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Encrypting Packet...' : 'Transmit Packet'}</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
