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
} from 'lucide-react';

type ListNode = {
  value: number;
  id: string;
  address: string;
  nextAddress: string | null;
  isHighlighted?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  isNew?: boolean;
};

type Operation =
  | { type: 'read'; index: number }
  | { type: 'traverse'; index: number }
  | { type: 'delete'; index: number }
  | { type: 'insertBegin'; value: number }
  | { type: 'insertEnd'; value: number }
  | { type: 'insert'; index: number; value: number };

const SinglyLinkedListVisualization = () => {
  const INITIAL_NODES: ListNode[] = [
    { value: 42, id: '1', address: '0x3000', nextAddress: '0x3100' },
    { value: 17, id: '2', address: '0x3100', nextAddress: '0x3200' },
    { value: 89, id: '3', address: '0x3200', nextAddress: null },
  ];
  const [nodes, setNodes] = useState<ListNode[]>(INITIAL_NODES);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<Operation | null>(
    null,
  );
  const [operationQueue, setOperationQueue] = useState<Operation[]>([]);
  const [speed, setSpeed] = useState(500);

  const [readIndex, setReadIndex] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [insertIndex, setInsertIndex] = useState('');
  const [insertValue, setInsertValue] = useState('');
  const [insertBeginValue, setInsertBeginValue] = useState('');
  const [insertEndValue, setInsertEndValue] = useState('');

  const generateAddress = () => {
    const randomOffset = Math.floor(Math.random() * 0x1000);
    return `0x${(0x3000 + randomOffset).toString(16).toUpperCase()}`;
  };

  const resetList = useCallback(() => {
    setNodes(INITIAL_NODES);
    setCurrentOperation(null);
    setOperationQueue([]);
    setIsPlaying(false);
  }, []);

  const executeOperation = useCallback(
    (operation: Operation) => {
      setCurrentOperation(operation);

      switch (operation.type) {
        case 'read':
          setNodes((prev) =>
            prev.map((node, idx) => ({
              ...node,
              isHighlighted: idx === operation.index,
              isActive: false,
              isDeleted: false,
              isNew: false,
            })),
          );
          break;

        case 'traverse':
          setNodes((prev) =>
            prev.map((node, idx) => ({
              ...node,
              isHighlighted: false,
              isActive: idx === operation.index,
              isDeleted: false,
              isNew: false,
            })),
          );
          break;

        case 'delete':
          setNodes((prev) =>
            prev.map((node, idx) => ({
              ...node,
              isHighlighted: false,
              isActive: false,
              isDeleted: idx === operation.index,
              isNew: false,
            })),
          );

          setTimeout(() => {
            setNodes((prev) => {
              const newNodes = prev.filter((_, idx) => idx !== operation.index);
              // Update next pointers
              return newNodes.map((node, idx) => ({
                ...node,
                nextAddress:
                  idx < newNodes.length - 1 ? newNodes[idx + 1].address : null,
              }));
            });
          }, 500);
          break;

        case 'insertBegin':
          const newBeginNode: ListNode = {
            value: operation.value,
            id: Date.now().toString(),
            address: generateAddress(),
            nextAddress: nodes.length > 0 ? nodes[0].address : null,
            isNew: true,
          };

          setNodes((prev) =>
            [newBeginNode, ...prev].map((node, idx) => ({
              ...node,
              isNew: idx === 0,
            })),
          );
          break;

        case 'insertEnd':
          const newEndNode: ListNode = {
            value: operation.value,
            id: Date.now().toString(),
            address: generateAddress(),
            nextAddress: null,
            isNew: true,
          };

          setNodes((prev) => {
            const updated = [...prev];
            if (updated.length > 0) {
              updated[updated.length - 1].nextAddress = newEndNode.address;
            }
            return [...updated, newEndNode].map((node, idx, arr) => ({
              ...node,
              isNew: idx === arr.length - 1,
            }));
          });
          break;

        case 'insert':
          const newNode: ListNode = {
            value: operation.value,
            id: Date.now().toString(),
            address: generateAddress(),
            nextAddress:
              operation.index < nodes.length
                ? nodes[operation.index].address
                : null,
            isNew: true,
          };

          setNodes((prev) => {
            const newNodes = [...prev];
            newNodes.splice(operation.index, 0, newNode);

            // Update previous node's next pointer
            if (operation.index > 0) {
              newNodes[operation.index - 1].nextAddress = newNode.address;
            }

            return newNodes.map((node, idx) => ({
              ...node,
              isNew: idx === operation.index,
            }));
          });
          break;
      }

      setTimeout(() => {
        setNodes((prev) =>
          prev.map((node) => ({
            ...node,
            isHighlighted: false,
            isActive: false,
            isNew: false,
          })),
        );
        setCurrentOperation(null);
      }, speed);
    },
    [speed, nodes],
  );

  const addToQueue = (operation: Operation) => {
    setOperationQueue((prev) => [...prev, operation]);

    if (!isPlaying && !currentOperation) {
      setIsPlaying(true);
    }
  };

  const startTraversal = () => {
    const traverseOps: Operation[] = nodes.map((_, index) => ({
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

  return (
    <div className="mt-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Singly Linked List Visualization</span>
            {currentOperation && (
              <Badge variant="secondary" className="ml-auto">
                {currentOperation.type === 'read' &&
                  `Reading node at index ${currentOperation.index}`}
                {currentOperation.type === 'traverse' &&
                  `Traversing node ${currentOperation.index}`}
                {currentOperation.type === 'delete' &&
                  `Deleting node at index ${currentOperation.index}`}
                {currentOperation.type === 'insert' &&
                  `Inserting ${currentOperation.value} at index ${currentOperation.index}`}
                {currentOperation.type === 'insertBegin' &&
                  `Inserting ${currentOperation.value} at beginning`}
                {currentOperation.type === 'insertEnd' &&
                  `Inserting ${currentOperation.value} at end`}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-6">
            <div className="text-muted-foreground font-mono text-sm">
              Head → {nodes.length > 0 ? nodes[0].address : 'null'}
            </div>
            <div className="text-muted-foreground font-mono text-sm">
              Tail →{' '}
              {nodes.length > 0 ? nodes[nodes.length - 1].address : 'null'}
            </div>
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {nodes.map((node, index) => (
              <div key={node.id} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-muted-foreground font-mono text-xs">
                    {node.address}
                  </div>
                  <div
                    className={`flex h-24 w-24 transform flex-col items-center justify-center rounded-lg border-2 font-mono transition-all duration-500 ${node.isHighlighted ? 'border-chart-2 bg-chart-2/20 scale-110' : ''} ${node.isActive ? 'border-primary bg-primary/20 scale-110' : ''} ${node.isDeleted ? 'border-destructive bg-destructive/20 scale-75 opacity-50' : ''} ${node.isNew ? 'border-chart-3 bg-chart-3/20 scale-110' : ''} ${!node.isHighlighted && !node.isActive && !node.isDeleted && !node.isNew ? 'border-border bg-card' : ''} `}
                  >
                    <div className="text-lg font-bold">{node.value}</div>
                    <div className="text-muted-foreground mt-1 text-xs">
                      next:
                    </div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {node.nextAddress || 'null'}
                    </div>
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Node {index}
                  </div>
                </div>
                {index < nodes.length - 1 && (
                  <ArrowRight className="text-muted-foreground h-6 w-6" />
                )}
              </div>
            ))}
            {nodes.length === 0 && (
              <div className="text-muted-foreground py-8 text-center">
                List is empty
              </div>
            )}
          </div>

          <div className="text-muted-foreground text-center text-sm">
            List Length: {nodes.length} |
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
                disabled={nodes.length === 0}
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                Traverse All
              </Button>
              <Button onClick={resetList} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Operations */}
        <Card>
          <CardHeader>
            <CardTitle>Linked List Operations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Read Operation */}
            <div className="space-y-2">
              <Label>Read from List</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Index"
                  value={readIndex}
                  onChange={(e) => setReadIndex(e.target.value)}
                  type="number"
                  min="0"
                  max={nodes.length - 1}
                />
                <Button
                  onClick={() => {
                    const index = Number.parseInt(readIndex);
                    if (index >= 0 && index < nodes.length) {
                      addToQueue({ type: 'read', index });
                      setReadIndex('');
                    }
                  }}
                  disabled={!readIndex || nodes.length === 0}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Read
                </Button>
              </div>
            </div>

            {/* Insert at Beginning */}
            <div className="space-y-2">
              <Label>Insert at Beginning</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Value"
                  value={insertBeginValue}
                  onChange={(e) => setInsertBeginValue(e.target.value)}
                  type="number"
                />
                <Button
                  onClick={() => {
                    const value = Number.parseInt(insertBeginValue);
                    if (!isNaN(value)) {
                      addToQueue({ type: 'insertBegin', value });
                      setInsertBeginValue('');
                    }
                  }}
                  disabled={!insertBeginValue}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Prepend
                </Button>
              </div>
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
                  <Plus className="mr-2 h-4 w-4" />
                  Append
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
                  max={nodes.length}
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
                    if (index >= 0 && index <= nodes.length && !isNaN(value)) {
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
            </div>

            {/* Delete Operation */}
            <div className="space-y-2">
              <Label>Delete from List</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Index"
                  value={deleteIndex}
                  onChange={(e) => setDeleteIndex(e.target.value)}
                  type="number"
                  min="0"
                  max={nodes.length - 1}
                />
                <Button
                  onClick={() => {
                    const index = Number.parseInt(deleteIndex);
                    if (index >= 0 && index < nodes.length) {
                      addToQueue({ type: 'delete', index });
                      setDeleteIndex('');
                    }
                  }}
                  disabled={!deleteIndex || nodes.length === 0}
                  variant="destructive"
                >
                  <Minus className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SinglyLinkedListVisualization;
