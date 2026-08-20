import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, OrganizationExperience } from '../data/portfolioData';

export const OrganizationsSection: React.FC = () => {
  const { organization_experience, key_metrics } = portfolioData;

  const statCards = [
    { value: key_metrics?.education?.organizations_and_committees || '20+', label: 'Organizations & Committees', rotate: 'rotate-1' },
    { value: key_metrics?.organization?.lpm_display?.staff_coordinated || 8, label: 'Staff Coordinated', rotate: '-rotate-1' },
    { value: key_metrics?.organization?.student_executive_board?.study_excursion_participants || '120+', label: 'Study Excursion Participants', rotate: 'rotate-2' },
    { value: key_metrics?.organization?.competition?.finalist_teams || 10, label: 'Finalist Teams (Liaison)', rotate: '-rotate-2' },
    { value: key_metrics?.organization?.gemastik?.participating_teams || '15+', label: 'Participating Teams', rotate: 'rotate-1' },
    { value: key_metrics?.organization?.international_conference?.international_participants || '30+', label: 'International Participants', rotate: '-rotate-1' },
  ];

  return (
    <section className="relative pt-12" id="organizations">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">the things i did outside the classroom</h2>
      </div>

      {/* Key Metric Sticker Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {statCards.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className={`bg-white p-4 shadow-md border border-pink-100 flex flex-col items-center justify-center text-center ${stat.rotate} transition-transform rounded-sm`}
          >
            <span className="text-3xl md:text-4xl font-bold text-accentpink mb-1 font-display">{stat.value}</span>
            <span className="text-[11px] font-bold text-textmuted uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Organization Cards List */}
      <div className="space-y-6">
        {organization_experience.map((org: OrganizationExperience, idx: number) => (
          <div key={idx} className="paper-card p-6 bg-paper border border-black/10 shadow-sm relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/5 pb-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-textmain font-display">{org.organization}</h3>
                <p className="text-deeprose text-sm font-medium">
                  {org.roles ? org.roles.join(' & ') : org.role}
                  {org.division && ` (${org.division})`}
                </p>
              </div>
              <div className="text-xs text-textmuted font-medium mt-1 md:mt-0 bg-cream/70 px-3 py-1 rounded border border-orange-100 inline-block self-start md:self-auto">
                {org.start_date} — {org.end_date} {org.location && `• ${org.location}`}
              </div>
            </div>

            {org.achievements && org.achievements.length > 0 && (
              <ul className="list-disc list-inside text-sm text-textmuted space-y-2 mb-4">
                {org.achievements.map((ach, i) => (
                  <li key={i} className="leading-relaxed">
                    <span>{ach.description}</span>
                  </li>
                ))}
              </ul>
            )}

            {org.competencies && org.competencies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {org.competencies.map((comp, i) => (
                  <span key={i} className="text-[11px] bg-softpink/30 text-textmain px-2 py-0.5 rounded border border-pink-100/40">
                    {comp}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
