import Link from 'next/link';
import { useState } from 'react';
import { ACKNOWLEDGMENTS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Vortex } from '@/components/ui/vortex';
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const Acknowledgment = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="nx-min-h-[calc(100vh-var(--nextra-navbar-height))] mx-auto overflow-hidden rounded-md pb-6 pt-16">
      <Loader
        loadingStates={ACKNOWLEDGMENTS}
        loading={loading}
        duration={1000}
        loop={true}
      />
      <Vortex
        backgroundColor="black"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
          Acknowledgment
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          Thanks for your hard work and dedication. You make all the difference.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          <Button onClick={() => setLoading(true)}>Watch the animation</Button>
        </div>
      </Vortex>

      {/* Exit the loading screen */}
      {loading && (
        <button
          className="fixed right-4 top-4 z-[120] text-black dark:text-white"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
      <div className="mx-auto mt-9 max-w-4xl px-5">
        <ScrollArea className="h-72 w-full rounded-md">
          <div>
            {ACKNOWLEDGMENTS.map((item, id) => (
              <>
                <div key={id} className="text-sm font-medium">
                  <Link className="text-primary" href={item.text}>
                    {item.text}
                  </Link>
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Acknowledgment;
