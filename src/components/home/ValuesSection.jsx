export default function ValuesSection() {
  const values = [
    { 
      title: 'Fiduciary', 
      desc: 'A commitment to acting in your best interest for long-term financial wellbeing.', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    { 
      title: 'Integrated', 
      desc: 'Comprehensive wealth services, tailored solutions, and exclusive alternative investments.', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
      )
    },
    { 
      title: 'Highly Personalized', 
      desc: 'A customized approach driven by proactive ideas and strategic problem-solving.', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
      )
    },
    { 
      title: 'Experienced', 
      desc: 'A highly dedicated team, supported by our extensive network of trusted professionals.', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-surface pt-12 pb-12 lg:pt-16 lg:pb-16 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 lg:gap-20 mb-20 animate-fade-in-up">
          {/* Left: Heading */}
          <div className="flex-1">
            <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                VALUES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-normal tracking-tight">
              We Operate with <br />
              <span className="whitespace-nowrap">Unwavering <span className="text-secondary">Honesty</span> &amp;</span> <br />
              Integrity
            </h2>
          </div>
          
          {/* Right: Paragraph */}
          <div className="flex-[0.7] pb-4">
            <p className="text-base lg:text-[17px] text-primary leading-relaxed font-normal">
              We offer a deeply personalized approach, providing objective, customized advice, seamless wealth management, and exclusive access to private investments, all designed to help clients reach their goals and build lasting wealth.
            </p>
          </div>
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
