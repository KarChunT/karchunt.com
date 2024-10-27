import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import BlurFade from '@/components/ui/blur-fade';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { BorderBeam } from '@/components/ui/border-beam';
import confetti from 'canvas-confetti';

const Hero = () => {
  const words = ['World', 'Industry', 'Technology'];

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-16">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <BlurFade delay={0.25} inView>
          <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
            Revolutionize the{' '}
            <FlipWords
              className="text-primary dark:text-primary"
              words={words}
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary">Farm</span> with me
          </h1>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m an{' '}
            <span className="text-primary">
              Infrastructure and DevOps Engineer
            </span>{' '}
            at Intel. I love to code and design software architecture.
          </p>
        </BlurFade>

        <BlurFade delay={0.25 * 4} inView>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button asChild>
              <RainbowButton onClick={handleClick}>Congraz 🎉</RainbowButton>
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.25 * 5} inView>
          <div className="relative mt-7 flex max-h-[700px] max-w-[64rem] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            {/* video */}
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="/assets/videos/karchunt-video.mp4"
                thumbnailSrc="/assets/images/harold-vasquez-coding.jpg"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="/assets/videos/karchunt-video.mp4"
                thumbnailSrc="/assets/images/harold-vasquez-coding.jpg"
                thumbnailAlt="Hero Video"
              />
            </div>

            {/* Border beam */}
            <BorderBeam />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
