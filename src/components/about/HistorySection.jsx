import React, { useState } from 'react';
import finLogo from '../../assets/images/finlogo.png';

export default function HistorySection() {
  const historyData = [

    {
      year: '2004',
      title: 'Expansion & Growth',
      text: "For more than 30 years, FinSimplify's experience has been built around managing financial processes for businesses across India and the USA.",
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop&grayscale=true'
    },
    {
      year: '2024',
      title: 'A New Era',
      text: 'Our expertise has evolved across transactional finance, accounting, reporting, taxation, financial planning and strategic finance—allowing us to support businesses as their financial requirements become more complex.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop&grayscale=true'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = historyData[activeIndex];

  return (
    <div className="w-full bg-surface">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 text-center animate-fade-in-up">
        <div className="inline-block border border-border rounded-full px-5 py-2 mb-6 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            OUR HISTORY
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight">
          Here's How We Got <span className="text-secondary">Started</span>
        </h2>
      </div>

      <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Images with Crossfade */}
      {historyData.map((item, index) => (
        <div
          key={item.year}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={item.image} 
            alt={`History ${item.year}`} 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure text readability if needed, though screenshot doesn't show a heavy one */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-end lg:items-center justify-between pb-12 lg:pb-0">
        
        {/* Left Side: History Card */}
        <div className="w-full lg:w-[500px] bg-[#EAEAEA]/95 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 shadow-2xl mt-12 lg:mt-0 transition-all duration-500 relative">
          
          <div className="flex justify-between items-start mb-24">
            {/* Year Pill */}
            <div className="border border-text-muted/30 rounded-full px-4 py-1.5">
              <span className="text-[11px] font-semibold text-primary">{activeData.year}</span>
            </div>
            
            {/* Company Logo */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={finLogo} alt="FinSimplify Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-['Work_Sans',sans-serif] font-normal text-primary mb-12">
              {activeData.title}
            </h3>
            <p className="text-[15px] text-primary/80 leading-relaxed font-normal">
              {activeData.desc || activeData.text}
            </p>
          </div>
          
        </div>

        {/* Right Side: Year Buttons */}
        <div className="flex gap-3 lg:gap-4 mt-8 lg:mt-auto lg:mb-16">
          {historyData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.year}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-surface text-primary border border-primary shadow-lg scale-105' 
                    : 'bg-white/40 text-primary hover:bg-white/60 backdrop-blur-sm'
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>
        
      </div>
    </section>
    </div>
  );
}
