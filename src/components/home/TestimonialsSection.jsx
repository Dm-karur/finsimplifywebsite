export default function TestimonialsSection() {
  const logos = [
    "Software & IT-Enabled Services",
    "Professional Services & Consulting",
    "Banking & Financial Services",
    "Healthcare",
    "Retail & Trading",
    "Hospitality",
    "Construction & Engineering",
    "Capital Goods",
    "Agro-Industry",
    "Pharmaceuticals",
    "Education"
  ];

  return (
    <section className="bg-white pt-8 lg:pt-12 pb-20 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-24 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between items-start pt-4 animate-fade-in-up">
            <div>
              <span className="border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-10">
                TESTIMONIALS
              </span>
              
              <h2 className="text-[2.5rem] lg:text-[3.5rem] leading-[1.15] font-medium text-primary font-['Work_Sans',sans-serif] tracking-tight max-w-lg mb-16">
                Client <span className="text-secondary">Experiences</span> That Speak for Themselves
              </h2>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-auto">
              <button className="bg-primary text-white text-[13px] font-bold px-8 py-4 rounded-full hover:bg-primary-hover hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Read All Testimonials
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F6F6F3] rounded-full flex items-center justify-center shrink-0">
                  {/* Google G logo approximation */}
                  <svg width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-lg leading-tight">4.9</span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-[0.1em] uppercase">GOOGLE REVIEWS</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Card) */}
          <div className="bg-[#F5F5F3] rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-between min-h-[420px] animate-fade-in-up animation-delay-100">
            <div>
              <div className="text-primary mb-8">
                {/* Large Quotes Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.983 3v7.391C9.983 16.095 6.252 19.961 2 21L1.134 18.73c2.753-1.05 4.38-3.084 4.795-5.326H2V3h7.983zM21.983 3v7.391c0 5.704-3.731 9.57-7.983 10.609L13.134 18.73c2.753-1.05 4.38-3.084 4.795-5.326H14V3h7.983z"/>
                </svg>
              </div>
              <p className="text-text-secondary text-[17px] lg:text-[19px] leading-[1.7] max-w-lg font-medium">
                "Finovate has been instrumental in our growth. Their team took the time to truly understand our needs and helped us eliminate inefficiencies."
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-12">
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80" 
                  alt="Carlos Martines" 
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-[15px] mb-0.5">Carlos Martines</span>
                  <span className="text-gray-500 text-[10px] uppercase font-semibold tracking-wider">MEX — CEO</span>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300 shadow-sm hover:shadow-md group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300">
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="17 17 7 17 7 7"></polyline>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all duration-300 shadow-sm hover:shadow-md group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Logo Strip */}
        <div className="border-t border-gray-200 pt-10 mt-10 overflow-hidden relative">
          {/* Gradient masks for smooth fading on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee hover:opacity-100 opacity-70 transition-opacity duration-300">
            {/* First Set */}
            <div className="flex items-center gap-16 lg:gap-24 px-8 lg:px-12">
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center gap-2 text-[1.1rem] font-medium text-primary tracking-wide whitespace-nowrap font-['Work_Sans',sans-serif]">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  {logo}
                </div>
              ))}
            </div>
            
            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex items-center gap-16 lg:gap-24 px-8 lg:px-12" aria-hidden="true">
              {logos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-2 text-[1.1rem] font-medium text-primary tracking-wide whitespace-nowrap font-['Work_Sans',sans-serif]">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
