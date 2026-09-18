import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/submenu2.png';

export default function AccountingCompliance() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Accounting &" 
        titlePart2="Compliance" 
        description="We deliver accurate accounting and strict compliance services, ensuring your financial records are meticulously maintained and always up-to-date with regulatory standards." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
