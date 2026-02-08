'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Play, Shuffle, Search } from 'lucide-react';

type ArrayElement = {
  value: number;
  id: string;
  state: 'idle' | 'in-range' | 'checking' | 'found' | 'not-found';
};

const generateSortedArray = (size = 5): ArrayElement[] => {
  const arr = Array.from({ length: size }, (_, i) => ({
    value: (i + 1) * 10,
    id: `element-${Date.now()}-${i}`,
    state: 'idle' as const,
  }));
  return arr;
};

const BinarySearchVisualization = () => {
  const [array, setArray] = useState<ArrayElement[]>(generateSortedArray());
  const [isSearching, setIsSearching] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [target, setTarget] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [comparisons, setComparisons] = useState(0);
  const [searchResult, setSearchResult] = useState<
    'found' | 'not-found' | null
  >(null);
  const [leftPointer, setLeftPointer] = useState<number | null>(null);
  const [rightPointer, setRightPointer] = useState<number | null>(null);
  const [midPointer, setMidPointer] = useState<number | null>(null);

  const shuffleArray = useCallback(() => {
    setArray(generateSortedArray());
    setIsSearching(false);
    setIsPaused(false);
    setCurrentStep('');
    setComparisons(0);
    setSearchResult(null);
    setLeftPointer(null);
    setRightPointer(null);
    setMidPointer(null);
  }, []);

  const binarySearch = useCallback(async () => {
    if (!target || isNaN(Number(target))) {
      setCurrentStep('Please enter a valid number to search');
      setIsSearching(false);
      return;
    }

    const targetValue = Number(target);
    const arr = [...array];
    let left = 0;
    let right = arr.length - 1;
    let totalComparisons = 0;

    setCurrentStep(`Searching for ${targetValue} in sorted array...`);

    while (left <= right) {
      if (!isSearching) return;

      const mid = Math.floor((left + right) / 2);

      // Update pointers
      setLeftPointer(left);
      setRightPointer(right);
      setMidPointer(mid);

      // Highlight the current search range
      setArray(
        arr.map((el, idx) => ({
          ...el,
          state:
            idx >= left && idx <= right
              ? idx === mid
                ? 'checking'
                : 'in-range'
              : 'idle',
        })),
      );

      setCurrentStep(
        `Checking middle element at index ${mid}: ${arr[mid].value}`,
      );
      totalComparisons++;
      setComparisons(totalComparisons);

      await new Promise((resolve) => setTimeout(resolve, speed));

      if (arr[mid].value === targetValue) {
        // Found the target
        arr[mid].state = 'found';
        setArray([...arr]);
        setCurrentStep(`Found ${targetValue} at index ${mid}!`);
        setSearchResult('found');
        setIsSearching(false);
        return;
      } else if (arr[mid].value < targetValue) {
        // Target is in the right half
        setCurrentStep(
          `${arr[mid].value} < ${targetValue}, searching right half`,
        );
        left = mid + 1;
      } else {
        // Target is in the left half
        setCurrentStep(
          `${arr[mid].value} > ${targetValue}, searching left half`,
        );
        right = mid - 1;
      }

      await new Promise((resolve) => setTimeout(resolve, speed / 2));
    }

    // Not found
    setArray(
      arr.map((el) => ({
        ...el,
        state: 'not-found',
      })),
    );
    setCurrentStep(`${targetValue} not found in the array`);
    setSearchResult('not-found');
    setLeftPointer(null);
    setRightPointer(null);
    setMidPointer(null);
    setIsSearching(false);
  }, [array, speed, isSearching, target]);

  useEffect(() => {
    if (isSearching && !isPaused) {
      binarySearch();
    }
  }, [isSearching, isPaused]);

  const startSearch = () => {
    if (!target || isNaN(Number(target))) {
      setCurrentStep('Please enter a valid number to search');
      return;
    }

    // Reset all states before starting
    setArray(
      array.map((el) => ({
        ...el,
        state: 'idle',
      })),
    );
    setComparisons(0);
    setSearchResult(null);
    setCurrentStep('');
    setLeftPointer(null);
    setRightPointer(null);
    setMidPointer(null);

    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsSearching(true);
    }
  };

  const getBarColor = (state: ArrayElement['state']) => {
    switch (state) {
      case 'in-range':
        return 'bg-chart-4';
      case 'checking':
        return 'bg-chart-2';
      case 'found':
        return 'bg-chart-3';
      case 'not-found':
        return 'bg-chart-5';
      default:
        return 'bg-chart-1';
    }
  };

  return (
    <div className="mt-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            <span>Binary Search Visualization</span>
            {currentStep && (
              <Badge variant="secondary" className="sm:ml-auto">
                {currentStep}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Pointers */}
            <div className="mb-2 flex h-12 items-end justify-center gap-1 px-2 sm:gap-2 sm:px-4">
              {array.map((_, index) => (
                <div
                  key={`pointer-${index}`}
                  className="flex flex-col items-center justify-end gap-1"
                  style={{ flex: '0 0 auto', width: 'clamp(32px, 8vw, 48px)' }}
                >
                  {leftPointer === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-semibold text-blue-500"
                    >
                      L
                    </motion.div>
                  )}
                  {midPointer === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-semibold text-purple-500"
                    >
                      M
                    </motion.div>
                  )}
                  {rightPointer === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs font-semibold text-orange-500"
                    >
                      R
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Array Bars */}
            <div className="mb-6 flex items-end justify-center gap-1 overflow-x-auto px-2 sm:gap-2 sm:px-4">
              <AnimatePresence mode="popLayout">
                {array.map((element, index) => (
                  <motion.div
                    key={element.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale:
                        element.state === 'checking'
                          ? 1.15
                          : element.state === 'found'
                            ? 1.2
                            : 1,
                      y:
                        element.state === 'checking'
                          ? -20
                          : element.state === 'found'
                            ? -30
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
                      className={`rounded-t-lg ${getBarColor(element.state)} relative transition-colors duration-300`}
                      style={{
                        width: 'clamp(32px, 8vw, 48px)',
                        height: `${(element.value / 100) * 250}px`,
                        minHeight: '30px',
                      }}
                    >
                      {element.state === 'found' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Search className="h-4 w-4 text-white sm:h-6 sm:w-6" />
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {element.value}
                    </div>
                    <div className="text-muted-foreground/60 text-xs">
                      [{index}]
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="text-muted-foreground space-y-2 text-center text-xs sm:text-sm">
              <div>Comparisons: {comparisons}</div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <span className="inline-flex items-center gap-1">
                  <div className="bg-chart-1 h-3 w-3 rounded"></div>
                  <span className="text-xs">Idle</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <div className="bg-chart-4 h-3 w-3 rounded"></div>
                  <span className="text-xs">In Range</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <div className="bg-chart-2 h-3 w-3 rounded"></div>
                  <span className="text-xs">Checking</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <div className="bg-chart-3 h-3 w-3 rounded"></div>
                  <span className="text-xs">Found</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <div className="bg-chart-5 h-3 w-3 rounded"></div>
                  <span className="text-xs">Not Found</span>
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:gap-4">
                <span className="text-xs font-semibold text-blue-500">
                  L = Left
                </span>
                <span className="text-xs font-semibold text-purple-500">
                  M = Mid
                </span>
                <span className="text-xs font-semibold text-orange-500">
                  R = Right
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Search Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Target Value</Label>
              <Input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Enter number to search"
                disabled={isSearching}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={startSearch}
                disabled={isSearching || !target}
                className="flex-1"
              >
                <Play className="mr-2 h-4 w-4" />
                Start Search
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
                disabled={isSearching}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={shuffleArray}
                variant="outline"
                className="flex-1 bg-transparent"
                disabled={isSearching}
              >
                <Shuffle className="mr-2 h-4 w-4" />
                New Array
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
              <h3 className="mt-0 font-semibold">Binary Search</h3>
              <p className="text-muted-foreground text-sm">
                Binary Search is an efficient algorithm for finding a target
                value in a sorted array. It works by repeatedly dividing the
                search interval in half, comparing the middle element with the
                target, and eliminating half of the remaining elements.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Time Complexity</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Best Case: O(1) - Element found at middle</li>
                <li>Average Case: O(log n) - Halves search space each time</li>
                <li>Worst Case: O(log n) - Element at end or not present</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Space Complexity</h4>
              <p className="text-muted-foreground text-sm">
                O(1) - No extra space required (iterative)
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Requirements</h4>
              <p className="text-muted-foreground text-sm">
                The array must be sorted. Binary search is much faster than
                linear search for large datasets.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BinarySearchVisualization;
