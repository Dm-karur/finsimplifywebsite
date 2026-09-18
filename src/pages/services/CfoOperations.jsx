import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/submenu1.png';

export default function CfoOperations() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="CFO & Finance" 
        titlePart2="Operations" 
        description="At Finsimplify, we provide expert CFO and finance operations support designed to help businesses optimize performance, manage cash flow, and achieve strategic growth." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
