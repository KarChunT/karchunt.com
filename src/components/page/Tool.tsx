import { Feature } from '@/components/ui/feature';
import { TOOL } from '@/constants';

const Tool = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
          Awesome <span className="text-primary">Tools</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces good tools from here
        </p>
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {TOOL.map((tool, index) => {
          const ToolIcon = tool.icon;
          return (
            <Feature
              key={tool.title}
              {...tool}
              icon={<ToolIcon />}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tool;
