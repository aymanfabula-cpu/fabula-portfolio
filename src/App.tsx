import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import VideoGallery from './components/VideoGallery.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import PrintSection from './components/PrintSection.tsx';
import { profile } from './data/profile.ts';

const App: React.FC = () => {
  useEffect(() => {
    document.title = `${profile.name} | Portfolio`;
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] selection:bg-[#d4af37] selection:text-white">
      {/* Desktop Navigation */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 md:pt-24 pb-16 md:pb-32 space-y-16 md:space-y-32">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <VideoGallery />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>

        {/* Print only section */}
        <section id="print-version" className="hidden print:block border-t pt-10">
          <PrintSection />
        </section>
      </main>

      <footer className="py-12 border-t border-gray-200 text-center text-sm text-gray-500 no-print">
        <p>© {new Date().getFullYear()} {profile.name}. Portfolio — Content Creator, Scriptwriter & Creative.</p>
      </footer>
    </div>
  );
};

export default App;
