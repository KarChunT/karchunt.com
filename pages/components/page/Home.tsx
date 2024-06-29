import Hero from '@/components/Hero';
import Docs from '@/components/Docs';

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full">
        <Hero />
        <Docs />
      </div>
    </main>
  );
};

export default Home;
