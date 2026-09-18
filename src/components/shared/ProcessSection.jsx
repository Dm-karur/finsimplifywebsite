import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Learning About You",
      description: "Schedule a 30-minute call with our professional to discuss your goals and how we can help. This phone or Zoom call also outlines who we are and our process."
    },
    {
      number: "02",
      title: "Organized Meeting",
      description: "Meet with our team to gather the necessary data for your Financial Plan. We'll discuss your Business, finances, Accounts, and goals, including Taxations, Assets, liabilities, and income."
    },
    {
      number: "03",
      title: "Plan Meeting",
      description: "Our advisor will present your personalized financial plan, ensuring it aligns with your evolving needs and goals, and provide clear steps to help you reach your financial objectives."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Your advisor will send a copy of your plan with an actionable list of recommendations. We'll implement and manage these, keeping you updated."
    }
  ];

  return (
    <section className="bg-surface pt-10 lg:pt-12 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Header */}
        <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            OUR PROCESS
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight mb-20 max-w-4xl mx-auto">
          How Can Our Team Help You to Reach <span className="text-secondary">Your Goals</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white border border-border-subtle rounded-[2.5rem] p-3 flex flex-col transition-colors duration-500 hover:bg-secondary hover:border-secondary group shadow-sm hover:shadow-md cursor-default"
            >
              {/* Number Circle */}
              <div className="pt-3 pb-4 px-4">
                <div className="w-10 h-10 bg-secondary text-primary rounded-full flex items-center justify-center text-[14px] font-bold shadow-sm group-hover:shadow-none transition-shadow">
                  {step.number}
                </div>
              </div>
              
              {/* Text Block */}
              <div className="bg-[#F9F9F8] rounded-[2rem] p-6 lg:p-7 flex flex-col">
                <h3 className="text-[20px] font-medium text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 items-center justify-center">
          <button className="bg-primary text-white text-[13px] font-semibold px-8 py-3.5 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md">
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
    </section>
  );
}
