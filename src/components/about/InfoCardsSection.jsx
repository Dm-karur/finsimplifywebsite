import React from 'react';
import {Link} from 'react-router';

export default function InfoCardsSection() {
  return (
    <section className="bg-surface pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Quote & Action */}
        <div className="bg-secondary rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between h-[550px] lg:h-[600px] shadow-sm group">
          <div>
            {/* Quote Icon */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg" className="mb-8">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            
            <p className="text-[22px] lg:text-[26px] font-['Work_Sans',sans-serif] font-medium text-primary leading-[1.4] mb-8">
              "Our purpose is to help people and organizations dream bigger, move faster, and build better tomorrows for all."
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" 
                alt="John Smith" 
                className="w-12 h-12 rounded-full object-cover border border-primary/20"
              />
              <div className="flex flex-col">
                <span className="text-[17px] font-semibold text-primary">John Smith</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">JOHN SMITH</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 items-center mt-auto pt-8">
             <Link to="/contact" className="inline-block bg-primary text-white text-[13px] font-semibold px-7 py-3.5 rounded-full hover:bg-primary-hover transition-colors shadow-md">
                Free Consultation
              </Link>
            <button className="bg-primary hover:bg-primary-hover text-secondary w-[46px] h-[46px] rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2: Image */}
        <div className="rounded-[2.5rem] overflow-hidden h-[550px] lg:h-[600px] shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
            alt="Team Meeting" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Card 3: Report / Text */}
        <div className="bg-primary rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between h-[550px] lg:h-[600px] shadow-sm relative overflow-hidden group">
          {/* Text Content */}
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-[2rem] font-['Work_Sans',sans-serif] font-medium text-secondary leading-[1.3] max-w-[90%]">
              2024 FinSimplify Wealth Management & Market Insights Report
            </h3>
          </div>

          <div className="relative z-10 flex items-center gap-2 mt-auto text-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="4" x2="12" y2="20"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="6.34" y1="6.34" x2="17.66" y2="17.66"></line>
              <line x1="6.34" y1="17.66" x2="17.66" y2="6.34"></line>
            </svg>
            <span className="text-xs font-bold tracking-wider">2025</span>
          </div>

          {/* Large Background Graphic (Abstract Star/Asterisk) */}
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] text-secondary opacity-100 transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-3">
            <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M50 0 C53 30, 70 47, 100 50 C70 53, 53 70, 50 100 C47 70, 30 53, 0 50 C30 47, 47 30, 50 0 Z" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
