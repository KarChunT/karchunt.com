'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { DOCUMENTATION } from '@/app/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DocSelectProps {
  currentHref?: string;
  directShow?: boolean;
}

export function DocSelect({ currentHref, directShow = false }: DocSelectProps) {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(value);
  };

  const activeDoc = React.useMemo(() => {
    if (!currentHref) return null;
    const currentSegments = currentHref.split('/').filter(Boolean);
    if (currentSegments.length < 2) return null;

    return Object.values(DOCUMENTATION).find((doc) => {
      const docSegments = doc.href.split('/').filter(Boolean);
      return (
        docSegments[0] === currentSegments[0] &&
        docSegments[1] === currentSegments[1]
      );
    });
  }, [currentHref]);

  const activeValue = activeDoc ? activeDoc.href : currentHref;

  if (directShow) {
    return (
      <div className="mb-8 flex flex-wrap gap-2">
        {Object.values(DOCUMENTATION).map((doc) => {
          const isActive = activeValue === doc.href;
          const Icon = doc.icon;
          return (
            <button
              key={doc.href}
              onClick={() => handleValueChange(doc.href)}
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground border-primary font-medium shadow-sm'
                  : 'border-input text-muted-foreground hover:border-accent/50 hover:bg-muted hover:text-foreground bg-transparent',
              )}
            >
              <Icon className="size-4" />
              <span>{doc.title}</span>
              {isActive && <Check className="ml-1 size-3.5" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <Select onValueChange={handleValueChange} value={activeValue}>
      <SelectTrigger className="w-full sm:w-45">
        <SelectValue placeholder="Select tag" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(DOCUMENTATION).map((doc) => {
          return (
            <SelectItem key={doc.href} value={doc.href}>
              <doc.icon /> {doc.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
