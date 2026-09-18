export default function TeamSection() {
  const team = [
    { name: 'John Smith', role: 'VICE PRESIDENT', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Klara Berger', role: 'SENIOR ADVISOR ASSOCIATE', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rebbeka Hof', role: 'VICE PRESIDENT', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
    { name: 'Donald Ferreira', role: 'MANAGING DIRECTOR', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section className="bg-[#F6F6F3] pt-12 lg:pt-16 pb-12 lg:pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="animate-fade-in-up">
            <span className="border border-gray-300 text-text-secondary text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8 inline-block">
              OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium font-['Work_Sans',sans-serif] text-primary tracking-tight">
              Choosing <span className="text-secondary">The Right</span><br className="hidden md:block" />
              Financial Planning Team
            </h2>
          </div>
          
          <div className="flex items-center gap-6 animate-fade-in-up animation-delay-100 pb-2">
            <a href="#" className="flex items-center gap-2 text-[13px] font-bold text-primary hover:opacity-80 transition-opacity">
              Careers
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-primary">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
            <button className="bg-primary text-white text-[13px] font-bold px-7 py-3.5 rounded-full hover:bg-primary-hover transition-colors shadow-lg">
              View All
            </button>
          </div>
        </div>
        
        {/* Team Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-white hover:bg-secondary rounded-[2rem] transition-colors duration-300 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg flex flex-col animate-fade-in-up" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Top half with image */}
              <div className="pt-12 pb-10 flex justify-center border-b border-gray-100 group-hover:border-transparent transition-colors duration-300">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-gray-50 group-hover:bg-white transition-colors duration-300 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Bottom half with info */}
              <div className="p-8 flex justify-between items-center bg-white group-hover:bg-secondary transition-colors duration-300 mt-auto">
                <div>
                  <h3 className="text-[22px] font-medium text-primary font-['Work_Sans',sans-serif] mb-1">{member.name}</h3>
                  <p className="text-[10px] font-bold text-text-secondary group-hover:text-primary tracking-[0.1em] uppercase transition-colors duration-300">{member.role}</p>
                </div>
                
                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-[#F6F6F3] group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-secondary transition-colors duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
