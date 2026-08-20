import React from 'react';
import { portfolioData, Education } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section className="relative pt-12" id="education">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">where i learned the basics...</h2>
      </div>

      {education.map((edu: Education, index: number) => (
        <div key={index} className="paper-card p-6 md:p-10 relative rotate-[-0.5deg] bg-paper border border-black/10 shadow-md">
          <div className="tape-top-center"></div>

          {/* Summa Cum Laude / High GPA Stamp Effect */}
          <div className="absolute right-6 top-6 w-20 h-20 border-4 border-double border-accentpink rounded-full flex items-center justify-center opacity-30 rotate-12 pointer-events-none">
            <span className="font-bold text-accentpink text-[10px] uppercase text-center leading-tight">
              Summa<br />Cum<br />Laude
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-textmain font-display">{edu.institution}</h3>
          <p className="text-lg md:text-xl text-deeprose font-medium mt-1">
            {edu.degree} in {edu.field}
          </p>

          <div className="flex flex-wrap gap-4 mt-5 items-center">
            <span className="bg-accentpink text-white px-4 py-1.5 font-bold text-lg rounded-sm shadow-2xs font-display">
              {edu.gpa}
            </span>
            <span className="text-textmuted text-sm font-medium">
              {edu.start_date} — {edu.end_date} {edu.location && `• ${edu.location}`}
            </span>
          </div>

          {edu.highlights && edu.highlights.length > 0 && (
            <div className="mt-8 space-y-3 pt-6 border-t border-black/5">
              <span className="text-xs font-bold text-textmain uppercase tracking-wider block mb-2">Highlights & Achievements</span>
              {edu.highlights.map((h, i) => (
                <div key={i} className="flex gap-3 items-start text-sm text-textmuted leading-relaxed">
                  <span className="text-accentpink mt-0.5">✿</span>
                  <p>{h.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
