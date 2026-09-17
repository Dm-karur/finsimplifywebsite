import React from 'react';

export default function ServiceHero() {
  return (
    <section className="bg-surface pt-2 lg:pt-4 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#F9F9F8] rounded-[2.5rem] p-8 lg:p-12 xl:p-16">
        
        {/* Top Header */}
        <div className="flex flex-col mb-12">
          <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm self-start">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              SERVICES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.05] font-['Work_Sans',sans-serif] font-normal tracking-tight">
            <span className="text-secondary">Financial</span> <span className="text-primary">Planning</span>
          </h1>
        </div>
        
        {/* Middle Row: Text & Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          
          <p className="text-[17px] lg:text-[19px] text-primary font-normal leading-relaxed max-w-2xl">
            At Finsimplify, we excel in creating personalized financial plans that cater to the distinct needs of each client.
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-2 items-center shrink-0">
            <button className="bg-primary text-white text-[13px] font-semibold px-7 py-3.5 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md">
              Free Consultation
            </button>
            <button className="bg-primary hover:bg-secondary group text-secondary hover:text-primary w-[46px] h-[46px] rounded-full flex items-center justify-center transition-colors duration-300 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

        </div>

        {/* Bottom Image */}
        <div className="w-full rounded-[2rem] overflow-hidden shadow-sm h-[300px] sm:h-[400px] lg:h-[450px]">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop" 
            alt="Financial Planning Meeting" 
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
