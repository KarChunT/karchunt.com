import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Comments from '@/src/components/Comments';
import { Step, Steps as BaseSteps } from 'fumadocs-ui/components/steps';
import { Children, isValidElement, type ReactNode } from 'react';

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
    ...components,
    Steps: CustomSteps,
    Comments,
  };
}
