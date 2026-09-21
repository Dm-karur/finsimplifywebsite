import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu2.jpg';

export default function AccountsReceivable() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Accounts Receivables" 
        titlePart2="Management" 
        description="Improve collections and reduce days sales outstanding with our proactive accounts receivable management strategies." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
