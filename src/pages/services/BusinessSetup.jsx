import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu6.png';

export default function BusinessSetup() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Business" 
        titlePart2="Setup" 
        description="Start your business on a solid foundation. We guide you through the entire business setup process, from registration and structuring to initial financial planning." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
