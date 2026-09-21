import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu5.jpg';

export default function ManagementReporting() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Management" 
        titlePart2="Reporting" 
        description="Gain deep insights into your operations with customized management reports designed to facilitate data-driven decision-making." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
