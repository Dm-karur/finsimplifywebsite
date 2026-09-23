import React from 'react';

export default function DeliveryFrameworkSection() {
  const timelineData = [
    {
      title: "Culture",
      bgClass: "bg-[#7AB800]",
      textClass: "text-[#7AB800]",
      points: [
        "Industry standard tools tailored for customer needs",
        "Skills and career paths considering individual background and preferences"
      ]
    },
    {
      title: "Transparency",
      bgClass: "bg-[#111827]",
      textClass: "text-[#111827]",
      points: [
        "Customer focused with emphasis on business outcomes",
        "Strict adherence to govt guidelines and procedures"
      ]
    },
    {
      title: "Tools",
      bgClass: "bg-[#7AB800]",
      textClass: "text-[#7AB800]",
      points: [
        "Industry standard tools tailored for customer needs",
        "Leveraging the ecosystem tools to accelerate modern delivery"
      ]
    },
    {
      title: "People",
      bgClass: "bg-[#00204a]",
      textClass: "text-[#00204a]",
      points: [
        "Partner supervision for every project",
        "Clear Roles and Responsibilities"
      ]
    },
    {
      title: "Process",
      bgClass: "bg-[#4a90e2]",
      textClass: "text-[#4a90e2]",
      points: [
        "Customized agile processes aligned to culture, objectives and constraints",
        "Templatized approach",
        "14x6 working model for maximizing coverage for US-based client stakeholders"
      ]
    }
  ];

  return (
    <section className="bg-[#F9F9F8] py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Title */}
        <div className="text-left mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-['Work_Sans',sans-serif] font-medium text-primary leading-tight">
            Our Delivery <span className="text-secondary font-bold">Framework</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto mb-24">
          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-[34px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

          <div className="flex flex-col space-y-12 md:space-y-0">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16 last:mb-0 pl-20 md:pl-0`}>

                  {/* Center Dot */}
                  <div className={`absolute left-[36px] md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0 w-5 h-5 rounded-full ${item.bgClass} shadow-[0_0_0_4px_white,0_0_10px_rgba(0,0,0,0.1)] z-10 transition-transform duration-300 group-hover:scale-125`}></div>

                  {/* Desktop Title Pill (Hidden on mobile, shown on opposite side) */}
                  <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-start pl-8 lg:pl-12' : 'justify-end pr-8 lg:pr-12'}`}>
                    <div className={`${item.bgClass} text-white px-6 py-2.5 rounded-full shadow-md font-semibold text-[15px] tracking-wide inline-block transform transition-transform duration-300 group-hover:-translate-y-1`}>
                      {item.title}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:pr-8 lg:pr-12' : 'md:text-left md:pl-8 lg:pl-12'} animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>

                    {/* Mobile Title Pill (Visible only on mobile) */}
                    <div className="md:hidden mb-4">
                      <div className={`${item.bgClass} text-white px-5 py-2 rounded-full shadow-sm font-semibold text-[14px] tracking-wide inline-block`}>
                        {item.title}
                      </div>
                    </div>

                    <div className={`bg-white p-2 md:p-3 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:bg-secondary`}>
                      <div className="bg-gray-50 rounded-lg p-3 md:p-4 w-full h-full">
                        <ul className={`text-[14px] lg:text-[15px] text-black font-medium leading-relaxed space-y-2 ${isEven ? 'md:text-right' : 'text-left'}`}>
                          {item.points.map((point, i) => (
                            <li key={i} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              <span className={`shrink-0 inline-block w-1.5 h-1.5 rounded-full mt-2 ${item.bgClass}`}></span>
                              <span className="flex-1 text-left md:text-inherit">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner & Columns */}
        <div className="max-w-[900px] mx-auto mt-20">
          <div className="relative flex justify-center mb-10">
            <div className="absolute top-1/2 left-[5%] w-[90%] h-px bg-primary/20 -z-10"></div>
            <div className="bg-primary text-white rounded-full py-4 px-8 md:px-12 text-center shadow-lg transform transition-transform hover:-translate-y-1 duration-300">
              <p className="text-[14px] md:text-[15px] m-0 font-medium tracking-wide">
                Tailored for your needs: Point-in-time activities, outsourced process ownership or custom packages
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
            <div className="md:px-4 md:border-r border-border-subtle pb-6 md:pb-0 border-b md:border-b-0">
              <p className="text-primary font-bold text-[14px] leading-relaxed">
                Expert advice and support for point-in-time activities to support your business needs
              </p>
            </div>
            <div className="md:px-4 md:border-r border-border-subtle pb-6 md:pb-0 border-b md:border-b-0">
              <p className="text-primary font-bold text-[14px] leading-relaxed">
                Complete ownership of financial processes and recurring activities
              </p>
            </div>
            <div className="md:px-4">
              <p className="text-primary font-bold text-[14px] leading-relaxed">
                A bouquet of financial activities and processes chosen by you that suits your business needs
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
