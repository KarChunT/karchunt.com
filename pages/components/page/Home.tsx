import Hero from '@/components/Hero';
import Docs from '@/components/Docs';
import Phase from '@/components/Phase';

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full">
        <Hero />
        <Docs />
        <Phase />
      </div>
    </main>
  );
};

export default Home;
