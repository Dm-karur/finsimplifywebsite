export default function ValuesSection() {
  const values = [
    {
      title: 'Software & IT-Enabled Services',
      desc: 'Finance support for technology-driven businesses, from accounting and reporting to strategic financial management.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: 'Professional Services & Consulting',
      desc: 'Financial solutions that help service businesses manage accounting, reporting, cash flow and profitability.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      )
    },
    {
      title: 'Banking & Financial Services',
      desc: 'Structured financial support designed around the processes and reporting needs of financial businesses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      )
    },
    {
      title: 'Healthcare Professionals',
      desc: 'Reliable financial operations and reporting support for healthcare-focused businesses and professionals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },

    {
      title: 'Hospitality',
      desc: 'Financial process support that helps hospitality businesses manage operations, reporting and cash flow.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" y1="2" x2="6" y2="4"></line>
          <line x1="10" y1="2" x2="10" y2="4"></line>
          <line x1="14" y1="2" x2="14" y2="4"></line>
        </svg>
      )
    },

    {
      title: 'Construction, Engineering & Capital Goods',
      desc: 'Supporting complex businesses with accounting, reporting, compliance and financial management.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      )
    },

    {
      title: 'Agro-industry',
      desc: 'Financial support designed to help agro-industry businesses manage their core finance processes effectively.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      )
    },

    {
      title: 'Pharmaceuticals',
      desc: 'Reliable accounting, compliance and financial process support for pharmaceutical businesses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
          <path d="m8.5 8.5 7 7"></path>
        </svg>
      )
    },

    {
      title: 'Education',
      desc: 'Financial operations and reporting support that helps education businesses maintain clarity and control.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },

    {
      title: 'Retail & Trading',
      desc: 'Helping businesses manage transactions, receivables, payables and financial visibility efficiently.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      )
    }

  ];

  return (
    <section className="bg-surface-muted pt-12 pb-6 lg:pt-16 lg:pb-8 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20 mb-20 animate-fade-in-up">
          {/* Left: Heading */}
          <div className="flex-1">
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                INDUSTRIES WE SUPPORT

              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight">
              Financial Expertise Across
              <br />
              <span className="whitespace-nowrap"> Diverse  <span className="text-secondary"> </span> &amp;</span>
              Industries
            </h2>
          </div>

          {/* Right: Paragraph */}

        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group bg-surface rounded-[2rem] border border-border p-4 cursor-pointer hover:bg-secondary hover:border-secondary transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Dynamic Icon */}
              <div className="p-4 pt-6 mb-12">
                <div className="w-[70px] h-[70px] rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-secondary transition-colors duration-300 shadow-sm">
                  {value.icon}
                </div>
              </div>

              {/* Text Box */}
              <div className="bg-[#F9F9F8] group-hover:bg-surface rounded-[1.5rem] p-8 min-h-[220px] transition-colors duration-300">
                <h3 className="text-[22px] font-medium text-primary mb-5 font-['Work_Sans',sans-serif]">{value.title}</h3>
                <p className="text-[15px] text-primary leading-[1.7] opacity-90 font-normal">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
