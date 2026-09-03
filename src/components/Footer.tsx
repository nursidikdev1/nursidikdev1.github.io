import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Github, ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'WhatsApp':
        return <MessageCircle className="w-4 h-4" />;
      case 'GitHub':
        return <Github className="w-4 h-4" />;
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#040404] border-t border-neutral-900 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-neutral-900">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="inline-block focus:outline-none">
              <Logo iconClassName="w-10 h-8 sm:w-12 sm:h-9" showText={true} showSubtitle={true} />
            </a>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-lg">
              dikdev adalah layanan pembuatan website modern & simple untuk UMKM, personal brand, dan bisnis kecil yang ingin terlihat lebih profesional di internet. Fokus kami adalah pembuatan cepat, mobile-friendly, dan pesan yang mudah dipahami bahkan oleh pemula.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 text-gray-400 border border-neutral-800 transition-all duration-200"
                  aria-label={item.name}
                >
                  {getSocialIcon(item.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Site Menu */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Site menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition-colors">Layanan</a>
              </li>
              <li>
                <a href="#suport" className="hover:text-amber-400 transition-colors">Suport</a>
              </li>
              <li>
                <a href="#case-study" className="hover:text-amber-400 transition-colors">Case Study</a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-amber-400 transition-colors">Portofolio</a>
              </li>
              <li>
                <a href="#tentang-saya" className="hover:text-amber-400 transition-colors">Tentang Saya</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-amber-400 transition-colors">Kontak Kami</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us from screenshot */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
              Contact us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <span className="text-gray-500 block text-[11px] font-mono">Phone / WA:</span>
                <a
                  href="https://wa.me/6285867861631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-mono"
                >
                  (+62) 858-6786-1631
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[11px] font-mono">Official Email:</span>
                <a
                  href="mailto:nursidik.dev@gmail.com"
                  className="text-amber-400 hover:underline font-mono"
                >
                  nursidik.dev@gmail.com
                </a>
              </div>

              <div>
                <span className="text-gray-500 block text-[11px] font-mono">Studio Email:</span>
                <span className="text-gray-300 font-mono">admin@dikdev.my.id</span>
              </div>

              <div className="pt-2 text-xs text-gray-500">
                <a href="#kontak" className="hover:text-gray-300">Terms & Conditions</a>
                <span className="mx-2">•</span>
                <a href="#kontak" className="hover:text-gray-300">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            Copyright © 2026 – Dikdev Studio by <span className="text-gray-300">Nur Sidik Maulana Putra</span>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            id="btn-back-to-top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-gray-300 hover:text-amber-400 border border-neutral-800 transition-all text-xs"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
