import finlogo from '../../assets/images/finlogo.png';
import { Link } from 'react-router-dom';
export default function ContactSection() {
  return (
    <section className="bg-[#F6F6F3] pt-4 pb-16 lg:pt-8 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="flex flex-col animate-fade-in-up">

            {/* Logo area */}
            <div className="flex items-center gap-3 mb-12">
              <img src={finlogo} alt="Finsimplify Logo" className="w-8 h-8 lg:w-10 lg:h-10 object-contain" />
               <span className="font-display text-primary text-2xl tracking-wide group-hover:text-secondary transition-colors">
                FinSimplify
              </span>
            </div>

            <h2 className="text-4xl lg:text-[3.5rem] leading-[1.15] font-medium text-primary font-['Work_Sans',sans-serif] mb-8 tracking-tight max-w-xl">
              Ready to <span className="text-secondary">Take Control</span> of your Finances?
            </h2>

            <p className="text-gray-600 text-[16px] lg:text-[18px] mb-12">
              We look forward to learning about your financial goals.
            </p>

            {/* Hoverable Button Group */}
            <Link to="/contact" className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="bg-primary text-white text-[13px] font-bold px-8 py-3.5 rounded-full group-hover:bg-primary-hover transition-all duration-300">
                Free Consultation
              </div>
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-secondary group-hover:bg-primary-hover transition-all duration-300 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>

          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col pt-4 lg:pt-32 animate-fade-in-up animation-delay-100">

            <span className="text-gray-800 text-[11px] font-bold uppercase tracking-[0.15em] mb-12">
              CONTACT US
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8">

              {/* Contact Details Col 1 */}
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-gray-600 text-[15px] mb-2">Our Phone</p>
                  <a href="tel:+11228008808" className="text-primary font-medium text-[16px] hover:text-secondary transition-colors">
                    +91 99869 42540
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-[15px] mb-2">Our Email</p>
                  <a href="mailto:office@finsimplify.com" className="text-primary font-medium text-[16px] hover:text-secondary transition-colors">
                    finance@finsimplify.com
                  </a>
                </div>
              </div>

              {/* Contact Details Col 2 */}
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-gray-600 text-[15px] mb-2">Mon-Fri:</p>
                  <p className="text-gray-600 text-[15px]">
                    8:30am-5:30pm
                  </p>
                </div>
                <div>
                  <p className="text-primary font-medium text-[16px] leading-[1.6]">
                    San Francisco,<br />
                    1140 Harrison St, CA 94103
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
