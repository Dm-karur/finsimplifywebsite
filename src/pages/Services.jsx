import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import WhatWeDo from '../components/services/WhatWeDo';
import PlanningApproach from '../components/services/PlanningApproach';
import VisionSection from '../components/services/VisionSection';
import ProcessSection from '../components/shared/ProcessSection';

export default function Services() {
  return (
    <>
      <div className="pt-4 lg:pt-8">
        <ServiceHero 
          titlePart1="Financial" 
          titlePart2="Planning"
          description="At Finsimplify, we excel in creating personalized financial plans that cater to the distinct needs of each client."
          image="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
      <WhatWeDo />
      <PlanningApproach />
      <VisionSection />
      <ProcessSection />
    </>
  );
}
