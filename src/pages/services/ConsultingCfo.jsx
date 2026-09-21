import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu8.jpg';

export default function ConsultingCfo() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Consulting CFO" 
        titlePart2="Services" 
        description="Access executive-level financial leadership and strategic guidance on demand to propel your business growth." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
