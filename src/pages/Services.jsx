import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import PlanningApproach from '../components/services/PlanningApproach';
import VisionSection from '../components/services/VisionSection';
import ProcessSection from '../components/shared/ProcessSection';

export default function Services() {
  return (
    <>
      <ServiceHero />
      <PlanningApproach />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-border-subtle" />
      </div>
      <VisionSection />
      <ProcessSection />
    </>
  );
}
