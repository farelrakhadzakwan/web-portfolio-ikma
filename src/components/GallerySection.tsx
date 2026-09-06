import React, { useState, useEffect, useRef } from 'react';
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
  Play,
  Pause,
  Grid,
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

const slideVariants = {
  initial: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'right' ? 35 : -35,
    scale: 0.98,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'right' ? -35 : 35,
    scale: 0.98,
    transition: { duration: 0.2, ease: 'easeIn' },
  }),
};

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [showFullGrid, setShowFullGrid] = useState<boolean>(false);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

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
    setSlideDirection('left');
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1));
  };

  const handleNext = () => {
    setSlideDirection('right');
    setCurrentSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
  };

  const handleSelectSlide = (targetIndex: number) => {
    if (targetIndex === currentSlideIndex) return;
    setSlideDirection(targetIndex > currentSlideIndex ? 'right' : 'left');
    setCurrentSlideIndex(targetIndex);
  };

  // Idle Auto-slide timer (4 seconds per slide when not hovered and lightbox is closed)
  useEffect(() => {
    if (!isAutoPlay || isHovered || isLightboxOpen) return;

    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentSlideIndex((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0));
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, isLightboxOpen, currentSlideIndex]);

  // Keep active thumbnail scrolled into view in horizontal strip
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeEl = thumbnailContainerRef.current.querySelector<HTMLElement>(`[data-thumb-id="${activeSlide.id}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentSlideIndex, activeSlide.id]);

  // Keyboard navigation
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
    <section className="relative pt-6 md:pt-8" id="gallery">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-accentpink text-2xl">✿</span>
            <h2 className="text-2xl md:text-3xl font-bold text-textmain font-display">Gallery & Activities</h2>
          </div>
          <p className="handwritten text-lg md:text-xl text-deeprose pl-7">
            portfolio presentation slides & snapshots ♡
          </p>
        </div>

        {/* Category Filter Pills & Auto-Play Controls */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs ${
                  isActive
                    ? 'bg-accentpink text-white shadow-xs scale-105'
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

          {/* Autoplay Toggle Button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors border ${
              isAutoPlay
                ? 'bg-softpink/50 text-deeprose border-accentpink/40 hover:bg-softpink'
                : 'bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-200'
            }`}
            title={isAutoPlay ? 'Auto-slide aktif (Jeda)' : 'Auto-slide non-aktif (Putar)'}
          >
            {isAutoPlay ? <Pause size={11} /> : <Play size={11} />}
            <span className="text-[11px]">{isAutoPlay ? 'Auto (4.5s)' : 'Pause'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Slide Showcase (Desktop-fitted max-w-2xl / max-w-3xl) */}
      <div
        className="relative max-w-2xl lg:max-w-3xl mx-auto bg-white/95 rounded-2xl p-3 sm:p-4 shadow-md border border-blush/50 backdrop-blur-xs mb-4 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scrapbook Tape Accent */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-yellow-100/90 border border-yellow-200 shadow-2xs rotate-[-1deg] pointer-events-none rounded-xs z-20 flex items-center justify-center">
          <span className="text-[9px] font-mono tracking-widest text-amber-800/70 uppercase">PRESENTATION</span>
        </div>

        {/* Showcase Header Bar (Compact) */}
        <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-blush/30">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-accentpink/15 text-deeprose font-bold text-xs">
                Slide {activeSlide.slideNumber} of {gallerySlides.length}
              </span>
              <span className="text-xs text-textmuted hidden sm:inline">• {activeSlide.category}</span>
              {isHovered && isAutoPlay && (
                <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/60 animate-pulse">
                  Jeda saat hover
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-sm sm:text-base text-textmain truncate mt-0.5">
              {activeSlide.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-2 py-1 rounded-lg bg-softpink/40 hover:bg-softpink text-textmain hover:text-deeprose transition-colors flex items-center gap-1 text-xs font-semibold"
              title="Perbesar Slide (Fullscreen Zoom)"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Perbesar</span>
            </button>
          </div>
        </div>

        {/* Slide Display Area (Constrained 16:9 fitting desktop view) */}
        <div className="relative aspect-[16/9] w-full max-h-[330px] sm:max-h-[360px] md:max-h-[390px] rounded-xl overflow-hidden bg-neutral-900/5 shadow-inner border border-black/5 group">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.img
              key={activeSlide.id}
              custom={slideDirection}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-contain cursor-pointer select-none"
              onClick={() => setIsLightboxOpen(true)}
              loading="lazy"
            />
          </AnimatePresence>

          {/* Auto-Slide Progress Bar */}
          {isAutoPlay && !isHovered && !isLightboxOpen && (
            <motion.div
              key={`progress-${activeSlide.id}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 4.5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1 bg-accentpink/80 z-20"
            />
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Slide Sebelumnya"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-accentpink text-textmain hover:text-white shadow-md flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Slide Selanjutnya"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-accentpink text-textmain hover:text-white shadow-md flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer z-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Compact Slide Caption Bar */}
        <div className="mt-2 pt-2 px-1 flex items-center justify-between gap-2 border-t border-blush/20 text-xs text-textmuted">
          <p className="truncate">
            <strong className="text-textmain">{activeSlide.subtitle}:</strong> {activeSlide.description}
          </p>
          <span className="shrink-0 text-[10px] font-mono opacity-80 hidden md:inline">
            Slide {activeSlide.slideNumber}/{gallerySlides.length}
          </span>
        </div>

        {/* Sleek Horizontal Thumbnail Ribbon (Directly below slide) */}
        <div className="mt-3 pt-2 border-t border-blush/25">
          <div className="flex items-center justify-between mb-1.5 text-xs text-textmuted">
            <span className="font-semibold text-textmain">Daftar Slide ({gallerySlides.length})</span>
            <button
              onClick={() => setShowFullGrid(!showFullGrid)}
              className="text-[11px] text-deeprose hover:underline flex items-center gap-1"
            >
              <Grid size={11} /> {showFullGrid ? 'Tutup Grid Album' : 'Lihat Semua Grid'}
            </button>
          </div>

          <div
            ref={thumbnailContainerRef}
            className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-accentpink/30 hover:scrollbar-thumb-accentpink/60 transition-colors"
          >
            {gallerySlides.map((slide) => {
              const isSelected = activeSlide.id === slide.id;
              return (
                <button
                  key={slide.id}
                  data-thumb-id={slide.id}
                  onClick={() => handleSelectSlide(gallerySlides.findIndex((s) => s.id === slide.id))}
                  className={`group relative shrink-0 w-20 sm:w-24 aspect-[16/9] rounded-lg overflow-hidden border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-accentpink border-accentpink shadow-sm scale-105 opacity-100'
                      : 'border-blush/40 hover:border-accentpink/70 opacity-70 hover:opacity-100 hover:scale-102'
                  }`}
                  title={slide.title}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0.5 right-0.5 px-1 rounded bg-black/65 text-white font-mono text-[8px] font-bold">
                    #{slide.slideNumber}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Optional Full Grid View (Collapsed by default, expands when clicked) */}
      <AnimatePresence>
        {showFullGrid && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-4 pt-4 border-t border-blush/30"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-semibold text-textmain text-sm">
                Album Grid ({filteredSlides.length} Slide)
              </h4>
              <button
                onClick={() => setShowFullGrid(false)}
                className="text-xs text-textmuted hover:text-deeprose transition-colors"
              >
                Tutup Grid ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
              {filteredSlides.map((slide) => {
                const isSelected = activeSlide.id === slide.id;
                return (
                  <div
                    key={slide.id}
                    onClick={() => {
                      const targetIndex = gallerySlides.findIndex((s) => s.id === slide.id);
                      if (targetIndex !== -1) {
                        handleSelectSlide(targetIndex);
                        window.scrollTo({
                          top: document.getElementById('gallery')?.offsetTop || 0,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className={`group relative bg-white rounded-lg p-1.5 cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'ring-2 ring-accentpink border-accentpink shadow-sm bg-softpink/10'
                        : 'border-blush/40 hover:border-accentpink/60 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-neutral-100">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/60 text-white font-mono text-[8px] font-bold">
                        #{slide.slideNumber}
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] font-semibold text-textmain truncate group-hover:text-deeprose transition-colors">
                      {slide.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="relative w-full max-w-5xl max-h-[92vh] flex flex-col z-10"
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
              <div className="relative aspect-[16/9] w-full max-h-[78vh] bg-black/60 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
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
