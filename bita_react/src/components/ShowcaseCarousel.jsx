import React, { useState, useEffect, useRef } from 'react';
import { Layers, ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

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
    <section className="section-padding bg-[#f7f7f7] border-y border-[#ececec]" id="showcase">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="section-badge-master">
            <span>Work & Insights</span>
          </div>
          <h2 className="section-title-master">
            Featured <span className="text-[#a3e635] bg-[#111111] px-2 py-0.5 rounded">Architecture Slides & Decks</span>
          </h2>
          <p className="section-subtitle-master">
            Browse presentation decks detailing our cloud solutions, data engineering implementations, and certified team stars.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {Object.entries(slideCollections).map(([key, col]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeCategory === key
                  ? 'bg-[#111111] text-[#a3e635] shadow-md'
                  : 'bg-white border border-[#ececec] text-[#555555] hover:text-[#111111]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{col.title}</span>
              <span className="ml-1 text-[10px] px-2 py-0.5 rounded-full bg-[#f7f7f7] text-[#111111] font-bold">
                {col.images.length}
              </span>
            </button>
          ))}
        </div>

        {/* Main Viewer Card */}
        <Tilt3DCard className="master-card p-6 md:p-8 relative">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#ececec] text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
              <span className="text-[#111111] font-semibold">{currentCollection.subtitle}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className="flex items-center gap-1.5 text-[#111111] hover:text-[#a3e635] transition-colors uppercase font-bold"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <span className="text-[#111111] font-bold">
                {currentIndex + 1} / {totalSlides}
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-[#ececec] group/view">
            <img 
              src={currentCollection.images[currentIndex]} 
              alt={`${currentCollection.title} Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />

            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-[#111111] hover:bg-[#a3e635] transition-all shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 text-[#111111] hover:bg-[#a3e635] transition-all shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button 
              onClick={() => setLightboxImage(currentCollection.images[currentIndex])}
              className="absolute top-4 right-4 p-2.5 rounded-lg bg-black/80 text-white hover:bg-[#a3e635] hover:text-black transition-all opacity-0 group-hover/view:opacity-100 flex items-center gap-1.5 text-xs font-mono font-bold"
            >
              <Maximize2 className="w-4 h-4" />
              <span>FULLSCREEN</span>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-2 scrollbar-thin">
            {currentCollection.images.map((imgSrc, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-24 aspect-[16/9] rounded-lg overflow-hidden shrink-0 border transition-all ${
                  idx === currentIndex
                    ? 'border-[#a3e635] ring-2 ring-[#a3e635] opacity-100 scale-105'
                    : 'border-[#ececec] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </Tilt3DCard>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white text-[#111111] hover:bg-[#a3e635] transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Fullscreen Detail View" 
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-[#ececec] shadow-2xl"
            />
            <p className="mt-4 text-xs font-mono text-white">
              Press ESC or click close to return to showcase.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
