'use client';

import Hero from '@/components/shared/home/hero';
import CoreValues from '@/components/shared/home/coreValues';
import BlendingSkill from '@/components/shared/home/blendingSkill';

const page = () => {
  return (
    <div>
      <Hero />
      <BlendingSkill />
      <CoreValues />
    </div>
  );
};

export default page;
