import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  const bgColors = ['bg-blue-50/70', 'bg-green-50/70', 'bg-amber-50/70', 'bg-pink-50/70'];

  return (
    <section className="relative pt-12" id="projects">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">things i've built & worked on</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj: Project, index: number) => {
          const bg = bgColors[index % bgColors.length];
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4, rotate: isEven ? 0.5 : -0.5 }}
              className={`paper-card p-6 md:p-8 ${bg} border-2 border-white shadow-md flex flex-col justify-between relative`}
            >
              <div className="tape-top-center"></div>

              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl font-display font-bold text-deeprose/40">#{proj.id.replace('project-', '')}</span>
                  {proj.category && proj.category.length > 0 && (
                    <div className="flex flex-wrap gap-1 justify-end">
                      {proj.category.map((cat, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-textmain bg-white px-2 py-0.5 shadow-2xs rounded-sm">
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-textmain mb-2 font-display leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs uppercase font-bold text-deeprose mb-4 tracking-wide">
                  Role: {proj.role}
                </p>

                <p className="text-sm text-textmuted leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Key Metrics Display if present (e.g. Sentiment Analysis) */}
                {(proj.dataset?.volume || proj.performance?.accuracy) && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {proj.dataset?.volume && (
                      <div className="bg-white border-2 border-dashed border-blush p-2.5 text-center rotate-1 shadow-2xs">
                        <div className="text-2xl font-bold text-accentpink">{proj.dataset.volume}</div>
                        <div className="text-[10px] uppercase font-bold text-textmuted">Reviews Processed</div>
                      </div>
                    )}

                    {proj.performance?.accuracy && (
                      <div className="bg-white border-2 border-dashed border-blush p-2.5 text-center -rotate-1 shadow-2xs">
                        <div className="text-2xl font-bold text-accentpink">{proj.performance.accuracy}</div>
                        <div className="text-[10px] uppercase font-bold text-textmuted">Accuracy</div>
                      </div>
                    )}

                    {proj.machine_learning?.algorithm && (
                      <div className="bg-white border border-gray-200 p-2.5 text-center rotate-2 shadow-2xs">
                        <div className="text-sm font-bold text-textmain">{proj.machine_learning.algorithm}</div>
                        <div className="text-[10px] uppercase font-bold text-textmuted">Algorithm</div>
                      </div>
                    )}
                  </div>
                )}

                {/* Responsibilities list */}
                {proj.responsibilities && proj.responsibilities.length > 0 && (
                  <div className="mb-6 bg-white/60 p-3 rounded-sm border border-black/5">
                    <span className="text-xs font-bold text-textmain uppercase tracking-wider block mb-1.5">Responsibilities</span>
                    <ul className="list-disc list-inside text-xs text-textmuted space-y-1">
                      {proj.responsibilities.slice(0, 4).map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies */}
              {proj.technologies && proj.technologies.length > 0 && (
                <div className="pt-4 border-t border-black/5 flex flex-wrap gap-1.5 mt-auto">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-textmain bg-white px-2.5 py-1 rounded-sm shadow-2xs border border-pink-100/50">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
