import React from 'react';
import Hero from '@/components/shared/hero';
import CoreValues from '@/components/shared/coreValues';
import BlendingSkill from '@/components/shared/blendingSkill';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col px-4 pb-8">
      <Hero />
      <BlendingSkill />
      <CoreValues />
    </div>
  );
};

export default Home;
