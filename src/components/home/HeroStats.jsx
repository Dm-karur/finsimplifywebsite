import { Link } from 'react-router-dom';

export default function HeroStats() {
  return (
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_0.9fr_1.1fr] gap-5 lg:gap-6 lg:h-[210px]">

        {/* Card 1: Assets */}
        <div className="bg-gradient-to-b from-[#EFECE6] to-white rounded-[2.5rem] p-4 lg:p-5 flex flex-col sm:flex-row gap-4 h-auto lg:h-full animate-fade-in-up">
          {/* Left Side: Assets & Learn More */}
          <div className="flex flex-col justify-between sm:w-[35%] py-2 pl-2">
            <h3 className="text-2xl text-[#112A26] font-medium tracking-tight">Assets</h3>

            <Link to="/services" className="inline-flex items-center gap-2 group mt-8 sm:mt-0">
              <span className="text-[13px] font-semibold text-[#112A26]">Learn more</span>
              <div className="w-[22px] h-[22px] rounded-full bg-[#C6F000] flex items-center justify-center text-[#112A26] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Side Inner Cards */}
          <div className="flex flex-row gap-3 sm:w-[65%] h-full">
            {/* White Box */}
            <div className="bg-white rounded-[1.8rem] p-5 flex flex-col justify-between flex-1 shadow-sm h-full">
              <div className="text-[#112A26]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 12 12 17 22 12"></polyline>
                  <polyline points="2 17 12 22 22 17"></polyline>
                </svg>
              </div>
              <div className="mt-4">
                <p className="text-[15px] text-gray-700 font-semibold leading-tight mb-5">Assets under<br />management</p>
                <h2 className="text-2xl lg:text-[1.5rem] font-sans text-[#112A26]" style={{ letterSpacing: '0.em', fontWeight: 650 }}>&#8377;28.90M</h2>
              </div>
            </div>

            {/* Abstract Graphic Box */}
            <div className="bg-[#0D261E] rounded-[1.8rem] flex-1 overflow-hidden relative shadow-sm h-full">
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse">
                      <line x1="1" y1="0" x2="1" y2="4" stroke="#A6C254" strokeWidth="1.5" />
                    </pattern>
                  </defs>

                  {/* Left Peak */}
                  <path d="M 5,100 L 5,60 L 25,25 L 45,60 L 45,100 Z" fill="url(#stripes)" opacity="0.9" />

                  {/* Center Peak */}
                  <path d="M 30,100 L 30,70 L 60,15 L 90,70 L 90,100 Z" fill="url(#stripes)" opacity="0.9" />

                  {/* Right Peak */}
                  <path d="M 75,100 L 75,75 L 90,45 L 100,65 L 100,100 Z" fill="url(#stripes)" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Professionals */}
        <div className="bg-gradient-to-b from-[#EFECE6] to-white rounded-[2.5rem] p-4 lg:p-5 flex flex-col h-auto lg:h-full animate-fade-in-up animation-delay-100">
          <div className="bg-white rounded-[1.8rem] p-5 flex flex-col justify-between h-full shadow-sm">
            <div className="text-[#112A26]">
              {/* Globe/Pie Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>

            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-[15px] text-gray-700 font-semibold mb-1">Professionals</p>
                <h2 className="text-2xl lg:text-[2rem] font-sans text-[#112A26] leading-none" style={{ letterSpacing: '0.em', fontWeight: 650 }}>120+</h2>
              </div>

              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-[2.5px] border-white object-cover shadow-sm z-30 filter grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Pro 1" />
                <img className="w-10 h-10 rounded-full border-[2.5px] border-white object-cover shadow-sm z-20 filter grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Pro 2" />
                <img className="w-10 h-10 rounded-full border-[2.5px] border-white object-cover shadow-sm z-10 filter grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Pro 3" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Trust */}
        <div className="relative rounded-[2.5rem] shadow-xl overflow-hidden h-auto min-h-[210px] lg:h-full animate-fade-in-up animation-delay-200">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Client Trust" className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-y-4 left-4 right-28 sm:right-48 lg:right-28 xl:right-32 bg-[#EBE9E4] rounded-[2rem] p-5 flex flex-col justify-between shadow-lg backdrop-blur-sm bg-opacity-95 border border-white/40">
            <div className="text-[#112A26]">
              {/* Bar Chart Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
                <line x1="4" y1="22" x2="20" y2="22"></line>
              </svg>
            </div>

            <div className="mt-8">
              <p className="text-[15px] text-gray-700 font-semibold leading-[1.3] mb-1">Earning client<br />trust since</p>
              <h2 className="text-3xl lg:text-[2rem] font-sans text-[#112A26] leading-none" style={{ letterSpacing: '0.em', fontWeight: 650 }}>2016</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
