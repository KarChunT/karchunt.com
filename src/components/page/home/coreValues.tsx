'use client';

import React, { useState } from 'react';
import { COREVALUES } from '@/constants';
import BlurFade from '@/components/ui/blur-fade';
import { BorderBeam } from '@/components/ui/border-beam';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const CoreValues = () => {
  type ImageKey = keyof typeof COREVALUES;
  const firstKey = Object.keys(COREVALUES)[0] as ImageKey;

  const [activeItem, setActiveItem] = useState<ImageKey>(firstKey);

  return (
    <div className="mx-auto max-w-[64rem] px-4 py-16">
      <div className="mb-8 text-center">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter">
            Synergy of my three core values
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="mb-2 text-base text-neutral-500 md:text-lg">
            Fuels the fire, making everything you do powerful and engaging.
            Aesthetically pleasing and intellectually stimulating. Reinforces
            continuous growth and adaptation, pushing you to not just create,
            but improve and innovate.
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.25 * 3} inView>
        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            {Object.entries(COREVALUES).map(([key, { title, content }]) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-base">
                    {title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="absolute inset-0 right-0 ml-auto w-15 border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="bg-background relative aspect-76/59 w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    src={COREVALUES[activeItem].srcImage}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={COREVALUES[activeItem].title}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="dark:via-green/50 from-transparent via-green-700 to-transparent"
            />
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default CoreValues;
