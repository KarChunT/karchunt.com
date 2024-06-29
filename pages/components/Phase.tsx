import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import Image from 'next/image';

export default function Phase() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-10">
      <h1 className="text-center text-[30px] font-bold leading-snug tracking-wide">
        3 phases of <span className="text-primary">my learning</span>
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 pt-10 lg:flex-row">
        <Card
          title="Learn whatever you can learn."
          icon={
            <MainContentWithIcon
              imgUrl="/phases/penguin-learn-removebg.webp"
              alt="learn"
              title="Learn"
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Apply the knowledge gained and challenge yourself."
          icon={
            <MainContentWithIcon
              imgUrl="/phases/penguin-challenge-removebg.webp"
              alt="apply-and-challenge"
              title="Apply & Challenge"
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
        </Card>
        <Card
          title="Document down the things you had learned."
          icon={
            <MainContentWithIcon
              imgUrl="/phases/penguin-document-removebg.webp"
              alt="document"
              title="Document"
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-green-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[20rem] w-full max-w-sm items-center justify-center border border-black/[0.2] p-4 dark:border-white/[0.2]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="mx-auto flex w-full items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className="relative -top-11 z-10 text-center text-xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

const MainContentWithIcon = ({
  imgUrl,
  alt,
  title,
}: {
  imgUrl: string;
  alt: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image src={imgUrl} alt={alt} width={65} height={65} />
      <h3 className="text-center text-2xl leading-snug tracking-wide">
        {title}
      </h3>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
