import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/images/submenu3.jpg';

export default function PayrollManagement() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Payroll" 
        titlePart2="Management" 
        description="Ensure accurate, timely, and compliant payroll processing for your entire workforce with our dedicated payroll solutions." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
