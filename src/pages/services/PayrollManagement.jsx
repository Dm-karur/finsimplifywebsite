import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';
import submenuImage from '../../assets/submenu3.png';

export default function PayrollManagement() {
  return (
    <div className="pt-4 lg:pt-8">
      <ServiceHero 
        titlePart1="Payroll" 
        titlePart2="Management" 
        description="Streamline your payroll processes with our reliable, secure, and fully compliant payroll management solutions tailored to your unique workforce requirements." 
        image={submenuImage} 
      />
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
