import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardsVisible(true);
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const timeoutId = setTimeout(() => {
      if (headerRef.current) headerObserver.observe(headerRef.current);
      if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      headerObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Financial Planning',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-round)',
      imageClass: 'absolute top-0 left-0 w-[85%] h-[70%] object-cover',
    },
    {
      title: 'Investment Management',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-jigsaw)',
      imageClass: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[90%] lg:w-[95%] aspect-square object-cover',
    },
    {
      title: 'Insurance & Risk Management',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-shield)',
      imageClass: 'absolute top-0 left-0 w-[85%] h-[70%] object-cover',
    },
    {
      title: 'Alternative Investments',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-diamond)',
      imageClass: 'absolute top-0 left-0 w-[85%] h-[65%] object-cover',
    }
  ];

  return (
    <section className="bg-primary pt-10 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
      {/* SVG Definitions for the unique exact card shapes */}
      <svg width="0" height="0" className="absolute opacity-0 pointer-events-none">
        <defs>
          {/* 1. Round (Perfect quarter circle touching top & left edges) */}
          <clipPath id="shape-round" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 C 1,0.55 0.55,1 0,1 Z" />
          </clipPath>
          
          {/* 2. Jigsaw (Complex puzzle piece with cutouts, flush top/left) */}
          <clipPath id="shape-jigsaw" clipPathUnits="objectBoundingBox">
            <path d="M 0.20,0.15 L 0.35,0.15 A 0.15 0.15 0 0 1 0.65 0.15 L 0.80,0.15 A 0.05 0.05 0 0 1 0.85 0.20 L 0.85,0.35 A 0.15 0.15 0 0 0 0.85 0.65 L 0.85,0.80 A 0.05 0.05 0 0 1 0.80 0.85 L 0.65,0.85 A 0.15 0.15 0 0 1 0.35 0.85 L 0.20,0.85 A 0.05 0.05 0 0 1 0.15 0.80 L 0.15,0.65 A 0.15 0.15 0 0 0 0.15 0.35 L 0.15,0.20 A 0.05 0.05 0 0 1 0.20 0.15 Z" />
          </clipPath>
          
          {/* 3. Shield (Pentagon with straight top, left, right edges and V-bottom) */}
          <clipPath id="shape-shield" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.6 L 0.5,1 L 0,0.6 Z" />
          </clipPath>
          
          {/* 4. Cut Diamond (Tilted rounded square with flat top and left boundaries) */}
          <clipPath id="shape-diamond" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.45,0 L 0.9,0.45 Q 0.95,0.5 0.9,0.55 L 0.55,0.9 Q 0.5,0.95 0.45,0.9 L 0,0.45 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          <div className={`max-w-3xl ${isHeaderVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block border border-white/20 rounded-full px-5 py-2 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'white' }}>
                SERVICES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Work_Sans',sans-serif] font-medium leading-[1.1] tracking-tight" style={{ color: 'white' }}>
              Covering the Full Spectrum of <br className="hidden md:block" />
              <span className="text-secondary">Global Financial</span> Services
            </h2>
          </div>
          
          <div className={`pb-2 ${isHeaderVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            <button className="bg-white text-primary px-8 py-3.5 rounded-full font-medium hover:bg-surface-muted transition-colors shadow-lg text-sm">
              Learn more
            </button>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-secondary rounded-[2rem] h-[350px] lg:h-[420px] p-6 flex flex-col justify-end relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${isCardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shaped Image */}
              <div 
                className={service.imageClass} 
                style={{ clipPath: service.clipPath, WebkitClipPath: service.clipPath }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Bottom Content */}
              <div className="relative z-10 flex justify-between items-end w-full mt-auto">
                <h3 className="text-xl lg:text-[22px] font-medium text-primary w-2/3 leading-[1.2] font-['Work_Sans',sans-serif]">
                  {service.title}
                </h3>
                
                {/* Arrow Button */}
                <div className="w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-secondary transition-colors duration-300">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
