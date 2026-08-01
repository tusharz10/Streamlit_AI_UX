import React, { useState, useEffect, useRef } from 'react';
import { Layers, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Image as ImageIcon } from 'lucide-react';

const slideCollections = {
  home: {
    title: 'Home Slides',
    subtitle: 'Enterprise Overview & Data Engineering Capabilities',
    images: Array.from({ length: 11 }, (_, i) => `/HomeSlides/${i + 1}.png`)
  },
  services: {
    title: 'Service Solutions',
    subtitle: 'Power BI Dashboards, ADF Workflows & Cloud Architecture',
    images: Array.from({ length: 10 }, (_, i) => `/ServicesSlides/${i + 1}.png`)
  },
  ourstars: {
    title: 'Our Stars',
    subtitle: 'BITA Engineering Team & Certified Data Architects',
    images: Array.from({ length: 4 }, (_, i) => `/OurStar/${i + 1}.png`)
  }
};

export default function ShowcaseCarousel() {
  const [activeCategory, setActiveCategory] = useState('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentCollection = slideCollections[activeCategory];
  const totalSlides = currentCollection.images.length;
  const timerRef = useRef(null);

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 4500);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, totalSlides, activeCategory]);

  const handleTabChange = (key) => {
    setActiveCategory(key);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="section-padding relative bg-slate-950/60 border-y border-slate-800/80" id="showcase">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="section-badge mx-auto">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Interactive Slide Showcase</span>
          </div>
          <h2 className="section-title text-white">
            Explore Our <span className="gradient-text-cyan">Project Decks & Team Stars</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Browse high-resolution presentation decks detailing our architecture blueprints, data engineering implementations, and key achievements.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {Object.entries(slideCollections).map(([key, col]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] border border-cyan-400'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>{col.title}</span>
              <span className="ml-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-950/60 text-cyan-300">
                {col.images.length}
              </span>
            </button>
          ))}
        </div>

        {/* Main Viewer Card */}
        <div className="max-w-4xl mx-auto glass-panel p-4 md:p-6 border-cyan-500/30 relative group shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-white font-medium">{currentCollection.subtitle}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title={isPlaying ? 'Pause Slideshow' : 'Start Auto-Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <span className="text-cyan-400">
                {currentIndex + 1} / {totalSlides}
              </span>
            </div>
          </div>

          {/* Slide Viewport */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800 group/view">
            <img 
              src={currentCollection.images[currentIndex]} 
              alt={`${currentCollection.title} Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-opacity duration-300"
            />

            {/* Left Prev Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all opacity-80 hover:opacity-100"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all opacity-80 hover:opacity-100"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expand Fullscreen Lightbox Button */}
            <button 
              onClick={() => setLightboxImage(currentCollection.images[currentIndex])}
              className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover/view:opacity-100 flex items-center gap-1.5 text-xs font-mono"
            >
              <Maximize2 className="w-4 h-4" />
              <span>FULLSCREEN</span>
            </button>
          </div>

          {/* Thumbnails Navigation Strip */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-thin">
            {currentCollection.images.map((imgSrc, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 aspect-[16/9] rounded-lg overflow-hidden shrink-0 border transition-all ${
                  idx === currentIndex
                    ? 'border-cyan-400 ring-2 ring-cyan-500/50 scale-105 opacity-100'
                    : 'border-slate-800 opacity-50 hover:opacity-100'
                }`}
              >
                <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-2xl animate-fadeIn">
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Fullscreen Slide Detail" 
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-cyan-500/40 shadow-[0_0_80px_rgba(0,240,255,0.3)]"
            />
            <p className="mt-4 text-xs font-mono text-cyan-400">
              Press ESC or click close to return to showcase.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
