import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Landing page',
    budget: 'Rp 1.000.000 - Rp 3.000.000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedWA, setCopiedWA] = useState(false);

  const servicesList = [
    'Landing page',
    'Blog website',
    'Company profile',
    'Website maintenance',
    'Set Up Email Bisnis',
    'Artikel SEO',
    'Toko Online / E-Commerce',
    'Custom AI Web Application'
  ];

  const budgetList = [
    'Rp 800.000 - Rp 1.500.000 (Starter / UMKM)',
    'Rp 1.500.000 - Rp 3.500.000 (Standard Pro)',
    'Rp 3.500.000 - Rp 7.000.000 (Corporate & B2B)',
    '> Rp 7.000.000 (Custom Scale & Enterprise)'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Halo Mas Sidik (Dikdev),\n\n` +
      `Saya ingin konsultasi pembuatan website:\n` +
      `• Nama: ${formData.name || '-'}\n` +
      `• Bisnis / Usaha: ${formData.company || '-'}\n` +
      `• Email: ${formData.email || '-'}\n` +
      `• Layanan yang diminati: ${formData.service}\n` +
      `• Estimasi Budget: ${formData.budget}\n` +
      `• Catatan Kebutuhan: ${formData.message || 'Mohon arahan paket rekomendasi'}\n\n` +
      `Terima kasih!`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleSendToWhatsApp = () => {
    const waUrl = `https://wa.me/6285867861631?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#181a20] via-[#15161c] to-black border border-neutral-800 shadow-2xl p-6 sm:p-10 md:p-14">
        {/* Glow Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center relative z-10">
          {/* Left Column: Heading & Chat CTA matching screenshot */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Konsultasi Proyek & Penawaran</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Ayo mulai project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                website kamu
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Saya akan bantu kamu <strong className="text-amber-400">bikin website</strong> yang terlihat profesional & bisa dipakai jualan / branding. Ceritakan kebutuhanmu, nanti saya bantu arahkan paket yang <strong className="text-white">paling cocok</strong>.
            </p>

            {/* Direct Chat CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/6285867861631?text=${encodeURIComponent("Halo DIKDEV, saya tertarik dengan jasa pembuatan website untuk bisnis saya. Mohon informasikan detail paket, proses pengerjaan, dan estimasi harganya")}`}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-contact-wa-chat"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Chat sekarang</span>
              </a>
            </div>

            {/* Quick Contact & Guarantees */}
            <div className="pt-8 border-t border-neutral-800 space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email Resmi: <strong className="text-white">nursidik.dev@gmail.com</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>WhatsApp: <strong className="text-white">+62 858-6786-1631</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Respon cepat: &lt; 30 menit pada jam kerja (08:00 - 21:00 WIB)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Contact Form from screenshot */}
          <div className="lg:col-span-6">
            <div className="bg-[#191b22] border border-neutral-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-base sm:text-lg font-bold text-center text-white mb-6">
                Atau isi formulir berikut untuk membantu kami memahami kebutuhan Anda
              </h3>

              {isSuccess ? (
                <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Formulir Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Terima kasih, <strong>{formData.name}</strong>. Detail kebutuhan website bisnis Anda telah tercatat. Kami akan segera menghubungi Anda melalui WhatsApp / Email.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Lanjutkan ke WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          service: 'Landing page',
                          budget: 'Rp 1.000.000 - Rp 3.000.000',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-300 text-xs font-semibold"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nama */}
                  <div>
                    <label htmlFor="input-name" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="input-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                    />
                  </div>

                  {/* Nama Perusahaan / Bisnis */}
                  <div>
                    <label htmlFor="input-company" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                      Nama Perusahaan / Bisnis / Brand
                    </label>
                    <input
                      type="text"
                      id="input-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Contoh: Kopi Nusantara / Toko Berkah"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                        Email Aktif *
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="input-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="081234567890"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Pilih Layanan Dropdown */}
                  <div>
                    <label htmlFor="select-service" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                      Pilih Layanan *
                    </label>
                    <select
                      id="select-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans cursor-pointer"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc} className="bg-neutral-900 text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimasi Budget */}
                  <div>
                    <label htmlFor="select-budget" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                      Estimasi Budget
                    </label>
                    <select
                      id="select-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans cursor-pointer"
                    >
                      {budgetList.map((bg) => (
                        <option key={bg} value={bg} className="bg-neutral-900 text-white">
                          {bg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Catatan / Kebutuhan */}
                  <div>
                    <label htmlFor="textarea-message" className="block text-xs font-mono font-medium text-gray-300 mb-1">
                      Ceritakan Kebutuhan Website Anda
                    </label>
                    <textarea
                      id="textarea-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Contoh: Saya ingin website untuk jualan produk kopi Nusantara, ada katalog dan tombol order ke WhatsApp..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button matching yellow arrow button from screenshot */}
                  <button
                    type="submit"
                    id="btn-submit-contact"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer hover:shadow-amber-500/40 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Mengirimkan...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-neutral-950" />
                        <span>Kirim</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-gray-400 pt-1">
                    🔒 Data Anda 100% aman & hanya digunakan untuk keperluan konsultasi proyek.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
