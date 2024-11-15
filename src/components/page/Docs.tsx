import { DOCUMENTATION } from '@/constants';
import FeatureCard from '@/components/shared/feature-card';

const Docs = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-10">
      {/* header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          My <span className="text-primary">Documentation</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces my documentation from here.
        </p>
      </div>

      <div className="py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTATION.map((doc) => {
            return (
              <FeatureCard
                key={doc.title}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                href={doc.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Docs;
