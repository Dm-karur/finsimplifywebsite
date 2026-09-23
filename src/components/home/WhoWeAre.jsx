import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WhoWeAre() {
  const [activeTab, setActiveTab] = useState('01');

  const tabContent = {
    '01': "At FinSimplify, we believe that strong financial management gives business owners the confidence to focus on what matters most—innovation, customers and growth.",
    '02': "We are a trusted financial services partner with over 30 years of experience in managing financial processes for clients in India and the USA.",
    '03': "Our team supports businesses through reliable financial operations, meaningful reporting, specialist expertise and strategic financial guidance."
  };

  return (
    <section className="bg-surface pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="flex-[1.3] animate-fade-in-up w-full">
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                Who We Are
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] leading-[1.15] text-primary font-['Work_Sans',sans-serif] font-medium mb-12 tracking-tight max-w-4xl">
              Founded by Industry <br className="hidden lg:block" />
              Trailblazers who Continue to <br className="hidden lg:block" />
              <span className="text-secondary">Lead the Way.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog" className="bg-primary text-text-on-primary px-8 py-3.5 rounded-full font-medium hover:bg-primary-hover transition-colors shadow-md text-sm text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex-[0.7] w-full animate-fade-in-up animation-delay-200 mt-10 lg:mt-0 lg:pl-10">
            {/* Tabs Row */}
            <div className="flex gap-6 mb-10">
              {['01', '02', '03'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm transition-all border-b-[2px] ${
                    activeTab === tab 
                      ? 'border-secondary text-primary font-medium' 
                      : 'border-border text-text-muted hover:text-primary hover:border-border-strong'
                  } w-8 text-center`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="min-h-[140px]">
              <p className="text-xl lg:text-[22px] text-text-secondary leading-[1.6] font-['Work_Sans',sans-serif] animate-fade-in-up">
                {tabContent[activeTab]}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
