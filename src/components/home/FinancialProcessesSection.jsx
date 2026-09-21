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

  const industries = [
    'Software / IT Enabled Services',
    'Professional Services & Consulting',
    'Banking & Financial Services',
    'Healthcare Professionals',
    'Retail & Trading',
    'Hospitality',
    'Construction, Engineering & Capital Goods',
    'Agro-industry',
    'Pharmaceuticals',
    'Education'
  ];

  return (
    <section className="bg-surface py-16 lg:py-24 border-t border-border-subtle">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Processes */}
          <div className="flex flex-col">
            <h3 className="text-xl md:text-3xl font-medium text-primary mb-8 pb-4 border-b border-border-subtle">
              <span className="text-secondary font-bold">Financial Processes</span> successfully managed by us over the past 30+ years
            </h3>
            
            <div className="flex flex-col space-y-6">
              {processes.map((proc, idx) => (
                <div key={proc.id} className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-2xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-border-subtle hover:shadow-sm">
                  {/* Number Box */}
                  <div className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-xl text-xl font-bold ${idx % 2 === 0 ? 'bg-secondary text-primary' : 'bg-primary text-white'}`}>
                    {proc.id}
                  </div>
                  
                  {/* Title */}
                  <div className="flex flex-col sm:w-[140px] shrink-0">
                    <span className="text-[17px] font-bold text-primary">{proc.title}</span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-12 bg-border-subtle shrink-0"></div>
                  
                  {/* Description */}
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Industries */}
          <div className="flex flex-col bg-primary rounded-[2.5rem] p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Background pattern/glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <h3 className="text-[20px] font-medium text-white mb-8 relative z-10">
              Various clients across <span className="text-secondary font-semibold">US and India</span>
            </h3>
            
            <div className="flex flex-col gap-3 relative z-10">
              {industries.map((ind, i) => (
                <div key={i} className="bg-white/5 hover:bg-secondary/10 border border-white/10 hover:border-secondary/30 transition-colors duration-300 rounded-xl px-5 py-3.5 flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-[14.5px] font-medium text-gray-200 group-hover:text-white transition-colors">
                    {ind}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
