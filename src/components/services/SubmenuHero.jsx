import React from 'react';
import { Link } from 'react-router-dom';

export default function SubmenuHero({ title, description, image, pills }) {
  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00204a]/90 via-[#00204a]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        <div className="w-full lg:w-[65%] animate-fade-in-up">
          <Link to="/services" className="inline-block border border-white/30 rounded-full px-5 py-1.5 mb-8 hover:bg-white/10 transition-colors duration-300">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              SERVICES
            </span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-['Work_Sans',sans-serif] font-normal tracking-tight text-white mb-6">
            {title}
          </h1>
          
          <p className="text-[17px] lg:text-[19px] text-white/90 font-normal leading-relaxed max-w-2xl mb-10">
            {description}
          </p>

          {/* Service Pills */}
          {pills && pills.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-12">
              {pills.map((pill, idx) => (
                <div key={idx} className="bg-primary border border-secondary/50 text-white px-5 py-2.5 rounded-full text-[14px] font-medium shadow-sm">
                  {pill}
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="flex gap-2 items-center group">
              <div className="bg-secondary text-primary text-[15px] font-semibold px-8 py-3.5 rounded-full group-hover:bg-white transition-all duration-300 shadow-md">
                Talk to Our Finance Team
              </div>
              <div className="bg-secondary text-primary w-[48px] h-[48px] rounded-full flex items-center justify-center transition-all duration-300 shadow-md group-hover:bg-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>

            <Link to="/services" className="flex items-center justify-center px-8 py-3.5 rounded-full text-white text-[15px] font-semibold border border-white/30 hover:bg-white/10 transition-all duration-300 w-fit">
              Explore Our Services
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
