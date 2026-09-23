import React from 'react';
import SubmenuHero from '../../components/services/SubmenuHero';
import VerticalArrowTimeline from '../../components/services/VerticalArrowTimeline';
import { Link } from 'react-router-dom';

export default function DecisionSupportActivities() {
  const accountingTimeline = [
    { number: '01', title: 'Identify & Analyse Transactions', description: 'Identify and analyse financial transactions to ensure they are appropriately understood and processed within the accounting framework.' },
    { number: '02', title: 'Record Transactions in Journals', description: 'Record financial transactions in the appropriate journals as part of the accounting process.' },
    { number: '03', title: 'Trial Balance', description: 'Prepare and review the trial balance as part of the financial accounting process.' },
    { number: '04', title: 'Prepare Financial Statements', description: "Support the preparation of financial statements that provide a structured view of the organisation's financial position and performance." },
    { number: '05', title: 'Financial Information for External Reporting', description: 'Prepare financial information required for external reporting, compliance and internal control requirements.' },
    { number: '06', title: 'Monitoring & Execution of Controls', description: 'Support the monitoring and execution of financial controls and compliance processes.' },
    { number: '07', title: 'Compliance & Reporting', description: 'Support financial compliance and reporting requirements through structured processes and timely information.' }
  ];

  const managementTimeline = [
    { number: '01', title: 'Data Collection, Processing & Analysis', description: 'Collect, process and analyse relevant financial information required for management reporting.' },
    { number: '02', title: 'Creation of Standardised Reports', description: "Develop standardised reports designed around the organisation's reporting requirements." },
    { number: '03', title: 'Report Preparation, Review & Validation', description: 'Prepare management reports and support review and validation to improve the quality and consistency of reported information.' },
    { number: '04', title: 'Report Distribution', description: 'Distribute relevant management reports to the appropriate stakeholders.' },
    { number: '05', title: 'Follow-Up & Discussion', description: 'Support follow-up discussions around management reports and the information they contain.' },
    { number: '06', title: 'Continuous Improvement', description: 'Review reporting processes and identify opportunities to improve the usefulness, consistency and effectiveness of management reporting.' }
  ];

  const processTimeline = [
    { number: '01', title: 'Collect', description: 'Gather relevant financial information and data.' },
    { number: '02', title: 'Process', description: 'Organise and process the information through structured financial processes.' },
    { number: '03', title: 'Analyse', description: 'Review and analyse financial information.' },
    { number: '04', title: 'Report', description: 'Create standardised financial and management reports.' },
    { number: '05', title: 'Review', description: 'Validate reports and support management discussions.' },
    { number: '06', title: 'Improve', description: 'Continuously improve the reporting process based on business requirements.' }
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
        title="Turn Financial Data Into Better Business Decisions"
        description="Accurate financial information is essential for understanding where your business stands and where it is heading. FinSimplify supports businesses with structured Financial Accounting & Reporting and Management Reporting, helping transform financial data into reliable information for reporting, compliance, internal controls and business decision-making."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
        pills={['Financial Accounting & Reporting', 'Management Reporting']}
      />

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="text-left flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-6 block">
                FINANCIAL INFORMATION THAT SUPPORTS BETTER DECISIONS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Work_Sans',sans-serif] font-normal text-primary leading-tight mb-8">
                From Financial Data to Meaningful Business Insight
              </h2>
              <div className="text-[16px] text-primary/80 leading-relaxed space-y-6 mb-12">
                <p>Financial information needs to be accurate, structured and available when decision-makers need it.</p>
                <p>Our Decision Support Activities help businesses establish disciplined financial reporting processes and create meaningful management information.</p>
                <p className="font-medium">FinSimplify supports two key areas:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-surface p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-3">Financial Accounting & Reporting</h3>
                  <p className="text-[15px] text-primary/80 leading-relaxed">Creating structured financial records and reporting information to support financial management, external reporting, compliance and internal controls.</p>
                </div>
                <div className="bg-surface p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-semibold text-primary mb-3">Management Reporting</h3>
                  <p className="text-[15px] text-primary/80 leading-relaxed">Collecting, processing and analysing financial information to create standardised reports that help management understand business performance.</p>
                </div>
              </div>
            </div>

            {/* Green Colored Card on the Right */}
            <div className="bg-secondary p-10 md:p-14 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-['Work_Sans',sans-serif] text-primary mb-6 leading-snug">
                  Data-Driven Decisions Start Here
                </h3>
                <p className="text-primary/90 text-[16px] leading-relaxed font-medium mb-8">
                  By transforming raw financial data into structured, reliable management information, we empower leadership teams to make better, faster, and more confident business decisions.
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

      {/* FINANCIAL ACCOUNTING & REPORTING */}
      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-4">Financial Accounting & Reporting</h2>
            <p className="text-lg text-primary/80">Build a Strong Foundation for Financial Visibility</p>
          </div>
          
          <div className="mb-16 text-[15px] text-primary/80 leading-relaxed max-w-4xl">
            <p>Financial accounting and reporting provide the foundation for understanding the financial position and performance of a business. FinSimplify supports businesses across the financial accounting and reporting process—from identifying transactions and maintaining journals to preparing financial statements and supporting compliance and internal controls.</p>
          </div>

          <div className="max-w-4xl ml-0">
            <VerticalArrowTimeline items={accountingTimeline} />
          </div>
          
          <div className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
            <h4 className="text-xl font-medium text-primary mb-4">Why Financial Accounting & Reporting Matters</h4>
            <p className="text-[15px] text-primary/80 mb-6 max-w-4xl">Reliable accounting information gives businesses a clearer understanding of their financial position and creates a stronger foundation for reporting, compliance and management decision-making. FinSimplify can support specific accounting activities or provide broader ownership of recurring financial accounting and reporting processes.</p>
            <Link to="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:bg-secondary hover:text-primary transition-colors">
              Discuss Your Accounting Requirements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* MANAGEMENT REPORTING */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-4">Management Reporting</h2>
            <p className="text-lg text-primary/80">Turn Financial Information Into Management Insight</p>
          </div>
          
          <div className="mb-16 text-[15px] text-primary/80 leading-relaxed max-w-4xl">
            <p className="font-medium text-primary">Financial statements tell you what happened.</p>
            <p>Management reporting helps bring the information together in a way that supports ongoing business discussions and decisions. FinSimplify supports the management reporting process from data collection and analysis through report preparation, review, distribution and continuous improvement.</p>
          </div>

          <div className="max-w-4xl ml-0">
            <VerticalArrowTimeline items={managementTimeline} />
          </div>
        </div>
      </section>

      {/* ONE CONNECTED REPORTING FRAMEWORK */}
      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-4">One Connected Reporting Framework</h2>
            <p className="text-[16px] text-primary/80">Financial accounting and management reporting work together.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-semibold text-primary mb-2">Financial Accounting & Reporting</h3>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-8">Creates the financial foundation</p>
              <ul className="space-y-4 text-[15px] text-primary/80 font-medium">
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Transaction identification</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Journal entries</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Trial balance</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Financial statements</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> External reporting</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Compliance</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Internal controls</li>
              </ul>
            </div>

            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-2">Management Reporting</h3>
              <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-8">Turns information into management visibility</p>
              <ul className="space-y-4 text-[15px] text-white/90 font-medium">
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Data collection</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Data analysis</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Standardised reports</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Report preparation</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Review and validation</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Distribution</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Management discussions</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-secondary"></span> Continuous improvement</li>
              </ul>
            </div>
          </div>

          <div className="p-8 bg-white rounded-xl border border-border shadow-sm inline-block">
            <p className="text-[16px] text-primary font-medium italic">"Accurate financial information is the foundation. Meaningful reporting makes it useful."</p>
          </div>
        </div>
      </section>

      {/* OUR DECISION SUPPORT PROCESS */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              FROM DATA TO DECISION
            </span>
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-4">A Structured Approach to Financial Reporting</h2>
            <p className="text-[15px] text-primary/80 max-w-4xl">
              Our Decision Support process brings together the key stages required to turn financial information into meaningful management information.
            </p>
          </div>
          
          <div className="max-w-4xl ml-0">
            <VerticalArrowTimeline items={processTimeline} />
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-4">What Strong Decision Support Can Provide</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Greater Financial Visibility</h3>
              <p className="text-[14px] text-primary/80">Structured financial information helps management understand business performance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Better Reporting Discipline</h3>
              <p className="text-[14px] text-primary/80">Standardised reporting processes create consistency across financial information.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Stronger Controls</h3>
              <p className="text-[14px] text-primary/80">Structured accounting and compliance processes support financial control requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Timely Management Info</h3>
              <p className="text-[14px] text-primary/80">Relevant information can be prepared and shared with the appropriate stakeholders.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-3">Continuous Improvement</h3>
              <p className="text-[14px] text-primary/80">Reporting processes can evolve as business requirements change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE ENGAGEMENT & OUTSOURCING */}
      <section className="py-20 lg:py-28 bg-[#00204a] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              FLEXIBLE ENGAGEMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] font-normal mb-6">
              Decision Support Tailored to Your Requirements
            </h2>
            <p className="text-lg text-white/80 max-w-4xl">
              Every business has different reporting requirements. You may need support with specific accounting activities, recurring management reports or a broader financial reporting function. FinSimplify offers flexible engagement models designed around your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Point-in-Time Support</h3>
              <p className="text-white/80 text-[15px]">Expert support for specific accounting, reporting or financial information requirements.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Selected Process Support</h3>
              <p className="text-white/80 text-[15px]">Outsource specific activities such as financial accounting, reporting or management reporting.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Outsourced Process Ownership</h3>
              <p className="text-white/80 text-[15px]">Entrust recurring accounting and reporting activities to FinSimplify for structured ongoing support.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:bg-white/20 hover:border-secondary transition-all duration-300 cursor-default shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Custom Finance Packages</h3>
              <p className="text-white/80 text-[15px]">Combine accounting, reporting and other financial activities into a tailored engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">
              THE FINSIMPLIFY DELIVERY FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-4xl font-['Work_Sans',sans-serif] text-primary mb-6">
              Structured Delivery. Clear Accountability. Consistent Reporting.
            </h2>
            <p className="text-[15px] text-primary/80 max-w-4xl">
              Our delivery framework is built around five foundations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">People</h3>
              <p className="text-[14px] text-primary/80">Partner supervision for every project with clear roles and responsibilities.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Process</h3>
              <p className="text-[14px] text-primary/80">Customised agile processes aligned to your business culture, objectives and constraints.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Tools</h3>
              <p className="text-[14px] text-primary/80">Industry-standard tools tailored to customer requirements.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Transparency</h3>
              <p className="text-[14px] text-primary/80">Customer-focused delivery with emphasis on business outcomes.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-primary mb-3">Culture</h3>
              <p className="text-[14px] text-primary/80">A professional environment focused on skills, development and sustainable delivery.</p>
            </div>
          </div>
          
          <p className="text-sm text-primary/60 italic">This framework is part of FinSimplify's documented delivery model.</p>
        </div>
      </section>

      {/* WHO CAN BENEFIT? */}
      <section className="py-20 bg-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <h2 className="text-3xl font-['Work_Sans',sans-serif] text-primary mb-6">Decision Support for Growing Businesses</h2>
          <p className="text-[15px] text-primary/80 mb-12 max-w-4xl">FinSimplify supports businesses across diverse industries, including:</p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {industries.map((industry, i) => (
              <span key={i} className="bg-primary text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-secondary hover:text-primary transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
          <p className="text-sm text-primary/60 italic">Our engagement model can be tailored to the financial reporting and management information requirements of each business.</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto text-left">
          <div className="max-w-4xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-6 block">
              READY TO STRENGTHEN YOUR FINANCIAL REPORTING?
            </span>
            <h2 className="text-3xl md:text-5xl font-['Work_Sans',sans-serif] text-primary mb-8 leading-tight">
              Let's Build a Better Financial Information System for Your Business.
            </h2>
            <p className="text-[16px] text-primary/80 mb-10">
              Whether you need support with financial accounting, management reporting or both, FinSimplify can create an engagement model around your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-center text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md">
                Schedule a Consultation
              </Link>
              <Link to="/contact" className="bg-white text-center text-primary border-2 border-primary font-semibold px-8 py-4 rounded-full hover:bg-surface transition-colors duration-300">
                Talk to Our Finance Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
