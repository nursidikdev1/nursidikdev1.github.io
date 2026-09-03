import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Search, ExternalLink, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Suport', href: '#suport' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Tentang Saya', href: '#tentang-saya' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040404]/95 backdrop-blur-md border-b border-neutral-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#040404]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo in Top-Left Corner */}
        <a href="#home" id="brand-logo" className="flex items-center gap-2 group focus:outline-none">
          <Logo iconClassName="w-10 h-8 sm:w-11 sm:h-8.5" showText={true} showSubtitle={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="btn-search-trigger"
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-gray-300 hover:text-white border border-neutral-700/80 text-xs font-medium transition-all"
            title="Cari Proyek & Layanan"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Cari Proyek</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-neutral-900 text-neutral-400 rounded border border-neutral-700 font-mono">
              /
            </kbd>
          </button>

          <a
            href={`https://wa.me/6285867861631?text=${encodeURIComponent("Halo DIKDEV, saya tertarik dengan jasa pembuatan website untuk bisnis saya. Mohon informasikan detail paket, proses pengerjaan, dan estimasi harganya")}`}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-nav-order"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan Sekarang</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="btn-mobile-search"
            onClick={onOpenSearch}
            className="p-2 text-gray-300 hover:text-white bg-neutral-800 rounded-lg border border-neutral-700"
            aria-label="Cari"
          >
            <Search className="w-5 h-5 text-amber-400" />
          </button>
          <button
            id="btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-neutral-800 rounded-lg border border-neutral-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16181d] border-b border-neutral-800 px-6 py-5 mt-2 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-amber-400 py-1 flex items-center justify-between border-b border-neutral-850"
              >
                <span>{link.name}</span>
                <span className="text-amber-500 font-mono text-xs">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`https://wa.me/6285867861631?text=${encodeURIComponent("Halo DIKDEV, saya tertarik dengan jasa pembuatan website untuk bisnis saya. Mohon informasikan detail paket, proses pengerjaan, dan estimasi harganya")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-amber-500 text-neutral-950 font-bold text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan Sekarang via WA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
