import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AlgorithmCard = ({
  title,
  description,
  VisualizerComponent,
}: {
  title: string;
  description: string;
  VisualizerComponent: React.ComponentType<any>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <VisualizerComponent />
      </CardContent>
    </Card>
  );
};

export default AlgorithmCard;
