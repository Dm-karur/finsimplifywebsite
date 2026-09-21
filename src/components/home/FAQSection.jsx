import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What should a financial plan include?",
      a: "A comprehensive financial plan should include your current financial baseline, clear short and long-term goals, an investment strategy, risk management (insurance), tax planning, and an estate plan. It acts as a holistic roadmap for your financial future."
    },
    {
      q: "Can you help me plan for retirement?",
      a: "Yes, we specialize in retirement planning. We help you calculate your required retirement corpus, optimize your current savings, select appropriate tax-advantaged accounts, and build a sustainable withdrawal strategy."
    },
    {
      q: "What financial services does Finsimplify provide?",
      a: "Our Finsimplify provides comprehensive finance solutions including accounts payable, accounts receivable, payroll processing, financial accounting, management reporting, FP&A, taxation, and consulting CFO services. Our solutions are designed to support both day-to-day financial operations and long-term business growth."
    },
    {
      q: "Will I have a dedicated advisor?",
      a: "Absolutely. Every client is paired with a dedicated Lead Advisor who acts as your personal financial quarterback, backed by our entire team of specialists to ensure you receive comprehensive support."
    }
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white pt-10 pb-4 lg:pt-16 lg:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

          {/* Left Column: Heading and CTA */}
          <div className="flex flex-col justify-start animate-fade-in-up">
            <span className="border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block w-fit mb-10">
              FAQ
            </span>

            <h2 className="text-4xl lg:text-[3.5rem] leading-[1.15] font-medium text-primary font-['Work_Sans',sans-serif] mb-6 tracking-tight">
              Financial Planing FAQ's
            </h2>

            <p className="text-gray-600 text-[16px] lg:text-[18px] mb-12">
              Common questions on financial planning and investing
            </p>

            <Link to="/blog" className="inline-block bg-primary text-white text-[13px] font-bold px-8 py-3.5 rounded-full hover:bg-primary-hover hover:shadow-lg transition-all duration-300 w-fit text-center">
              Learn More
            </Link>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col animate-fade-in-up animation-delay-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`border-t border-gray-100 ${idx === faqs.length - 1 ? 'border-b' : ''} py-6 lg:py-8`}
                >
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                    onClick={() => toggleOpen(idx)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-[18px] lg:text-[22px] font-medium text-primary font-['Work_Sans',sans-serif] pr-8 group-hover:text-secondary transition-colors duration-300">
                      {faq.q}
                    </h3>

                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#F6F6F3] flex items-center justify-center shrink-0 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      {isOpen ? (
                        /* Minus Icon */
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        /* Plus Icon */
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Subtle Expanding Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 leading-relaxed text-[15px] lg:text-[16px] pr-12">
                        {faq.a}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
