export default function ServicesSection() {
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
      imageClass: 'absolute top-0 left-0 w-[85%] h-[65%] object-cover',
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
    <section className="bg-primary py-24 lg:py-32 relative overflow-hidden">
      {/* SVG Definitions for the unique exact card shapes */}
      <svg width="0" height="0" className="absolute opacity-0 pointer-events-none">
        <defs>
          {/* 1. Round (Perfect quarter circle touching top & left edges) */}
          <clipPath id="shape-round" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 C 1,0.55 0.55,1 0,1 Z" />
          </clipPath>
          
          {/* 2. Jigsaw (Complex puzzle piece with cutouts, flush top/left) */}
          <clipPath id="shape-jigsaw" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.3,0 C 0.3,0.2 0.6,0.2 0.6,0 L 0.8,0 C 1.1,0 1.1,0.5 0.75,0.5 C 0.75,0.8 0.3,0.8 0.3,0.5 C 0.1,0.5 0.1,0.3 0,0.3 Z" />
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-['Work_Sans',sans-serif] font-medium leading-[1.1] tracking-tight">
              Covering the Full Spectrum of <br className="hidden md:block" />
              <span className="text-secondary">Global Financial</span> Services
            </h2>
          </div>
          
          <div className="animate-fade-in-up animation-delay-100 pb-2">
            <button className="bg-white text-primary px-8 py-3.5 rounded-full font-medium hover:bg-surface-muted transition-colors shadow-lg text-sm">
              Learn more
            </button>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-secondary rounded-[2rem] h-[350px] lg:h-[420px] p-6 flex flex-col justify-end relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in-up overflow-hidden" 
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
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-sm shrink-0">
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
