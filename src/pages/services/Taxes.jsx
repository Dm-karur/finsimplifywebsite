import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu7.jpg';

export default function Taxes() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Tax" 
        titlePart2="Services" 
        description="Navigate complex tax regulations with confidence through our comprehensive tax planning, preparation, and compliance solutions." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
