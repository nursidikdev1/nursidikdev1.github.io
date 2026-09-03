import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Github, 
  Share2, 
  Sparkles, 
  ArrowDown, 
  CheckCircle2 
} from 'lucide-react';
import { SOCIAL_LINKS, ABOUT_ME_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

export const Hero: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'Github':
        return <Github className="w-5 h-5" />;
      default:
        return <Share2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image behind Nur Sidik with dark overlay */}
      <div className="absolute inset-0 z-0">
        <ProjectImage
          src={ABOUT_ME_DATA.heroBgImage}
          fallbackSrc={ABOUT_ME_DATA.fallbackHeroBgImage}
          alt="Background Portofolio Nur Sidik"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:animate-pulse duration-1000"
        />
        {/* Gradients to create the dusk glow and seamless fade to dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-transparent to-[#040404]/80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Halo nama saya greeting */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-semibold tracking-wide mb-4 animate-in fade-in zoom-in duration-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Halo nama saya</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight capitalize mb-4">
          Nur sidik <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-amber-200">
            maulana putra
          </span>
        </h1>

        {/* Subtitle / Role */}
        <div className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase text-gray-300 mb-8 max-w-2xl">
          <span>SAYA ADALAH SEORANG</span>
          <span className="px-2.5 py-0.5 rounded bg-amber-500 text-neutral-950 font-black tracking-wider text-xs sm:text-sm shadow-md shadow-amber-500/20">
            AI
          </span>
          <span className="text-amber-400 font-extrabold">DESIGNER WEB</span>
          <span className="text-gray-400">& DEVELOPER</span>
        </div>

        {/* Social Media Integration Icons */}
        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 mb-10">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`social-link-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative p-3 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-gray-300 hover:text-amber-400 hover:border-amber-500/60 hover:bg-neutral-800 hover:shadow-lg hover:shadow-amber-500/15 transition-all duration-200 hover:-translate-y-1"
              aria-label={social.name}
              title={`${social.name}: ${social.handle}`}
            >
              {getIcon(social.icon)}
              <span className="sr-only">{social.name}</span>
              
              {/* Micro tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-neutral-950 text-amber-300 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 border border-neutral-800 shadow-sm z-20">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#portofolio"
            id="btn-hero-portfolio"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Jelajahi Portofolio</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#kontak"
            id="btn-hero-contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white hover:text-amber-400 font-semibold text-sm tracking-wide border border-neutral-700 hover:border-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Mulai Konsultasi Gratis</span>
          </a>
        </div>

        {/* Quick Highlights Badge */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Desain Kustom Eksklusif</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Pengerjaan Cepat 2-5 Hari</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Terintegrasi WhatsApp & SEO</span>
          </div>
        </div>
      </div>
    </section>
  );
};
