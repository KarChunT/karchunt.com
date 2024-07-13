import { PROJECTS } from '@/constants';
import { Feature } from '@/components/ui/feature';

const Project = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
          My <span className="text-primary">Project</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces my project from here
        </p>
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project, index) => {
          const ProjectIcon = project.icon;
          return (
            <Feature
              key={project.title}
              {...project}
              icon={<ProjectIcon />}
              index={index}
            />
          );
        })}
      </div>
    </div>

    // <div className="nx-mt-6">
    //   <BentoGrid className="mx-auto max-w-4xl">
    //     {PROJECTS.map((item, i) => (
    //       <BentoGridItem
    //         key={i}
    //         title={item.title}
    //         description={item.description}
    //         icon={<IconSourceCode className="h-4 w-4 text-neutral-500" />}
    //         className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
    //         link={item.href}
    //       />
    //     ))}
    //   </BentoGrid>
    // </div>
  );
};

export default Project;
