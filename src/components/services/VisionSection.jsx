import React from 'react';

export default function VisionSection() {

  return (
    <section className="bg-surface pb-10 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

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

            <h2 className="text-4xl md:text-5xl lg:text-[2.5rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight mt-4 mb-8 max-w-[85%]">
              Building a Stronger Financial Future
            </h2>

            <p className="text-[15px] text-primary font-medium leading-relaxed mt-auto max-w-[90%]">
               At Finsimplify, we combine financial expertise with practical business insight to help organisations manage their finances with greater clarity and confidence. From essential accounting operations and payroll to financial planning, taxation, reporting, and CFO advisory, our tailored solutions support businesses at every stage. We take care of the numbers so you can focus on making better decisions and growing your business.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
