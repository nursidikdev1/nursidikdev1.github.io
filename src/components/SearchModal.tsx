import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, SERVICES_DATA } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectImage } from './ProjectImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // trigger open from parent
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.clientName.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const filteredServices = SERVICES_DATA.filter((s) => {
    const q = query.toLowerCase();
    return s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        role="dialog"
      >
        {/* Search Header Input */}
        <div className="relative p-4 border-b border-neutral-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik nama proyek, industri, atau layanan..."
            className="w-full bg-transparent text-white placeholder-gray-500 text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded bg-neutral-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white hover:bg-neutral-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Projects results */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
              Proyek Portofolio ({filteredProjects.length})
            </span>
            <div className="space-y-1.5">
              {filteredProjects.length === 0 ? (
                <p className="text-xs text-gray-500 italic py-2">Tidak ada proyek yang cocok</p>
              ) : (
                filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      onSelectProject(proj);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl hover:bg-neutral-800 border border-transparent hover:border-neutral-700 flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <ProjectImage
                          src={proj.image}
                          fallbackSrc={proj.fallbackImage}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {proj.title}
                        </h5>
                        <p className="text-xs text-gray-400 line-clamp-1">{proj.subtitle}</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-neutral-950 text-amber-400 text-[10px] font-mono">
                      {proj.category}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Services results */}
          <div className="pt-2 border-t border-neutral-800">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-2">
              Paket Layanan
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredServices.map((svc) => (
                <a
                  key={svc.id}
                  href="#layanan"
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-neutral-950/60 hover:bg-neutral-800 border border-neutral-800 text-xs flex items-center justify-between group transition-all"
                >
                  <span className="font-semibold text-white group-hover:text-amber-400">{svc.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-[11px] text-gray-500 font-mono">
          <span>Tekan ESC untuk menutup</span>
          <span>DIKDEV Portfolio Navigation</span>
        </div>
      </div>
    </div>
  );
};
