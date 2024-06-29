import React from 'react';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
