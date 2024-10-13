'use client';

import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';

const page = () => {
  const words = ['World', 'Industry', 'Technology'];
  return (
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Revolutionize the{' '}
            <FlipWords
              className="text-primary dark:text-primary"
              words={words}
            />
          </div>

          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Gateway <span className="text-primary">Farm</span>
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m an{' '}
            <span className="text-primary">
              Infrastructure and DevOps Engineer
            </span>{' '}
            at Intel. I love to code and design software architecture.
          </p>

          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">GitHub</Button>
          </div>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Feature cards would go here */}
        </div>
      </section>
    </div>
  );
};

export default page;
