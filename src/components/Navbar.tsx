import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCV: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenCV,
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact-terminal' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#10131a]/90 backdrop-blur-xl border-b border-[#272a32]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-[#10131a]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand & Status */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex items-center gap-1 font-mono text-sm sm:text-base text-[#4edea3] hover:text-[#6ffbbe] transition-colors group"
          >
            <span className="text-[#86948a] select-none group-hover:text-[#4edea3] transition-colors">&gt;</span>
            <span className="font-semibold tracking-tight">{PERSONAL_INFO.handle}</span>
          </a>

          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#272a32] border border-[#3c4a42]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-mono text-[11px] text-[#4edea3] tracking-wider uppercase font-semibold">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-mono text-xs lg:text-sm px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#4edea3] bg-[#272a32] shadow-sm font-semibold'
                    : 'text-[#bbcabf] hover:text-[#e1e2ec] hover:bg-[#1d1f27]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Profile Avatar */}
        <div className="flex items-center gap-2 shrink-0">
          {/* GitHub */}
          <a
            aria-label="GitHub Repository"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-[#bbcabf] hover:bg-[#272a32] hover:text-[#4cd7f6] transition-colors flex items-center justify-center"
            title="GitHub Profile"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>

          {/* LinkedIn */}
          <a
            aria-label="LinkedIn Profile"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-[#bbcabf] hover:bg-[#272a32] hover:text-[#4edea3] transition-colors flex items-center justify-center"
            title="LinkedIn Profile"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>

          {/* Interactive CLI Terminal Launch Button */}
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open Interactive Terminal"
            className="p-2 rounded-lg text-[#4edea3] hover:bg-[#272a32] hover:text-[#6ffbbe] transition-all flex items-center justify-center border border-[#4edea3]/20 hover:border-[#4edea3]/50"
            title="Launch Interactive Terminal (CLI)"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </button>

          {/* Master CV Modal Trigger */}
          <button
            type="button"
            onClick={onOpenCV}
            aria-label="View Master CV"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1d1f27] hover:bg-[#272a32] text-[#4cd7f6] border border-[#4cd7f6]/30 font-mono text-xs font-semibold transition-all"
            title="View Curriculum Vitae"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>CV</span>
          </button>

          {/* Dark/Light Theme Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle Theme Mode"
            className="p-2 rounded-lg text-[#bbcabf] hover:bg-[#272a32] hover:text-[#e1e2ec] transition-colors flex items-center justify-center"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Avatar Profile Ring */}
          <div className="flex items-center pl-1 sm:pl-2">
            <img
              alt="Phan Hữu Bình Nguyên"
              src={PERSONAL_INFO.avatarUrl}
              onError={(e) => {
                e.currentTarget.src = PERSONAL_INFO.fallbackAvatarUrl;
              }}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#4edea3]/40 shadow-md cursor-pointer hover:ring-[#4edea3] transition-all"
              onClick={onOpenCV}
              title="Click to view profile / CV"
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#bbcabf] hover:bg-[#272a32] hover:text-[#e1e2ec] transition-colors ml-1"
            aria-label="Open mobile menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10131a]/95 border-b border-[#272a32] px-6 py-4 space-y-2 backdrop-blur-xl">
          <div className="flex items-center gap-2 py-2 border-b border-[#272a32]/60 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
            </span>
            <span className="font-mono text-xs text-[#4edea3]">
              {PERSONAL_INFO.status}
            </span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block font-mono text-sm py-2 text-[#bbcabf] hover:text-[#4edea3] transition-colors"
            >
              &gt; {item.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-[#272a32] text-[#4cd7f6] font-mono text-xs text-center font-semibold"
            >
              View Full CV
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-[#4edea3] text-[#003824] font-mono text-xs text-center font-bold"
            >
              Launch CLI
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
