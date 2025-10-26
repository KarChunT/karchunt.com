'use client';

import Link from 'next/link';
import { PageMapItem } from 'nextra';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, X, GripVertical } from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  level: number;
  href?: string;
  children?: DocSection[];
}

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
  const [positionY, setPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [fixedX, setFixedX] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Match /docs/first-segment
  const match = pathname.match(/^\/docs\/[^\/]+/);
  const docsRootPath = match ? match[0] : '/docs';
  const currentDocRoot = pageMap.find(
    (item) => 'route' in item && (item as any).route === docsRootPath,
  );
  const currentDocRootChildren = (currentDocRoot as any)?.children ?? [];
  console.log(currentDocRootChildren);

  const hierarchy: DocSection[] = [];

  const convertItem = (item: any, level: number): DocSection => {
    const node: DocSection = {
      id: item.name ?? item.title ?? Math.random().toString(),
      title: item.title ?? item.name ?? '',
      level,
      href: item.route,
      children: [],
    };

    if (item.children && Array.isArray(item.children) && item.children.length) {
      // skip the first child like the top-level behavior
      const childItems = item.children.slice(1);
      if (childItems.length) {
        node.children = childItems.map((child: any) =>
          convertItem(child, level + 1),
        );
      } else {
        delete node.children;
      }
    } else {
      // remove empty children to keep shape clean
      delete node.children;
    }

    return node;
  };

  let currentSection: DocSection | null = null;

  // keep previous behavior of skipping first element if present
  (currentDocRootChildren ?? []).slice(1).forEach((item: any) => {
    if (item.type === 'separator') {
      // start a new section group
      currentSection = {
        id: item.name,
        title: item.title,
        level: 1,
        children: [],
      };
      hierarchy.push(currentSection);
    } else {
      // convert the item (and its nested children) into DocSection(s)
      const node = convertItem(item, currentSection ? 2 : 1);
      if (currentSection) {
        currentSection.children = currentSection.children || [];
        currentSection.children.push(node);
      } else {
        // no active separator — push as top-level entry
        hierarchy.push(node);
      }
    }
  });
  const updateFixedX = () => {
    const padding = 24;
    const buttonSize = 56;
    const newX = window.innerWidth - buttonSize - padding;
    // console.log(
    //   '[v0] Updating fixedX:',
    //   newX,
    //   'viewport width:',
    //   window.innerWidth,
    // );
    setFixedX(newX);
    return newX;
  };

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

  useEffect(() => {
    const setInitialPosition = () => {
      const padding = 20;
      const buttonSize = 56;
      const initialY = window.innerHeight - buttonSize - padding;
      // console.log(
      //   '[v0] Initial position - Y:',
      //   initialY,
      //   'viewport height:',
      //   window.innerHeight,
      // );
      setPositionY(initialY);
      updateFixedX();
    };

    setInitialPosition();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const padding = 20;
      const buttonSize = 56;
      const maxY = window.innerHeight - buttonSize - padding;

      // console.log(
      //   '[v0] Resize - viewport:',
      //   window.innerWidth,
      //   'x',
      //   window.innerHeight,
      // );
      setPositionY((prev) => {
        const newY = Math.max(padding, Math.min(prev, maxY));
        // console.log('[v0] Resize - Y position:', prev, '->', newY);
        return newY;
      });
      updateFixedX();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const calculatePanelPosition = () => {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      const panelRect = panelRef.current?.getBoundingClientRect();

      if (!buttonRect || !panelRect) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const panelWidth = panelRect.width;
      const panelHeight = panelRect.height;
      const gap = 16;
      const buttonSize = 56;

      if (isMobile) {
        const x = (viewportWidth - panelWidth) / 2;
        let y: number;
        const buttonBottom = positionY + buttonSize;
        const buttonTop = positionY;
        const middleThreshold = viewportHeight / 2;

        if (buttonTop < middleThreshold) {
          y = Math.min(buttonBottom + gap, viewportHeight - panelHeight - gap);
        } else {
          y = Math.max(buttonTop - panelHeight - gap, gap);
        }

        if (y < buttonBottom && y + panelHeight > buttonTop) {
          if (buttonTop > viewportHeight / 2) {
            y = Math.max(buttonTop - panelHeight - gap, gap);
          } else {
            y = Math.min(
              buttonBottom + gap,
              viewportHeight - panelHeight - gap,
            );
          }
        }

        setPanelPosition({ x: Math.max(gap, x), y });
        return;
      }

      let x = fixedX - panelWidth - gap;
      let y = positionY;

      if (x < gap) {
        x = gap;
      }

      const isBottomHalf = positionY > viewportHeight / 2;

      if (isBottomHalf) {
        y = positionY + buttonSize - panelHeight;
        if (y < gap) {
          y = gap;
        }
      } else {
        y = positionY;
        if (y + panelHeight > viewportHeight - gap) {
          y = viewportHeight - panelHeight - gap;
        }
      }

      y = Math.max(gap, Math.min(y, viewportHeight - panelHeight - gap));

      setPanelPosition({ x, y });
    };

    const timer = setTimeout(calculatePanelPosition, 0);
    window.addEventListener('resize', calculatePanelPosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePanelPosition);
    };
  }, [isOpen, positionY, isMobile, fixedX]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isOpen) return;
    setIsDragging(true);
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset(e.clientY - rect.top);
      // setDragOffset({
      //   x: e.clientX - rect.left,
      //   y: e.clientY - rect.top,
      // });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newY = e.clientY - dragOffset;

      const maxY = window.innerHeight - 60;

      setPositionY(Math.max(0, Math.min(newY, maxY)));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const renderHierarchy = (sections: DocSection[]) => {
    return (
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={section.level >= 2 && section.href ? section.href : '#'}
            >
              <button
                className="hover:bg-accent w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
                style={{ paddingLeft: `${section.level * 12}px` }}
              >
                {section.title}
              </button>
            </Link>
            {section.children && (
              <div className="mt-1">{renderHierarchy(section.children)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

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
          left: `${fixedX}px`,
          top: `${positionY}px`,
          cursor: isDragging ? 'grabbing' : isOpen ? 'default' : 'grab',
        }}
        // style={{
        //   left: `${position.x}px`,
        //   top: `${position.y}px`,
        //   cursor: isDragging ? 'grabbing' : isOpen ? 'default' : 'grab',
        // }}
        onMouseDown={handleMouseDown}
        onClick={() => !isDragging && setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <Card
          ref={panelRef}
          className="bg-card fixed z-40 flex h-[70vh] max-h-[600px] w-[90vw] max-w-md flex-col overflow-hidden shadow-2xl md:w-96"
          style={{
            left: `${panelPosition.x}px`,
            top: `${panelPosition.y}px`,
          }}
        >
          <div className="border-border bg-card flex items-center gap-2 border-b px-4 py-3">
            <GripVertical className="text-muted-foreground h-4 w-4" />
            <h2 className="text-foreground font-semibold">Documentation</h2>
          </div>

          <Tabs
            defaultValue={hierarchy.length !== 0 ? 'hierarchy' : 'toc'}
            className="flex flex-1 flex-col overflow-hidden"
          >
            <TabsList className="border-border bg-card w-full justify-start rounded-none border-b px-4">
              {hierarchy.length !== 0 && (
                <TabsTrigger
                  value="hierarchy"
                  className="data-[state=active]:bg-accent"
                >
                  Hierarchy
                </TabsTrigger>
              )}
              {toc.length > 1 && (
                <TabsTrigger
                  value="toc"
                  className="data-[state=active]:bg-accent"
                >
                  Table of Contents
                </TabsTrigger>
              )}
            </TabsList>

            {hierarchy.length !== 0 && (
              <TabsContent
                value="hierarchy"
                className="mt-0 flex-1 overflow-y-auto p-4"
              >
                {renderHierarchy(hierarchy)}
              </TabsContent>
            )}

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
