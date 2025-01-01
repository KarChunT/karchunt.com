import BlurFade from '@/components/ui/blur-fade';
import { IconCloud } from '@/components/ui/icon-cloud';
import { SKILLS_SLUGS } from '@/constants';
import BeamOfMe from '@/components/shared/beamOfMe';

const BlendingSkill = () => {
  return (
    <div className="mx-auto max-w-[64rem] px-4 pt-20">
      <div className="mb-12 text-center">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter">
            Blending and amplifying each skill&apos;s strength
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="mb-2 text-base text-neutral-500 md:text-lg">
            Principles, values, and skills blending seamlessly together,
            amplifying each other’s strengths will travel you along a path for
            creating your roadmap.
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.25 * 3} inView>
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* IconCloud */}
          <div className="relative mx-auto flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-neutral-700 bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={SKILLS_SLUGS} />
          </div>

          {/* Animated Beam */}
          <BeamOfMe />
        </div>
      </BlurFade>
    </div>
  );
};

export default BlendingSkill;
