import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-soft text-accent text-sm font-semibold tracking-wider uppercase mb-6">
          Professional Portfolio
        </span>
        
        <h1 className="text-5xl md:text-8xl leading-tight mb-6 md:mb-8">
          {profile.name}
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-600 mb-6 md:mb-10 leading-relaxed font-light">
          {profile.title}
        </p>
        
        <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl border-l-2 border-accent/30 pl-6 italic">
          “Turning raw material into authentic narratives that resonate deeply and strike a chord with audiences.”
        </p>
        
        <div className="flex flex-wrap gap-4 items-center no-print">
          <a href="#portfolio" className="btn-primary flex items-center gap-2 group">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href={profile.cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <FileText size={18} />
            View CV
          </a>

          <a 
            href={profile.cvPath} 
            download="FABULA_AYMAN_CV.pdf"
            className="px-6 py-3 rounded-full border border-accent/30 text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            Download
          </a>

          <a href="#contact" className="px-6 py-3 rounded-full font-medium text-gray-500 hover:text-primary transition-colors">
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="absolute bottom-0 left-0 w-full flex justify-center animate-bounce no-print">
        <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
