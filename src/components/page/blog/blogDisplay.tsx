import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { IconArrowRight, IconCalendar, IconUser } from '@tabler/icons-react';

const BlogDisplay = ({ title, description, href, date, author, tags }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-1 flex-col py-2">
        <Link href={href}>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
        </Link>

        <div className="text-muted-foreground mb-2 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <IconCalendar className="h-4 w-4" />
            {date &&
              new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
          </span>
          <span className="flex items-center gap-1">
            <IconUser className="h-4 w-4" />
            {author}
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
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
            <Button asChild variant="secondary">
              <Link href={href}>
                <IconArrowRight className="mr-2 h-4 w-4" />
                Read More
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDisplay;
