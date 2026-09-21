import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-white pt-8 lg:pt-12 pb-0 overflow-hidden">
      {/* Text Section with distinct white background */}
      <div className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-[4.0rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight w-full lg:w-auto shrink-0">
              Your Trusted <br />
              <span className="whitespace-nowrap">Financial <span className="text-secondary">Partner</span></span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link to="/contact" className="group relative flex items-center justify-between gap-4 bg-primary text-text-on-primary pl-8 pr-2 py-2 rounded-full text-body font-semibold shadow-md transition-all duration-300 hover:bg-primary-hover hover:-translate-y-1 hover:shadow-lg active:scale-95">
                <span>Let's get started</span>
                <span className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </Link>
              <Link to="/contact" className="bg-white text-primary border-2 border-border-strong px-8 py-4 rounded-full text-body font-semibold shadow-sm transition-all duration-300 hover:border-primary hover:bg-surface-muted hover:-translate-y-1 hover:shadow-md active:scale-95 text-center flex items-center justify-center">
                Schedule a Call
              </Link>
            </div>
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
