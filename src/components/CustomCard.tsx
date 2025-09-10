import * as React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

interface CustomCardProps {
  title: React.ReactNode;
  children?: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, children }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{children}</CardDescription>
      </CardHeader>
    </Card>
  );
};

interface CustomCardsProps {
  children: React.ReactNode;
}

const CustomCards: React.FC<CustomCardsProps> = ({ children }) => {
  return (
    <div className={`mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-2`}>
      {children}
    </div>
  );
};

export { CustomCard, CustomCards };
export default CustomCard;
