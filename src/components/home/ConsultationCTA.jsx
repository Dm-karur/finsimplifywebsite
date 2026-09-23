import React from 'react';
import finLogo from '../../assets/images/finlogo.png';
import { Link } from 'react-router-dom';  

export default function ConsultationCTA() {
  return (
    <section className="bg-surface pt-24 pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* Left Side: Image */}
        <div className="rounded-[2.5rem] overflow-hidden h-[450px] lg:h-[600px] shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
            alt="Business professionals shaking hands" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: CTA Card */}
        <div className="bg-secondary rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-between shadow-sm h-[450px] lg:h-[600px]">
          
          <div className="flex justify-between items-start">
            <div className="border border-primary/20 rounded-full px-5 py-2">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                FREE CONSULTATION
              </span>
            </div>
            
            {/* Company Logo in place of green asterisk */}
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={finLogo} alt="FinSimplify Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight mt-25 mb-auto max-w-[90%]">
            Schedule a Free Consultation at Your Preferred Time
          </h2>
          
          {/* Action Buttons */}
          

        </div>

      </div>
    </section>
  );
}
