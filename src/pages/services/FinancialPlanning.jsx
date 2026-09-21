import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu6.jpg';

export default function FinancialPlanning() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Financial Planning" 
        titlePart2="& Analysis" 
        description="Forecast future performance, budget effectively, and build dynamic models to navigate complex financial landscapes." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
