export default function TrustedPartner() {
  return (
    <section className="bg-surface pt-4 lg:pt-8 pb-8 lg:pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">
          
          {/* Left Image Side */}
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[380px] animate-fade-in-up">
            <img 
              src="/Trustedpartner.png" 
              alt="Trusted Financial Partners" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right Content Side */}
          <div className="bg-secondary rounded-[2.5rem] p-10 lg:p-12 flex flex-col justify-center animate-fade-in-up animation-delay-100">
            <div className="mb-8">
              <span className="border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block">
                TRUSTED PARTNER
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-[2.8rem] leading-[1.15] font-medium text-primary font-['Work_Sans',sans-serif] mb-10 tracking-tight">
              SEC Registered<br className="hidden lg:block" />
              Investment Advisor
            </h2>
            
            <p className="text-primary/90 font-medium text-[14px] lg:text-[15px] leading-[1.6] max-w-sm mb-8">
              We help you achieve your vision and cultivate confidence and peace of mind across your financial journey.
            </p>
            
            {/* Hoverable Button Group */}
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <button className="bg-primary text-white text-[13px] font-bold px-8 py-3.5 rounded-full group-hover:bg-primary-hover group-hover:shadow-xl transition-all duration-300">
                Free Consultation
              </button>
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-secondary group-hover:bg-primary-hover group-hover:shadow-xl transition-all duration-300 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
