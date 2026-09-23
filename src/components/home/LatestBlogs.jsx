export default function LatestBlogs() {
  return (
    <section className="bg-[#F6F6F3] pt-12 lg:pt-16 pb-20 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 animate-fade-in-up">
          <div>
            <span className="border border-gray-300 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-10">
              INSIGHTS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-medium text-primary font-['Work_Sans',sans-serif] tracking-tight">
              Hear <span className="text-secondary">Directly</span><br className="hidden lg:block" />
              From Finsimplify Experts
            </h2>
          </div>

          
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1: Financing */}
          <div className="group bg-white rounded-[2.5rem] p-5 flex flex-col cursor-pointer hover:shadow-xl hover:bg-secondary transition-colors duration-300 animate-fade-in-up">
            <div className="w-full h-[240px] rounded-[2rem] overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Colleagues discussing finances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-3 flex flex-col flex-grow">
              <span className="text-gray-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-4 transition-colors duration-300">
                FINANCING
              </span>
              <h3 className="text-xl lg:text-[22px] font-medium text-primary font-['Work_Sans',sans-serif] leading-[1.4] mb-12">
                Use Physician Lifecycle Planning to Maximize Your Financial Potential
              </h3>

              <div className="mt-auto flex justify-end">
                <div className="w-12 h-12 bg-[#F6F6F3] rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Report (Center) */}
          <div className="bg-primary rounded-[2.5rem] p-8 flex flex-col relative overflow-hidden animate-fade-in-up animation-delay-100">
            {/* Abstract Background Shape */}
            <svg className="absolute bottom-0 right-0 w-[80%] h-[60%] text-secondary opacity-90" viewBox="0 0 200 200" fill="currentColor" preserveAspectRatio="none">
              <path d="M100,200 C150,200 200,150 200,100 L200,200 Z" />
              <path d="M0,200 L100,200 L100,100 Z" />
            </svg>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl lg:text-[22px] font-medium text-secondary font-['Work_Sans',sans-serif] leading-[1.4] mb-8">
                Taxation, Transactional Activties, and Management Reporting
              </h3>

              {/* Report Graphic Mockup */}
              <div className="w-full flex-grow flex items-center justify-center py-6 perspective-1000">
                <div className="relative w-48 h-64 shadow-2xl transform -rotate-12 transition-transform duration-500 hover:rotate-0 cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                    alt="Report Cover"
                    className="w-full h-full object-cover rounded-lg border-l-4 border-secondary opacity-60"
                  />
                  <div className="absolute inset-0 bg-[#02153D]/80 rounded-lg border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm">
                    <h4 className="text-white text-lg font-medium font-['Work_Sans',sans-serif]">Diversity, Equity, and Inclusion</h4>
                    <span className="text-secondary text-sm">2025 Report</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div className="flex items-center gap-2 text-secondary font-bold text-[10px] tracking-widest">
                  <span className="text-lg leading-none mt-1">*</span> REPORT
                </div>

                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary cursor-pointer hover:bg-secondary transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Advise */}
          <div className="group bg-white rounded-[2.5rem] p-5 flex flex-col cursor-pointer hover:shadow-xl hover:bg-secondary transition-colors duration-300 animate-fade-in-up animation-delay-200">
            <div className="w-full h-[240px] rounded-[2rem] overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                alt="Man shopping with paper bag"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-3 flex flex-col flex-grow">
              <span className="text-gray-500 text-[10px] font-bold tracking-[0.15em] uppercase mb-4 transition-colors duration-300">
                ADVISE
              </span>
              <h3 className="text-xl lg:text-[22px] font-medium text-primary font-['Work_Sans',sans-serif] leading-[1.4] mb-12">
                Better Financial Management Improve Your Business
              </h3>

              <div className="mt-auto flex justify-end">
                <div className="w-12 h-12 bg-[#F6F6F3] rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
