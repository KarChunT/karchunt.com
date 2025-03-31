import { ReactNode } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { DOCUMENTATION } from '@/constants';
import Link from 'next/link';

const page = () => {
  return (
    <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
      <div className="px-4 text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          My <span className="text-primary">Documentation</span>
        </h1>
        <p className="mt-4">
          The road to freedom shares and introduces my documentation from here.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-sm gap-6 *:text-center @min-4xl:max-w-full @min-4xl:grid-cols-3">
        {DOCUMENTATION.map((docs) => {
          return (
            <Link href={docs.link} key={docs.title}>
              <Card className="group h-[350px] bg-transparent shadow-zinc-950/5">
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <div className="size-6">{docs.icon}</div>
                  </CardDecorator>

                  <h3 className="mt-6 font-medium">{docs.title}</h3>
                </CardHeader>

                <CardContent>
                  <p className="line-clamp-4 text-sm">{docs.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="to-background absolute inset-0 bg-radial from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">
      {children}
    </div>
  </div>
);

export default page;
