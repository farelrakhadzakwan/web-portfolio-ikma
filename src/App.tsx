import { useState, useEffect } from 'react';
import { BinderNavigation } from './components/BinderNavigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { OrganizationsSection } from './components/OrganizationsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'organizations', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden py-6 md:py-12 pl-2 sm:pl-4 md:pl-6 pr-28 sm:pr-32 md:pr-36 flex justify-start bg-[#FFF8FB]">
      
      {/* Soft Glow Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-softpink/60 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blush/40 rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Binder Tab Navigation */}
      <BinderNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Binder Container */}
      <div className="relative w-full max-w-full z-10 flex flex-col md:flex-row shadow-2xl rounded-r-2xl rounded-l-md bg-[#DFD3D8] border border-[#C5B4BA]">
        
        {/* Binder Spine (Left Side) */}
        <div className="hidden md:flex flex-col w-12 bg-[#B89B9D] rounded-l-md items-center py-16 justify-between border-r-2 border-[#8E767A] z-20 shadow-[-2px_0_4px_rgba(0,0,0,0.1)] shrink-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative w-full flex items-center justify-center h-12">
               {/* Metallic binder ring */}
               <div className="absolute left-4 w-12 h-6 border-[3px] border-[#E8E8E8] rounded-full z-30 shadow-[1px_2px_3px_rgba(0,0,0,0.3)] bg-gradient-to-b from-[#F5F5F5] to-[#D4D4D4] opacity-95"></div>
            </div>
          ))}
        </div>

        {/* Binder Pages Content Container */}
        <div className="flex-1 bg-paper relative rounded-r-2xl min-h-[800px] shadow-inner overflow-hidden notebook-lines">
          {/* Subtle Paper Texture Overlay */}
          <div className="absolute inset-0 bg-paper-texture pointer-events-none opacity-40 z-40"></div>

          <div className="pt-4 px-6 pb-6 md:pt-6 md:px-12 md:pb-12 lg:pt-8 lg:px-16 lg:pb-16 relative z-10 space-y-24 md:space-y-32">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <OrganizationsSection />
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
