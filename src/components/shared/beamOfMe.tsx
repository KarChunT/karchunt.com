import Image from 'next/image';
import React, { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';

const BeamOfMe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative mx-auto flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-neutral-700 bg-background px-20 pb-20 pt-8"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image
              src="/icons/docker.svg"
              alt="docker"
              height={24}
              width={24}
            />
          </Circle>
          <Circle ref={div5Ref}>
            <Image
              src="/icons/kubernetes.svg"
              alt="kubernetes"
              height={24}
              width={24}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image
              src="/icons/python.svg"
              alt="python"
              height={24}
              width={24}
            />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Image
              src="/personal/karchunt.jpg"
              alt="karchunt"
              height={36}
              width={36}
            />
          </Circle>
          <Circle ref={div6Ref}>
            <Image
              src="/icons/fastapi.svg"
              alt="fastapi"
              height={24}
              width={24}
            />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image src="/icons/git.svg" alt="git" height={24} width={24} />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
              src="/icons/githubactions.svg"
              alt="githubactions"
              height={24}
              width={24}
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
};

export default BeamOfMe;
