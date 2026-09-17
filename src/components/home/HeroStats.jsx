export default function HeroStats() {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-4 lg:gap-5 h-auto lg:h-[220px]">
        
        {/* Card 1: Assets */}
        <div className="bg-surface-muted rounded-[2rem] p-3 shadow-xl border border-border flex flex-col md:flex-row gap-3 animate-fade-in-up h-[220px]">
          {/* Left: Text Box */}
          <div className="w-[30%] flex flex-col justify-between p-3">
            <h3 className="text-2xl text-primary font-display font-medium">Assets</h3>
            <div className="mt-auto pb-2">
              <span className="text-[11px] font-medium flex items-center gap-1 hover:text-primary transition-colors cursor-pointer text-text-secondary whitespace-nowrap">
                Learn more 
                <span className="h-4 w-4 bg-[#C5E82E] text-primary rounded-full flex items-center justify-center text-[10px]">↗</span>
              </span>
            </div>
          </div>
          
          {/* Middle: White Box */}
          <div className="w-[40%] bg-surface rounded-2xl p-4 lg:p-5 flex flex-col justify-between shadow-sm border border-border/50">
            <div className="text-primary mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[12px] text-text-secondary font-medium mb-1 leading-tight">Assets under management</p>
              <h2 className="text-2xl lg:text-3xl font-display text-primary font-medium">$28.90M</h2>
            </div>
          </div>
          
          {/* Right: Gradient Box */}
          <div className="w-[30%] bg-[#113C2B] rounded-2xl overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 opacity-80" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 3px, #75A651 3px, #75A651 5px)'
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#113C2B] via-[#113C2B]/80 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-full flex items-end">
              <div className="w-1/3 bg-[#113C2B] h-[60%] border-r border-[#154b36]"></div>
              <div className="w-1/3 bg-[#113C2B] h-[30%] border-r border-[#154b36]"></div>
              <div className="w-1/3 bg-[#113C2B] h-[45%]"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Professionals */}
        <div className="bg-surface-muted rounded-[2rem] p-3 shadow-xl border border-border animate-fade-in-up animation-delay-100 h-[220px]">
          {/* Inner White Box */}
          <div className="bg-surface rounded-2xl w-full h-full p-5 lg:p-6 flex flex-col justify-between shadow-sm border border-border/50">
            <div className="text-primary">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            
            <div className="mt-auto pb-1">
              <p className="text-sm text-text-secondary font-medium mb-1">Professionals</p>
              <div className="flex justify-between items-end">
                <h2 className="text-3xl lg:text-4xl font-display text-primary font-medium leading-none">120+</h2>
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Professional 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Professional 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Professional 3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Trust */}
        <div className="bg-surface rounded-[2rem] shadow-xl border border-border animate-fade-in-up animation-delay-200 relative h-[220px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Client Trust" className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Inner Light Card */}
          <div className="absolute top-3 left-3 bottom-3 w-[65%] bg-[#EBEBE8]/95 backdrop-blur-md rounded-[1.5rem] p-5 flex flex-col justify-between shadow-sm">
             <div className="text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="14" width="4" height="6" rx="1"></rect>
                  <rect x="10" y="10" width="4" height="10" rx="1"></rect>
                  <rect x="16" y="6" width="4" height="14" rx="1"></rect>
                </svg>
             </div>
             <div className="mt-auto">
               <p className="text-sm text-text-secondary font-medium leading-snug mb-1">Earning client trust since</p>
               <h2 className="text-3xl lg:text-4xl font-display text-primary font-medium">2016</h2>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
