import { Calendar } from 'lucide-react';
import { SiAmd, SiIntel, SiSandisk } from 'react-icons/si';
import { FaV } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Senior IT Engineer',
    company: 'AMD',
    period: '02/2026 - Present',
    description: '',
    technologies: [
      'Linux',
      'Hypervisor',
      'Git',
      'Docker',
      'Ansible',
      'Automation',
    ],
    icon: SiAmd,
  },
  {
    title: 'Senior Engineer, Software Development Engineering (Apps)',
    company: 'SanDisk',
    period: '11/2025 - 01/2026',
    description: '',
    technologies: ['Python', 'Docker', 'REST API', 'Git', 'Flask'],
    icon: SiSandisk,
  },
  {
    title: 'Infrastructure & DevOps Engineer',
    company: 'Intel Corporation',
    period: '01/2023 - 09/2025',
    description: '',
    technologies: [
      'Python',
      'Kubernetes',
      'Docker',
      'REST API',
      'GitHub Action',
      'Git',
      'Linux',
      'Ansible',
      'PostgreSQL',
      'FastAPI',
      'Trivy',
      'CyberArk AAM',
      'TypeScript',
      'CI/CD',
      'Taskfile',
      'Rancher',
    ],
    icon: SiIntel,
  },
  {
    title: 'System Software Development Engineer',
    company: 'Intel Corporation',
    period: '09/2021 - 12/2022',
    description: '',
    technologies: [
      'Python',
      'REST API',
      'Bash',
      'Git',
      'Linux',
      'Power Automate',
      'Artifactory',
    ],
    icon: SiIntel,
  },
  {
    title: 'R&D Software Engineer Trainee',
    company: 'ViTrox Corporation Berhad',
    period: '01/2021 - 06/2021',
    description: '',
    technologies: ['C#', 'Java', 'Spring Boot', 'MVC'],
    icon: FaV,
  },
];

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            My <span className="text-primary">Work Experience</span>
          </h1>
          <p className="mt-4">
            A summary of my professional journey and the roles I've undertaken.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-(--breakpoint-md) px-6 md:px-16">
          <div className="relative ml-4">
            {/* Timeline line */}
            <div className="absolute inset-y-0 left-0 border-l-2" />

            {experiences.map(
              (
                {
                  company,
                  description,
                  period,
                  technologies,
                  title,
                  icon: Icon,
                },
                index,
              ) => (
                <div key={index} className="relative pb-12 pl-10 last:pb-0">
                  {/* Timeline Icon */}
                  <div className="bg-accent ring-background absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full ring-8">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 pt-2 sm:pt-1">
                    <p className="text-base font-medium">{company}</p>
                    <div>
                      <h3 className="text-primary text-lg font-semibold">
                        {title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm text-pretty sm:text-base">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
