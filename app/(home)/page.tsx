import React from 'react';
import { Heatmap } from '@paper-design/shaders-react';
import { getBasePath } from '@/lib/utils';
import CoreValues from '@/components/home/CoreValues';

const MemoizedHeatmap = React.memo(Heatmap);

export default function Home() {
  const basePath = getBasePath();
  const heatmapProps = React.useMemo(
    () => ({
      width: 500,
      height: 500,
      image: `${basePath}/penguin-nobg.webp`,
      colors: ['#facc14'],
      colorBack: '#00000000',
      contour: 0.8,
      angle: 0,
      noise: 0,
      innerGlow: 0.3,
      outerGlow: 0.3,
      speed: 1,
      scale: 0.75,
    }),
    [basePath],
  );

  return (
    <div className="relative w-full">
      <section className="relative z-1 mx-auto max-w-full">
        <div className="z-10 mx-auto max-w-screen-xl gap-12 px-4 pt-16 text-gray-600 sm:pt-20 md:px-8">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <h1 className="group mx-auto w-fit rounded-3xl border-[2px] border-white/5 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent px-5 py-2 text-sm text-gray-300">
              Reinforces continuous growth and adaptation
            </h1>

            <h2 className="mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl">
              Blending and amplifying{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-100 bg-clip-text text-transparent">
                each skill's strength
              </span>
            </h2>
            <p className="mx-auto text-gray-300">
              Curated hub for documentating — my journeys
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Heatmap {...heatmapProps} />
          </div>
        </div>
        <CoreValues />
      </section>
    </div>
  );
}
