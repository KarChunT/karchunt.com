import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Comments from '@/components/Comments';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { DocsCards } from '@/components/DocsCards';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import { Step, Steps as BaseSteps } from 'fumadocs-ui/components/steps';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { Children, isValidElement, type ReactNode } from 'react';
import {
  RAMVisualization,
  StaticArrayVisualization,
  DynamicArrayVisualization,
  StackVisualization,
  SinglyLinkedListVisualization,
  DoublyLinkedListVisualization,
  BubbleSortVisualization,
  LinearSearchVisualization,
  BinarySearchVisualization,
} from '@/components/algoVisualizerSub/visualizers';
import { Mermaid } from '@/components/mdx/mermaid';
import { TypeTable } from 'fumadocs-ui/components/type-table';

function CustomSteps({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const steps: ReactNode[][] = [];
  let currentStep: ReactNode[] = [];

  items.forEach((item) => {
    const isHeading =
      isValidElement(item) &&
      ((typeof item.type === 'string' && /^h[1-6]$/.test(item.type)) ||
        (typeof item.type === 'function' && /^h[1-6]$/i.test(item.type.name)));

    if (isHeading) {
      if (currentStep.length > 0) {
        steps.push(currentStep);
      }
      currentStep = [item];
    } else if (currentStep.length > 0) {
      currentStep.push(item);
    }
  });

  if (currentStep.length > 0) {
    steps.push(currentStep);
  }

  return (
    <BaseSteps>
      {steps.map((content, index) => (
        <Step key={index}>{content}</Step>
      ))}
    </BaseSteps>
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    Steps: CustomSteps,
    FileTree: Object.assign(Files, { File, Folder }),
    Tabs: Object.assign(TabsComponents.Tabs, { Tab: TabsComponents.Tab }),
    img: (props) => <ImageZoom {...(props as any)} />,
    Files,
    File,
    Folder,
    Accordion,
    Accordions,
    ImageZoom,
    TypeTable,
    DocsCards,
    Comments,
    Mermaid,
    RAMVisualization,
    StaticArrayVisualization,
    DynamicArrayVisualization,
    StackVisualization,
    SinglyLinkedListVisualization,
    DoublyLinkedListVisualization,
    BubbleSortVisualization,
    LinearSearchVisualization,
    BinarySearchVisualization,
  };
}
