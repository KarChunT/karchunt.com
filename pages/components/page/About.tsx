import Link from 'next/link';
import { cn } from '@/utils/cn';
import { PERSONAL_IMAGES } from '@/constants';
import { FlipWords } from '@/components/ui/flip-words';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '@/components/ui/text-reveal-card';

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'nx-text-primary-600 bg-emerald-100 px-1 py-0.5 font-bold dark:bg-emerald-700/[0.2]',
        className,
      )}
    >
      {children}
    </span>
  );
};

const About = () => {
  const flipWords = ['Meee', 'Iii', 'Myselfff'];

  return (
    <div>
      <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
        <FlipWords className="px-0" words={flipWords} />
        😎
      </h1>

      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        Hi, I&apos;m Kar Chun! I&apos;m an Infrastructure and DevOps Engineer at
        Intel. Welcome to my website, visit my{' '}
        <Link
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
          href="/blog/overview"
        >
          blog
        </Link>
        &nbsp;for documentation, tutorials, and more. I love to code and design
        software architecture.
      </p>

      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        My ambition is to develop a new technology that can revolutionize the
        world. As part of my motivation to inspire people, this site shares what
        I have learned and studied previously. It would be the greatest thing I
        could ever hope for if someone looked at me and said,{' '}
        <Highlight>Thanks to you, I didn&apos;t give up</Highlight>.🥳
      </p>

      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        You can contact me via these channels!
      </p>

      <ul className="mt-2 flex list-disc flex-col gap-2 pl-9">
        <li>
          <Link
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
            href="https://github.com/karchunt"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
            href="https://www.linkedin.com/in/karchuntan"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
            href="https://karchunt.substack.com"
          >
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
            href="mailto:karchuntan.1999@gmail.com"
          >
            karchuntan.1999@gmail.com
          </Link>
        </li>
      </ul>

      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        It is my hope that you can find something useful or helpful here. Thank
        you!
      </p>

      <div className="nx-mt-6 flex w-full flex-row flex-wrap">
        <AnimatedTooltip items={PERSONAL_IMAGES} />
      </div>

      <div className="nx-mt-6 flex w-full items-center rounded-2xl">
        <TextRevealCard text="My secret is here." revealText="It's a trick.">
          <TextRevealCardTitle>
            Sometimes, you need to reveal my secret.
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            This is a secret reveal card. Hover over the card to reveal the
            hidden secret.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
};

export default About;
