'use client';
import { Share } from 'lucide-react';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Control({ url }: { url: string }): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClick = (): void => {
    setOpen(true);
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              buttonVariants({ className: 'gap-2', variant: 'secondary' }),
            )}
          >
            <Share className="size-4" />
            Share
          </button>
        </TooltipTrigger>

        <TooltipContent className="bg-fd-popover text-fd-popover-foreground rounded-lg border p-2 text-sm">
          Copied
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
