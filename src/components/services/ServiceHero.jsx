import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceHero({ titlePart1, titlePart2, description, image }) {
  return (
    <section className="mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header */}
        <div className="mb-4">
          <Link to="/services" className="inline-block border border-gray-200 rounded-full px-5 py-1.5 mb-6 shadow-sm hover:bg-gray-50 transition-colors duration-300">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              SERVICES
            </span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] font-['Work_Sans',sans-serif] font-normal tracking-tight">
            <span className="text-secondary">{titlePart1}</span> <span className="text-primary">{titlePart2}</span>
          </h1>
        </div>
        
        {/* Middle Row: Text & Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          
          <p className="text-[17px] lg:text-[19px] text-primary font-normal leading-relaxed max-w-2xl lg:mt-4">
            {description}
          </p>
          
          {/* Action Buttons */}
          <Link to="/contact" className="flex gap-2 items-center shrink-0 group mb-1">
            <button className="bg-primary text-white text-[14px] font-semibold px-7 py-3.5 rounded-full group-hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Free Consultation
            </button>
            <div className="bg-primary text-secondary w-[46px] h-[46px] rounded-full flex items-center justify-center transition-all duration-300 shadow-md group-hover:bg-opacity-90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </Link>

        </div>

        {/* Bottom Image */}
        <div className="w-full rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-sm h-[300px] sm:h-[400px] lg:h-[450px]">
          <img 
            src={image} 
            alt={`${titlePart1} ${titlePart2}`}
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
