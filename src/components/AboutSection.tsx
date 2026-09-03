import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Sparkles, CheckCircle2, Award, Code2, Cpu, ArrowUpRight } from 'lucide-react';
import { ABOUT_ME_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-saya" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 6 Heading */}
      <SectionHeading
        number="6."
        title="Tentang saya"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Bio Content matching screenshot copy */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Saya bantu UMKM punya website premium dengan proses cepat & terarah
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Saya adalah <strong className="text-amber-400 font-bold">AI Web Designer</strong> yang berfokus pada pembuatan website <strong className="text-white font-bold">modern, rapi, dan profesional</strong>. Bagi saya, website bukan sekadar tampilan visual yang menarik, tetapi sebuah <strong className="text-white font-bold">alat bisnis</strong> yang mampu membangun <strong className="text-amber-400 font-bold">kepercayaan</strong> dan menarik perhatian sejak pertama kali dilihat.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Setiap website dirancang dengan <strong className="text-white font-bold">struktur yang jelas</strong>, pemilihan <strong className="text-white font-bold">tipografi yang presisi</strong>, serta <strong className="text-white font-bold">layout yang berani dan terarah</strong>. Tujuannya bukan hanya untuk terlihat bagus, tetapi juga benar-benar <strong className="text-amber-400 font-bold">berfungsi</strong>—mengarahkan pengunjung untuk <strong className="text-white font-bold">memahami, tertarik, dan mengambil tindakan</strong>.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Dalam proses kerja, saya memanfaatkan <strong className="text-amber-400 font-bold">AI sebagai partner eksplorasi</strong>, bukan sebagai jalan pintas. AI membantu mempercepat <strong className="text-white font-bold">riset visual, pengembangan konsep, dan eksplorasi desain</strong>, sementara setiap keputusan akhir tetap saya <strong className="text-white font-bold">kurasi secara manual</strong> mulai dari <strong className="text-amber-400 font-bold">komposisi layout, keseimbangan visual, hingga prioritas informasi</strong>.
          </p>

          {/* Highlighted Amber Statement Box from screenshot */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-500 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
            <p className="text-[17px] text-white font-semibold leading-relaxed relative z-10">
              Hasil akhirnya adalah website yang tidak hanya <strong className="font-black underline decoration-white/40">enak dilihat</strong>, tetapi juga <strong className="font-black underline decoration-white/40">intuitif digunakan</strong>. Pengunjung dapat dengan mudah memahami isi dan menemukan apa yang mereka cari <strong className="font-black underline decoration-white/40">tanpa perlu berpikir panjang</strong>.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="pt-4 flex flex-wrap gap-2">
            {ABOUT_ME_DATA.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-gray-300 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Photo Card matching portrait in screenshot */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative group w-full max-w-sm">
            {/* Glowing Amber Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 to-amber-600/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-neutral-900 shadow-2xl">
              <div className="bg-neutral-950 px-4 py-2 border-b border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-amber-400">FOUNDER & LEAD DESIGNER</span>
              </div>

              {/* Portrait Photo */}
              <ProjectImage
                src={ABOUT_ME_DATA.profileImage}
                fallbackSrc={ABOUT_ME_DATA.fallbackProfileImage}
                alt="Nur Sidik Maulana Putra - AI Web Designer"
                className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-5 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-neutral-900/90 border-t border-neutral-800">
                <h4 className="text-lg font-bold text-white">
                  Nur Sidik Maulana Putra
                </h4>
                <p className="text-xs text-amber-400 font-mono font-medium">
                  AI Designer & Web Developer
                </p>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-gray-400">
                  <span>Pengalaman: {ABOUT_ME_DATA.experienceYears}</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
