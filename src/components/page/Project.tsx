import { PROJECTS } from '@/constants';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid-with-link';
import { IconSourceCode } from '@tabler/icons-react';

const Project = () => {
  return (
    <div className="nx-mt-6">
      <BentoGrid className="mx-auto max-w-4xl">
        {PROJECTS.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={<IconSourceCode className="h-4 w-4 text-neutral-500" />}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
            link={item.href}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Project;
