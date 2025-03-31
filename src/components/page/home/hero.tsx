'use client';

import React from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { IconCloud, IconCloudRain } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/ui/sparkles';
import { FlipWords } from '@/components/ui/flip-words';
import { AuroraText } from '@/components/ui/aurora-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { LineShadowText } from '@/components/ui/line-shadow-text';

import HeroTerminal from '@/components/page/home/heroTerminal';
import { HeroMarque } from '@/components/page/home/heroMarque';

import { JOBCOMPANY, JOBPOSITION, RAININGIMG, FLIPWORDS } from '@/constants';

const RainingIcon = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ x: `${Math.random() * 100}vw`, y: '-10vh', rotate: 0 }}
      animate={{
        y: '110vh',
        rotate: 360,
      }}
      transition={{
        y: {
          duration: Math.random() * 5 + 5, // 5-10 seconds
          repeat: Infinity,
          delay: delay,
          ease: 'linear',
        },
        rotate: {
          duration: Math.random() * 3 + 2, // 2-5 seconds
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <Image src={RAININGIMG} alt="raining-icon" width={48} height={48} />
    </motion.div>
  );
};

const Hero = () => {
  const count = 30;
  const [isRaining, setIsRaining] = React.useState(false);

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
    <div>
      <div className="relative h-80 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#22C55E,transparent_90%)] before:opacity-100 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-2 after:border-b after:border-[#7876c566] after:bg-zinc-900">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <Sparkles
          density={400}
          size={1.4}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
      <div className="relative z-10 container mx-auto -mt-40 flex max-w-[64rem] flex-col place-content-center items-center gap-4 text-center md:-mt-[168px]">
        <div className="bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium">
          Revolutionize the
          <FlipWords
            className="text-primary dark:text-primary"
            words={FLIPWORDS}
          />
        </div>
      </div>

      <article className="relative mx-auto flex w-2/3 flex-col items-center gap-4 pt-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
          <AuroraText>
            <LineShadowText className="italic" shadowColor="white">
              Farm
            </LineShadowText>
          </AuroraText>
          <span className="text-white"> with me</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-neutral-500 sm:text-xl sm:leading-8">
          I&apos;m an <span className="text-primary">{JOBPOSITION}</span> at{' '}
          <span className="text-intel">{JOBCOMPANY}</span>. I love to code and
          design software architecture.
        </p>

        <div className="flex space-x-4">
          <Button onClick={() => setIsRaining(!isRaining)}>
            Raining
            {isRaining ? (
              <IconCloud className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <IconCloudRain className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <Button asChild>
            <RainbowButton onClick={handleClick}>Congraz 🎉</RainbowButton>
          </Button>
        </div>
      </article>

      <div className="relative mx-auto mt-8 flex max-w-lg flex-col items-center justify-center overflow-hidden rounded-lg">
        <div className="group relative cursor-pointer">
          <HeroTerminal />
          <BorderBeam />
        </div>
      </div>

      <HeroMarque />

      {isRaining && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {[...Array(count)].map((_, i) => (
            <RainingIcon key={i} delay={i * 0.2} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
