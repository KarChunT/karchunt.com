import GoalsClient from '@/components/GoalsClient';

export const metadata = {
  title: '2026 Goals',
};

// achieved
// in-progress
// not-started
const goals: Goal[] = [
  {
    title: 'Docs: Write Linux Beginner Docs',
    status: 'in-progress',
    // achievedDate: '2026-01-30',
    // link: '/docs/linux',
  },
  {
    title: 'Project: Convert various image format to webp',
    status: 'not-started',
  },
  {
    title: 'Certification: Golden Kubestronaut',
    status: 'not-started',
  },
  {
    title: 'Blog: Self-hosted Docker registry',
    status: 'achieved',
    achievedDate: '2026-01-11',
    link: '/blog/self-hosted-docker-registry',
  },
  {
    title: 'Blog: Self-hosted Harbor',
    status: 'not-started',
  },
  {
    title: 'Blog: Self-hosted Rancher',
    status: 'not-started',
  },
  {
    title: 'Blog: Wireguard VPN on homelab',
    status: 'not-started',
  },
  {
    title: 'Project: Python Folium Map Visualization',
    status: 'not-started',
  },
  {
    title: 'Explore: devbox',
    status: 'not-started',
  },
  {
    title: 'Explore: localstack',
    status: 'not-started',
  },
];

const page = () => {
  return (
    <div className="@container container mx-auto min-h-screen max-w-5xl px-6 py-4 lg:py-8">
      <div className="px-4 text-center">
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          2026 <span className="text-primary">Goals</span>
        </h1>
        <p className="mt-4">
          Tracking my journey towards meaningful milestones.
        </p>
      </div>
      <div className="mt-8">
        <GoalsClient goals={goals} />
      </div>
    </div>
  );
};

export default page;
