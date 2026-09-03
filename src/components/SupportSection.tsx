import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  Monitor, 
  Lightbulb, 
  Layers, 
  Handshake, 
  CheckCircle2, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { SUPPORT_PILLARS } from '../data/portfolioData';
import { SupportItem } from '../types';

export const SupportSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<SupportItem | null>(null);

  const getSupportIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-10 h-10 text-amber-400 stroke-[1.8]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-10 h-10 text-amber-400 stroke-[1.8]" />;
      case 'Layers':
        return <Layers className="w-10 h-10 text-amber-400 stroke-[1.8]" />;
      case 'Handshake':
        return <Handshake className="w-10 h-10 text-amber-400 stroke-[1.8]" />;
      default:
        return <Sparkles className="w-10 h-10 text-amber-400 stroke-[1.8]" />;
    }
  };

  return (
    <section id="suport" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 3 Heading */}
      <SectionHeading
        number="3."
        title="Suport"
        actionButton={{
          label: 'INFO SELENGKAPNYA',
          onClick: () => {
            const contactElem = document.getElementById('kontak');
            if (contactElem) {
              contactElem.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      />

      {/* 2x2 Grid with generous padding and authentic copy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {SUPPORT_PILLARS.map((item) => (
          <div
            key={item.id}
            id={`support-card-${item.id}`}
            onClick={() => setActiveItem(activeItem?.id === item.id ? null : item)}
            className="group bg-[#181a20] hover:bg-[#1f222a] border border-neutral-800/90 hover:border-amber-500/40 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1"
          >
            {/* Center Amber Icon with rounded container */}
            <div className="w-20 h-20 rounded-2xl bg-[#232630] group-hover:bg-amber-500/10 border border-neutral-700/80 group-hover:border-amber-500/40 flex items-center justify-center mb-6 transition-colors shadow-inner">
              {getSupportIcon(item.icon)}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors capitalize">
              {item.title}
            </h3>

            {/* Description Paragraph */}
            <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {item.description}
            </p>

            {/* Key Points Expansion */}
            <div className="w-full pt-5 border-t border-neutral-800/80 text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-bold block mb-3 text-center sm:text-left">
                Fokus Eksekusi:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee banner at bottom of support */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">Butuh bantuan darurat atau konsultasi teknis?</h4>
            <p className="text-xs text-gray-400">Kami siap merespons cepat via WhatsApp untuk semua klien aktif.</p>
          </div>
        </div>
        <a
          href="https://wa.me/6285867861631?text=Halo%20Dikdev%2C%20saya%20ingin%20tanya%20tentang%20support%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
        >
          Hubungi Support
        </a>
      </div>
    </section>
  );
};
