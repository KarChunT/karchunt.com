import Hero from '@/components/Hero';
import Docs from '@/components/Docs';
import Phase from '@/components/Phase';

const Home = () => {
  return (
    <main className="nx-min-h-[calc(100vh-var(--nextra-navbar-height))] relative mx-auto flex flex-col items-center overflow-hidden">
      <div className="w-full">
        <Hero />
        <Docs />
        <Phase />
      </div>
    </main>
  );
};

export default Home;
