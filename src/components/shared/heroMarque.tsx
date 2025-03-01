import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';
import { DOCUMENTATION } from '@/constants';

const firstRow = DOCUMENTATION.slice(0, DOCUMENTATION.length / 2);
const secondRow = DOCUMENTATION.slice(DOCUMENTATION.length / 2);

const ReviewCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <figure
        className={cn(
          'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
          // light styles
          'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
          // dark styles
          'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="h-8 w-8 rounded-full">{icon}</div>
          {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {title}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">
              @{title.toLowerCase()}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{description}</blockquote>
      </figure>
    </Link>
  );
};

export function HeroMarque() {
  return (
    <div className="relative mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((doc) => (
          <ReviewCard key={doc.title} {...doc} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((doc) => (
          <ReviewCard key={doc.title} {...doc} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
