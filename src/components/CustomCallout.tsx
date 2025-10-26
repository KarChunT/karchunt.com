'use client';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Info as InfoIcon,
  AlertTriangle as WarningIcon,
  CheckCircle2 as SuccessIcon,
  XCircle as ErrorIcon,
  Star as ImportantIcon,
  CircleQuestionMark as QuestionIcon,
  ChevronDown as ChevronDownIcon,
} from 'lucide-react';
import { useId, useEffect, useRef, useState } from 'react';

const textColorMap = {
  info: 'text-blue-500',
  success: 'text-green-500',
  warn: 'text-yellow-500',
  error: 'text-red-500',
  important: 'text-purple-500',
  question: 'text-orange-500',
};

const iconMap = {
  info: (
    <InfoIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-blue-500" />
  ),
  success: (
    <SuccessIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-green-500" />
  ),
  warn: (
    <WarningIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-yellow-500" />
  ),
  error: (
    <ErrorIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-red-500" />
  ),
  important: (
    <ImportantIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-purple-500" />
  ),
  question: (
    <QuestionIcon className="!h-4 !max-h-4 !min-h-4 !w-4 !max-w-4 !min-w-4 !text-orange-500" />
  ),
};

const borderColorMap = {
  info: 'border-blue-400',
  success: 'border-green-400',
  warn: 'border-yellow-400',
  error: 'border-red-400',
  important: 'border-purple-400',
  question: 'border-orange-400',
};

export function CustomCallout({
  type = 'info',
  title,
  children,
  collapsible = true,
  defaultOpen = true,
}: {
  type?: 'info' | 'warn' | 'success' | 'error' | 'important';
  title?: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen && collapsible);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);
  const regionId = useId();

  useEffect(() => {
    if (!collapsible) return;
    const el = contentRef.current;
    if (!el) return;
    if (open) {
      // expand to fit content
      setMaxHeight(`${el.scrollHeight}px`);
      const t = setTimeout(() => setMaxHeight('none'), 200); // allow transition then unset
      return () => clearTimeout(t);
    } else {
      // collapse: set fixed px then 0 so transition animates
      setMaxHeight(`${el.scrollHeight}px`);
      // next tick -> 0
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setMaxHeight('0px')),
      );
    }
  }, [open, collapsible, children]);

  return (
    <Alert
      className={`my-4 flex items-start gap-3 ${borderColorMap[type]} overflow-x-auto`}
    >
      {iconMap[type]}
      <div className="flex-1">
        <div className="flex items-start gap-3">
          {title && (
            <AlertTitle className={`${textColorMap[type]} line-clamp-0`}>
              {title}
            </AlertTitle>
          )}
          {collapsible && (
            <button
              aria-expanded={open}
              aria-controls={regionId}
              onClick={() => setOpen((s) => !s)}
              className="-mr-1 ml-auto inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5 focus:outline-none"
              title={open ? 'Collapse' : 'Expand'}
            >
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          )}
        </div>

        <div
          id={regionId}
          role={collapsible ? 'region' : undefined}
          aria-hidden={collapsible ? !open : undefined}
          ref={contentRef}
          style={
            collapsible
              ? {
                  maxHeight: maxHeight === 'none' ? undefined : maxHeight,
                  overflow: 'hidden',
                  transition: 'max-height 200ms ease',
                }
              : undefined
          }
        >
          <AlertDescription className={`${title ? 'pt-1' : ''} text-white`}>
            {children}
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
}
