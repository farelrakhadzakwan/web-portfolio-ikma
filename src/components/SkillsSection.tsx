import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills, competency_clusters } = portfolioData;

  const [activeTab, setActiveTab] = useState<string>('tech');

  const indexTabs = [
    { id: 'tech', num: '01', title: 'TECHNOLOGY', items: competency_clusters.information_technology || [] },
    { id: 'data', num: '02', title: 'DATA & ANALYTICS', items: competency_clusters.data_and_analytics || [] },
    { id: 'hr', num: '03', title: 'HR', items: competency_clusters.human_resources || [] },
    { id: 'management', num: '04', title: 'MANAGEMENT', items: competency_clusters.management_and_coordination || [] },
    { id: 'comm', num: '05', title: 'COMMUNICATION', items: competency_clusters.communication_and_public_relations || [] },
    { id: 'tools', num: '06', title: 'TOOLS & SOFT SKILLS', items: [...skills.tools, ...skills.soft_skills] },
  ];

  const currentTab = indexTabs.find(t => t.id === activeTab) || indexTabs[0];

  return (
    <section className="relative pt-12" id="skills">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">skills & binder index</h2>
      </div>

      <div className="paper-card p-6 md:p-10 bg-paper border border-black/10 shadow-lg relative">
        <div className="tape-top-center"></div>

        {/* Index Tabs Bar */}
        <div className="border-b-2 border-blush pb-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-deeprose block mb-3 font-display">INDEX</span>
          <div className="flex flex-wrap gap-2">
            {indexTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-xs md:text-sm font-bold tracking-wider rounded-sm transition-all border ${
                    isActive
                      ? 'bg-accentpink text-white border-accentpink shadow-sm scale-105'
                      : 'bg-white text-textmain border-gray-200 hover:bg-softpink hover:border-blush'
                  }`}
                >
                  <span className="opacity-70 mr-1.5">{tab.num} —</span>
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Index Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="min-h-[200px]"
        >
          <h3 className="text-2xl font-bold text-textmain font-display mb-4 flex items-center gap-2">
            <span>{currentTab.num}.</span>
            <span>{currentTab.title}</span>
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {currentTab.items.map((item, idx) => (
              <span
                key={idx}
                className="bg-white border border-pink-200 px-3 py-1.5 rounded-full text-sm font-medium text-textmain shadow-2xs hover:border-accentpink hover:bg-softpink/30 transition-all flex items-center gap-1.5"
              >
                <span className="text-accentpink text-xs">✿</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages section */}
        {skills.languages && skills.languages.length > 0 && (
          <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4">
            <span className="text-xs font-bold text-textmuted uppercase tracking-wider">Languages:</span>
            <div className="flex gap-2">
              {skills.languages.map((lang, i) => (
                <span key={i} className="text-xs font-semibold bg-cream border border-orange-200 text-textmain px-2.5 py-1 rounded">
                  {lang.language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
