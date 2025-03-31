import Hero from '@/components/page/home/hero';
import BlendingSkill from '@/components/page/home/blendingSkill';
import CoreValues from '@/components/page/home/coreValues';

export default function HomePage() {
  return (
    <main className="container px-2 py-4 lg:py-8">
      <Hero />
      <BlendingSkill />
      <CoreValues />
    </main>
  );
}
