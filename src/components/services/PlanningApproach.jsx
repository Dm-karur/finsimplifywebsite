import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function PlanningApproach() {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Fee Only Financial Planning",
      content: "We operate on a fee-only basis, charging solely for our time and expertise. This model eliminates any commission-based conflicts, aligning our success directly with your financial progress."
    },
    {
      title: "Fiduciary ",
      content: "As fiduciaries, we are legally bound to put your interests first. Our advice is always objective, transparent, and strictly aligned with your unique financial goals without hidden agendas."
    },
    {
      title: "Professionals Only, No Salespeople",
      content: "You will work exclusively with experienced financial professionals. We do not employ salespeople or push products, ensuring that every recommendation is based entirely on merit and strategy."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const checkPills = [
    "Financial Planning",
    "Accounting & Tax",
    "Accounts Payable",
    "Accounts Receivables",
    "Payroll Management"
  ];

  return (
    <section className="bg-surface py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-16 lg:mb-24">

        {/* Left Column: Text & CTA */}
        <div className="flex-1 lg:max-w-[500px]">
          <div className="inline-block border border-border rounded-full px-5 py-2 mb-8 shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight mb-8">
            Interactive Planning Approach
          </h2>

          <p className="text-[16px] text-text-muted leading-relaxed mb-12">
            We thoroughly assess your current financial landscape, taking into account both short- and long-term objectives, family dynamics, and evolving priorities. Our dedicated team supports you through every stage of the planning process and significant life milestones.
          </p>

          <Link to="/contact">
            <button className="bg-primary text-white text-[13px] font-semibold px-8 py-3.5 rounded-full hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md cursor-pointer">
              Schedule a Call
            </button>
          </Link>
        </div>

        {/* Right Column: Accordion */}
        <div className="flex-1 w-full lg:mt-12">
          <div className="flex flex-col">
            {accordionData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-border-subtle ${index === 0 ? 'border-t' : ''}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-8 flex justify-between items-center text-left group focus:outline-none"
                  >
                    <span className="text-[20px] font-medium text-primary group-hover:text-secondary transition-colors">
                      {item.title}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F6F6F4] flex items-center justify-center shrink-0 ml-4 group-hover:bg-secondary/20 transition-colors">
                      {isOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'
                      }`}
                  >
                    <p className="text-[17px] text-text-muted leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Check Pills Section */}
      <div className="max-w-[1400px] mx-auto">
        <hr className="border-border-subtle mb-10" />
        <div className="flex flex-wrap gap-4 justify-center">
          {checkPills.map((text, index) => (
            <div
              key={index}
              className="bg-[#F9F9F8] rounded-full py-2.5 pl-2.5 pr-6 flex items-center gap-3 shadow-sm border border-transparent"
            >
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-[14px] font-medium text-primary">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
