import React from 'react';

export default function VisionSection() {
  const checkPills = [
    "College planning",
    "Income optimization",
    "Current cash flow needs",
    "Customized asset allocation",
    "Necessary insurance protection"
  ];

  return (
    <section className="bg-surface py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top: Pill Badges */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-16 lg:mb-24">
          {checkPills.map((text, index) => (
            <div 
              key={index} 
              className="bg-[#F9F9F8] rounded-full py-2.5 pl-2.5 pr-6 flex items-center gap-3 shadow-sm border border-transparent"
            >
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-[14px] font-semibold text-primary">{text}</span>
            </div>
          ))}
        </div>

        {/* Bottom: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          
          {/* Left Side: Image */}
          <div className="rounded-[2.5rem] overflow-hidden h-[350px] lg:h-[450px] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop" 
              alt="Woman working on laptop" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Card */}
          <div className="bg-secondary rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between shadow-sm h-[350px] lg:h-[450px]">
            
            <div className="flex justify-between items-start">
              <div className="border border-primary/20 rounded-full px-5 py-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  PREPARING FOR YOUR FUTURE
                </span>
              </div>
              
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight mt-10 mb-8 max-w-[85%]">
              Achieving Your Vision
            </h2>
            
            <p className="text-[16px] text-primary font-medium leading-relaxed mt-auto max-w-[90%]">
              Planning for retirement is essential to your long-term financial well-being. At Finsimplify, our experienced team collaborates with you to identify your retirement goals and crafts a tailored, comprehensive strategy to help you achieve them with confidence.
            </p>
            
          </div>

        </div>

      </div>
    </section>
  );
}
