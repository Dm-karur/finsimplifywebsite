import React from 'react';

export default function DeliveryFrameworkSection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-['Work_Sans',sans-serif] font-medium text-primary leading-tight">
            Our Delivery <span className="text-[#7AB800]">Framework</span>
          </h2>
        </div>

        {/* --- DESKTOP VIEW (EXACT DIAGRAM) --- */}
        <div className="hidden lg:block relative w-[1200px] h-[750px] mx-auto">
          
          {/* Background SVG for Lines & Arrows */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 750">
            {/* Path & Arrow: Culture (Green) */}
            <path d="M 225 60 L 580 60 L 580 190" fill="none" stroke="#7AB800" strokeWidth="1.5" />
            <polygon points="215,55 225,60 215,65" fill="#7AB800" />
            
            {/* Path & Arrow: Transparency (Black) */}
            <path d="M 255 250 L 510 250" fill="none" stroke="#111827" strokeWidth="1.5" />
            <polygon points="245,245 255,250 245,255" fill="#111827" />
            
            {/* Path & Arrow: Tools (Green) */}
            <path d="M 275 440 L 580 440 L 580 370" fill="none" stroke="#7AB800" strokeWidth="1.5" />
            <polygon points="265,435 275,440 265,445" fill="#7AB800" />
            
            {/* Path & Arrow: People (Dark Blue) */}
            <path d="M 660 220 L 790 220 L 790 100 L 805 100" fill="none" stroke="#00204a" strokeWidth="1.5" />
            <polygon points="805,95 815,100 805,105" fill="#00204a" />
            
            {/* Path & Arrow: Process (Light Blue) */}
            <path d="M 690 300 L 825 300" fill="none" stroke="#4a90e2" strokeWidth="1.5" />
            <polygon points="825,295 835,300 825,305" fill="#4a90e2" />
            
            {/* Colored Ring around the Center Circle */}
            <path d="M 600 190 A 90 90 0 0 0 510 280" fill="none" stroke="#7AB800" strokeWidth="8" />
            <path d="M 510 280 A 90 90 0 0 0 600 370" fill="none" stroke="#7AB800" strokeWidth="8" />
            <path d="M 600 370 A 90 90 0 0 0 690 280" fill="none" stroke="#4a90e2" strokeWidth="8" />
            <path d="M 690 280 A 90 90 0 0 0 600 190" fill="none" stroke="#00204a" strokeWidth="8" />
          </svg>

          {/* Center Circle */}
          <div className="absolute top-[280px] left-[600px] w-40 h-40 bg-white rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(0,0,0,0.1)] border-4 border-white">
            <h4 className="text-center font-bold text-primary text-[15px] leading-snug">
              FinSimplify<br/>Delivery<br/>Framework
            </h4>
          </div>

          {/* Culture Text Box */}
          <div className="absolute top-[35px] left-[0px] w-[210px] text-right">
            <h3 style={{ color: '#7AB800' }} className="text-[22px] font-bold mb-2 pr-2">Culture</h3>
            <ul className="text-[13px] text-gray-700 leading-tight space-y-2 inline-block text-left">
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Industry standard tools tailored for customer needs
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Skills and career paths considering individual background and preferences
              </li>
            </ul>
          </div>

          {/* Transparency Text Box */}
          <div className="absolute top-[225px] left-[20px] w-[220px] text-right">
            <h3 style={{ color: '#000000' }} className="text-[22px] font-bold mb-2 pr-2">Transparency</h3>
            <ul className="text-[13px] text-gray-700 leading-tight space-y-2 inline-block text-left">
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Customer focused with emphasis on business outcomes
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Strict adherence to govt guidelines and procedures
              </li>
            </ul>
          </div>

          {/* Tools Text Box */}
          <div className="absolute top-[415px] left-[40px] w-[220px] text-right">
            <h3 style={{ color: '#7AB800' }} className="text-[22px] font-bold mb-2 pr-2">Tools</h3>
            <ul className="text-[13px] text-gray-700 leading-tight space-y-2 inline-block text-left">
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Industry standard tools tailored for customer needs
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Leveraging the ecosystem tools to accelerate modern delivery
              </li>
            </ul>
          </div>

          {/* People Text Box */}
          <div className="absolute top-[75px] left-[825px] w-[220px]">
            <h3 style={{ color: '#00204a' }} className="text-[22px] font-bold mb-2">People</h3>
            <ul className="text-[13px] text-gray-700 leading-tight space-y-2">
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Partner supervision for every project
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Clear Roles and Responsibilities
              </li>
            </ul>
          </div>

          {/* Process Text Box */}
          <div className="absolute top-[275px] left-[845px] w-[300px]">
            <h3 style={{ color: '#4a90e2' }} className="text-[22px] font-bold mb-2">Process</h3>
            <ul className="text-[13px] text-gray-700 leading-tight space-y-2">
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Customized agile processes aligned to culture, objectives and constraints
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                Templatized approach
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 inline-block w-1 h-1 rounded-full border border-gray-400 mt-1.5"></span>
                14x6 working model for maximizing coverage for US-based client stakeholders
              </li>
            </ul>
          </div>

          {/* Bottom Banner & Columns */}
          <div className="absolute bottom-[20px] left-0 w-full">
            
            <div className="relative flex justify-center mb-8">
              <div className="absolute top-1/2 left-[5%] w-[90%] h-px bg-[#00204a] -z-10"></div>
              <div className="bg-[#00204a] text-white rounded-full py-4 px-10 text-center shadow-md max-w-[850px]">
                <p style={{ color: '#ffffff' }} className="text-[14px] m-0 font-medium tracking-wide">
                  Tailored for your needs: Point-in-time activities, outsourced process ownership or custom packages
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-[900px] mx-auto">
              <div className="text-center px-4 border-r border-[#00204a]/20">
                <p className="text-[#00204a] font-bold text-[14px] leading-snug">
                  Expert advice and support for point-in-time activities to support your business needs
                </p>
              </div>
              <div className="text-center px-4 border-r border-[#00204a]/20">
                <p className="text-[#00204a] font-bold text-[14px] leading-snug">
                  Complete ownership of financial processes and recurring activities
                </p>
              </div>
              <div className="text-center px-4">
                <p className="text-[#00204a] font-bold text-[14px] leading-snug">
                  A bouquet of financial activities and processes chosen by you that suits your business needs
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* --- MOBILE VIEW (STACKED) --- */}
        <div className="lg:hidden flex flex-col space-y-12 items-center">
          
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg border-[6px] border-[#7AB800] relative">
             <div className="absolute inset-[-6px] rounded-full border-[6px] border-l-transparent border-t-primary border-r-[#4a90e2] border-b-transparent"></div>
             <h4 className="text-center font-bold text-primary text-lg">FinSimplify<br/>Delivery<br/>Framework</h4>
          </div>

          <div className="w-full space-y-8">
            <div>
              <h3 style={{ color: '#7AB800' }} className="text-[22px] font-bold mb-3">Culture</h3>
              <ul className="text-[14px] text-gray-700 space-y-2">
                <li>• Industry standard tools tailored for customer needs</li>
                <li>• Skills and career paths considering individual background and preferences</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#000000' }} className="text-[22px] font-bold mb-3">Transparency</h3>
              <ul className="text-[14px] text-gray-700 space-y-2">
                <li>• Customer focused with emphasis on business outcomes</li>
                <li>• Strict adherence to govt guidelines and procedures</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: '#7AB800' }} className="text-[22px] font-bold mb-3">Tools</h3>
              <ul className="text-[14px] text-gray-700 space-y-2">
                <li>• Industry standard tools tailored for customer needs</li>
                <li>• Leveraging the ecosystem tools to accelerate modern delivery</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: '#00204a' }} className="text-[22px] font-bold mb-3">People</h3>
              <ul className="text-[14px] text-gray-700 space-y-2">
                <li>• Partner supervision for every project</li>
                <li>• Clear Roles and Responsibilities</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: '#4a90e2' }} className="text-[22px] font-bold mb-3">Process</h3>
              <ul className="text-[14px] text-gray-700 space-y-2">
                <li>• Customized agile processes aligned to culture, objectives and constraints</li>
                <li>• Templatized approach</li>
                <li>• 14x6 working model for maximizing coverage for US-based client stakeholders</li>
              </ul>
            </div>
          </div>

          <div className="w-full mt-10">
            <div className="bg-primary text-white rounded-[2rem] py-5 px-6 text-center shadow-md mb-8">
              <p style={{ color: '#ffffff' }} className="text-[15px] m-0 font-medium">
                Tailored for your needs: Point-in-time activities, outsourced process ownership or custom packages
              </p>
            </div>

            <div className="flex flex-col space-y-6 text-center">
              <p className="text-primary font-bold text-[15px] pb-6 border-b border-gray-200">
                Expert advice and support for point-in-time activities to support your business needs
              </p>
              <p className="text-primary font-bold text-[15px] pb-6 border-b border-gray-200">
                Complete ownership of financial processes and recurring activities
              </p>
              <p className="text-primary font-bold text-[15px]">
                A bouquet of financial activities and processes chosen by you that suits your business needs
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
