import React from 'react';
import { X, CheckCircle2, Clock, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-neutral-850 to-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">
              ✨
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Detail Paket Layanan
              </span>
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {service.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-neutral-950/70 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Estimasi:</strong> {service.estimatedDays}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Cocok untuk:</strong> {service.idealFor}</span>
            </div>
          </div>

          {/* Fitur Unggulan */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
              Fitur & Keunggulan Layanan:
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yang Anda Dapatkan */}
          <div className="pt-2 border-t border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
              Yang Anda Dapatkan (Deliverables):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-neutral-800/60 border border-neutral-700/60 text-xs text-gray-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            Konsultasikan ide atau pertanyaan teknis Anda tanpa komitmen.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-neutral-800 rounded-lg"
            >
              Tutup
            </button>
            <a
              href={`https://wa.me/6285867861631?text=Halo%20Dikdev%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg uppercase tracking-wider transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pesan via WA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
