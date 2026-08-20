import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const { profile } = portfolioData;

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[60vh] flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 pt-2" id="hero">

      <div className="flex-1 relative flex flex-col justify-start">
        <motion.div
          initial={{ rotate: -5, opacity: 0 }}
          animate={{ rotate: -2, opacity: 1 }}
          className="inline-block bg-cream px-3 py-1 shadow-sm handwritten text-accentpink z-10 mb-2 border border-orange-100"
        >
          hello, i'm...
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight uppercase text-textmain font-display">
          {profile.name}
        </h1>

        {profile.professional_identity?.primary && (
          <h2 className="text-lg md:text-2xl font-medium text-deeprose mt-3 mb-6">
            {profile.professional_identity.primary.join(' • ')}
          </h2>
        )}

        <p className="text-base md:text-lg text-textmuted max-w-lg leading-relaxed mb-8">
          Bridging technology, human resources, and data analysis to coordinate teams, optimize operations, and solve complex organizational challenges.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToWork}
            className="px-6 py-3 bg-accentpink text-white rounded-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            Explore My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-white border border-accentpink text-accentpink rounded-sm font-medium shadow-sm hover:bg-softpink hover:-translate-y-0.5 transition-all"
          >
            Let's Connect
          </button>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center min-h-[420px] w-full mt-10 md:mt-24 lg:mt-28">
        {/* Layered Organic Scrapbook Composition */}

        {/* Notes Belakang (Kuning): Kanan atas di belakang foto profil */}
        <motion.div
          whileHover={{ y: -4, rotate: 16 }}
          className="absolute -top-4 md:-top-6 -right-8 md:-right-20 w-56 md:w-60 h-52 bg-yellow-100/95 shadow-md p-4 pt-5 pl-8 rotate-[14deg] z-0 border border-yellow-200/90 rounded-xs"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-orange-200/60 backdrop-blur-md -rotate-2 -mt-2 shadow-2xs"></div>
          <p className="handwritten text-textmain mt-2 text-2xl leading-snug">
            currently figuring things out ✿
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {profile.professional_identity?.supporting?.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-xs bg-yellow-200/70 px-2 py-0.5 rounded text-textmain font-sans font-medium">
                #{item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Small Decorative Stamp (Top-Left Accent Layer) */}
        <motion.div
          whileHover={{ rotate: -12, scale: 1.05 }}
          className="absolute -top-6 -left-4 md:-left-8 bg-cream border border-orange-200 text-deeprose text-sm md:text-base px-4 py-1.5 shadow-md -rotate-12 z-20 rounded-xs handwritten font-semibold"
        >
          ♡ personal binder
        </motion.div>

        {/* Foto Profil (Polaroid): Enlarged proportionally, center anchor */}
        <motion.div
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="paper-card p-3 pb-12 w-72 md:w-80 lg:w-[340px] h-[410px] md:h-[430px] -rotate-2 relative z-10 flex flex-col items-center justify-between bg-white border border-black/10 shadow-xl"
        >
          <div className="w-full h-72 md:h-[310px] border border-pink-100 relative overflow-hidden text-center bg-softpink/20 rounded-xs">
            <img
              src="/Client.jpeg"
              alt={profile.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="handwritten text-textmain text-2xl mt-2 font-medium">a little bit of everything ♡</span>
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/85 backdrop-blur-sm rotate-1 shadow-sm border-t border-b border-white/70"></div>
        </motion.div>
      </div>
    </section>
  );
};
