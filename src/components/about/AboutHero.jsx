import React from 'react';

export default function AboutHero() {
  const stats = [
    { valuePrefix: '$', value: '28.90', valueSuffix: 'M', label: 'ASSETS UNDER MANAGEMENT' },
    { valuePrefix: '$', value: '6', valueSuffix: 'bn', label: 'SAVED FOR CLIENTS ANNUALLY' },
    { valuePrefix: '', value: '90', valueSuffix: '%', label: 'REPEAT CLIENTS OR REFERRALS' },
    { valuePrefix: '', value: '120', valueSuffix: '+', label: 'PROFESSIONALS' }
  ];

  return (
    <div className="w-full">
      {/* Top Background Section (Gray) */}
      <div className="w-full bg-[#F9F9F8] pt-8 pb-12 lg:pt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* WHO WE ARE Pill */}
          <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm bg-transparent">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              WHO WE ARE
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight max-w-4xl mb-4">
            A Trusted Partner <br />
            Committed to Your <span className="text-secondary">Financial <br className="hidden md:block" />
            Success</span>
          </h1>
          
        </div>
      </div>

      {/* Image Section with Split Background */}
      <div className="relative w-full">
        {/* Absolute split background layers */}
        <div className="absolute top-0 left-0 w-full h-[50%] bg-[#F9F9F8] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-surface -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src="/aboutsectionfirst.png" 
            alt="About Us - Team meeting" 
            className="w-full h-auto object-cover rounded-[2rem] shadow-sm"
          />
        </div>
      </div>

      {/* Bottom Background Section (White) */}
      <div className="w-full bg-surface pt-16 pb-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-start ${
                  index !== 0 ? 'lg:border-l lg:border-border-subtle lg:pl-10' : 'lg:pr-10'
                }`}
              >
                {/* Number Pill */}
                <div className="bg-[#F6F6F4] rounded-xl px-5 py-2.5 mb-5 inline-block">
                  <span className="text-3xl lg:text-[2.5rem] font-['Work_Sans',sans-serif] font-medium leading-[1.05] tracking-tight">
                    {stat.valuePrefix && <span className="text-secondary">{stat.valuePrefix}</span>}
                    <span className="text-primary">{stat.value}</span>
                    {stat.valueSuffix && <span className="text-secondary">{stat.valueSuffix}</span>}
                  </span>
                </div>
                {/* Label */}
                <p className="text-[10px] sm:text-[11px] font-normal text-text-muted uppercase tracking-[0.1em] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
