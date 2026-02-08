'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw, Shuffle } from 'lucide-react';

type ArrayElement = {
  value: number;
  id: string;
  state: 'idle' | 'comparing' | 'swapping' | 'sorted';
};

const generateRandomArray = (size = 5): ArrayElement[] => {
  return Array.from({ length: size }, (_, i) => ({
    value: Math.floor(Math.random() * 90) + 10,
    id: `element-${Date.now()}-${i}`,
    state: 'idle' as const,
  }));
};

const BubbleSortVisualization = () => {
  const [array, setArray] = useState<ArrayElement[]>(generateRandomArray());
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [currentStep, setCurrentStep] = useState('');
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  const resetArray = useCallback(() => {
    setArray(generateRandomArray());
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentStep('');
    setComparisons(0);
    setSwaps(0);
  }, []);

  const shuffleArray = useCallback(() => {
    setArray(generateRandomArray());
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentStep('');
    setComparisons(0);
    setSwaps(0);
  }, []);

  const bubbleSort = useCallback(async () => {
    const arr = [...array];
    const n = arr.length;
    let totalComparisons = 0;
    let totalSwaps = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isPlaying) return;

        // Highlight comparing elements
        setCurrentStep(`Comparing ${arr[j].value} and ${arr[j + 1].value}`);
        setArray(
          arr.map((el, idx) => ({
            ...el,
            state: idx === j || idx === j + 1 ? 'comparing' : el.state,
          })),
        );
        totalComparisons++;
        setComparisons(totalComparisons);

        await new Promise((resolve) => setTimeout(resolve, speed));

        if (arr[j].value > arr[j + 1].value) {
          // Highlight swapping elements
          setCurrentStep(`Swapping ${arr[j].value} and ${arr[j + 1].value}`);
          setArray(
            arr.map((el, idx) => ({
              ...el,
              state: idx === j || idx === j + 1 ? 'swapping' : el.state,
            })),
          );
          totalSwaps++;
          setSwaps(totalSwaps);

          await new Promise((resolve) => setTimeout(resolve, speed));

          // Perform swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);

          await new Promise((resolve) => setTimeout(resolve, speed / 2));
        }

        // Reset state
        setArray(
          arr.map((el, idx) => ({
            ...el,
            state: idx >= n - i - 1 ? 'sorted' : 'idle',
          })),
        );
      }

      // Mark last element as sorted
      arr[n - i - 1].state = 'sorted';
      setArray([...arr]);
    }

    // Mark first element as sorted
    arr[0].state = 'sorted';
    setArray([...arr]);
    setCurrentStep('Sorting complete!');
    setIsPlaying(false);
  }, [array, speed, isPlaying]);

  useEffect(() => {
    if (isPlaying && !isPaused) {
      bubbleSort();
    }
  }, [isPlaying, isPaused]);

  const startSort = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPlaying(true);
      setComparisons(0);
      setSwaps(0);
    }
  };

  const pauseSort = () => {
    setIsPaused(true);
    setIsPlaying(false);
  };

  const getBarColor = (state: ArrayElement['state']) => {
    switch (state) {
      case 'comparing':
        return 'bg-chart-2';
      case 'swapping':
        return 'bg-chart-4';
      case 'sorted':
        return 'bg-chart-3';
      default:
        return 'bg-chart-1';
    }
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Bubble Sort Visualization</span>
            {currentStep && (
              <Badge variant="secondary" className="ml-auto">
                {currentStep}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-end justify-center gap-2 px-4">
            <AnimatePresence mode="popLayout">
              {array.map((element) => (
                <motion.div
                  key={element.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale:
                      element.state === 'comparing' ||
                      element.state === 'swapping'
                        ? 1.05
                        : 1,
                    y:
                      element.state === 'comparing'
                        ? -10
                        : element.state === 'swapping'
                          ? -20
                          : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    layout: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  className="flex flex-col items-center gap-2"
                  style={{ flex: '0 0 auto' }}
                >
                  <motion.div
                    className={`w-12 rounded-t-lg ${getBarColor(element.state)} transition-colors duration-300`}
                    style={{
                      height: `${(element.value / 100) * 300}px`,
                      minHeight: '30px',
                    }}
                  />
                  <div className="text-muted-foreground font-mono text-xs">
                    {element.value}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-muted-foreground space-y-2 text-center text-sm">
            <div>
              Comparisons: {comparisons} | Swaps: {swaps}
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-1 h-3 w-3 rounded"></div>
                Unsorted
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-2 h-3 w-3 rounded"></div>
                Comparing
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-4 h-3 w-3 rounded"></div>
                Swapping
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-3 h-3 w-3 rounded"></div>
                Sorted
              </span>
            </div>
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
            <div className="flex gap-2">
              <Button
                onClick={startSort}
                disabled={isPlaying}
                className="flex-1"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Sort
              </Button>
            </div>

            <div className="space-y-2">
              <Label>Animation Speed (ms)</Label>
              <Input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                min="100"
                max="2000"
                step="100"
                disabled={isPlaying}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={shuffleArray}
                variant="outline"
                className="flex-1 bg-transparent"
                disabled={isPlaying}
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Shuffle
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Algorithm Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="mt-0 font-semibold">Bubble Sort</h3>
              <p className="text-muted-foreground text-sm">
                Bubble Sort repeatedly steps through the list, compares adjacent
                elements and swaps them if they are in the wrong order. The pass
                through the list is repeated until the list is sorted.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Time Complexity</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Best Case: O(n)</li>
                <li>Average Case: O(n²)</li>
                <li>Worst Case: O(n²)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Space Complexity</h4>
              <p className="text-muted-foreground text-sm">
                O(1) - In-place sorting algorithm
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BubbleSortVisualization;
