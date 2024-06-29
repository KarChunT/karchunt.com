import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/Spotlight';
import { FlipWords } from '@/components/ui/flip-words';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
  const textGenerateWords = 'Gateway Farm';
  const flipWords = ['world', 'industry', 'technology'];

  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="green"
      />

      <div className="relative z-10 mt-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <div className="max-w-80 text-center text-xs uppercase tracking-widest">
            Revolutionize the
            <FlipWords words={flipWords} />
          </div>

          <TextGenerateEffect
            words={textGenerateWords}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="pt-6 text-center text-lg md:tracking-wider lg:text-2xl">
            I&apos;m an Infrastructure and DevOps Engineer at Intel. I love to
            code and design software architecture.
          </p>

          <div className="flex items-center justify-center gap-2 pt-6">
            <Button asChild>
              <Link href="/blog">Blog</Link>
            </Button>

            <Button variant="secondary" asChild>
              <Link href="/compiler">Compiler</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
