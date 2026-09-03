import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { 
  ListOrdered, 
  PenLine, 
  Building2, 
  Wrench, 
  Mail, 
  BarChart3, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ListOrdered':
        return <ListOrdered className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      case 'PenLine':
        return <PenLine className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      case 'Mail':
        return <Mail className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
      default:
        return <Sparkles className="w-8 h-8 text-amber-400 stroke-[2.5]" />;
    }
  };

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="layanan" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 2 Heading */}
      <SectionHeading
        number="2."
        title="Layanan kami"
        actionButton={{
          label: 'INFO SELENGKAPNYA',
          onClick: () => handleOpenDetail(SERVICES_DATA[0])
        }}
      />

      {/* Grid 3 Columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES_DATA.map((service, idx) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            onClick={() => handleOpenDetail(service)}
            className="group relative bg-[#1c1e24] hover:bg-[#22252d] border border-neutral-800 hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col items-start transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer hover:-translate-y-1.5"
          >
            {/* Top Amber Icon Container */}
            <div className="w-16 h-16 rounded-2xl bg-[#262933] group-hover:bg-amber-500/10 border border-neutral-700/80 group-hover:border-amber-500/40 flex items-center justify-center mb-6 transition-colors shadow-inner">
              {getServiceIcon(service.icon)}
            </div>

            {/* Popular Badge if applicable */}
            {service.popular && (
              <span className="absolute top-6 right-6 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                Paling Diminati
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed mb-6 flex-1">
              {service.description}
            </p>

            {/* Bottom action trigger */}
            <div className="w-full pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-amber-400 transition-colors">
              <span className="font-mono">Pelajari Fitur Paket</span>
              <div className="w-7 h-7 rounded-full bg-neutral-800 group-hover:bg-amber-500 group-hover:text-neutral-950 flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed service views */}
      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
