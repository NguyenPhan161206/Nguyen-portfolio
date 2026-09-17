/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { TerminalModal } from './components/TerminalModal';
import { CVModal } from './components/CVModal';
import { SecondaryProjectModal } from './components/SecondaryProjectModal';
import { Footer } from './components/Footer';
import { SecondaryProject } from './types';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [selectedSecondaryProject, setSelectedSecondaryProject] = useState<SecondaryProject | null>(null);
  const [activeSection, setActiveSection] = useState('about');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy to highlight current section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'featured-projects', 'experience', 'skills', 'contact-terminal'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#4edea3]/30 selection:text-[#4edea3] ${
        theme === 'dark'
          ? 'bg-[#10131a] text-[#e1e2ec]'
          : 'bg-[#f4f7f5] text-[#191c1a]'
      } transition-colors duration-300 flex flex-col`}
    >
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Container */}
      <main className="flex-1 w-full pt-16">
        {/* Hero Section */}
        <Hero
          onOpenCV={() => setIsCVOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Metrics & Quantitative Fusion Banner */}
        <Metrics />

        {/* Flagship Projects & Secondary Repositories */}
        <ProjectsSection
          onSelectSecondaryProject={(project) => setSelectedSecondaryProject(project)}
        />

        {/* Leadership & Academic Expeditions */}
        <ExperienceSection />

        {/* Categorized Skills & Tooling */}
        <SkillsSection />

        {/* Direct Dispatch & Interactive Connect Terminal */}
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Secondary Project Specification Modal */}
      <SecondaryProjectModal
        project={selectedSecondaryProject}
        onClose={() => setSelectedSecondaryProject(null)}
      />
    </div>
  );
}

