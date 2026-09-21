import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      title: 'TRANSACTIONAL ACTIVITIES',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-round)',
      imageClass: 'absolute top-0 left-0 w-[75%] h-[65%] object-cover transition-transform duration-700 group-hover:scale-105',
    },
    {
      title: 'DECISION SUPPORT ACTIVITIES',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-diamond)',
      imageClass: 'absolute top-0 left-0 w-[75%] h-[65%] object-cover transition-transform duration-700 group-hover:scale-105',
    },
    {
      title: 'EXPERT FUNCTION ACTIVITIES',
      image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600&q=80',
      clipPath: 'url(#shape-round)',
      imageClass: 'absolute top-0 left-0 w-[75%] h-[65%] object-cover transition-transform duration-700 group-hover:scale-105',
    },

  ];

  return (
    <section className="bg-primary pt-10 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
      {/* SVG Definitions for the unique exact card shapes */}
      <svg width="0" height="0" className="absolute opacity-0 pointer-events-none">
        <defs>
          {/* 1. Round (Quarter circle perfectly fitting top-left) */}
          <clipPath id="shape-round" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 C 1,0.6 0.6,1 0,1 Z" />
          </clipPath>

          {/* 2. Jigsaw/Flower (Two petals with flat top and left edges) */}
          <clipPath id="shape-jigsaw" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.6,0 C 1,0 1,0.6 0.5,0.5 C 0.6,1 0,1 0,0.6 Z" />
          </clipPath>

          {/* 3. Shield (Flat top & left, angled to bottom point) */}
          <clipPath id="shape-shield" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.4 L 0.5,1 L 0,0.4 Z" />
          </clipPath>

          {/* 4. Diamond (Tilted square flush with top-left, with rounded corners) */}
          <clipPath id="shape-diamond" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.65,0 Q 0.7,0 0.745,0.06 L 0.955,0.34 Q 1,0.4 0.91,0.49 L 0.49,0.91 Q 0.4,1 0.34,0.955 L 0.06,0.745 Q 0,0.7 0,0.63 Z" />
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
            <Link to="/blog">
              <button className="bg-white text-primary px-8 py-3.5 rounded-full font-medium hover:bg-surface-muted transition-colors shadow-lg text-sm cursor-pointer">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-secondary rounded-[2.5rem] h-[400px] lg:h-[480px] p-6 lg:p-8 flex flex-col justify-end relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${isCardsVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
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
