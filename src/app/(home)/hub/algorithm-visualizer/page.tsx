'use client';

import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import AlgorithmCard from '@/components/algoVisualizerSub/algorithmCard';
import BubbleSortVisualizer from '@/components/algoVisualizerSub/bubbleSort';
import QueueFIFOVisualizer from '@/components/algoVisualizerSub/queueFIFO';

const algorithms: AlgorithmVisualizerSchema = {
  Sorting: {
    'Bubble Sort': {
      title: 'Bubble Sort Algorithm',
      description:
        "Watch how bubble sort compares adjacent elements and swaps them if they're in the wrong order. Red bars indicate elements being compared, green bars are sorted.",
      VisualizerComponent: BubbleSortVisualizer,
    },
  },
  Queue: {
    'Queue FIFO': {
      title: 'Queue FIFO Algorithm',
      description:
        'Visualize the First-In-First-Out (FIFO) behavior of a queue. Elements are added to the rear (enqueue) and removed from the front (dequeue).',
      VisualizerComponent: QueueFIFOVisualizer,
    },
  },
};

const page = () => {
  return (
    <div className="mt-16">
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Algorithm <span className="text-primary">Visualizer</span>
          </h1>
          <p className="mt-4">
            Interactive animations of data structures and algorithms.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Tabs className="w-full" items={Object.keys(algorithms)}>
            {Object.entries(algorithms).map(([category, algorithms]) => (
              <Tab key={category} value={category}>
                <Tabs className="w-full" items={Object.keys(algorithms)}>
                  {Object.entries(algorithms).map(([algoName, algoData]) => (
                    <Tab key={algoName} value={algoName}>
                      <AlgorithmCard
                        title={algoData.title}
                        description={algoData.description}
                        VisualizerComponent={algoData.VisualizerComponent}
                      />
                    </Tab>
                  ))}
                </Tabs>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
