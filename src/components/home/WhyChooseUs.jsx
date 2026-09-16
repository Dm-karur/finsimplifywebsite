import React, { useEffect, useRef, useState } from 'react';

const AnimatedText = ({ text, highlight = false, delayOffset = 0 }) => {
  const [inView, setInView] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={textRef} className={`inline-block ${highlight ? 'bg-secondary px-3 py-0.5 rounded-lg leading-tight' : 'leading-tight'}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block transition-all duration-[400ms] ease-out"
          style={{ 
            opacity: inView ? 1 : 0, 
            transform: inView ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: `${delayOffset + (index * 40)}ms` 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!sectionRef.current || !cardRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Check if section is in viewport
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
          // Calculate progress: 0 when just entering bottom, 1 when just leaving top
          const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          
          // Parallax offset: moves from -100px to +100px as you scroll down
          const maxOffset = 120;
          const translateY = (progress - 0.5) * maxOffset * 2;
          
          // Apply transform directly using translate3d for hardware acceleration
          cardRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[600px] h-[80vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start lg:pl-[6%]"
      style={{ backgroundImage: `url('/Whychooseus.webp')` }}
    >
      {/* Container for the floating card */}
      <div 
        ref={cardRef}
        className="w-[92%] max-w-[550px] bg-[#F6F6F3] rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative z-10 will-change-transform"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center mb-10">
          <span className="border border-gray-300 text-text-secondary text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full">
            WHY US?
          </span>
          <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center text-2xl font-black mt-[-5px] mr-[-5px]">
            *
          </div>
        </div>
        
        {/* Animated Main Title */}
        <h2 className="text-[2rem] lg:text-[2.6rem] text-primary font-medium font-['Work_Sans',sans-serif] mb-14 flex flex-col items-start gap-2">
          <AnimatedText text="You'll Know What" delayOffset={0} />
          <AnimatedText text="Steps to Take Next" highlight={true} delayOffset={700} />
        </h2>
        
        {/* Bottom Action Row */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-xs lg:text-[13px] font-semibold text-text-secondary leading-[1.6] max-w-[180px]">
            We are Transparent Like that. No Gimmicks.
          </p>
          
          <button className="bg-primary text-white text-xs lg:text-sm font-bold px-8 py-4 rounded-full hover:bg-primary-hover transition-colors shadow-lg whitespace-nowrap">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
