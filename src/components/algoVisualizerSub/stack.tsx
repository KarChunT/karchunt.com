'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, Plus, Minus, Search } from 'lucide-react';

type StackElement = {
  value: number;
  id: string;
  address: string;
  isHighlighted?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  isNew?: boolean;
};

type Operation =
  | { type: 'push'; value: number }
  | { type: 'pop' }
  | { type: 'peek' };

const INITIAL_STACK: StackElement[] = [
  { value: 42, id: '1', address: '0x5000' },
  { value: 17, id: '2', address: '0x5004' },
  { value: 89, id: '3', address: '0x5008' },
];

const StackVisualization = () => {
  const [stack, setStack] = useState<StackElement[]>(INITIAL_STACK);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<Operation | null>(
    null,
  );
  const [operationQueue, setOperationQueue] = useState<Operation[]>([]);
  const [speed, setSpeed] = useState(500);

  // Form inputs
  const [pushValue, setPushValue] = useState('');

  const generateAddress = (index: number) => {
    return `0x${(0x5000 + index * 4).toString(16).toUpperCase()}`;
  };

  const resetStack = useCallback(() => {
    setStack(INITIAL_STACK);
    setCurrentOperation(null);
    setOperationQueue([]);
    setIsPlaying(false);
  }, []);

  const executeOperation = useCallback(
    (operation: Operation) => {
      setCurrentOperation(operation);

      switch (operation.type) {
        case 'push':
          const newElement: StackElement = {
            value: operation.value,
            id: Date.now().toString(),
            address: generateAddress(stack.length),
            isNew: true,
          };

          setStack((prev) => [...prev, newElement]);
          break;

        case 'pop':
          if (stack.length > 0) {
            setStack((prev) =>
              prev.map((element, idx) => ({
                ...element,
                isDeleted: idx === prev.length - 1,
              })),
            );

            setTimeout(() => {
              setStack((prev) => prev.slice(0, -1));
            }, 500);
          }
          break;

        case 'peek':
          if (stack.length > 0) {
            setStack((prev) =>
              prev.map((element, idx) => ({
                ...element,
                isHighlighted: idx === prev.length - 1,
              })),
            );
          }
          break;
      }

      setTimeout(() => {
        setStack((prev) =>
          prev.map((element) => ({
            ...element,
            isHighlighted: false,
            isActive: false,
            isNew: false,
          })),
        );
        setCurrentOperation(null);
      }, speed);
    },
    [speed, stack.length],
  );

  const addToQueue = (operation: Operation) => {
    setOperationQueue((prev) => [...prev, operation]);

    if (!isPlaying && !currentOperation) {
      setIsPlaying(true);
    }
  };

  // Auto mode execution
  useEffect(() => {
    if (!isPlaying || operationQueue.length === 0 || currentOperation) return;

    const timer = setTimeout(() => {
      const [nextOp, ...remaining] = operationQueue;
      setOperationQueue(remaining);
      executeOperation(nextOp);

      if (remaining.length === 0) {
        setIsPlaying(false);
      }
    }, speed + 100);

    return () => clearTimeout(timer);
  }, [isPlaying, operationQueue, currentOperation, executeOperation, speed]);

  return (
    <div className="mt-6 space-y-6">
      {/* Stack Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Stack Visualization</span>
            {currentOperation && (
              <Badge variant="secondary" className="ml-auto">
                {currentOperation.type === 'push' &&
                  `Pushing ${currentOperation.value}`}
                {currentOperation.type === 'pop' && 'Popping from stack'}
                {currentOperation.type === 'peek' && 'Peeking at top'}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-center gap-6">
            <div className="text-muted-foreground font-mono text-sm">
              Top →{' '}
              {stack.length > 0 ? stack[stack.length - 1].address : 'null'}
            </div>
          </div>

          <div className="relative mb-6 flex flex-col items-center justify-end">
            {/* Stack container - bucket style */}
            <div className="border-border bg-muted/20 relative flex min-w-[200px] flex-col-reverse items-center gap-2 rounded-lg border-2 p-4">
              {stack.length === 0 ? (
                <div className="text-muted-foreground py-8 text-center">
                  Stack is empty
                </div>
              ) : (
                stack.map((element, index) => (
                  <div
                    key={element.id}
                    className="flex w-full flex-col items-center gap-1"
                  >
                    <div
                      className={`flex h-16 w-40 transform items-center justify-center rounded-lg border-2 font-mono transition-all duration-500 ${element.isHighlighted ? 'border-chart-2 bg-chart-2/20 scale-105' : ''} ${element.isDeleted ? 'border-destructive bg-destructive/20 scale-75 opacity-50' : ''} ${element.isNew ? 'border-chart-3 bg-chart-3/20 scale-105' : ''} ${!element.isHighlighted && !element.isDeleted && !element.isNew ? 'border-border bg-card' : ''} `}
                    >
                      <div className="flex flex-col items-center">
                        <div className="text-muted-foreground font-mono text-xs">
                          {element.address}
                        </div>
                        <div className="text-xl font-bold">{element.value}</div>
                      </div>
                    </div>
                    {index === stack.length - 1 && (
                      <div className="text-chart-2 text-xs font-semibold">
                        ← TOP
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="text-muted-foreground text-center text-sm">
            Stack Size: {stack.length} |
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-chart-2 bg-chart-2/20 h-3 w-3 rounded"></div>
              Peek
            </span>
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-chart-3 bg-chart-3/20 h-3 w-3 rounded"></div>
              Push
            </span>
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-destructive bg-destructive/20 h-3 w-3 rounded"></div>
              Pop
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Animation Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <Label>Animation Speed (ms)</Label>
                <Input
                  type="number"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  min="100"
                  max="3000"
                  step="100"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={resetStack}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Operations */}
        <Card>
          <CardHeader>
            <CardTitle>Stack Operations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Push Operation */}
            <div className="space-y-2">
              <Label>Push to Stack</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Value"
                  value={pushValue}
                  onChange={(e) => setPushValue(e.target.value)}
                  type="number"
                />
                <Button
                  onClick={() => {
                    const value = Number.parseInt(pushValue);
                    if (!isNaN(value)) {
                      addToQueue({ type: 'push', value });
                      setPushValue('');
                    }
                  }}
                  disabled={!pushValue}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Push
                </Button>
              </div>
            </div>

            {/* Pop Operation */}
            <div className="space-y-2">
              <Label>Pop from Stack</Label>
              <Button
                onClick={() => {
                  addToQueue({ type: 'pop' });
                }}
                disabled={stack.length === 0}
                variant="destructive"
                className="w-full"
              >
                <Minus className="mr-2 h-4 w-4" />
                Pop
              </Button>
            </div>

            {/* Peek Operation */}
            <div className="space-y-2">
              <Label>Peek at Top</Label>
              <Button
                onClick={() => {
                  addToQueue({ type: 'peek' });
                }}
                disabled={stack.length === 0}
                variant="outline"
                className="w-full"
              >
                <Search className="mr-2 h-4 w-4" />
                Peek
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StackVisualization;
