import React from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  ExternalLink
} from 'lucide-react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

export const CaseStudySection: React.FC = () => {
  const currentStudy = CASE_STUDIES[0];

  return (
    <section id="case-study" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 4 Heading */}
      <SectionHeading
        number="4."
        title="Case Study"
      />

      {/* Main Case Study Card with split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Interactive Visual Mockup */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
              {currentStudy.title}
            </h3>
            <p className="text-amber-400/90 text-sm font-mono font-medium">
              {currentStudy.client}
            </p>
          </div>

          {/* Interactive Mockup Container */}
          <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-700 shadow-2xl group flex-1 min-h-[380px] flex flex-col">
            {/* Browser Header Bar */}
            <div className="bg-neutral-900 px-4 py-2.5 border-b border-neutral-800 flex items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Mockup Canvas Screen */}
            <div className="relative flex-1 bg-gradient-to-b from-neutral-900 to-black min-h-[320px] flex items-center justify-center overflow-hidden">
              <ProjectImage
                src={currentStudy.heroImage}
                fallbackSrc={currentStudy.fallbackImage}
                alt={currentStudy.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Bar */}
            <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-end">
              <a
                href="#portofolio"
                className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1"
              >
                <span>Lihat Portofolio Lengkap</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Ringkasan Project & Impact Breakdown */}
        <div className="lg:col-span-6 bg-[#181a20] border border-neutral-800 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-amber-400 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Ringkasan Project</span>
              </h4>
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-gray-300 text-xs font-mono">
                {currentStudy.category}
              </span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {currentStudy.summary}
            </p>

            {/* Process Section */}
            <div className="mb-6">
              <h5 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Process & Architecture:</span>
              </h5>
              <ul className="space-y-2.5">
                {currentStudy.process.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Section */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Impact & Business Result:</span>
              </h5>
              <ul className="space-y-2.5">
                {currentStudy.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200 font-medium leading-normal bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/80">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-400">
              Ingin website dengan dampak bisnis nyata seperti ini?
            </span>
            <a
              href="#kontak"
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Diskusikan Project Serupa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
