export default function HeroSection() {
  return (
    <section className="bg-surface pt-10 lg:pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight w-full lg:w-auto shrink-0">
            Investing For <br />
            <span className="whitespace-nowrap">Tomorrow, <span className="text-secondary">Together</span></span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button className="group relative flex items-center justify-between gap-4 bg-primary text-text-on-primary pl-8 pr-2 py-2 rounded-full text-body font-semibold hover:bg-primary-hover transition-all shadow-md">
              <span>Let's get started</span>
              <span className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </button>
            <button className="bg-surface text-primary border border-border-strong px-8 py-4 rounded-full text-body font-semibold hover:bg-surface-muted transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>

      </div>

      {/* Full Width Image Section */}
      <div className="relative w-full h-[300px] lg:h-[450px] animate-fade-in-up animation-delay-200">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Business Team Meeting"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
