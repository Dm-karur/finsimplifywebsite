import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="bg-surface-muted py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden animate-fade-in-up">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-h2 text-text-on-primary font-display mb-8">
            READY TO SIMPLIFY YOUR FINANCIAL FUTURE?
          </h2>
          <p className="text-body-lg text-text-on-primary opacity-90 mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our experts today and discover how a tailored strategy can help you achieve your goals faster.
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="group relative flex items-center justify-between gap-4 bg-secondary text-text-on-secondary pl-8 pr-2 py-2 rounded-full text-body font-bold hover:bg-secondary-hover transition-all shadow-lg"
            >
              <span>Schedule Your Consultation</span>
              <span className="h-10 w-10 bg-primary text-text-on-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
