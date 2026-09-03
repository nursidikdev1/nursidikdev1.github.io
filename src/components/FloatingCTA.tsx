import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const waMessage = encodeURIComponent(
    'Halo DIKDEV, saya tertarik dengan jasa pembuatan website untuk bisnis saya. Mohon informasikan detail paket, proses pengerjaan, dan estimasi harganya'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Direct WhatsApp CTA Button */}
      <a
        id="btn-floating-whatsapp"
        href={`https://wa.me/6285867861631?text=${waMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-110 transition-all duration-200 flex items-center justify-center"
        aria-label="Tanya via WhatsApp"
        title="Konsultasi Cepat via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-neutral-950" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-neutral-900 rounded-full" />
      </a>
    </div>
  );
};

