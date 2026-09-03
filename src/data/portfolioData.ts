import { SocialLink, ServiceItem, SupportItem, CaseStudy, PortfolioProject, Testimonial, StatItem } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61583985685315',
    icon: 'Facebook',
    handle: 'facebook.com/profile.php?id=61583985685315',
    color: '#1877F2'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dikdev7/',
    icon: 'Instagram',
    handle: '@dikdev7',
    color: '#E4405F'
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@dikdev7?hl=id',
    icon: 'Share2',
    handle: '@dikdev7',
    color: '#000000'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nur-sidik-maulana-putra-b2801a3a8',
    icon: 'Linkedin',
    handle: 'in/nur-sidik-maulana-putra-b2801a3a8',
    color: '#0A66C2'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6285867861631?text=Halo%20Dikdev%2C%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website',
    icon: 'MessageCircle',
    handle: '+62 858-6786-1631',
    color: '#25D366'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Fokuskan perhatian calon pelanggan lewat landing page responsif yang dirancang untuk konversi maksimal dan tampilan profesional.',
    icon: 'ListOrdered',
    popular: true,
    estimatedDays: '2 - 4 Hari Kerja',
    idealFor: 'Produk tunggal, Peluncuran produk, Event, Jasa spesifik, Lead generation',
    features: [
      'Struktur copywriting fokus konversi (AIDA/PAS)',
      'Desain modern, mobile-friendly & ultra cepat',
      'Integrasi tombol WhatsApp otomatis dengan pesan custom',
      'Tracking Google Analytics & Meta Pixel siap pakai',
      'Animasi interaktif halus untuk impresi maksimal'
    ],
    deliverables: [
      '1 Halaman Landing Page responsif lengkap',
      'Formulir order / kontak terintegrasi',
      'Free domain & hosting setup (opsional)',
      'Revisi minor hingga tayang'
    ]
  },
  {
    id: 'blog-website',
    title: 'Blog website',
    description: 'Bagikan ide, berita, dan pengalaman menarik lewat blog modern yang mudah dikelola dan ramah pembaca dari berbagai perangkat.',
    icon: 'PenLine',
    estimatedDays: '3 - 5 Hari Kerja',
    idealFor: 'Content Creator, Influencer, Media Komunitas, Reviewer, Portal Opini',
    features: [
      'Sistem manajemen artikel super praktis',
      'Kategori, tag, & fitur pencarian instan',
      'Tipografi ramah mata & mode baca nyaman',
      'Integrasi tombol share media sosial',
      'Ruang iklan / banner promosi monetisasi'
    ],
    deliverables: [
      'Dashboard kelola artikel mudah (tanpa coding)',
      'Template layout artikel, kategori & arsip',
      'Optimasi kecepatan loading artikel',
      'Panduan video cara upload konten'
    ]
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    description: 'Tampilkan identitas dan profesionalisme bisnis Anda melalui website elegan yang memperkuat kepercayaan dan daya tarik calon klien.',
    icon: 'Building2',
    popular: true,
    estimatedDays: '4 - 7 Hari Kerja',
    idealFor: 'Perusahaan B2B/B2C, Startup, Kontraktor, Klinik, Kantor Hukum, Pabrik/Manufaktur',
    features: [
      'Halaman Tentang Kami, Layanan, Portofolio, & Kontak',
      'Desain kredibel dengan nuansa corporate modern',
      'Unduh profil perusahaan (PDF katalog) terpadu',
      'Integrasi Google Maps & form penawaran resmi',
      'Struktur SEO terstruktur untuk brand search'
    ],
    deliverables: [
      '5-8 Halaman berstruktur rapi',
      'Setup email bisnis profesional (@namadomain.com)',
      'Sertifikat SSL keamanan gratis',
      'Dukungan maintenance 30 hari'
    ]
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Pantau, perbarui, dan jaga performa website agar selalu optimal, bebas error, dan aman dari serangan atau bug sistem.',
    icon: 'Wrench',
    estimatedDays: 'Layanan Bulanan / Berkala',
    idealFor: 'Pemilik website yang ingin fokus bisnis tanpa pusing urusan teknis server & update',
    features: [
      'Pemeriksaan kesehatan sistem & speed check rutin',
      'Backup berkala database & file website',
      'Update security patch & plugin teratur',
      'Perbaikan bug/error tak terduga dalam hitungan jam',
      'Bantuan edit teks, harga, & promo berkala'
    ],
    deliverables: [
      'Laporan performa bulanan ringkas',
      'Monitoring uptime 24/7',
      'Jalur darurat WhatsApp prioritas'
    ]
  },
  {
    id: 'email-bisnis',
    title: 'Set Up Email Bisnis',
    description: 'Bangun kredibilitas merek dengan email bisnis beralamat domain sendiri, terlihat profesional untuk komunikasi dengan klien atau pelanggan.',
    icon: 'Mail',
    estimatedDays: '1 Hari Kerja',
    idealFor: 'Semua pebisnis yang masih pakai @gmail.com untuk korespondensi resmi',
    features: [
      'Contoh: info@namabisnis.com atau nama@namabisnis.com',
      'Setup DNS record lengkap (SPF, DKIM, DMARC) anti spam',
      'Bisa dihubungkan ke Gmail / Outlook / Smartphone',
      'Kapasitas penyimpanan aman & terenkripsi',
      'Tanda tangan email (email signature) profesional gratis'
    ],
    deliverables: [
      'Konfigurasi akun email domain',
      'Panduan koneksi ke HP & laptop',
      'Uji coba kirim & terima email'
    ]
  },
  {
    id: 'artikel-seo',
    title: 'Artikel SEO',
    description: 'Optimalkan peringkat website dengan artikel SEO-friendly yang menarik, informatif, dan meningkatkan visibilitas di mesin pencari.',
    icon: 'BarChart3',
    estimatedDays: 'Sesuai Paket Konten',
    idealFor: 'Website yang ingin dapat pengunjung organik gratis dari Google tanpa harus pasang iklan terus menerus',
    features: [
      'Riset kata kunci (keyword research) bervolume & bertarget',
      'Penulisan orisinal, bernas, & lolos uji plagiasi',
      'Struktur H1, H2, Meta Description & Alt Tag gambar',
      'Internal & external linking yang natural',
      'Bantuan ilustrasi / infografis pendukung artikel'
    ],
    deliverables: [
      'Paket artikel siap publish',
      'Rekomendasi keyword mapping',
      'Laporan optimasi on-page'
    ]
  }
];

export const SUPPORT_PILLARS: SupportItem[] = [
  {
    id: 'monitoring',
    title: 'monitoring bisnis & update perubahan',
    description: 'Selain support teknis, kami juga memantau agar website tetap relevan dengan perkembangan bisnis klien. Karena bisnis itu hidup setiap hari bisa berubah: menu berubah, harga berubah, promo berubah, testimoni baru masuk, dll. dan website harus ikut mengikuti perubahan itu, bukan hanya saat awal jadi.',
    icon: 'Monitor',
    keyPoints: [
      'Update menu & katalog produk cepat',
      'Banner promo musiman (Ramadhan, Year-end, dll)',
      'Penambahan testimoni baru secara berkala',
      'Pemantauan link & tombol form WhatsApp'
    ]
  },
  {
    id: 'optimasi',
    title: 'optimasi headline & strategi performa',
    description: 'Kami juga membantu mengarahkan klien jika ingin meningkatkan performa websitenya. Misalnya: bagaimana menampilkan highlight produk, bagaimana menulis headline yang lebih kuat, atau bagaimana membuat halaman landing lebih fokus ke penjualan supaya website bukan hanya "pajangan" tapi benar-benar alat marketing yang bekerja.',
    icon: 'Lightbulb',
    keyPoints: [
      'Audit visual hierarchy & copywriting A/B',
      'Optimasi rasio klik tombol penawaran',
      'Penataan trust badge pembeli lokal',
      'Percepatan First Contentful Paint (FCP)'
    ]
  },
  {
    id: 'scaleup',
    title: 'upgrade paket & scale up',
    description: 'Jika klien ingin melakukan upgrade ke paket yang lebih besar di kemudian hari (misalnya dari landing page menjadi company profile), kami siap bantu rancang jalur upgrade yang paling efektif tanpa harus mengulang dari nol lagi. Karena setiap progress website itu harus berkelanjutan, bukan berhenti setelah project selesai.',
    icon: 'Layers',
    keyPoints: [
      'Migrasi mulus dari 1 halaman ke multi-page',
      'Penambahan fitur e-catalog & payment gateway',
      'Integrasi CRM & sistem booking otomatis',
      'Struktur modular yang siap bertumbuh'
    ]
  },
  {
    id: 'kerjasama',
    title: 'kerja sama jangka panjang',
    description: 'Dan yang terakhir — kami ingin membangun kerja sama jangka panjang, bukan sekadar proyek selesai lalu hilang. Dengan support yang konsisten, kami ingin jadi partner yang bisa diandalkan ketika klien butuh perubahan baru, ide baru, dan strategi baru dalam digital marketing mereka.',
    icon: 'Handshake',
    keyPoints: [
      'Konsultasi digital gratis via WhatsApp',
      'Prioritas pengerjaan untuk langganan setia',
      'Rekomendasi tren teknologi & AI terbaru',
      'Komunikasi santai, transparan, dan solutif'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kopi-bandung',
    title: 'Kopi Bandung - Coffee Roastery',
    client: 'Kopi Bandung - Freshly Roasted Daily',
    tagline: 'Rasakan kehangatan kopi premium Bandung yang dipanggang dengan penuh cinta. 100% Nusantara, 100% Passion.',
    category: 'Landing Page & Branding',
    heroImage: '/Kopi bandung.png',
    fallbackImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
    summary: 'Website Kopi Bandung - Freshly Roasted Daily dibuat untuk memperkuat branding coffee roastery lokal Bandung dengan tampilan premium, hangat, dan profesional, sekaligus mendorong pengunjung mengeksplor produk kopi nusantara.',
    process: [
      'Menentukan value utama brand: kopi Nusantara, fresh roast, dan passion roaster lokal',
      'Mendesain hero section kuat dengan headline singkat & emosional yang menggugah selera',
      'Menggunakan nuansa warna coklat-oranye hangat untuk kesan artisanal & premium',
      'Menambahkan trust indicator (pengalaman roastery, kepuasan pelanggan, garansi fresh roast)',
      'Menempatkan CTA Jelas di area pertama layar (Above the fold) untuk pemesanan cepat via WhatsApp'
    ],
    impact: [
      'Brand terlihat jauh lebih percaya & profesional di mata distributor dan penikmat kopi',
      'Pesan utama langsung dipahami dalam hitungan detik pertama pengunjung masuk',
      'Meningkatkan potensi engagement dan klik ke produk hingga 42% dibanding link bio standar',
      'Memudahkan pelanggan memilih varian beans favorit tanpa harus tanya manual satu per satu'
    ],
    techStack: ['React', 'Tailwind CSS', 'AI Prompt Copy', 'Figma UI/UX', 'WhatsApp Commerce API'],
    liveUrl: '#portofolio'
  },
  {
    id: 'seblak-kuah-pedas',
    title: 'Seblak Kuah Makanan Pedas',
    client: 'Seblak Kuah Pedas - Bikin Melek!',
    tagline: 'Sensasi kuah rempah kencur pedas gurih autentik dengan aneka topping melimpah!',
    category: 'Landing Page Kuliner',
    heroImage: '/Seblak.png',
    fallbackImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop',
    summary: 'Membangun website gerai kuliner dengan visual kontras kuning-merah menggugah selera, menu interaktif level pedas, dan tombol pemesanan instan GrabFood/ShopeeFood/WhatsApp.',
    process: [
      'Riset foto produk yang "nendang" dengan warna cerah menggoda',
      'Desain katalog paket porsi dan level kepedasan gurih pedas',
      'Penambahan social proof ulasan food vlogger & testimoni pelanggan',
      'Optimasi mobile-first untuk akses cepat saat scroll medsos'
    ],
    impact: [
      'Lonjakan order online hingga 3.2x lipat saat jam makan siang',
      'Waktu pemesanan pelanggan terpangkas 50% karena menu sudah jelas di web',
      'Testimoni pembeli langsung terintegrasi otomatis'
    ],
    techStack: ['Tailwind CSS', 'Next.js', 'WhatsApp Direct Flow', 'Micro-interactions'],
    liveUrl: '#portofolio'
  },
  {
    id: 'hempers-lebaran',
    title: 'Hampers Lebaran Eksklusif',
    client: 'Exclusive Raya Hampers & Gift',
    tagline: 'Hantaran hari raya Idul Fitri yang berkesan, elegan, dan siap kirim ke seluruh Indonesia.',
    category: 'Landing Page Musiman',
    heroImage: '/hempers.png',
    fallbackImage: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop',
    summary: 'Website promosi pre-order hampers lebaran eksklusif untuk personal maupun corporate gift, dengan katalog paket kue kering, kartu ucapan custom, dan integrasi WhatsApp ordering.',
    process: [
      'Penyusunan katalog paket hampers dengan tier harga jelas',
      'Penerapan visual hangat bernuansa Idul Fitri & gold packaging',
      'Integrasi tombol reservasi kuota batch pengiriman',
      'Formulir order instan dengan opsi pesan custom kartu ucapan'
    ],
    impact: [
      'Target kuota pre-order 500+ box tercapai dalam 2 minggu pertama',
      'Mempermudah rekap order korporasi tanpa ribet kirim PDF manual',
      'Tingkat konversi WhatsApp naik 38%'
    ],
    techStack: ['React', 'Tailwind CSS', 'WhatsApp Order Gateway', 'Fast Loading Engine'],
    liveUrl: '#portofolio'
  },
  {
    id: 'nusapangan',
    title: 'Nusapangan Produksi Pangan Berkualitas',
    client: 'PT Nusapangan Agro Mandiri',
    tagline: 'Solusi industri bahan pangan berkualitas tinggi, higienis, dan berstandar nasional.',
    category: 'Company Profile Industri',
    heroImage: '/Nusapangan.png',
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    summary: 'Website company profile representatif untuk industri produksi dan distribusi bahan pangan skala nasional, dilengkapi profil fasilitas pabrik, sertifikasi mutu BPOM/Halal/ISO, dan form kerjasama B2B.',
    process: [
      'Struktur navigasi profil perusahaan berstandar corporate B2B',
      'Showcase sertifikasi standar keamanan pangan & higienitas',
      'Katalog produk komoditas dan kapasitas produksi bulanan',
      'Integrasi form Request for Quotation (RFQ) untuk mitra distributor'
    ],
    impact: [
      'Kredibilitas perusahaan meningkat pesat saat pitching ke jaringan retail besar',
      'Memudahkan buyer mengunduh Company Profile PDF resmi',
      'Meningkatkan inbound leads B2B hingga 40%'
    ],
    techStack: ['React', 'Tailwind CSS', 'Corporate SEO', 'RFQ Engine'],
    liveUrl: '#portofolio'
  },
  {
    id: 'kepoin',
    title: 'Kepoin Portal Edukasi',
    client: 'Kepoin - Portal Belajar & Edukasi Wawasan',
    tagline: 'Platform artikel edukatif, wawasan sains modern, dan tips praktis yang mudah dipahami semua usia.',
    category: 'Blog Website Edukasi',
    heroImage: '/Kepoin.png',
    fallbackImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    summary: 'Website blog edukasi dengan tipografi ramah mata, pengelompokan topik belajar interaktif, fitur pencarian cepat, serta kecepatan muat artikel yang super ringan.',
    process: [
      'Desain layout membaca yang nyaman dengan hierarchy teks teratur',
      'Sistem kategori edukasi, sains, teknologi, dan tutorial praktis',
      'Optimasi Google Core Web Vitals untuk SEO peringkat atas',
      'Integrasi tombol berbagi sosial media & komentar pembaca'
    ],
    impact: [
      'Durasi membaca rata-rata pengunjung mencapai lebih dari 3 menit',
      'Artikel terindeks cepat di Google dengan bounce rate di bawah 25%',
      'Peningkatan pembaca aktif bulanan yang signifikan'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'SEO Schema Article', 'Speed Optimizer'],
    liveUrl: '#portofolio'
  },
  {
    id: 'karyaprima',
    title: 'Karyaprima Furnitur Rumah Mewah',
    client: 'Karyaprima Luxury Furniture & Interior',
    tagline: 'Sentuhan keanggunan furnitur kustom kelas atas untuk hunian mewah impian Anda.',
    category: 'Company Profile & Luxury',
    heroImage: '/Karyaprima.png',
    fallbackImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    summary: 'Website company profile eksklusif untuk produsen furnitur kustom rumah mewah, menampilkan mahakarya kerajinan kayu solid, portofolio interior villa, dan form konsultasi arsitek.',
    process: [
      'Penerapan visual premium bertema dark-gold luxury craftsmanship',
      'Galeri portofolio beresolusi tinggi dengan detail tekstur material',
      'Halaman profil workshop, bahan kayu pilihan, dan tim ahli interior',
      'Formulir reservasi konsultasi desain & survey lokasi hunian'
    ],
    impact: [
      'Menarik klien hunian kelas atas dan desainer interior ternama',
      'Meningkatkan nilai transaksi rata-rata proyek furnitur custom',
      'Tampilan web memperkuat positioning brand sebagai luxury maker'
    ],
    techStack: ['React', 'Tailwind CSS', 'High-Res Gallery', 'Consultation Form Engine'],
    liveUrl: '#portofolio'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-kopi-bandung',
    title: 'Kopi Bandung',
    subtitle: 'Artisan coffee roastery dengan aroma branding hangat',
    category: 'Landing Page',
    image: '/Kopi bandung.png',
    fallbackImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop',
    badge: 'Artisan F&B',
    description: 'Landing page eksklusif dengan palet coklat kopi dan emas premium, menyajikan katalog biji kopi single origin Jawa Barat, formulir order instan, dan panduan seduh interaktif.',
    clientName: 'Kopi Bandung - Freshly Roasted Daily',
    industry: 'Food & Beverage',
    year: '2025',
    tags: ['Landing Page', 'Kopi Bandung', 'WhatsApp Order', 'Dark Theme'],
    features: [
      'Katalog beans dengan filter tasting notes',
      'Tombol CTA langsung terhubung ke barista WhatsApp',
      'Layout responsif optimal di semua smartphone',
      'Badge trust 100% Kopi Nusantara'
    ],
    metrics: [
      { label: 'Peningkatan Lead', value: '+45%' },
      { label: 'Speed Score', value: '98/100' },
      { label: 'Waktu Selesai', value: '3 Hari' }
    ],
    featured: true
  },
  {
    id: 'proj-seblak-kuah',
    title: 'Seblak Kuah Makanan Pedas',
    subtitle: 'Halaman promosi kuliner kuah gurih pedas dengan visual nampol',
    category: 'Landing Page',
    image: '/Seblak.png',
    fallbackImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=900&auto=format&fit=crop',
    badge: 'Kuliner UMKM',
    description: 'Website landing page bertema cerah enerjik untuk brand seblak kuah makanan pedas, dilengkapi ulasan pelanggan, aneka topping melimpah, dan tombol order instan.',
    clientName: 'Seblak Kuah Pedas - Bikin Melek!',
    industry: 'Kuliner & Franchise',
    year: '2025',
    tags: ['Landing Page', 'Kuliner Pedas', 'Seblak Viral', 'Mobile-First'],
    features: [
      'Pilihan level pedas 1-10 interaktif',
      'Katalog aneka topping & paket porsi kenyang',
      'Koneksi GrabFood, ShopeeFood, & WhatsApp',
      'Promo diskon pelanggan pertama'
    ],
    metrics: [
      { label: 'Order Harian', value: '180+ Porsi' },
      { label: 'Konversi', value: '8.4%' },
      { label: 'Waktu Selesai', value: '2 Hari' }
    ],
    featured: true
  },
  {
    id: 'proj-hempers-lebaran',
    title: 'Hampers Lebaran',
    subtitle: 'Pemesanan parsel & hampers hari raya Idul Fitri eksklusif',
    category: 'Landing Page',
    image: '/hempers.png',
    fallbackImage: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=900&auto=format&fit=crop',
    badge: 'Seasonal Hampers',
    description: 'Landing page pre-order hampers lebaran elegan untuk keluarga, sahabat, dan kebutuhan corporate gift dengan paket custom kartu ucapan dan pengiriman terjadwal.',
    clientName: 'Exclusive Raya Hampers & Gift',
    industry: 'Gift & Seasonal',
    year: '2025',
    tags: ['Landing Page', 'Hampers Lebaran', 'Pre-Order', 'WhatsApp Commerce'],
    features: [
      'Katalog varian hampers premium & kue kering',
      'Kustomisasi kartu ucapan & nama pengirim',
      'Jadwal slot tanggal pengiriman Idul Fitri',
      'Sistem booking kuota cepat via WhatsApp'
    ],
    metrics: [
      { label: 'Pre-Order', value: '500+ Box' },
      { label: 'Lead WhatsApp', value: '+38%' },
      { label: 'Waktu Selesai', value: '3 Hari' }
    ],
    featured: true
  },
  {
    id: 'proj-nusapangan',
    title: 'Nusapangan Produksi Pangan',
    subtitle: 'Produsen & distribusi pangan berkualitas tinggi',
    category: 'Company Profile',
    image: '/Nusapangan.png',
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop',
    badge: 'Industri Pangan',
    description: 'Company profile korporasi pengolahan dan penyediaan bahan pangan berkualitas tinggi, higienis, dan berstandar nasional untuk mitra B2B, hotel, dan distributor.',
    clientName: 'PT Nusapangan Agro Mandiri',
    industry: 'Pangan & Manufaktur',
    year: '2025',
    tags: ['Company Profile', 'Nusapangan', 'B2B Industri', 'Sertifikasi Mutu'],
    features: [
      'Showcase sertifikasi BPOM, Halal, & ISO Mutu',
      'Katalog spesifikasi komoditas pangan higienis',
      'Formulir Request for Quotation (RFQ) mitra',
      'Download company profile PDF resmi'
    ],
    metrics: [
      { label: 'Kemitraan B2B', value: 'Nasional' },
      { label: 'Lead Growth', value: '+40%' },
      { label: 'Waktu Selesai', value: '5 Hari' }
    ],
    featured: true
  },
  {
    id: 'proj-kepoin-edukasi',
    title: 'Kepoin Edukasi',
    subtitle: 'Portal edukasi wawasan, sains modern, dan artikel belajar praktis',
    category: 'Blog / SEO',
    image: '/Kepoin.png',
    fallbackImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
    badge: 'Edukasi & Media',
    description: 'Blog website edukasi interaktif dengan tipografi ramah mata, pencarian materi cerdas, struktur artikel ramah SEO, dan performa loading super cepat.',
    clientName: 'Kepoin - Portal Belajar & Edukasi',
    industry: 'Edukasi & Media Online',
    year: '2025',
    tags: ['Blog / SEO', 'Kepoin', 'Web Edukasi', 'Google SEO 100'],
    features: [
      'Struktur layout membaca artikel yang nyaman',
      'Sistem kategori edukasi, tips, dan wawasan',
      'Fitur pencarian instan dan tag topik',
      'Dark mode reading & share media sosial'
    ],
    metrics: [
      { label: 'Avg Read Time', value: '3m 45s' },
      { label: 'Bounce Rate', value: '< 25%' },
      { label: 'Waktu Selesai', value: '4 Hari' }
    ],
    featured: true
  },
  {
    id: 'proj-karyaprima-furnitur',
    title: 'Karyaprima Furnitur Mewah',
    subtitle: 'Produsen kustom furnitur interior rumah mewah',
    category: 'Company Profile',
    image: '/Karyaprima.png',
    fallbackImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=900&auto=format&fit=crop',
    badge: 'Furnitur Mewah',
    description: 'Website company profile eksklusif untuk produsen furnitur kustom dan interior rumah mewah berkelas, menonjolkan seni ukir, kayu solid, dan kemewahan desain.',
    clientName: 'Karyaprima Luxury Furniture & Interior',
    industry: 'Furnitur & Desain Interior',
    year: '2025',
    tags: ['Company Profile', 'Karyaprima', 'Furnitur Mewah', 'Interior Custom'],
    features: [
      'Galeri mahakarya furnitur resolusi ultra tinggi',
      'Profil workshop dan sertifikasi kayu legal',
      'Formulir booking konsultasi interior & survey',
      'Katalog koleksi ruang tamu, kamar tidur & dapur'
    ],
    metrics: [
      { label: 'Nilai Proyek', value: 'Luxury Tier' },
      { label: 'Klien Residensial', value: 'Jabodetabek' },
      { label: 'Waktu Selesai', value: '5 Hari' }
    ],
    featured: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Bima Hadiansyah',
    role: 'Pemilik Toko Oleh-Oleh Khas Daerah (UMKM)',
    business: 'UMKM Khas Nusantara',
    projectType: 'Company profile',
    avatar: '/Bima.jpg',
    fallbackAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    review: 'Website yang dibuat bikin produkku keliatan jauh lebih serius dan profesional. Sebelum ada website, orang cuma lihat dari IG dan WhatsApp. Sekarang calon pembeli bisa lihat katalog, harga, dan varian rasa langsung dari web dan itu bikin orang lebih yakin dan percaya buat order!',
    rating: 5
  },
  {
    id: 'testi-2',
    name: 'Salsa Ayuningtyas',
    role: 'Freelance Makeup Artist',
    business: 'Salsa Beauty Studio',
    projectType: 'Landing page',
    avatar: '/Salsa.jpg',
    fallbackAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    review: 'Aku suka banget sama cara desainnya dijelasin. Walaupun aku bukan orang yang ngerti teknologi, aku tetap ngerti. Tampilan website-ku jadi terlihat mahal, elegan, dan cocok sama style brand aku. Klien-klien baru juga bilang websitenya keliatan keren dan profesional.',
    rating: 5
  },
  {
    id: 'testi-3',
    name: 'Aditya Pratama',
    role: 'Reviewer Gadget',
    business: 'TechPedia Review',
    projectType: 'Blog website',
    avatar: '/Aditya.jpg',
    fallbackAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    review: 'Blog yang dibuat bener-bener nyaman banget buat nulis reviewku. Struktur artikelnya rapi, typography gampang dibaca, dan loadingnya super ringan. Sekarang hasil reviewku jauh lebih enak dikonsumsi pembaca & keliatan lebih profesional terima kasih!',
    rating: 5
  },
  {
    id: 'testi-4',
    name: 'Hendrawan Kusuma',
    role: 'Direktur Operasional',
    business: 'PT Agro Mandiri Ekspor',
    projectType: 'Company Profile & B2B',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    review: 'Pengerjaannya sangat tepat waktu dan komunikasinya responsif. Mas Sidik mengerti betul kebutuhan buyers luar negeri kami. Website kami sekarang jadi rujukan utama ketika mengirimkan proposal ke calon klien di Dubai dan Singapura.',
    rating: 5
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-clients',
    value: 24,
    suffix: '+',
    label: 'Clients',
    icon: 'Users'
  },
  {
    id: 'stat-projects',
    value: 33,
    suffix: '+',
    label: 'Projects',
    icon: 'FolderGit2'
  },
  {
    id: 'stat-reviews',
    value: 20,
    suffix: '+',
    label: 'Ulasan',
    icon: 'Star'
  },
  {
    id: 'stat-websites',
    value: 25,
    suffix: '+',
    label: 'website',
    icon: 'Globe'
  }
];

export const ABOUT_ME_DATA = {
  name: 'Nur Sidik Maulana Putra',
  role: 'AI Designer & Web Developer',
  headline: 'Saya bantu UMKM punya website premium dengan proses cepat & terarah',
  paragraph1: 'Saya adalah AI Web Designer yang berfokus pada pembuatan website modern, rapi, dan profesional. Bagi saya, website bukan sekadar tampilan visual yang menarik, tetapi sebuah alat bisnis yang mampu membangun kepercayaan dan menarik perhatian sejak pertama kali dilihat.',
  paragraph2: 'Setiap website dirancang dengan struktur yang jelas, pemilihan tipografi yang presisi, serta layout yang berani dan terarah. Tujuannya bukan hanya untuk terlihat bagus, tetapi juga benar-benar berfungsi—mengarahkan pengunjung untuk memahami, tertarik, dan mengambil tindakan.',
  paragraph3: 'Dalam proses kerja, saya memanfaatkan AI sebagai partner eksplorasi, bukan sebagai jalan pintas. AI membantu mempercepat riset visual, pengembangan konsep, dan eksplorasi desain, sementara setiap keputusan akhir tetap saya kurasi secara manual mulai dari komposisi layout, keseimbangan visual, hingga prioritas informasi.',
  conclusion: 'Hasil akhirnya adalah website yang tidak hanya enak dilihat, tetapi juga intuitif digunakan. Pengunjung dapat dengan mudah memahami isi dan menemukan apa yang mereka cari tanpa perlu berpikir panjang.',
  profileImage: '/Foto saya.png',
  fallbackProfileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  heroBgImage: '/BG porto.png',
  fallbackHeroBgImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop',
  skills: [
    'UI/UX & Web Design',
    'Tailwind CSS & React',
    'AI-Assisted Prototyping',
    'Conversion Copywriting',
    'Speed & SEO Optimization',
    'WhatsApp Commerce Integration'
  ],
  experienceYears: '2+ tahun',
  location: 'Bandung & Remote, Indonesia'
};
