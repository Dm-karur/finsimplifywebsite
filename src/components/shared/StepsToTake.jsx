import React from 'react';

export default function StepsToTake() {
  return (
    <section className="bg-surface py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-sm">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
            alt="Team analyzing documents" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Content Overlay Card */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 lg:left-16 w-[calc(100%-2rem)] max-w-lg lg:max-w-xl bg-gradient-to-br from-[#EDEDE4]/95 to-[#E1E1D6]/95 backdrop-blur-sm rounded-[2rem] p-8 lg:p-12 shadow-lg">
            
            <div className="flex justify-between items-start mb-8">
              <div className="border border-primary/20 rounded-full px-5 py-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  WHY US?
                </span>
              </div>
              
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                *
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-[3.2rem] leading-[1.2] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight mb-12">
              You'll Know What <br />
              <span className="bg-secondary px-2 py-1 inline-block mt-2 rounded-md shadow-sm text-primary">Steps to Take Next</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-8">
              <p className="text-[14px] lg:text-[15px] font-medium text-primary">
                We are Transparent Like that. No Gimmicks.
              </p>
              
              <button className="bg-primary text-white text-[13px] font-semibold px-8 py-3.5 rounded-full hover:bg-primary-hover transition-colors shadow-md shrink-0">
                Schedule a Call
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
