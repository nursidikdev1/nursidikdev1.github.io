/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroOverview } from './components/IntroOverview';
import { ServicesSection } from './components/ServicesSection';
import { SupportSection } from './components/SupportSection';
import { CaseStudySection } from './components/CaseStudySection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ProjectModal } from './components/ProjectModal';
import { FloatingCTA } from './components/FloatingCTA';
import { PortfolioProject } from './types';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedGlobalProject, setSelectedGlobalProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="min-h-screen bg-[#040404] text-[#e2e8f0] font-sans antialiased selection:bg-[#e6b000] selection:text-black">
      {/* Top Fixed Navigation Bar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 1. Layanan Jasa Website Development & AI Design */}
        <IntroOverview />

        {/* 2. Layanan kami */}
        <ServicesSection />

        {/* 3. Suport */}
        <SupportSection />

        {/* 4. Case Study */}
        <CaseStudySection />

        {/* 5. Portofolio (with interactive search, filter, slider, testimonials, and stats) */}
        <PortfolioSection />

        {/* 6. Tentang saya */}
        <AboutSection />

        {/* 7. Ayo mulai project website kamu (Contact Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(project) => {
          setSelectedGlobalProject(project);
        }}
      />

      {/* Global Project Modal from Search */}
      <ProjectModal
        project={selectedGlobalProject}
        isOpen={!!selectedGlobalProject}
        onClose={() => setSelectedGlobalProject(null)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingCTA />
    </div>
  );
}
