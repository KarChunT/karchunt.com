import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PERSONAL } from '@/constants';
import { FlipWords } from '@/components/ui/flip-words';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

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
        'bg-emerald-100 px-1 py-0.5 font-bold text-primary dark:bg-emerald-700/[0.2]',
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
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        <FlipWords className="px-0" words={flipWords} />
        😎
      </h1>

      <p className="mt-6 leading-7 first:mt-0">
        Hi, I&apos;m Kar Chun! I&apos;m an Infrastructure and DevOps Engineer at
        Intel. Welcome to my website, visit my{' '}
        <Link
          className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
          href="/blog/overview"
        >
          blog
        </Link>
        &nbsp;for documentation, tutorials, and more. I love to code and design
        software architecture.
      </p>

      <p className="mt-6 leading-7 first:mt-0">
        My ambition is to develop a new technology that can revolutionize the
        world. As part of my motivation to inspire people, this site shares what
        I have learned and studied previously. It would be the greatest thing I
        could ever hope for if someone looked at me and said,{' '}
        <Highlight>Thanks to you, I didn&apos;t give up</Highlight>.🥳
      </p>

      <p className="mt-6 leading-7 first:mt-0">
        You can contact me via these channels!
      </p>

      <ul className="mt-2 flex list-disc flex-col gap-2 pl-9">
        <li>
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="https://github.com/karchunt"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="https://www.linkedin.com/in/karchuntan"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="https://karchunt.substack.com"
          >
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            className="text-primary decoration-from-font [text-underline-position:from-font] hover:underline"
            href="mailto:karchuntan.1999@gmail.com"
          >
            karchuntan.1999@gmail.com
          </Link>
        </li>
      </ul>

      <p className="mt-6 leading-7 first:mt-0">
        It is my hope that you can find something useful or helpful here. Thank
        you!
      </p>

      <AnimatedTestimonials testimonials={PERSONAL} />
    </div>
  );
};

export default About;
