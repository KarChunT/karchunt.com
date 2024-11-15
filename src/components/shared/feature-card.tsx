import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BorderBeam } from '@/components/ui/border-beam';
import Link from 'next/link';

function generateRandomHexColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

function generateRandomDelayNumber() {
  return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
}

export default function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  const colorFrom = generateRandomHexColor();
  const colorTo = generateRandomHexColor();
  const delay = generateRandomDelayNumber();

  return (
    <div className="relative overflow-hidden rounded-lg bg-background">
      <Link href={href}>
        <Card className="h-full border-neutral-700">
          <CardHeader>
            <div className="flex flex-col">
              <div className="rounded-full pb-3 text-primary-foreground">
                {icon}
              </div>
              <CardTitle>{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
      <BorderBeam
        colorFrom={colorFrom}
        colorTo={colorTo}
        size={250}
        duration={12}
        delay={delay}
      />
    </div>
  );
}
