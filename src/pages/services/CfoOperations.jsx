import React from 'react';
import StepsToTake from '../../components/shared/StepsToTake';
import ProcessSection from '../../components/shared/ProcessSection';

export default function CfoOperations() {
  return (
    <div className="pt-24 lg:pt-32">
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl md:text-5xl text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight">CFO & Finance Operations</h1>
      </div>
      <StepsToTake />
      <ProcessSection />
    </div>
  );
}
