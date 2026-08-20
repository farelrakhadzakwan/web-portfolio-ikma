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
          {profile.professional_summary}
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

      <div className="flex-1 relative flex justify-center items-center min-h-[380px] w-full">
        {/* Polaroid Scrapbook Composition */}
        
        {/* Main Polaroid card */}
        <motion.div 
          whileHover={{ scale: 1.03, rotate: 1 }}
          className="paper-card p-4 pb-10 w-64 md:w-72 h-80 rotate-2 absolute z-20 flex flex-col items-center justify-between bg-white border border-black/10 shadow-lg"
        >
          <div className="w-full h-56 bg-softpink/40 border border-pink-100 flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
            <span className="text-4xl mb-2">✿</span>
            <span className="text-sm font-display font-semibold text-deeprose">{profile.name}</span>
            <span className="text-xs text-textmuted mt-1">{profile.location?.city}, {profile.location?.country}</span>
          </div>
          <span className="handwritten text-textmain text-xl">a little bit of everything ♡</span>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-white/80 backdrop-blur-sm rotate-1 shadow-sm border-t border-b border-white/60"></div>
        </motion.div>

        {/* Sticky Note 1 */}
        <motion.div 
          whileHover={{ y: -4, rotate: 8 }}
          className="absolute right-2 md:right-6 top-4 w-44 h-44 bg-yellow-100/90 shadow-md p-4 rotate-6 z-30 border border-yellow-200"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-orange-200/50 backdrop-blur-md -rotate-2 -mt-2"></div>
          <p className="handwritten text-textmain mt-2 text-xl leading-snug">
            currently figuring things out ✿
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {profile.professional_identity?.supporting?.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-[10px] bg-yellow-200/60 px-1.5 py-0.5 rounded text-textmain font-sans">
                #{item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Note Paper 2 */}
        <motion.div 
          whileHover={{ y: -4, rotate: -8 }}
          className="absolute left-2 md:left-4 bottom-2 w-52 h-36 bg-blue-50/90 shadow-sm p-4 -rotate-6 z-10 border border-blue-100"
        >
           <div className="w-3 h-3 rounded-full bg-[#DFD3D8] absolute top-2 left-2"></div>
           <p className="handwritten text-textmain text-lg text-center mt-2">
             tech + people + creativity
           </p>
           <div className="text-center mt-2 text-xs font-sans text-textmuted">
              {profile.location ? `${profile.location.city}, ${profile.location.country}` : ''}
           </div>
        </motion.div>
      </div>
    </section>
  );
};
