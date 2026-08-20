import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { profile, competency_clusters } = portfolioData;

  const keySkills = [
    'Information Technology',
    'Human Resources',
    'Data Analysis',
    'Project Coordination',
    'People Management'
  ];

  return (
    <section className="relative pt-12" id="about">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">a little about me...</h2>
      </div>

      <div className="paper-card p-6 md:p-10 rotate-[-0.5deg] relative bg-paper shadow-md">
        <div className="tape-top-center"></div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-base md:text-lg text-textmuted leading-relaxed">
            <p>
              {profile.professional_summary}
            </p>
            <p className="text-sm md:text-base">
              I specialize in combining <span className="bg-yellow-200/70 px-1.5 py-0.5 rounded text-textmain font-medium">Information Technology</span> with <span className="bg-pink-200/70 px-1.5 py-0.5 rounded text-textmain font-medium">Human Resources</span> and <span className="bg-blue-200/70 px-1.5 py-0.5 rounded text-textmain font-medium">Data Processing</span> to coordinate teams, solve operational challenges, and improve processes.
            </p>
          </div>
          
          <div className="relative bg-cream/50 p-5 rounded-sm border border-orange-100">
             <div className="handwritten text-accentpink text-xl -rotate-2 mb-3">
               things i'm good at
             </div>
             <div className="flex flex-wrap gap-2">
               {keySkills.map((tag) => (
                 <span key={tag} className="border border-dashed border-blush text-textmain px-3 py-1 rounded-full text-xs font-medium bg-white shadow-2xs">
                   {tag}
                 </span>
               ))}
             </div>

             {competency_clusters && (
               <div className="mt-4 pt-3 border-t border-orange-200/60">
                  <span className="text-xs uppercase font-bold text-textmuted tracking-wider block mb-2">Focus Areas</span>
                  <div className="flex flex-wrap gap-1">
                    {Object.keys(competency_clusters).map((clusterKey) => (
                      <span key={clusterKey} className="text-[11px] bg-white/80 text-deeprose px-2 py-0.5 rounded border border-pink-100">
                        {clusterKey.replace(/_/g, ' ')}
                      </span>
                    ))}
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};
