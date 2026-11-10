import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, X, Info, Eye, ExternalLink, Layers } from 'lucide-react';
import videosData from '../data/videos.json';

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

interface Video {
  id: string;
  filename: string;
  src: string;
  title: string;
  category: string;
  project?: string;
  views?: string;
  duration: string;
}

const VideoGallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  // Grouping / Filter tabs focused on projects & branding
  const projectFilters = [
    { label: 'All Projects', value: 'All' },
    { label: 'Williams Art', value: 'Williams Art' },
    { label: 'Alexandria Museums', value: 'Alexandria Museums' },
    { label: 'Documentary & Travel', value: 'Documentary & Exploration' }
  ];

  const filteredVideos = useMemo(() => {
    return (videosData as Video[]).filter((video) => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (video.project && video.project.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesProject = 
        selectedFilter === 'All' || video.project === selectedFilter;
      return matchesSearch && matchesProject;
    });
  }, [searchTerm, selectedFilter]);

  const showWilliamsArtHeader = selectedFilter === 'Williams Art' || selectedFilter === 'All';

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">
            Branding & Content Showcase
          </span>
          <h2 className="section-title !mb-0">Selected Projects & Videos</h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            Ad campaigns, brand identity series, and cultural documentaries developed from script to screen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 no-print">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search by project or title..."
              className="pl-12 pr-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-white/50 backdrop-blur-sm w-full sm:w-64 transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {projectFilters.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedFilter === tab.value
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project Header: Williams Art */}
      {showWilliamsArtHeader && selectedFilter === 'Williams Art' && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-stone-900 via-stone-850 to-neutral-900 rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10"
        >
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 flex-shrink-0 flex items-center justify-center p-1.5 shadow-inner">
              <img
                src="images/williams-art-logo.png"
                alt="Williams Art Logo"
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('williams-art-logo.jpg')) {
                    target.src = 'images/williams-art-logo.jpg';
                  } else if (!target.src.includes('williams-art-logo.png.jpg')) {
                    target.src = 'images/williams-art-logo.png.jpg';
                  } else {
                    target.src = 'images/logo.png';
                  }
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Project 01 • Branding</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">Williams Art</h3>
              <p className="text-white/60 text-sm mt-1 max-w-lg">
                Brand narrative, visual direction, and digital content management designed to grow audience reach and elevate brand perception.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/williams_artt?rpxt=cWdtM2JheTB2YWN3&utm_source=qrand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-transform duration-300 hover:scale-105 shadow-md"
          >
            <InstagramIcon size={18} />
            <span>@williams_artt</span>
            <ExternalLink size={14} className="opacity-70" />
          </a>
        </motion.div>
      )}

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden aspect-video shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-end"
              onClick={() => setActiveVideo(video)}
            >
              {/* Fallback preview surface */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-[#1a1a1a]">
                <div className="text-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
                  <Play size={44} fill="currentColor" className="mx-auto mb-2 text-white" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white">Hover to preview</span>
                </div>
              </div>

              {/* Video Preview */}
              <video
                src={`${video.src}#t=0.1`}
                preload="metadata"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                muted
                playsInline
                onMouseOver={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.play().catch(() => {});
                }}
                onMouseOut={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0.1;
                }}
              />

              {/* View Count Badge - Top Right */}
              {video.views && (
                <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full flex items-center gap-1.5 text-white text-xs font-medium shadow-md">
                  <Eye size={13} className="text-accent" />
                  <span>{video.views}</span>
                </div>
              )}

              {/* Project Badge - Top Left */}
              {video.project && (
                <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full flex items-center gap-1.5 text-white/90 text-[11px] font-medium">
                  <Layers size={11} className="text-accent" />
                  <span>{video.project}</span>
                </div>
              )}

              {/* Video Overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 pointer-events-none">
                <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest mb-1">
                  {video.category}
                </span>
                <h3 className="text-sm md:text-base text-white font-medium leading-snug line-clamp-2">
                  {video.title}
                </h3>

                {/* Centered play button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                    <Play size={22} className="md:w-8 md:h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <div className="mb-4 flex justify-center">
            <Info size={44} className="text-gray-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-600">No videos found</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Try adjusting your search query or switching to another project filter.
          </p>
        </div>
      )}

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl no-print"
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video player"
            >
              <X size={32} />
            </button>

            <div className="w-full max-w-4xl space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src={activeVideo.src}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-white">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase">
                      {activeVideo.category}
                    </span>
                    {activeVideo.project && (
                      <span className="text-white/40 text-xs">
                        • {activeVideo.project}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif">{activeVideo.title}</h2>
                </div>

                <div className="flex items-center gap-4">
                  {activeVideo.views && (
                    <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-accent text-sm font-medium">
                      <Eye size={16} />
                      <span>{activeVideo.views}</span>
                    </div>
                  )}

                  {activeVideo.project === 'Williams Art' && (
                    <a
                      href="https://www.instagram.com/williams_artt?rpxt=cWdtM2JheTB2YWN3&utm_source=qrand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 hover:bg-accent/90 transition-colors"
                    >
                      <InstagramIcon size={14} />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGallery;
