import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Info as InfoIcon,
  AlertTriangle as WarningIcon,
  CheckCircle2 as SuccessIcon,
  XCircle as ErrorIcon,
  Star as ImportantIcon,
} from 'lucide-react';

const textColorMap = {
  info: 'text-blue-500',
  success: 'text-green-500',
  warn: 'text-yellow-500',
  error: 'text-red-500',
  important: 'text-purple-500',
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
};

const borderColorMap = {
  info: 'border-blue-400',
  success: 'border-green-400',
  warn: 'border-yellow-400',
  error: 'border-red-400',
  important: 'border-purple-400',
};

export function CustomCallout({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warn' | 'success' | 'error' | 'important';
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <Alert className={`my-4 flex items-start gap-3 ${borderColorMap[type]}`}>
      {iconMap[type]}
      <div>
        {title && (
          <AlertTitle className={`${textColorMap[type]} line-clamp-0`}>
            {title}
          </AlertTitle>
        )}
        <AlertDescription className={`${title ? 'pt-1' : ''} text-white`}>
          {children}
        </AlertDescription>
      </div>
    </Alert>
  );
}
