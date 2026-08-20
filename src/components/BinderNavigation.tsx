import React from 'react';

interface BinderNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const BinderNavigation: React.FC<BinderNavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'organizations', label: 'Organizations' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-2 md:right-6 top-24 flex flex-col gap-2 z-50">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className={`px-3 py-1.5 rounded-r-md text-xs md:text-sm font-semibold tracking-wide border-t border-r border-b border-white/50 shadow-md transition-all duration-300 text-left ${
              isActive
                ? 'bg-accentpink text-white translate-x-1 shadow-lg'
                : 'bg-blush/90 text-textmain hover:bg-accentpink hover:text-white hover:translate-x-1'
            }`}
          >
            {sec.label}
          </button>
        );
      })}
    </nav>
  );
};
