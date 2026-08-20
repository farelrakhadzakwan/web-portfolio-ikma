import React from 'react';
import { portfolioData, Certification } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const { certifications_and_training } = portfolioData;

  return (
    <section className="relative pt-12" id="certifications">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl font-bold text-textmain font-display">Certifications & Training</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications_and_training.map((cert: Certification, index: number) => (
          <div
            key={index}
            className="relative bg-orange-100/40 p-3 border border-orange-200 shadow-sm rounded-sm rotate-[-0.5deg]"
          >
            {/* Folder tab effect */}
            <div
              className="absolute top-0 right-0 w-12 h-12 bg-white border-l border-b border-orange-200 shadow-2xs rounded-bl-lg pointer-events-none"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            ></div>

            <div className="bg-white p-5 shadow-2xs border border-gray-100 relative z-10">
              <h3 className="font-bold text-lg text-textmain font-display mb-1">{cert.program}</h3>
              <p className="text-deeprose font-semibold text-xs mb-3">{cert.provider}</p>

              {(cert.issue_date || cert.credential_id) && (
                <div className="text-xs text-textmuted mb-3 flex gap-4">
                  {cert.issue_date && <span>Issued: {cert.issue_date}</span>}
                  {cert.credential_id && <span>ID: {cert.credential_id}</span>}
                </div>
              )}

              {cert.competencies && cert.competencies.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-textmuted uppercase tracking-wider mb-1.5">Competencies:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.competencies.map((comp, i) => (
                      <span key={i} className="bg-gray-50 border border-gray-200 text-xs text-textmuted px-2 py-0.5 rounded">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
