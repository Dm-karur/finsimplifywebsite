export default function HeroStats() {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr_1.1fr] gap-5 lg:gap-6 h-auto lg:h-[210px]">
        
        {/* Card 1: Assets (Dark Premium Bento) */}
        <div className="group relative bg-[#02153D] rounded-[2.5rem] p-6 lg:p-7 shadow-2xl overflow-hidden flex flex-col justify-between h-[210px] animate-fade-in-up border border-[#0A2661]">
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#70B650]/20 via-transparent to-[#70B650]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Abstract background shapes */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#70B650] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-[#3B82F6] rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF]/5 backdrop-blur-xl border border-[#FFFFFF]/10 flex items-center justify-center text-[#70B650] shadow-inner group-hover:scale-110 transition-transform duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-lg text-[#FFFFFF]/80 font-medium tracking-wide">Assets Managed</h3>
            </div>
          </div>
          
          <div className="relative z-10 mt-auto">
            <h2 className="text-4xl lg:text-5xl font-display text-[#FFFFFF] mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
              <span className="text-[#70B650] mr-1">₹</span>28.90<span className="text-2xl text-[#FFFFFF]/50">M</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/5 text-xs text-[#FFFFFF] font-medium hover:bg-[#FFFFFF]/20 transition-colors cursor-pointer group-hover:translate-x-2 delay-75">
              Explore Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </div>

        {/* Card 2: Professionals (Clean Light Bento) */}
        <div className="group relative bg-white rounded-[2.5rem] p-6 lg:p-7 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between h-[210px] animate-fade-in-up animation-delay-100 hover:shadow-2xl hover:shadow-gray-200/80 transition-all duration-500 hover:-translate-y-1">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#02153D] group-hover:bg-[#02153D] group-hover:text-[#FFFFFF] transition-colors duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Global
            </div>
          </div>
          
          <div className="mt-auto">
            <p className="text-sm text-gray-500 font-medium mb-1">Expert Professionals</p>
            <div className="flex items-end justify-between">
              <h2 className="text-4xl lg:text-5xl font-display text-[#02153D] tracking-tight">120<span className="text-[#70B650]">+</span></h2>
              <div className="flex -space-x-3 group-hover:-space-x-1 transition-all duration-500 mb-1">
                <img className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm z-30" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pro 1" />
                <img className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm z-20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pro 2" />
                <div className="w-12 h-12 rounded-full border-[3px] border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shadow-sm z-10">
                  +99
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Trust (Glass Image Bento) */}
        <div className="group relative rounded-[2.5rem] shadow-xl overflow-hidden h-[210px] animate-fade-in-up animation-delay-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Client Trust" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          
          {/* Elegant dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02153D]/90 via-[#02153D]/40 to-transparent"></div>
          
          <div className="absolute inset-0 p-6 lg:p-7 flex flex-col justify-between">
            <div className="self-end w-12 h-12 rounded-2xl bg-[#FFFFFF]/20 backdrop-blur-md flex items-center justify-center text-[#FFFFFF] border border-[#FFFFFF]/30 group-hover:bg-[#70B650] group-hover:border-[#70B650] transition-colors duration-500">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
               </svg>
            </div>
            
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 mb-2 bg-[#FFFFFF]/20 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFFFFF]/20">
                <span className="w-2 h-2 rounded-full bg-[#70B650]"></span>
                <p className="text-xs text-[#FFFFFF] font-semibold tracking-wide uppercase">Earning Trust</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-[#FFFFFF]/80 font-medium">Since</span>
                <h2 className="text-4xl lg:text-5xl font-display text-[#FFFFFF] tracking-tight">2016</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
