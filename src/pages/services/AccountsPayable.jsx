import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/submenu4.png';

export default function AccountsPayable() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Accounts" 
        titlePart2="Payable" 
        description="Optimize your cash flow and vendor relationships with our efficient accounts payable outsourcing, turning invoice processing into a seamless operation." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
