import React from 'react';

export default function WhatWeDo() {
  const points = [
    {
      title: 'Experienced Professionals',
      desc: 'Access experienced finance professionals, partners and specialists.'
    },
    {
      title: 'End-to-End Support',
      desc: 'From daily transactions to strategic financial planning.'
    },
    {
      title: 'Flexible Delivery',
      desc: 'Support designed around your business requirements.'
    },
    {
      title: 'Cost-Efficient Model',
      desc: 'Access the expertise you need without the complexity of continuously building and expanding an internal finance team.'
    },
    {
      title: 'Scalable Solutions',
      desc: 'Our support can evolve as your business grows.'
    },
    {
      title: 'Business-Focused Thinking',
      desc: 'We go beyond completing financial activities. We help businesses build stronger financial foundations.'
    }
  ];

  return (
    <section className="bg-surface pt-16 pb-12 lg:pt-24 lg:pb-16 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 animate-fade-in-up">
          
          {/* Left: Heading */}
          <div className="flex-1">
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                WHAT WE DO?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.15] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight">
              Finance Support <br />
              <span className="text-secondary">You Can Rely On.</span>
            </h2>
          </div>
          
          {/* Right: Paragraph */}
          <div className="flex-1 lg:pt-16">
            <p className="text-[17px] text-text-secondary leading-relaxed font-normal">
              We combine experienced people, structured processes and specialist expertise to help businesses manage their finance function with greater confidence.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-border-subtle my-16" />
        
        {/* Middle Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20 animate-fade-in-up animation-delay-200">
          <div className="flex flex-col items-start">
            <div className="bg-[#F6F6F4] rounded-xl px-5 py-3 mb-5">
              <span className="text-3xl lg:text-4xl font-['Work_Sans',sans-serif] font-medium tracking-tight">
                <span className="text-primary">₹3.4</span>
                <span className="text-secondary">M</span>
              </span>
            </div>
            <p className="text-[10px] lg:text-[11px] font-bold text-text-muted uppercase tracking-[0.1em]">
              IN ANNUAL REVENUE
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:pl-8 lg:border-l border-border-subtle">
            <div className="bg-[#F6F6F4] rounded-xl px-5 py-3 mb-5">
              <span className="text-3xl lg:text-4xl font-['Work_Sans',sans-serif] font-medium tracking-tight">
                <span className="text-primary">₹500K</span>
                <span className="text-secondary">+</span>
              </span>
            </div>
            <p className="text-[10px] lg:text-[11px] font-bold text-text-muted uppercase tracking-[0.1em]">
              IN FUNDING
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:pl-8 lg:border-l border-border-subtle">
            <div className="bg-[#F6F6F4] rounded-xl px-5 py-3 mb-5">
              <span className="text-3xl lg:text-4xl font-['Work_Sans',sans-serif] font-medium tracking-tight">
                <span className="text-primary">30</span>
                <span className="text-secondary">%</span>
              </span>
            </div>
            <p className="text-[10px] lg:text-[11px] font-bold text-text-muted uppercase tracking-[0.1em]">
              OPTIMIZE OPERATIONS TO CUT COSTS
            </p>
          </div>
          
          <div className="flex flex-col items-start lg:pl-8 lg:border-l border-border-subtle">
            <div className="bg-[#F6F6F4] rounded-xl px-5 py-3 mb-5">
              <span className="text-3xl lg:text-4xl font-['Work_Sans',sans-serif] font-medium tracking-tight">
                <span className="text-primary">&gt;200</span>
                <span className="text-secondary">%</span>
              </span>
            </div>
            <p className="text-[10px] lg:text-[11px] font-bold text-text-muted uppercase tracking-[0.1em]">
              INCREASE REVENUE
            </p>
          </div>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 animate-fade-in-up animation-delay-300">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xl font-medium text-primary mb-3 font-['Work_Sans',sans-serif]">
                {point.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
