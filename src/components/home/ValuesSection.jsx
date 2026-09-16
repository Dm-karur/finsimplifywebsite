export default function ValuesSection() {
  const values = [
    { 
      title: 'Integrity', 
      desc: 'We uphold the highest ethical standards in every interaction, ensuring transparency, and trust in our work.', 
      icon: (
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary">
          <circle cx="20" cy="20" r="18" fill="currentColor" />
          <circle cx="40" cy="20" r="18" fill="var(--color-secondary)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="40" cy="20" r="18" fill="url(#diagonal-stripes)" />
        </svg>
      )
    },
    { 
      title: 'Client Focus', 
      desc: 'We uphold the highest ethical standards in every interaction, ensuring transparency, and trust in our work.', 
      icon: (
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="40" cy="20" r="18" fill="var(--color-secondary)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="40" cy="20" r="18" fill="url(#diagonal-stripes)" />
        </svg>
      )
    },
    { 
      title: 'Risk Resilience', 
      desc: 'We uphold the highest ethical standards in every interaction, ensuring transparency, and trust in our work.', 
      icon: (
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary">
          <circle cx="20" cy="20" r="18" fill="var(--color-secondary)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="18" fill="url(#horizontal-stripes)" />
          <circle cx="40" cy="20" r="18" fill="currentColor" />
        </svg>
      )
    },
    { 
      title: 'Expertise', 
      desc: 'We uphold the highest ethical standards in every interaction, ensuring transparency, and trust in our work.', 
      icon: (
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-primary">
          <circle cx="20" cy="20" r="18" fill="var(--color-secondary)" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="20" cy="20" r="18" fill="url(#horizontal-stripes)" />
          <circle cx="40" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-surface py-24 lg:py-32 relative">
      {/* SVG Definitions for the patterns */}
      <svg width="0" height="0" className="absolute opacity-0 pointer-events-none">
        <defs>
          <pattern id="diagonal-stripes" width="8" height="8" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="2.5" />
          </pattern>
          <pattern id="horizontal-stripes" width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="2.5" />
          </pattern>
        </defs>
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Our Values
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.2] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight">
            We Listen, <span className="text-secondary">Think Independently,</span><br className="hidden md:block" />
            Advise & Take Action
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="group bg-surface rounded-[2rem] border border-border p-4 cursor-pointer hover:bg-secondary hover:border-secondary transition-colors duration-300 animate-fade-in-up" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-4 pt-6 mb-16">
                {value.icon}
              </div>
              <div className="bg-[#F6F6F3] group-hover:bg-white rounded-[1.5rem] p-8 min-h-[200px] transition-colors duration-300">
                <h3 className="text-xl lg:text-[22px] font-medium text-primary mb-4 font-['Work_Sans',sans-serif]">{value.title}</h3>
                <p className="text-body-sm text-text-secondary leading-[1.7] opacity-90">
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
