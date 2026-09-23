import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const services = [
    { name: "Financial Planning", path: "/services/financial-planning" },
    { name: "Accounting & Tax", path: "/services/accounting-reporting" },
    { name: "Accounts Payable", path: "/services/accounts-payable" },
    { name: "Accounts Receivables", path: "/services/accounts-receivable" },
    { name: "Payroll Management", path: "/services/payroll-management" }
  ];

  return (
    <section className="bg-surface pt-8 pb-12 lg:pt-10 lg:pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-20 mb-16 animate-fade-in-up">

          {/* Left Column */}
          <div className="flex-1">
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                WHY US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight mb-10">
              We Always Put <span className="text-secondary">Your <br />
                Interests</span> First
            </h2>

            <div className="flex gap-2 items-center">
              <Link to="/contact" className="inline-block bg-primary text-white text-[13px] font-semibold px-7 py-3.5 rounded-full hover:bg-primary-hover transition-colors shadow-md">
                Free Consultation
              </Link>
              <Link to="/contact" className="bg-primary hover:bg-primary-hover text-secondary w-[46px] h-[46px] rounded-full flex items-center justify-center transition-colors shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-[0.8] lg:pb-4 flex flex-col items-start">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                <circle cx="12" cy="12" r="5" fill="var(--color-primary)" opacity="0.2" />
              </svg>
            </div>
            <p className="text-base lg:text-[16px] text-text-muted leading-relaxed font-normal">
              Driven by a relentless focus on "why," we integrate our services to uncover, design, and deliver the most impactful outcomes for you. Instead of relying on predefined processes, we take a hands-on approach—collaborating closely with your teams to craft practical, end-to-end solutions tailored to your needs.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-subtle my-16"></div>

        {/* Bottom Section - Buttons Row */}
        <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-start gap-4 animate-fade-in-up animation-delay-200">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group flex items-center gap-4 bg-[#F9F9F8] hover:bg-secondary transition-colors duration-300 px-2 py-2 pr-2 pl-6 rounded-full"
            >
              <span className="text-[15px] font-medium text-primary">
                {service.name}
              </span>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-secondary shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
