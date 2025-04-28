import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';

const ProjectDisplay = ({
  title,
  description,
  href,
  languages,
  demoUrl,
  repoUrl,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-1 flex-col py-2">
        <Link href={href}>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
        </Link>

        <div className="mt-auto flex flex-col gap-3">
          <div className="mb-2 flex flex-wrap gap-2">
            {languages.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary text-black"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {demoUrl && (
              <Button asChild variant="default">
                <Link href={demoUrl} target="_blank">
                  <IconExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {repoUrl && (
              <Button asChild variant="secondary">
                <Link href={repoUrl} target="_blank">
                  <IconBrandGithub className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDisplay;
