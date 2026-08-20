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
    <section className="relative min-h-[75vh] flex flex-col md:flex-row items-center gap-12 pt-6" id="hero">
      
      <div className="flex-1 relative">
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

      <div className="flex-1 relative flex justify-center items-center min-h-[400px] w-full my-4">
        {/* Layered Organic Scrapbook Composition */}
        
        {/* Notes Belakang (Kuning): Kanan atas di belakang foto profil (z-0, rotate-6) */}
        <motion.div 
          whileHover={{ y: -4, rotate: 8 }}
          className="absolute top-0 -right-2 md:-right-6 w-48 md:w-52 h-48 bg-yellow-100/95 shadow-md p-4 rotate-6 z-0 border border-yellow-200/90 rounded-xs"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-orange-200/60 backdrop-blur-md -rotate-2 -mt-2 shadow-2xs"></div>
          <p className="handwritten text-textmain mt-2 text-xl leading-snug">
            currently figuring things out ✿
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {profile.professional_identity?.supporting?.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-[10px] bg-yellow-200/70 px-1.5 py-0.5 rounded text-textmain font-sans font-medium">
                #{item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Small Decorative Stamp (Top-Left Accent Layer) */}
        <motion.div 
          whileHover={{ rotate: -12, scale: 1.05 }}
          className="absolute top-0 left-2 md:left-4 bg-cream border border-orange-200 text-deeprose font-display text-xs px-3 py-1.5 shadow-sm -rotate-12 z-5 rounded-xs handwritten"
        >
          ♡ personal binder
        </motion.div>

        {/* Foto Profil (Polaroid): Bingkai putih tebal, p-2 pb-10 bg-white, z-10, -rotate-2 */}
        <motion.div 
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="paper-card p-2 pb-10 w-64 md:w-72 h-80 -rotate-2 relative z-10 flex flex-col items-center justify-between bg-white border border-black/10 shadow-lg"
        >
          <div className="w-full h-56 border border-pink-100 relative overflow-hidden text-center bg-softpink/20 rounded-xs">
            <img 
              src="/Client.jpeg" 
              alt={profile.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="handwritten text-textmain text-xl mt-1">a little bit of everything ♡</span>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/80 backdrop-blur-sm rotate-1 shadow-sm border-t border-b border-white/60"></div>
        </motion.div>

        {/* Notes Depan (Biru/Putih): Menimpa bingkai bawah foto profil (z-20, shadow-md, tanpa menutupi wajah) */}
        <motion.div 
          whileHover={{ y: -4, rotate: -8 }}
          className="absolute -bottom-4 -left-3 md:left-2 w-52 md:w-56 h-36 bg-blue-50/95 shadow-md p-4 -rotate-6 z-20 border border-blue-200/90 rounded-xs"
        >
           <div className="w-3.5 h-3.5 rounded-full bg-accentpink/40 border border-accentpink/60 absolute top-2 left-2 shadow-2xs"></div>
           <p className="handwritten text-textmain text-lg text-center mt-2 font-medium">
             tech + people + creativity
           </p>
           <div className="text-center mt-2 text-xs font-sans text-textmuted bg-white/60 py-1 rounded border border-blue-100/60">
              📍 {profile.location ? `${profile.location.city}, ${profile.location.country}` : 'Malang, Indonesia'}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
