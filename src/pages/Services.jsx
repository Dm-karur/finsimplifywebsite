import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import WhatWeDo from '../components/services/WhatWeDo';
import PlanningApproach from '../components/services/PlanningApproach';
import VisionSection from '../components/services/VisionSection';
import ProcessSection from '../components/shared/ProcessSection';

export default function Services() {
  return (
    <>
      <ServiceHero />
      <WhatWeDo />
      <PlanningApproach />
      <VisionSection />
      <ProcessSection />
    </>
  );
}
