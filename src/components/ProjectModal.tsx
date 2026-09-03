import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Sparkles, MessageCircle, Copy, Check } from 'lucide-react';
import { PortfolioProject } from '../types';
import { ProjectImage } from './ProjectImage';

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `#project-${project.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
              {project.category}
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                {project.clientName} • {project.industry} ({project.year})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-gray-300 hover:text-white text-xs flex items-center gap-1 border border-neutral-700"
              title="Salin tautan proyek"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Project Hero Image */}
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-video sm:max-h-[300px] w-full">
            <ProjectImage
              src={project.image}
              fallbackSrc={project.fallbackImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="text-xs text-amber-300 font-mono font-semibold bg-neutral-950/80 px-3 py-1 rounded-md border border-neutral-800">
                {project.badge}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
              Latar Belakang & Solusi Desain
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Hasil & Metrik Keberhasilan</span>
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
              Fitur Utama yang Diterapkan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-neutral-800/60 border border-neutral-700/60 text-xs text-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 border-t border-neutral-800 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-400 font-mono">Tags:</span>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded-full bg-neutral-800 text-gray-300 text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            Tertarik dengan konsep atau tata letak seperti website ini?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-neutral-800 rounded-lg"
            >
              Tutup
            </button>
            <a
              href={`https://wa.me/6285867861631?text=Halo%20Dikdev%2C%20saya%20tertarik%20dengan%20proyek%20portfolio%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Konsultasi Proyek Serupa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
