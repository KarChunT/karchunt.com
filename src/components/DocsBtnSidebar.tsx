'use client';

import Link from 'next/link';
import { PageMapItem } from 'nextra';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, X, GripVertical } from 'lucide-react';

const DocsBtnSidebar = ({ pageMap }: { pageMap: PageMapItem[] }) => {
  const pathname = usePathname();

  if (pathname === '/docs/' || pathname === '/docs') {
    return <></>;
  }

  // TOC state
  const [toc, setToc] = useState<
    { id: string; text: string; level: number; href?: string }[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Extract headings from the DOM when the panel opens
  useEffect(() => {
    if (!isOpen) return;

    // Wait for DOM to update
    const timer = setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll(
          'main h1, main h2, main h3, main h4, main h5, main h6',
        ),
      ) as HTMLHeadingElement[];
      const tocItems = headings
        .filter((heading) => heading.innerText.trim() !== '')
        .filter((heading) => heading.id !== '')
        .map((heading) => ({
          id: heading.id,
          text: heading.innerText,
          level: Number(heading.tagName.replace('H', '')),
          href: `#${heading.id}`,
        }));
      setToc(tocItems);
    }, 0);

    return () => clearTimeout(timer);
  }, [isOpen, pathname]);

  const renderToc = (
    toc: { id: string; text: string; level: number; href?: string }[],
  ) => {
    return (
      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id}>
            <Link href={item.level === 1 ? '#' : item.href || '#'}>
              <button
                className="hover:bg-accent w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
                style={{ paddingLeft: `${item.level * 12}px` }}
              >
                {item.text}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <Button
        ref={buttonRef}
        size="icon"
        className="bg-primary hover:bg-primary/90 fixed z-50 h-14 w-14 cursor-move rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          right: '2rem', // Add this line
          bottom: '2rem', // Add this line
          left: 'auto', // Ensure left is unset
          top: 'auto', // Ensure top is unset
          cursor: isDragging ? 'grabbing' : isOpen ? 'default' : 'grab',
        }}
        onClick={() => !isDragging && setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <Card
          ref={panelRef}
          className="bg-card fixed z-40 flex h-[70vh] max-h-[600px] w-[90vw] max-w-md flex-col overflow-hidden shadow-2xl md:w-96"
          style={{
            right: '2rem', // Match the button's right
            bottom: '5.5rem', // Place above the button (button is 3.5rem tall + margin)
            left: 'auto',
            top: 'auto',
          }}
        >
          <div className="border-border bg-card flex items-center gap-2 border-b px-4 py-3">
            <GripVertical className="text-muted-foreground h-4 w-4" />
            <h2 className="text-foreground font-semibold">Documentation</h2>
          </div>

          <Tabs
            defaultValue={'toc'}
            className="flex flex-1 flex-col overflow-hidden"
          >
            <TabsList className="border-border bg-card w-full justify-start rounded-none border-b px-4">
              {toc.length > 1 && (
                <TabsTrigger
                  value="toc"
                  className="data-[state=active]:bg-accent"
                >
                  Table of Contents
                </TabsTrigger>
              )}
            </TabsList>

            {toc.length > 1 && (
              <TabsContent
                value="toc"
                className="mt-0 flex-1 overflow-y-auto p-4"
              >
                {renderToc(toc)}
              </TabsContent>
            )}
          </Tabs>
        </Card>
      )}
    </>
  );
};

export default DocsBtnSidebar;
