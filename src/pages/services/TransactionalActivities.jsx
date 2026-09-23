import React from 'react';
import SubmenuHero from '../../components/services/SubmenuHero';
import VerticalArrowTimeline from '../../components/services/VerticalArrowTimeline';
import { Link } from 'react-router-dom';

export default function TransactionalActivities() {
  const apTimeline = [
    { number: '01', title: 'Receive Invoice', description: 'Receive and organise invoices entering the Accounts Payable process.' },
    { number: '02', title: 'Resolve Discrepancies', description: 'Identify and support the resolution of discrepancies associated with invoices and payment processing.' },
    { number: '03', title: 'Approve Payment', description: 'Support the payment approval process as part of the defined Accounts Payable workflow.' },
    { number: '04', title: 'Process Payment', description: 'Process payments in accordance with the established business process.' },
    { number: '05', title: 'Reconcile Accounts', description: 'Reconcile Accounts Payable records to maintain consistency between financial records and transactions.' },
    { number: '06', title: 'Generate Reports', description: 'Generate relevant Accounts Payable reports to support financial visibility and management requirements.' }
  ];

  const arTimeline = [
    { number: '01', title: 'Invoice Generation', description: 'Support the generation of customer invoices as part of the Accounts Receivable process.' },
    { number: '02', title: 'Monitor Receivables', description: 'Monitor receivables to maintain visibility into outstanding customer balances.' },
    { number: '03', title: 'Follow-Up on Payments', description: 'Support payment follow-up activities for outstanding receivables.' },
    { number: '04', title: 'Receive Payments', description: 'Manage the receipt of customer payments within the defined process.' },
    { number: '05', title: 'Reconcile Payments', description: 'Reconcile received payments against the relevant financial records.' },
    { number: '06', title: 'Handle Discrepancies', description: 'Identify and support the resolution of discrepancies within the receivables process.' },
    { number: '07', title: 'Adjustments & Credits', description: 'Manage adjustments and credits as part of the Accounts Receivable process.' },
    { number: '08', title: 'Generate Reports', description: 'Generate Accounts Receivable reports to support financial monitoring and reporting requirements.' }
  ];

  const payrollTimeline = [
    { number: '01', title: 'Set Up Payroll', description: "Support the setup of payroll processes based on the organisation's requirements." },
    { number: '02', title: 'Tax & Compliance', description: 'Support payroll-related tax and compliance activities.' },
    { number: '03', title: 'Benefits Enrollment', description: 'Support employee benefits enrollment as part of the payroll process.' },
    { number: '04', title: 'Salary Payments', description: 'Manage salary payment activities according to the defined payroll process.' },
    { number: '05', title: 'Expense Reimbursements', description: 'Support employee expense reimbursement activities.' },
    { number: '06', title: 'Benefits Administration', description: 'Support the administration of employee benefits.' },
    { number: '07', title: 'Compliance & Reporting', description: 'Manage payroll-related compliance and reporting activities.' },
    { number: '08', title: 'Performance & Rewards', description: 'Support activities related to employee performance and rewards.' },
    { number: '09', title: 'Employee Transfers & Promotions', description: 'Support payroll-related activities associated with employee transfers and promotions.' },
    { number: '10', title: 'Retirement or Exit', description: 'Support relevant payroll activities during employee retirement or exit.' },
    { number: '11', title: 'Generate Reports', description: 'Generate payroll reports to support management and reporting requirements.' }
  ];

  const industries = [
    'Software & IT-Enabled Services',
    'Professional Services & Consulting',
    'Banking & Financial Services',
    'Healthcare',
    'Retail & Trading',
    'Hospitality',
    'Construction, Engineering & Capital Goods',
    'Agro-Industry',
    'Pharmaceuticals',
    'Education'
  ];

  return (
    <>
      {/* HERO SECTION */}
      <SubmenuHero
        title="Reliable Finance Operations That Keep Your Business Moving"
        description="Your day-to-day financial transactions form the foundation of a well-managed business. FinSimplify provides structured support across Accounts Payable, Accounts Receivable and Payroll, helping businesses manage recurring financial activities with accuracy, consistency and clear processes."
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
        pills={['Accounts Payable', 'Accounts Receivable', 'Payroll']}
      />

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="text-left flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-6 block">
                THE FOUNDATION OF YOUR FINANCE FUNCTION
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Work_Sans',sans-serif] font-normal text-primary leading-tight mb-8">
                Simplify the Financial Activities That Keep Your Business Running
              </h2>
              <div className="text-[16px] text-primary/80 leading-relaxed space-y-6">
                <p>Transactional finance involves a large number of recurring activities that need to be completed accurately and on time.</p>
                <p className="font-medium">Invoices need to be processed. Payments need to be managed. Receivables need to be monitored. Employees need to be paid. Accounts need to be reconciled. Reports need to be generated.</p>
                <p>FinSimplify provides flexible support across these activities, allowing businesses to outsource specific processes or build a broader transactional finance model around their requirements.</p>
              </div>
            </div>

            {/* Green Colored Card on the Right (Since content is less/no specific image provided) */}
            <div className="bg-secondary p-10 md:p-14 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-['Work_Sans',sans-serif] text-primary mb-6 leading-snug">
                  Building a Broader Transactional Finance Model
                </h3>
                <p className="text-primary/90 text-[16px] leading-relaxed font-medium mb-8">
                  We design our services to integrate seamlessly with your existing operations. Whether you need end-to-end process ownership or just point-in-time support, we ensure your financial foundation remains rock solid.
                </p>
              </div>

              <div className="relative z-10">
                <Link to="/contact" className="inline-block bg-primary text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-md">
                  Discuss Your Requirements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNTS PAYABLE MANAGEMENT */}
      <section className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-['Work_Sans',sans-serif] text-primarymb-4">Accounts Payable <span className="text-secondary">Management</span></h2><br></br>
            <p className="text-lg text-primary/80">Bringing Structure to Your Payables Process</p>
          </div>

          <div className="mb-16 text-left text-[15px] text-primary/80 leading-relaxed max-w-3xl">
            <p>Accounts Payable involves more than processing invoices. A structured AP process requires invoices to be received, discrepancies to be addressed, payments to be processed and accounts to be reconciled.</p>
          </div>

          <VerticalArrowTimeline items={apTimeline} />

          <div className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
            <h4 className="text-xl font-medium text-secondary mb-4">Why Structured Accounts Payable Matters</h4>
            <p className="text-[15px] text-primary/80 mb-6 max-w-4xl">A well-managed AP process provides greater structure around one of the most important recurring finance activities in a business. FinSimplify can support businesses with individual AP activities or broader outsourced process ownership based on their requirements.</p>
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-secondary hover:text-primary transition-colors">
              Discuss Your Accounts Payable Requirements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ACCOUNTS RECEIVABLE MANAGEMENT */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-['Work_Sans',sans-serif] text-primary mb-4">Accounts Receivable <span className="text-secondary">Management</span></h2><br></br>
            <p className="text-lg text-primary/80">Improve Visibility Across Your Receivables Process</p>
          </div>

          <div className="mb-16 text-left text-[15px] text-primary/80 leading-relaxed max-w-3xl">
            <p>Accounts Receivable plays an important role in managing the flow of customer invoices and payments. FinSimplify supports businesses across the Accounts Receivable process—from invoice generation and monitoring receivables to payment follow-up, reconciliation and reporting.</p>
          </div>

          <VerticalArrowTimeline items={arTimeline} />

          <div className="mt-12 bg-surface p-8 md:p-10 rounded-2xl shadow-sm border border-border">
            <h4 className="text-xl font-medium text-secondary mb-4">A Structured Approach to Receivables</h4>
            <p className="text-[15px] text-primary/80 mb-6 max-w-4xl">From billing through payment reconciliation, every stage of the receivables process contributes to the quality and visibility of your financial operations. FinSimplify can provide support across selected Accounts Receivable activities or take ownership of recurring processes based on your engagement model.</p>
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-secondary hover:text-primary transition-colors">
              Discuss Your Accounts Receivable Requirements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PAYROLL */}
      <section className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-5xl font-['Work_Sans',sans-serif] text-primary mb-4">Payroll <span className="text-secondary">Management</span></h2><br></br>
            <p className="text-lg text-primary/80">Managing Payroll Activities With Structure and Discipline</p>
          </div>

          <div className="mb-16 text-left text-[15px] text-primary/80 leading-relaxed max-w-3xl">
            <p>Payroll involves multiple recurring activities across employees, payments, benefits, compliance and reporting. FinSimplify provides support across the payroll process, from payroll setup and employee payments to benefits administration, compliance and reporting.</p>
          </div>

          <VerticalArrowTimeline items={payrollTimeline} />
        </div>
      </section>

      {/* FLEXIBLE ENGAGEMENT & OUTSOURCING */}
      <section className="py-20 lg:py-28 bg-[#00204a] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              FLEXIBLE ENGAGEMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] font-normal  text-white mb-6">
              Choose the Transactional <span className='text-secondary'>Finance Support You Need</span> 
            </h2>
            <p className="text-lg text-white/80 max-w-3xl">
              Not every business needs to outsource its entire finance function. That's why FinSimplify offers flexible engagement models that can be tailored to your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Point-in-Time Support</h3>
              <p className="text-white/80 text-[15px]">Get expert advice and support for specific financial activities or requirements.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Selected Process Support</h3>
              <p className="text-white/80 text-[15px]">Choose specific transactional activities such as Accounts Payable, Accounts Receivable or Payroll.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Outsourced Process Ownership</h3>
              <p className="text-white/80 text-[15px]">Entrust recurring financial processes to FinSimplify and allow our team to manage the activities as part of your finance operations.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Custom Finance Package</h3>
              <p className="text-white/80 text-[15px]">Combine multiple financial activities into a customised package aligned with your business requirements.</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <div className="text-left mb-12">
              <h2 className="text-2xl md:text-3xl font-['Work_Sans',sans-serif] font-normal text-white  mb-4">
                What Can You Outsource?
              </h2>
              <p className="text-white/80">You Can Outsource One Process or Build a Complete Finance Operations Model</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white text-primary p-8 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg mb-4 text-secondary">Accounts Payable</h4>
                <div className="flex flex-wrap items-center gap-2 text-sm text-primary/80 font-medium">
                  <span>Invoice processing</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Discrepancy resolution</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Payment</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reconciliation</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reporting</span>
                </div>
              </div>
              <div className="bg-white text-primary p-8 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg mb-4 text-secondary">Accounts Receivable</h4>
                <div className="flex flex-wrap items-center gap-2 text-sm text-primary/80 font-medium">
                  <span>Invoice generation</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Receivables monitoring</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Payment follow-up</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Receipt</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reconciliation</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reporting</span>
                </div>
              </div>
              <div className="bg-white text-primary p-8 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg mb-4 text-secondary">Payroll</h4>
                <div className="flex flex-wrap items-center gap-2 text-sm text-primary/80 font-medium">
                  <span>Payroll setup</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Tax & compliance</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Salary payments</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Benefits</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reimbursements</span> <span className="text-secondary text-lg">&rarr;</span>
                  <span>Reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-left mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              THE FINSIMPLIFY APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-6">
              Structured Processes. Experienced People. Reliable Delivery.
            </h2>
            <p className="text-[15px] text-primary/80 max-w-3xl">
              Our delivery model is built around five foundations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">People</h3>
              <p className="text-[14px] text-primary/80">Partner supervision for every project and clearly defined roles and responsibilities.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Process</h3>
              <p className="text-[14px] text-primary/80">Customised processes aligned with your culture, objectives and business constraints.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Tools</h3>
              <p className="text-[14px] text-primary/80">Industry-standard tools tailored to customer requirements and an ecosystem of tools that supports modern delivery.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Transparency</h3>
              <p className="text-[14px] text-primary/80">A customer-focused approach with emphasis on business outcomes.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Culture</h3>
              <p className="text-[14px] text-primary/80">A professional environment focused on skills, development and sustainable delivery.</p>
            </div>
          </div>

        
        </div>
      </section>

      {/* WHO IS THIS FOR? */}
      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <h2 className="text-3xl font-['Work_Sans',sans-serif] text-primary mb-6">Transactional Finance Support for Growing Businesses</h2>
          <p className="text-[15px] text-primary/80 mb-12 max-w-3xl">Our transactional finance capabilities can support businesses across a range of industries, including:</p>

          <div className="flex flex-wrap gap-4 mb-10">
            {industries.map((industry, i) => (
              <span key={i} className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-secondary hover:text-primary transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
    
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-6 block">
              READY TO SIMPLIFY YOUR FINANCE OPERATIONS?
            </span>
            <h2 className="text-3xl md:text-5xl font-['Work_Sans',sans-serif] text-primary mb-8 leading-tight">
              Let's Build the Right Transactional Finance Model for Your Business.
            </h2>
            <p className="text-[16px] text-primary/80 mb-10">
              Whether you need support with Accounts Payable, Accounts Receivable, Payroll or a combination of financial processes, FinSimplify can tailor an engagement around your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-center text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md">
                Schedule a Consultation
              </Link>
              <Link to="/contact" className="bg-white text-center text-primary border-2 border-primary font-semibold px-8 py-4 rounded-full hover:bg-surface transition-colors duration-300">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
