import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Users,
  Mic,
  Award,
  Layers,
  ExternalLink,
} from 'lucide-react';

export interface GallerySlide {
  id: number;
  slideNumber: number;
  image: string;
  title: string;
  subtitle: string;
  category: 'Organization' | 'Public Speaking' | 'Certificates' | 'Overview';
  description: string;
}

export const gallerySlides: GallerySlide[] = [
  {
    id: 1,
    slideNumber: 1,
    image: '/gallery/1.png',
    title: 'Organization & Experience',
    subtitle: 'Portfolio Presentation Cover',
    category: 'Overview',
    description: 'Dokumentasi portofolio pengalaman organisasi, kepanitiaan, dan rekam jejak aktivitas perkuliahan.'
  },
  {
    id: 2,
    slideNumber: 2,
    image: '/gallery/2.png',
    title: 'BEM FILKOM — Staf Muda Perhubungan',
    subtitle: 'Student Executive Board of Faculty',
    category: 'Organization',
    description: 'Program kerja kementerian perhubungan & kehumasan, relasi eksternal, dan koordinasi kepanitiaan BEM.'
  },
  {
    id: 3,
    slideNumber: 3,
    image: '/gallery/3.png',
    title: 'International Conference of Asian Students',
    subtitle: 'Public Relation Staff',
    category: 'Organization',
    description: 'Pengelolaan delegasi internasional, konferensi mahasiswa tingkat Asia, dan publikasi relasi media.'
  },
  {
    id: 4,
    slideNumber: 4,
    image: '/gallery/4.png',
    title: 'GEMASTIK XVI 2023 — Liaison Officer',
    subtitle: 'Pusat Prestasi Nasional & Kemendikbudristek',
    category: 'Organization',
    description: 'Pendamping juri dan peserta kompetisi IT nasional bergengsi GEMASTIK XVI di Universitas Brawijaya.'
  },
  {
    id: 5,
    slideNumber: 5,
    image: '/gallery/5.png',
    title: 'BEM FILKOM — Staf Ahli Kementerian Perhubungan',
    subtitle: 'Badan Eksekutif Mahasiswa Kabinet Nawasena',
    category: 'Organization',
    description: 'Memimpin koordinasi komunikasi antar-lembaga fakultas, open house, dan harmonisasi mahasiswa.'
  },
  {
    id: 6,
    slideNumber: 6,
    image: '/gallery/6.png',
    title: 'LPM DISPLAY — Head of Innovation and Business',
    subtitle: 'Lembaga Penerbitan Mahasiswa',
    category: 'Organization',
    description: 'Manajemen inovasi produk kreatif media, kewirausahaan, serta kepengurusan divisi INBIS Display.'
  },
  {
    id: 7,
    slideNumber: 7,
    image: '/gallery/7.png',
    title: 'DEVGIRLS — Staff of Public Relation',
    subtitle: 'Komunitas Pemberdayaan Perempuan di Bidang Teknologi',
    category: 'Organization',
    description: 'Sosialisasi literasi teknologi perempuan, kolaborasi Brawijaya ASEAN Society, dan workshop edukatif.'
  },
  {
    id: 8,
    slideNumber: 8,
    image: '/gallery/8.png',
    title: 'Koleksi Sertifikat Resmi Kegiatan & Organisasi',
    subtitle: 'Official Event & Leadership Certificates',
    category: 'Certificates',
    description: 'Sertifikat Studi Banding BEM, Harmoni Lembaga, Volunteer Mentor WAJAR, serta Panitia 4C National Competition.'
  },
  {
    id: 9,
    slideNumber: 9,
    image: '/gallery/9.png',
    title: 'Another Skills Showcase',
    subtitle: 'Section Divider',
    category: 'Overview',
    description: 'Dokumentasi keahlian praktis dalam komunikasi publik, MC, moderasi acara formal & semi-formal.'
  },
  {
    id: 10,
    slideNumber: 10,
    image: '/gallery/10.png',
    title: 'Public Speaking — Master of Ceremony & Moderator',
    subtitle: 'Event Moderation & Hosting',
    category: 'Public Speaking',
    description: 'Memandu acara kolaborasi internasional dan talkshow kepemudaan (Brawijaya ASEAN Society x DevGirls FILKOM).'
  },
  {
    id: 11,
    slideNumber: 11,
    image: '/gallery/11.png',
    title: 'Public Speaking — MMD FILKOM & Workshop UI/UX',
    subtitle: 'Community Service & Design Workshop Host',
    category: 'Public Speaking',
    description: 'Pembawa acara pembukaan MMD FILKOM Kelompok 13 Kuningan dan Workshop UI/UX interaktif.'
  },
  {
    id: 12,
    slideNumber: 12,
    image: '/gallery/12.png',
    title: 'Public Speaking — Menfest & Live Events',
    subtitle: 'Stage & Entertainment Hosting',
    category: 'Public Speaking',
    description: 'Pengalaman memandu acara malam apresiasi, gathering keakraban, dan pentas hiburan organisasi.'
  },
  {
    id: 13,
    slideNumber: 13,
    image: '/gallery/13.png',
    title: 'Thank You',
    subtitle: 'Closing Slide',
    category: 'Overview',
    description: 'Slide penutup presentasi portofolio Ikmalunisa Annora.'
  }
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const categories = [
    { label: 'All', icon: Layers, count: gallerySlides.length },
    { label: 'Organization', icon: Users, count: gallerySlides.filter(s => s.category === 'Organization').length },
    { label: 'Public Speaking', icon: Mic, count: gallerySlides.filter(s => s.category === 'Public Speaking').length },
    { label: 'Certificates', icon: Award, count: gallerySlides.filter(s => s.category === 'Certificates').length },
    { label: 'Overview', icon: Sparkles, count: gallerySlides.filter(s => s.category === 'Overview').length },
  ];

  const filteredSlides = selectedCategory === 'All'
    ? gallerySlides
    : gallerySlides.filter((slide) => slide.category === selectedCategory);

  const activeSlide = gallerySlides[currentSlideIndex] || gallerySlides[0];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for lightbox & main carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') setIsLightboxOpen(false);
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section className="relative pt-12" id="gallery">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-accentpink text-2xl">✿</span>
            <h2 className="text-3xl font-bold text-textmain font-display">Gallery & Activities</h2>
          </div>
          <p className="handwritten text-xl md:text-2xl text-deeprose mt-1 pl-8">
            portfolio presentation slides & live event snapshots ♡
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-accentpink text-white shadow-sm scale-105'
                    : 'bg-white/80 hover:bg-white text-textmain hover:text-accentpink border border-blush/40'
                }`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/25 text-white' : 'bg-softpink/60 text-textmuted'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Slide Showcase */}
      <div className="relative mb-10 bg-white/90 rounded-2xl p-3 sm:p-5 md:p-6 shadow-md border border-blush/50 backdrop-blur-xs">
        {/* Scrapbook Tape Accent */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-yellow-100/80 border border-yellow-200/90 shadow-2xs rotate-[-1deg] pointer-events-none rounded-xs z-20 flex items-center justify-center">
          <span className="text-[10px] font-mono tracking-widest text-amber-800/60 uppercase">PRESENTATION</span>
        </div>

        {/* Showcase Header Bar */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-blush/30">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-accentpink/15 text-deeprose font-bold text-xs">
                Slide {activeSlide.slideNumber} of {gallerySlides.length}
              </span>
              <span className="text-xs text-textmuted hidden sm:inline">• {activeSlide.category}</span>
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-textmain truncate mt-1">
              {activeSlide.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="p-2 rounded-lg bg-softpink/40 hover:bg-softpink text-textmain hover:text-deeprose transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Perbesar Slide (Fullscreen Zoom)"
            >
              <Maximize2 size={14} />
              <span className="hidden sm:inline">Perbesar</span>
            </button>
          </div>
        </div>

        {/* Slide Display Area */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900/5 shadow-inner border border-black/5 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-contain cursor-pointer select-none"
              onClick={() => setIsLightboxOpen(true)}
              loading="lazy"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Slide Sebelumnya"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-accentpink text-textmain hover:text-white shadow-md flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Slide Selanjutnya"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-accentpink text-textmain hover:text-white shadow-md flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Caption Note */}
        <div className="mt-4 pt-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-blush/20">
          <p className="text-xs sm:text-sm text-textmuted">
            <strong className="text-textmain">{activeSlide.subtitle}:</strong> {activeSlide.description}
          </p>
          <div className="text-[11px] text-textmuted shrink-0 flex items-center gap-1 font-mono">
            <span>Gunakan panah &larr; &rarr; untuk navigasi</span>
          </div>
        </div>
      </div>

      {/* Slide Thumbnails Album Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-display font-semibold text-textmain text-base">
            Semua Slide ({filteredSlides.length})
          </h4>
          <span className="text-xs text-textmuted">Klik gambar untuk melihat</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {filteredSlides.map((slide) => {
            const isSelected = activeSlide.id === slide.id;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  const targetIndex = gallerySlides.findIndex((s) => s.id === slide.id);
                  if (targetIndex !== -1) {
                    setCurrentSlideIndex(targetIndex);
                  }
                }}
                className={`group relative bg-white rounded-xl p-2 cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'ring-2 ring-accentpink border-accentpink shadow-md scale-[1.02] bg-softpink/10'
                    : 'border-blush/40 hover:border-accentpink/60 shadow-2xs hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Washi tape mini sticker */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-yellow-100/70 border border-yellow-200/80 rounded-2xs rotate-[1deg] pointer-events-none z-10 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                {/* 16:9 Thumbnail Image */}
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-100 border border-black/5">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/60 text-white font-mono text-[9px] font-bold">
                    #{slide.slideNumber}
                  </div>
                </div>

                {/* Slide Caption */}
                <div className="mt-2 px-1">
                  <p className="text-xs font-semibold text-textmain truncate group-hover:text-deeprose transition-colors">
                    {slide.title}
                  </p>
                  <p className="text-[10px] text-textmuted truncate">
                    {slide.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsLightboxOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl max-h-[95vh] flex flex-col z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Top Control Bar */}
              <div className="flex items-center justify-between gap-3 text-white mb-2 px-2">
                <div className="truncate">
                  <span className="text-xs text-softpink font-mono mr-2">
                    Slide {activeSlide.slideNumber} / {gallerySlides.length}
                  </span>
                  <span className="font-semibold text-sm sm:text-base">{activeSlide.title}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeSlide.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Buka Gambar Asli di Tab Baru"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Tutup (Esc)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Lightbox Main Image Display */}
              <div className="relative aspect-[16/9] w-full max-h-[82vh] bg-black/60 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-contain select-none"
                />

                {/* Left/Right Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-textmain backdrop-blur-sm shadow-lg flex items-center justify-center transition-all cursor-pointer"
                  title="Sebelumnya (Panah Kiri)"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-textmain backdrop-blur-sm shadow-lg flex items-center justify-center transition-all cursor-pointer"
                  title="Selanjutnya (Panah Kanan)"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Lightbox Footer Caption */}
              <div className="mt-2 text-center text-xs text-white/70">
                <span>{activeSlide.subtitle} • {activeSlide.description}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
