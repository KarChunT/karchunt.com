import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import Footer from '@/components/footer';
import { Ripple } from '@/components/ui/ripple';

const NotFound = () => {
  return (
    <HomeLayout {...baseOptions}>
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <p className="text-primary z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap">
          404
        </p>
        <Ripple />
      </div>
      <Footer />
    </HomeLayout>
  );
};

export default NotFound;
