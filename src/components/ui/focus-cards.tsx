'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const [loading, setLoading] = useState(true);
    return (
      <div
        // onMouseEnter={() => setHovered(index)}
        // onMouseLeave={() => setHovered(null)}
        className={cn(
          'relative mx-auto overflow-hidden rounded-lg transition-all duration-300 ease-out',
          hovered !== null && hovered !== index && 'scale-[0.98] blur-sm',
        )}
        style={{ minHeight: 300 }}
      >
        {loading && (
          <div className="absolute inset-0 z-10 animate-pulse bg-gray-200">
            <div className="bg-gray-300" />
          </div>
        )}
        <span style={{ opacity: loading ? 0 : 1, display: 'block' }}>
          <ImageZoom
            src={card.src}
            alt={`${index}`}
            width={500}
            height={500}
            onLoad={() => setLoading(false)}
          />
        </span>
      </div>
    );
  },
);

Card.displayName = 'Card';

type Card = {
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
