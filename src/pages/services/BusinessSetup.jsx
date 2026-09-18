import React from 'react';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';
import VisionSection from '../../components/services/VisionSection';
import PlanningApproach from '../../components/services/PlanningApproach';

export default function BusinessSetup() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-5xl text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight">Business Setup & Accounting</h1>
      </div>
      <VisionSection />
      <PlanningApproach />
      <ProcessSection />
      <StepsToTake />
    </div>
  );
}
