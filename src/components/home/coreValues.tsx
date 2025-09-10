'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Flame,
  NotebookPen,
  PenTool,
  Sparkles,
  Users,
  BookOpen,
} from 'lucide-react';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        {/* <div className="text-primary mt-4 flex items-center text-sm">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div> */}
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'Build with Passion',
    description:
      'Passion means everything to me, as part of my passion and motivation, I love to inspire people and my ambition is to develop a new technology that can revolutionize the world.',
    icon: <Sparkles className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Learn, build, and apply',
    description:
      'I learn technical skills from many sources, and then I will document them, but the main thing for me is understanding and knowing how to apply them.',
    icon: <BookOpen className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Amplifying Strengths Through Synergy',
    description:
      'Principles, values, and skills blending seamlessly together, amplifying each other’s strengths will travel you along a path for creating your roadmap.',
    icon: <Users className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Fuels the fire',
    description:
      'Making everything you do powerful and engaging. Aesthetically pleasing and intellectually stimulating.',
    icon: <Flame className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Documentation & Taught by Professionals',
    description:
      'Learn directly from top engineers and founders with real-world experience, pushing you to not just create but improve and innovate.',
    icon: <NotebookPen className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Discover the beauty of coding and architecture design',
    description:
      'Exploring the synergy between coding and architectural design is the beauty of the software system in terms of principles of structure, creativity, and problem-solving.',
    icon: <PenTool className="size-6" />,
    size: 'large' as const,
  },
];

export default function BentoGrid1() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            className={cn(
              item.size === 'large'
                ? 'md:col-span-4'
                : item.size === 'medium'
                  ? 'md:col-span-3'
                  : 'md:col-span-2',
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}