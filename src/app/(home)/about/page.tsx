import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  PERSONAL,
  JOB_COMPANY,
  JOB_POSITION,
  CHANNELS,
  CREDLY_URL,
} from '@/app/constants';
import { FlipWords } from '@/components/ui/flip-words';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Highlighter } from '@/components/ui/highlighter';

export const metadata = {
  title: 'About',
};

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'text-primary bg-emerald-100 px-1 py-0.5 font-bold dark:bg-yellow-700/[0.2]',
        className,
      )}
    >
      {children}
    </span>
  );
};

const page = () => {
  const flipWords = ['Meee', 'Iii', 'Myselfff'];

  return (
    <div className="container mx-auto px-2 py-4 lg:py-8">
      <div className="mx-auto max-w-[58rem] px-4">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          <FlipWords className="px-0" words={flipWords} />
          😎
        </h1>

        <p className="mt-6 leading-7 first:mt-0">
          Hi, I&apos;m Kar Chun! I&apos;m an{' '}
          <span className="text-primary">{JOB_POSITION}</span> at{' '}
          <span className="text-primary">{JOB_COMPANY}</span>. Welcome to my
          website, visit my{' '}
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="/blog"
          >
            blog
          </Link>
          &nbsp;for documentation, tutorials, and more. I love to code and
          design software architecture.
        </p>

        <p className="mt-6 leading-7 first:mt-0">
          My ambition is to develop a new technology that can revolutionize the
          world. As part of my motivation to inspire people, this site shares
          what I have learned and studied previously. It would be the greatest
          thing I could ever hope for if someone looked at me and said,
          {/* <Highlight>Thanks to you, I didn&apos;t give up</Highlight>🥳. */}
          <Highlighter action="underline" color="#facc15">
            Thanks to you, I didn&apos;t give up 🥳.
          </Highlighter>
        </p>

        <p className="mt-6 leading-7 first:mt-0">
          You can contact me via these channels!
        </p>

        <ul className="mt-2 flex list-disc flex-col gap-2 pl-9">
          {Object.entries(CHANNELS).map(([key, { title, href }]) => (
            <li key={key}>
              <Link
                href={href}
                className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 leading-7 first:mt-0">
          Here is my{' '}
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href={CREDLY_URL}
          >
            Credly
          </Link>{' '}
          profile, where you can find my certifications and badges. <br />
          You can refer to my{' '}
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="/certificate-journey"
          >
            certificate journey
          </Link>{' '}
          in the timelime. <br />
          It is my hope that you can find something useful or helpful here.
          Thank you!
        </p>

        <AnimatedTestimonials testimonials={PERSONAL} />
      </div>
    </div>
  );
};

export default page;
