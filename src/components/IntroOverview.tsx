import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Sparkles, Check, Laptop, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export const IntroOverview: React.FC = () => {
  return (
    <section id="layanan-overview" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1 Heading */}
      <SectionHeading
        number="1."
        title="Layanan Jasa Website Development & AI Design"
      />

      <div className="space-y-8 sm:space-y-10">
        {/* Card 1: Warm Amber Banner Left + Laptop Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {/* Left Text Block with Amber Theme */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 bg-amber-500 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Subtle background circuit/grid accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Solusi Digital Cerdas & Cepat</span>
              </div>

              <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white font-sans">
                Kita hadir sebagai solusi digital bagi pelaku usaha dan individu yang ingin memiliki website profesional tanpa harus repot memahami coding. Dengan teknologi AI terbaru, kami menciptakan website yang profesional, cepat, dan sesuai kebutuhan bisnis Kamu. Mulai dari <strong className="font-extrabold underline decoration-white/40">Landing Page</strong> yang dirancang untuk meningkatkan konversi penjualan, <strong className="font-extrabold underline decoration-white/40">Blog</strong> yang dioptimalkan untuk SEO agar menarik lebih banyak pengunjung, hingga <strong className="font-extrabold underline decoration-white/40">Company Profile</strong> yang memperkuat citra dan kredibilitas bisnis mu di dunia online. Setiap elemen kita rancang dengan fokus pada tampilan yang menarik, pengalaman pengguna yang nyaman, dan performa tinggi di berbagai perangkat.
              </p>

              <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-4 text-xs sm:text-sm font-bold text-white">
                <span className="flex items-center gap-1.5 bg-neutral-950/20 px-3 py-1.5 rounded-md">
                  <Check className="w-4 h-4 stroke-[3]" /> Tanpa Ribet Coding
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-950/20 px-3 py-1.5 rounded-md">
                  <Zap className="w-4 h-4 stroke-[3]" /> Loading Super Cepat
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-950/20 px-3 py-1.5 rounded-md">
                  <ShieldCheck className="w-4 h-4 stroke-[3]" /> Garansi Revisi
                </span>
              </div>
            </div>
          </div>

          {/* Right Image/Mockup Block */}
          <div className="lg:col-span-4 bg-[#181a20] p-6 sm:p-8 flex items-center justify-center relative min-h-[260px] lg:min-h-auto">
            <div className="w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-500/0 rounded-xl blur-lg group-hover:blur-xl transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl">
                {/* Simulated browser header */}
                <div className="bg-neutral-850 px-3 py-2 border-b border-neutral-700/80 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-[10px] text-gray-400 font-mono">dikdev.my.id/preview</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="AI Analytics & Web Dashboard Mockup"
                  className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-neutral-900/95 border-t border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold font-mono">Modern UI / Conversion High</span>
                  <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">99.8% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Workspace Photo Left + Amber Banner Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          {/* Left Image Block */}
          <div className="lg:col-span-4 bg-[#181a20] p-6 sm:p-8 flex items-center justify-center relative order-2 lg:order-1 min-h-[240px] lg:min-h-auto">
            <div className="w-full relative group">
              <div className="relative rounded-xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl">
                <div className="bg-neutral-850 px-3 py-2 border-b border-neutral-700/80 flex items-center justify-between">
                  <span className="text-[10px] text-amber-400 font-mono font-bold">WORKFLOW ENGINE</span>
                  <span className="text-[10px] text-gray-400 font-mono">AI + Human Precision</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                  alt="High Tech Web Dev Workspace"
                  className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Text Block with Amber Theme */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 bg-amber-500 text-white flex flex-col justify-center relative overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Laptop className="w-3.5 h-3.5" />
                <span>Ekosistem Lengkap & Berkelanjutan</span>
              </div>

              <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white font-sans">
                Tak berhenti di situ – kami juga menyediakan layanan tambahan seperti <strong className="font-extrabold underline decoration-white/40">maintenance website</strong>, <strong className="font-extrabold underline decoration-white/40">penulisan artikel SEO berkualitas</strong>, dan <strong className="font-extrabold underline decoration-white/40">pengaturan email bisnis profesional</strong> untuk menunjang operasional digital Anda. Dengan pengalaman dalam mengelola berbagai jenis website berbasis AI, kami berkomitmen memberikan hasil yang bukan hanya indah dipandang, tapi juga berfungsi secara maksimal untuk menunjang pertumbuhan bisnis Anda. Percayakan pada kami untuk menghadirkan website yang mencerminkan profesionalitas dan visi jangka panjang brand Anda.
              </p>

              <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs sm:text-sm font-bold text-white">
                  Siap bawa bisnis Anda naik kelas ke level digital?
                </span>
                <a
                  href="#layanan"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-850 text-amber-400 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Lihat Paket Layanan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
