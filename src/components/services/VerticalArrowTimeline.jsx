import React from 'react';

export default function VerticalArrowTimeline({ items }) {
  return (
    <div className="relative max-w-4xl mx-auto py-10">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="relative flex gap-8 md:gap-12 group mb-8 md:mb-12">
            
            {/* Left Column: Node & Arrow */}
            <div className="flex flex-col items-center">
              
              {/* Number Node */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-sm z-10 group-hover:bg-primary transition-colors duration-300">
                <span className="text-primary font-bold text-lg md:text-xl font-['Work_Sans',sans-serif] group-hover:text-white transition-colors duration-300">
                  {item.number}
                </span>
              </div>
              
              {/* Vertical Line with Arrow (Hidden on last item) */}
              {!isLast && (
                <div className="flex-1 w-0.5 bg-primary/20 relative mt-2 mb-2 min-h-[60px] md:min-h-[80px]">
                  {/* Downward Arrow Tip */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-primary/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column: Content */}
            <div className="flex-1 pt-2 pb-6">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(122,184,0,0.15)] group-hover:border-secondary transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-medium text-primary mb-4 font-['Work_Sans',sans-serif]">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[15px] text-primary/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
