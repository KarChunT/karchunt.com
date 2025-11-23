'use client';

import { useMDXComponents } from 'nextra-theme-docs';
import { Code, Mermaid, Playground, Pre, Tabs } from 'nextra/components';
import { MdxIcon } from 'nextra/icons';
import type { ComponentProps, FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_MDX = `# Playground Showcase

Welcome to the **Nextra MDX Playground**!  
This demo showcases various MDX features and components.

---

## Headings

### H3 Heading

#### H4 Heading

---

## Lists

- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2

---

## Code Block

\`\`\`tsx
function greet(name: string) {
  return \`Hello, \${name}!\`;
}
console.log(greet("Nextra"));
\`\`\`

---

## Table

| Feature      | Supported | Notes                |
| ------------ | :-------: | -------------------- |
| Headings     | ✅        | All levels           |
| Lists        | ✅        | Ordered & unordered  |
| Code blocks  | ✅        | Syntax highlighting  |
| Tables       | ✅        | Markdown tables      |
| Images       | ✅        | Local & remote       |
| Callouts     | ✅        | Info, warning, etc.  |
| Mermaid      | ✅        | Diagrams             |

---

## Callout

> 💡 **Tip:** You can use callouts to highlight important information.

---

## Mermaid Diagram

\`\`\`mermaid
graph TD
  A[Nextra Playground] --> B[MDX Features]
  B --> C[Code Blocks]
  B --> D[Tables]
  B --> E[Tabs]
\`\`\`
`;

export const PlaygroundDemo: FC = () => {
  const [rawMdx, setRawMdx] = useState(DEFAULT_MDX);
  const handleInput: NonNullable<ComponentProps<'span'>['onInput']> =
    useCallback((e) => {
      setRawMdx(e.currentTarget.textContent ?? '');
    }, []);

  const spanRef = useRef<HTMLSpanElement>(null!);
  const initialRender = useRef(false);

  useEffect(() => {
    if (!initialRender.current) {
      initialRender.current = true;
      spanRef.current.textContent = rawMdx;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- only on mount

  return (
    <div className="min-h-screen">
      <div className="@container container mx-auto max-w-7xl px-6 py-4 lg:py-8">
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Pre
            data-filename="MDX"
            icon={<MdxIcon height="1em" className="shrink-0" />}
          >
            <Code>
              <span
                ref={spanRef}
                contentEditable
                suppressContentEditableWarning
                className="outline-none"
                onInput={handleInput}
              />
            </Code>
          </Pre>
          <div>
            <Playground
              fallback={
                <div className="flex h-full items-center justify-center text-4xl">
                  Loading playground...
                </div>
              }
              source={rawMdx}
              components={useMDXComponents({ Mermaid, $Tabs: Tabs })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundDemo;
