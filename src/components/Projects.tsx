import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Layers, Wrench, ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Projects: React.FC = () => {
  return (
    <div>
      <div className="mb-16">
        <h2 className="section-title">Projects & Creative Campaigns</h2>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Curated selection of professional campaigns and brand initiatives demonstrating scriptwriting, concept ideation, and visual direction.
        </p>
      </div>

      <div className="space-y-12">
        {profile.projects.map((project, index) => {
          const isInstagram = project.link && project.link.includes('instagram.com');
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col lg:flex-row gap-10 bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50"
            >
              <div className="lg:w-1/3">
                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl mb-6 group-hover:text-accent transition-colors font-serif">
                  {project.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                      <Layers size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium">Role: {project.role}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                      <Wrench size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium">Tools: {project.tools}</span>
                  </div>
                </div>

                {project.link && (
                  <div className="mt-8 no-print">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-accent transition-all duration-300 shadow-sm"
                    >
                      {isInstagram ? <InstagramIcon size={16} /> : <ExternalLink size={16} />}
                      <span>{isInstagram ? 'Visit on Instagram' : 'View Project'}</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:w-2/3 lg:border-l lg:pl-10 border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">
                    Objective & Creative Approach
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{project.objective}"
                  </p>
                </div>

                {project.logo && (
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Associated Brand:</span>
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 p-1 flex items-center justify-center">
                      <img
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'images/logo.png';
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{project.title}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
