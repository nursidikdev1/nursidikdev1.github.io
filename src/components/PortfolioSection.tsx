import React, { useState, useMemo } from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  SlidersHorizontal, 
  ExternalLink, 
  Star, 
  Users, 
  FolderGit2, 
  Globe, 
  Sparkles,
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, TESTIMONIALS_DATA, STATS_DATA } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectImage } from './ProjectImage';

export const PortfolioSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['Semua', 'Landing Page', 'Company Profile', 'E-Commerce', 'Blog / SEO', 'AI Web'];

  // Filtered projects based on search query and category
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const matchCategory = selectedCategory === 'Semua' || proj.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === '' ||
        proj.title.toLowerCase().includes(query) ||
        proj.subtitle.toLowerCase().includes(query) ||
        proj.description.toLowerCase().includes(query) ||
        proj.clientName.toLowerCase().includes(query) ||
        proj.industry.toLowerCase().includes(query) ||
        proj.tags.some((t) => t.toLowerCase().includes(query));
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-amber-400" />;
      case 'Star':
        return <Star className="w-6 h-6 text-amber-400 fill-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="portofolio" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 5 Heading */}
      <SectionHeading
        number="5."
        title="Portofolio"
      />

      {/* Interactive Search & Filter Toolbar */}
      <div className="bg-[#181a20] border border-neutral-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <input
              type="text"
              id="input-portfolio-search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCarouselIndex(0);
              }}
              placeholder="Cari proyek (contoh: Kopi, Seblak, Villa, B2B, AI)..."
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white px-1.5 py-0.5 rounded bg-neutral-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-gray-400 hidden sm:inline font-mono">Tampilan:</span>
            <div className="inline-flex rounded-lg bg-neutral-900 p-1 border border-neutral-700">
              <button
                id="btn-view-carousel"
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-amber-500 text-neutral-950 shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                id="btn-view-grid"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-amber-500 text-neutral-950 shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Semua Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-neutral-800 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setSelectedCategory(cat);
                setCarouselIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/50 font-bold'
                  : 'bg-neutral-900/60 text-gray-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-gray-500 font-mono ml-auto pl-3 whitespace-nowrap">
            {filteredProjects.length} Proyek Ditemukan
          </span>
        </div>
      </div>

      {/* Projects Display: Slider or Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-[#181a20] rounded-2xl border border-neutral-800 p-8">
          <Search className="w-10 h-10 text-amber-400/50 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white mb-1">Proyek tidak ditemukan</h4>
          <p className="text-xs text-gray-400 max-w-sm mx-auto mb-4">
            Tidak ada proyek yang sesuai dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain atau reset filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="px-4 py-2 rounded-lg bg-amber-500 text-neutral-950 font-bold text-xs uppercase"
          >
            Reset Filter
          </button>
        </div>
      ) : viewMode === 'carousel' ? (
        /* Carousel View like in the screenshot */
        <div className="relative bg-[#16181e] border border-neutral-800 rounded-2xl p-4 sm:p-8 shadow-2xl overflow-hidden">
          {/* Navigation Arrows */}
          <button
            id="btn-carousel-prev"
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-white hover:text-amber-400 hover:border-amber-500 flex items-center justify-center transition-all shadow-lg"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="btn-carousel-next"
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-700 text-white hover:text-amber-400 hover:border-amber-500 flex items-center justify-center transition-all shadow-lg"
            aria-label="Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Display Cards Preview in Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-8 sm:px-12">
            {[0, 1, 2].map((offset) => {
              const projIndex = (carouselIndex + offset) % filteredProjects.length;
              const project = filteredProjects[projIndex];
              if (!project) return null;

              return (
                <div
                  key={`${project.id}-${offset}`}
                  id={`carousel-card-${project.id}`}
                  onClick={() => handleOpenProject(project)}
                  className="group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden bg-neutral-950">
                    <ProjectImage
                      src={project.image}
                      fallbackSrc={project.fallbackImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-amber-500 text-neutral-950 font-bold text-[10px] font-mono uppercase tracking-wider shadow">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#191b22]">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-amber-400/90 font-mono font-semibold">
                        {project.metrics[0]?.label}: {project.metrics[0]?.value}
                      </span>
                      <span className="text-xs font-semibold text-gray-300 group-hover:text-amber-400 flex items-center gap-1">
                        Detail <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  carouselIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`grid-card-${project.id}`}
              onClick={() => handleOpenProject(project)}
              className="group rounded-2xl overflow-hidden bg-[#181a20] border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-950">
                <ProjectImage
                  src={project.image}
                  fallbackSrc={project.fallbackImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-amber-500 text-neutral-950 font-bold text-[10px] font-mono uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[10px] bg-black/70 text-gray-300 px-2 py-0.5 rounded font-mono">
                  {project.year}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>

                  {/* Feature checklist snippet */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-neutral-900 text-gray-400 px-2 py-0.5 rounded border border-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                    Lihat Spesifikasi <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sub-Section: Testimonial ("Client senang") matching screenshot faithfully */}
      <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Yellow Testimonial Banner */}
        <div className="lg:col-span-4 p-8 sm:p-10 rounded-2xl bg-amber-500 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[15.25px] font-mono uppercase tracking-widest font-extrabold text-white block mb-2">
              Testimonial
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Client senang
            </h3>
            <p className="text-white text-[16px] font-bold leading-[24.3833px]">
              Client yang sudah terbukti puas dengan hasil atas kerja sama dengan kami dalam project pembuatan website
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-white/20">
            <div className="flex items-center gap-1 text-white mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white stroke-white text-white drop-shadow-sm" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">
              100% Kepuasan Klien & Rekomendasi Tinggi
            </span>
          </div>
        </div>

        {/* Right Testimonial Reviews List */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
          {TESTIMONIALS_DATA.slice(0, 3).map((testi) => (
            <div
              key={testi.id}
              className="p-6 rounded-2xl bg-[#181a20] border border-neutral-800 hover:border-amber-500/40 transition-all duration-200 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <ProjectImage
                    src={testi.avatar}
                    fallbackSrc={testi.fallbackAvatar}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                  />
                  <div>
                    <h5 className="text-base font-bold text-white">
                      {testi.name}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {testi.role}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-neutral-900 text-amber-400 text-xs font-mono border border-neutral-800">
                  {testi.projectType}
                </span>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                "{testi.review}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Section: Stats Bar with glowing golden gradient from screenshot */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-amber-950/40 to-neutral-900 border border-amber-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {STATS_DATA.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-3">
                {getStatIcon(stat.icon)}
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight flex items-baseline">
                <span>{stat.value}</span>
                <span className="text-amber-400">{stat.suffix}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-300 mt-1 font-mono">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Gold Indicator Line */}
        <div className="mt-8 pt-4 border-t border-amber-500/20 text-center">
          <span className="text-xs font-mono text-amber-400/90 font-medium">
            ✦ Didedikasikan untuk membantu UMKM, profesional, dan bisnis go-digital secara maksimal.
          </span>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
