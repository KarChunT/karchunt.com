import { Check, Circle, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const statusConfig = {
  achieved: {
    label: 'Achieved',
    badgeClass: 'bg-primary/15 text-primary border-primary/30',
  },
  'in-progress': {
    label: 'In Progress',
    badgeClass: 'bg-blue-500/15 text-blue-500 border-blue-500/30',
  },
  'not-started': {
    label: 'Not Started',
    badgeClass: 'bg-muted text-muted-foreground border-border',
  },
};

const GoalsClient = ({ goals }: { goals: Goal[] }) => {
  return (
    <div className="divide-border border-border bg-card divide-y rounded-lg border">
      {goals.map((goal) => {
        const isAchieved = goal.status === 'achieved';
        const config = statusConfig[goal.status];

        return (
          <div
            key={goal.title}
            className="hover:bg-muted/50 flex items-start gap-4 px-4 py-4 transition-colors sm:items-center sm:px-5"
          >
            <span className="mt-0.5 flex-shrink-0 sm:mt-0">
              {isAchieved ? (
                <span className="bg-accent relative flex h-5 w-5 items-center justify-center rounded-full">
                  <Check className="text-primary h-3 w-3" strokeWidth={3} />
                </span>
              ) : (
                <Circle
                  className="text-muted-foreground/50 h-5 w-5"
                  strokeWidth={1.5}
                />
              )}
            </span>

            <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
                {/* Status badge */}
                <Badge
                  variant="outline"
                  className={`w-28 text-xs font-medium whitespace-nowrap ${config.badgeClass}`}
                >
                  {config.label}
                </Badge>

                {/* Goal title */}
                <span
                  className={`text-sm leading-snug sm:text-base ${
                    isAchieved
                      ? 'text-muted-foreground decoration-muted-foreground/50 line-through'
                      : 'text-foreground'
                  }`}
                >
                  {goal.title}
                </span>
              </div>

              {/* Meta info: date and link */}
              <div className="text-muted-foreground flex items-center gap-3 text-xs sm:text-sm">
                {goal.achievedDate && (
                  <span className="whitespace-nowrap">
                    {new Date(goal.achievedDate).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                )}
                {goal.link && (
                  <a
                    href={goal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                    aria-label={`View ${goal.title}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalsClient;
