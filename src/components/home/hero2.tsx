import { Heatmap } from '@paper-design/shaders-react';
import CoreValues from '@/components/home/coreValues';

const Hero2 = () => {
  return (
    <div className="relative w-full">
      {/* <div className="absolute top-0 z-[0] h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,230,100,0.3),rgba(255,255,255,0))]"></div> */}
      <section className="relative z-1 mx-auto max-w-full">
        <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]">
          <div className="absolute inset-0 [transform:rotateX(35deg)]">
            <div className="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:120px_120px] [background-repeat:repeat]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%"></div>
        </div>
        {/* Fix padding pt-28 for small screen */}
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
              Curated hub for documentating — myjourneys
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Heatmap
              width={500}
              height={500}
              image="/penguin-nobg.webp"
              colors={['#facc14']}
              colorBack="#00000000" // transparent
              contour={0.8}
              angle={0}
              noise={0}
              innerGlow={0.3}
              outerGlow={0.3}
              speed={1}
              scale={0.75}
            />
          </div>
        </div>
        <CoreValues />
      </section>
    </div>
  );
};

export default Hero2;
