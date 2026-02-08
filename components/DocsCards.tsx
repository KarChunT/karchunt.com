import { DOCUMENTATION } from '@/app/constants';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { GraphView } from '@/components/graph-view';
import { buildGraph } from '@/lib/build-graph';

export function DocsCards() {
  return (
    <div className="flex flex-col gap-4">
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
      <hr className="mt-3 mb-1" />
      <div>
        Here is the graph of all the documentation. <br />
        You can click on the nodes to navigate to the documentation.
        <GraphView graph={buildGraph()} />
      </div>
    </div>
  );
}
