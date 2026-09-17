import React from 'react';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function Contact() {
  return (
    <div className="w-full bg-surface pt-10 lg:pt-12 pb-24 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block border border-border rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              CONTACT US
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight mb-6">
            Let's <span className="text-secondary">Connect</span>
          </h1>
          
          <p className="text-lg text-primary font-medium">
            We look forward to learning about your financial goals.
          </p>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-24 mb-24 animate-fade-in-up animation-delay-200">
          
          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] text-text-muted">San Francisco,</span>
              <span className="text-[15px] text-primary font-medium">1140 Harrison St, CA 94103</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] text-text-muted">Our Phone</span>
              <span className="text-[15px] text-primary font-medium">+1(122) 800 88 08</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] text-text-muted">Our Email</span>
              <span className="text-[15px] text-primary font-medium">office@finsimplify.com</span>
            </div>
          </div>

        </div>

        {/* Main Split Section */}
        <div className="flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-sm bg-[#F9F9F8] min-h-[700px] animate-fade-in-up animation-delay-400">
          
          {/* Left: Form Area */}
          <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
            
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm self-start">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                CONTACT US
              </span>
            </div>

            <h2 className="text-4xl lg:text-[3rem] text-primary font-['Work_Sans',sans-serif] font-medium leading-[1.1] tracking-tight mb-4">
              Get in Touch
            </h2>
            
            <p className="text-[15px] text-primary/80 mb-10 leading-relaxed max-w-[400px]">
              Have a question or feedback? <br/>
              Fill out the form below, and we'll respond promptly!
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-primary">Your name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Smith" 
                    className="w-full px-5 py-4 rounded-xl border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary bg-white outline-none transition-all text-sm text-primary placeholder:text-text-muted shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-primary">Email address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. john@email.com" 
                    className="w-full px-5 py-4 rounded-xl border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary bg-white outline-none transition-all text-sm text-primary placeholder:text-text-muted shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-primary">Phone number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. +1 222 444 66" 
                    className="w-full px-5 py-4 rounded-xl border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary bg-white outline-none transition-all text-sm text-primary placeholder:text-text-muted shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-primary">Company name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Execor" 
                    className="w-full px-5 py-4 rounded-xl border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary bg-white outline-none transition-all text-sm text-primary placeholder:text-text-muted shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-primary">Your message</label>
                <textarea 
                  rows="4"
                  placeholder="Type here ..." 
                  className="w-full px-5 py-4 rounded-xl border border-transparent focus:border-secondary focus:ring-1 focus:ring-secondary bg-white outline-none transition-all text-sm text-primary placeholder:text-text-muted resize-none shadow-sm"
                ></textarea>
              </div>

              <button type="submit" className="self-start mt-4 bg-primary text-white text-[13px] font-semibold px-8 py-3.5 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md">
                Submit
              </button>
            </form>

          </div>

          {/* Right: Image Area */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
              alt="Team discussing in office" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Floating Info Pill */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[480px] bg-[#EAEAEA]/95 backdrop-blur-md rounded-full py-4 px-6 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p className="text-[13px] text-primary font-medium leading-snug">
                Call us at <a href="tel:1015000200" className="underline decoration-primary/30 underline-offset-4 hover:text-secondary transition-colors">(101) 500 0200</a> or fill out our form, and we'll contact you within one business day.
              </p>
            </div>

          </div>

        </div>

      </div>

      <ConsultationCTA />
    </div>
  );
}
