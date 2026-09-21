import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu4.jpg';

export default function AccountingReporting() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Accounting" 
        titlePart2="& Reporting" 
        description="Maintain accurate ledgers, ensure compliance, and receive timely financial reports that provide a clear picture of your business's financial health." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
