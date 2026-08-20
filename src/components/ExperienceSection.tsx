import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, WorkExperience } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { work_experience } = portfolioData;

  const getTagForRole = (role: string) => {
    if (role.toLowerCase().includes('hr') || role.toLowerCase().includes('human resources')) return 'HR';
    if (role.toLowerCase().includes('class manager')) return 'CLASS MANAGER';
    return 'COORDINATION';
  };

  return (
    <section className="relative pt-12" id="experience">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">my journey so far</h2>
      </div>

      <div className="relative space-y-10 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blush before:via-accentpink before:to-blush">
        {work_experience.map((exp: WorkExperience, index: number) => {
          const tag = getTagForRole(exp.role);
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''} group`}>
              
              {/* Timeline pin */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-paper bg-accentpink shadow-md shrink-0 absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>

              {/* Binder Note Card */}
              <motion.div 
                whileHover={{ scale: 1.01, rotate: isEven ? 0.5 : -0.5 }}
                className={`ml-12 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] paper-card p-6 ${
                  isEven ? 'rotate-1' : '-rotate-1'
                } bg-paper border border-black/10 shadow-md relative`}
              >
                {/* Binder Tag */}
                <div className={`absolute -top-3 ${isEven ? '-right-2 rotate-3' : '-left-2 -rotate-3'} bg-yellow-100 px-2.5 py-0.5 shadow-sm text-xs font-bold tracking-wider text-textmain border border-yellow-300`}>
                  {tag}
                </div>

                <h3 className="text-xl font-bold text-textmain font-display mb-1">{exp.role}</h3>
                <p className="text-deeprose font-semibold text-sm mb-3">
                  {exp.company} • {exp.start_date} — {exp.end_date}
                  {exp.location && ` • ${exp.location}`}
                  {exp.employment_type && ` (${exp.employment_type})`}
                </p>

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-textmuted space-y-1.5 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.functional_areas && exp.functional_areas.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/5">
                    {exp.functional_areas.map((area, i) => (
                      <span key={i} className="text-[11px] bg-softpink/40 text-textmain px-2 py-0.5 rounded-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
