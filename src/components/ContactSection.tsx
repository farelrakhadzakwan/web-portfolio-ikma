import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = portfolioData;
  const contact = profile.contact;

  return (
    <section className="relative text-center pt-12 pb-16" id="contact">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-accentpink text-2xl">✿</span>
        <h2 className="text-3xl md:text-4xl font-bold text-textmain font-display">let's make something happen ♡</h2>
      </div>

      <p className="text-textmuted text-base max-w-md mx-auto mb-12">
        I'm currently open for new opportunities in HR, IT, Project Coordination, and Data Analysis.
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 relative z-10">
        {contact?.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md border border-pink-100 flex items-center justify-center group-hover:-translate-y-1.5 transition-transform text-textmain group-hover:text-accentpink group-hover:shadow-lg">
              <Mail size={24} />
            </div>
            <span className="font-semibold text-xs md:text-sm text-textmain">{contact.email}</span>
            <span className="text-[10px] text-textmuted uppercase tracking-wider">Email</span>
          </a>
        )}

        {contact?.linkedin && (
          <a
            href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md border border-pink-100 flex items-center justify-center group-hover:-translate-y-1.5 transition-transform text-textmain group-hover:text-accentpink group-hover:shadow-lg">
              <Linkedin size={24} />
            </div>
            <span className="font-semibold text-xs md:text-sm text-textmain">{contact.linkedin}</span>
            <span className="text-[10px] text-textmuted uppercase tracking-wider">LinkedIn</span>
          </a>
        )}

        {contact?.phone && (
          <a
            href={`tel:${contact.phone}`}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full shadow-md border border-pink-100 flex items-center justify-center group-hover:-translate-y-1.5 transition-transform text-textmain group-hover:text-accentpink group-hover:shadow-lg">
              <Phone size={24} />
            </div>
            <span className="font-semibold text-xs md:text-sm text-textmain">{contact.phone}</span>
            <span className="text-[10px] text-textmuted uppercase tracking-wider">Phone</span>
          </a>
        )}
      </div>

      <div className="relative inline-block mt-6">
        <div className="absolute -inset-3 bg-yellow-100 shadow-sm rotate-2 border border-yellow-200 z-0"></div>
        <p className="handwritten text-xl md:text-2xl text-textmain relative z-10 px-6 py-3">
          thanks for flipping through my little binder ♡
        </p>
      </div>
    </section>
  );
};
