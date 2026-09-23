import React from 'react';

export default function FinancialProcessesSection() {
  const processes = [
    {
      id: '1',
      title: 'Order to Cash',
      desc: 'Invoicing, Accounts Receivables, Cashflow Management'
    },
    {
      id: '2',
      title: 'Procure to Pay',
      desc: 'Accounts Payable, Vendor Management'
    },
    {
      id: '3',
      title: 'Hire to Retire',
      desc: 'Compensation & Benefits, Payroll, Expenses & Claims Management'
    },
    {
      id: '4',
      title: 'Core Finance',
      desc: 'Accounting & Bookkeeping, Taxation & Compliance, Transfer Pricing (for India Entities)'
    },
    {
      id: '5',
      title: 'Other Services',
      desc: 'Entity Incorporation, Delivery center setup & operations (only for India Entities)'
    }
  ];

  return (
    <section className="bg-surface py-16 lg:py-24 border-t border-border-subtle">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-5xl text-left mb-12 lg:mb-16 animate-fade-in-up">
            <div className="inline-block border border-border-subtle rounded-full px-5 py-2 mb-6 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight">
              <span className="text-secondary font-bold">Financial Processes</span> successfully managed by us over the past 30+ years
            </h2>
          </div>
            
          <div className="max-w-3xl mx-auto flex flex-col space-y-4 lg:space-y-5">
            {processes.map((proc, idx) => (
              <div key={proc.id} className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 lg:p-6 bg-white rounded-[1.5rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-border-subtle hover:border-secondary/50 transform hover:-translate-y-1">
                {/* Number Box */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center rounded-xl text-lg sm:text-xl font-bold shadow-sm transition-transform duration-300 group-hover:scale-110 ${idx % 2 === 0 ? 'bg-secondary text-primary' : 'bg-primary text-white'}`}>
                  {proc.id}
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors">{proc.title}</h4>
                  <p className="text-[14.5px] sm:text-[15px] text-text-muted leading-relaxed">
                    {proc.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#F6F6F4] items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-secondary transition-colors duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </section>
  );
}
