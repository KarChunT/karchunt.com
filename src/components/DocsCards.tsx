import { DOCUMENTATION } from '@/src/app/constants';
import { Card, Cards } from 'fumadocs-ui/components/card';

export function DocsCards() {
  return (
    <Cards>
      {Object.values(DOCUMENTATION).map((doc) => {
        const Icon = doc.icon;
        return (
          <Card
            key={doc.title}
            title={doc.title}
            description={doc.description}
            href={doc.href}
            icon={<Icon />}
          />
        );
      })}
    </Cards>
  );
}
