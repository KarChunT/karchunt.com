import { DOCUMENTATION_SECTIONS } from '@/constants';
import FeatureCard from '@/components/shared/feature-card';

const page = () => {
  return (
    <div className="container mx-auto py-10">
      {/* header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          My <span className="text-primary">Documentation</span>
        </h1>
        <p className="text-center text-lg">
          The road to freedom shares and introduces good tools from here
        </p>
      </div>

      <div className="py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTATION_SECTIONS.map((doc) => {
            const docRef = doc.href + (doc.items[0]?.items?.[0]?.href ?? '');
            return (
              <FeatureCard
                key={doc.key}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                href={docRef}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
