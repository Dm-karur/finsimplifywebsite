import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/submenu5.png';

export default function AccountsReceivable() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Accounts" 
        titlePart2="Receivable" 
        description="Enhance your billing and collections processes to accelerate cash flow and gain better visibility into your outstanding customer balances." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
