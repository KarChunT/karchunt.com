'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  Pause,
  RotateCcw,
  Plus,
  Minus,
  Search,
  ArrowRight,
  Zap,
} from 'lucide-react';

type ArrayElement = {
  value: number;
  id: string;
  isHighlighted?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  isNew?: boolean;
};

type Operation =
  | { type: 'read'; index: number }
  | { type: 'traverse'; index: number }
  | { type: 'delete'; index: number }
  | { type: 'insert'; index: number; value: number }
  | { type: 'insertEnd'; value: number }
  | { type: 'resize'; newCapacity: number };

const INITIAL_CAPACITY = 4;
const BASE_MEMORY_ADDRESS = 0x2000; // Different base address for dynamic array

const DynamicArrayVisualization = () => {
  const [array, setArray] = useState<ArrayElement[]>([
    { value: 15, id: '1' },
    { value: 32, id: '2' },
    { value: 7, id: '3' },
    { value: 48, id: '4' },
  ]);
  const [capacity, setCapacity] = useState(INITIAL_CAPACITY);
  const [baseAddress, setBaseAddress] = useState(BASE_MEMORY_ADDRESS);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<Operation | null>(
    null,
  );
  const [operationQueue, setOperationQueue] = useState<Operation[]>([]);
  const [speed, setSpeed] = useState(500);

  // Form inputs
  const [readIndex, setReadIndex] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [insertEndValue, setInsertEndValue] = useState('');

  const getMemoryAddress = (index: number) => {
    return `0x${(baseAddress + index * 4).toString(16).toUpperCase()}`;
  };

  const resetArray = useCallback(() => {
    setArray([
      { value: 15, id: '1' },
      { value: 32, id: '2' },
      { value: 7, id: '3' },
      { value: 48, id: '4' },
    ]);
    setCapacity(INITIAL_CAPACITY);
    setBaseAddress(BASE_MEMORY_ADDRESS);
    setCurrentOperation(null);
    setOperationQueue([]);
    setIsPlaying(false);
  }, []);

  const resizeArray = useCallback(() => {
    const newCapacity = capacity * 2;
    const newBaseAddress = baseAddress + 0x100; // Simulate new memory allocation

    setCapacity(newCapacity);
    setBaseAddress(newBaseAddress);
  }, [capacity, baseAddress]);

  const executeOperation = useCallback(
    (operation: Operation) => {
      setCurrentOperation(operation);

      switch (operation.type) {
        case 'read':
          setArray((prev) =>
            prev.map((item, idx) => ({
              ...item,
              isHighlighted: idx === operation.index,
              isActive: false,
              isDeleted: false,
              isNew: false,
            })),
          );
          break;

        case 'traverse':
          setArray((prev) =>
            prev.map((item, idx) => ({
              ...item,
              isHighlighted: false,
              isActive: idx === operation.index,
              isDeleted: false,
              isNew: false,
            })),
          );
          break;

        case 'delete':
          setArray((prev) =>
            prev.map((item, idx) => ({
              ...item,
              isHighlighted: false,
              isActive: false,
              isDeleted: idx === operation.index,
              isNew: false,
            })),
          );

          setTimeout(() => {
            setArray((prev) =>
              prev.filter((_, idx) => idx !== operation.index),
            );
          }, 500);
          break;

        case 'resize':
          // Show all elements as active during resize
          setArray((prev) =>
            prev.map((item) => ({
              ...item,
              isHighlighted: false,
              isActive: true,
              isDeleted: false,
              isNew: false,
            })),
          );

          setTimeout(() => {
            resizeArray();
            setArray((prev) =>
              prev.map((item) => ({
                ...item,
                isActive: false,
              })),
            );
          }, speed / 2);
          break;

        case 'insert':
          const newElement: ArrayElement = {
            value: operation.value,
            id: Date.now().toString(),
            isNew: true,
          };

          setArray((prev) => {
            const newArray = [...prev];
            newArray.splice(operation.index, 0, newElement);
            return newArray.map((item, idx) => ({
              ...item,
              isHighlighted: false,
              isActive: false,
              isDeleted: false,
              isNew: idx === operation.index,
            }));
          });
          break;

        case 'insertEnd':
          const endElement: ArrayElement = {
            value: operation.value,
            id: Date.now().toString(),
            isNew: true,
          };

          setArray((prev) =>
            [...prev, endElement].map((item, idx, arr) => ({
              ...item,
              isHighlighted: false,
              isActive: false,
              isDeleted: false,
              isNew: idx === arr.length - 1,
            })),
          );
          break;
      }

      setTimeout(() => {
        setArray((prev) =>
          prev.map((item) => ({
            ...item,
            isHighlighted: false,
            isActive: false,
            isNew: false,
          })),
        );
        setCurrentOperation(null);
      }, speed);
    },
    [speed, resizeArray],
  );

  const addToQueue = (operation: Operation) => {
    // Check if we need to resize before insert operations
    if (
      (operation.type === 'insert' || operation.type === 'insertEnd') &&
      array.length >= capacity
    ) {
      setOperationQueue((prev) => [
        ...prev,
        { type: 'resize', newCapacity: capacity * 2 },
        operation,
      ]);
    } else {
      setOperationQueue((prev) => [...prev, operation]);
    }

    if (!isPlaying && !currentOperation) {
      setIsPlaying(true);
    }
  };

  const startTraversal = () => {
    const traverseOps: Operation[] = array.map((_, index) => ({
      type: 'traverse',
      index,
    }));
    setOperationQueue(traverseOps);
    setIsPlaying(true);
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

  // Render empty slots for unused capacity
  const emptySlots = capacity - array.length;

  return (
    <div className="mt-6 space-y-6">
      {/* Array Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Dynamic Array Visualization (32-bit Integers)</span>
            {currentOperation && (
              <Badge variant="secondary" className="ml-auto">
                {currentOperation.type === 'read' &&
                  `Reading index ${currentOperation.index}`}
                {currentOperation.type === 'traverse' &&
                  `Traversing index ${currentOperation.index}`}
                {currentOperation.type === 'delete' &&
                  `Deleting index ${currentOperation.index}`}
                {currentOperation.type === 'insert' &&
                  `Inserting ${currentOperation.value} at index ${currentOperation.index}`}
                {currentOperation.type === 'insertEnd' &&
                  `Inserting ${currentOperation.value} at end`}
                {currentOperation.type === 'resize' &&
                  `Resizing array to capacity ${currentOperation.newCapacity}`}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {array.map((element, index) => (
              <div
                key={element.id}
                className="flex flex-col items-center gap-1"
              >
                <div className="text-muted-foreground font-mono text-xs">
                  {getMemoryAddress(index)}
                </div>
                <div className="text-muted-foreground font-mono text-xs">
                  [{index}]
                </div>
                <div
                  className={`flex h-16 w-16 transform items-center justify-center rounded-lg border-2 font-mono text-lg font-bold transition-all duration-500 ${element.isHighlighted ? 'border-chart-2 bg-chart-2/20 scale-110' : ''} ${element.isActive ? 'border-primary bg-primary/20 scale-110' : ''} ${element.isDeleted ? 'border-destructive bg-destructive/20 scale-75 opacity-50' : ''} ${element.isNew ? 'border-chart-3 bg-chart-3/20 scale-110' : ''} ${!element.isHighlighted && !element.isActive && !element.isDeleted && !element.isNew ? 'border-border bg-card' : ''} `}
                >
                  {element.value}
                </div>
              </div>
            ))}
            {Array.from({ length: emptySlots }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="flex flex-col items-center gap-1"
              >
                <div className="text-muted-foreground font-mono text-xs">
                  {getMemoryAddress(array.length + index)}
                </div>
                <div className="text-muted-foreground font-mono text-xs">
                  [{array.length + index}]
                </div>
                <div className="border-muted-foreground/30 text-muted-foreground flex h-16 w-16 items-center justify-center rounded-lg border-2 border-dashed font-mono text-xs">
                  empty
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted-foreground text-center text-sm">
            Array Length: {array.length} | Capacity: {capacity} | Each cell: 4
            bytes (32-bit integer) |
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-chart-2 bg-chart-2/20 h-3 w-3 rounded"></div>
              Read
            </span>
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-primary bg-primary/20 h-3 w-3 rounded"></div>
              Traverse
            </span>
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-chart-3 bg-chart-3/20 h-3 w-3 rounded"></div>
              Insert
            </span>
            <span className="ml-2 inline-flex items-center gap-1">
              <div className="border-destructive bg-destructive/20 h-3 w-3 rounded"></div>
              Delete
            </span>
          </div>
          {array.length === capacity && (
            <div className="mt-2 text-center text-sm text-amber-500">
              Array is at full capacity. Next insertion will trigger automatic
              resize (double capacity).
            </div>
          )}
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
                onClick={startTraversal}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Traverse All
              </Button>
              <Button onClick={resetArray} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Operations */}
        <Card>
          <CardHeader>
            <CardTitle>Array Operations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Read Operation */}
            <div className="space-y-2">
              <Label>Read from Array</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Index"
                  value={readIndex}
                  onChange={(e) => setReadIndex(e.target.value)}
                  type="number"
                  min="0"
                  max={array.length - 1}
                />
                <Button
                  onClick={() => {
                    const index = Number.parseInt(readIndex);
                    if (index >= 0 && index < array.length) {
                      addToQueue({ type: 'read', index });
                      setReadIndex('');
                    }
                  }}
                  disabled={!readIndex}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Read
                </Button>
              </div>
            </div>

            {/* Delete Operation */}
            <div className="space-y-2">
              <Label>Delete from Array</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Index"
                  value={deleteIndex}
                  onChange={(e) => setDeleteIndex(e.target.value)}
                  type="number"
                  min="0"
                  max={array.length - 1}
                />
                <Button
                  onClick={() => {
                    const index = Number.parseInt(deleteIndex);
                    if (index >= 0 && index < array.length) {
                      addToQueue({ type: 'delete', index });
                      setDeleteIndex('');
                    }
                  }}
                  disabled={!deleteIndex}
                  variant="destructive"
                >
                  <Minus className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>

            {/* Insert at Index */}
            <div className="space-y-2">
              <Label>Insert at Index</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Index"
                  value={insertIndex}
                  onChange={(e) => setInsertIndex(e.target.value)}
                  type="number"
                  min="0"
                  max={array.length}
                  className="flex-1"
                />
                <Input
                  placeholder="Value"
                  value={insertValue}
                  onChange={(e) => setInsertValue(e.target.value)}
                  type="number"
                  className="flex-1"
                />
                <Button
                  onClick={() => {
                    const index = Number.parseInt(insertIndex);
                    const value = Number.parseInt(insertValue);
                    if (index >= 0 && index <= array.length && !isNaN(value)) {
                      addToQueue({ type: 'insert', index, value });
                      setInsertIndex('');
                      setInsertValue('');
                    }
                  }}
                  disabled={!insertIndex || !insertValue}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Insert
                </Button>
              </div>
              {array.length === capacity && (
                <p className="text-xs text-amber-500">
                  Will auto-resize to capacity {capacity * 2}
                </p>
              )}
            </div>

            {/* Insert at End */}
            <div className="space-y-2">
              <Label>Insert at End</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Value"
                  value={insertEndValue}
                  onChange={(e) => setInsertEndValue(e.target.value)}
                  type="number"
                />
                <Button
                  onClick={() => {
                    const value = Number.parseInt(insertEndValue);
                    if (!isNaN(value)) {
                      addToQueue({ type: 'insertEnd', value });
                      setInsertEndValue('');
                    }
                  }}
                  disabled={!insertEndValue}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Push
                </Button>
              </div>
              {array.length === capacity && (
                <p className="text-xs text-amber-500">
                  Will auto-resize to capacity {capacity * 2}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DynamicArrayVisualization;
