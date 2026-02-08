'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, RotateCcw, Shuffle, Search } from 'lucide-react';

type ArrayElement = {
  value: number;
  id: string;
  state: 'idle' | 'searching' | 'found' | 'not-found';
};

const generateRandomArray = (size = 5): ArrayElement[] => {
  return Array.from({ length: size }, (_, i) => ({
    value: Math.floor(Math.random() * 90) + 10,
    id: `element-${Date.now()}-${i}`,
    state: 'idle' as const,
  }));
};

const LinearSearchVisualization = () => {
  const [array, setArray] = useState<ArrayElement[]>(generateRandomArray());
  const [isSearching, setIsSearching] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [target, setTarget] = useState('');
  const [currentStep, setCurrentStep] = useState('');
  const [comparisons, setComparisons] = useState(0);
  const [searchResult, setSearchResult] = useState<
    'found' | 'not-found' | null
  >(null);

  const resetArray = useCallback(() => {
    setArray(generateRandomArray());
    setIsSearching(false);
    setIsPaused(false);
    setCurrentStep('');
    setComparisons(0);
    setSearchResult(null);
    setTarget('');
  }, []);

  const shuffleArray = useCallback(() => {
    setArray(generateRandomArray());
    setIsSearching(false);
    setIsPaused(false);
    setCurrentStep('');
    setComparisons(0);
    setSearchResult(null);
  }, []);

  const linearSearch = useCallback(async () => {
    if (!target || isNaN(Number(target))) {
      setCurrentStep('Please enter a valid number to search');
      setIsSearching(false);
      return;
    }

    const targetValue = Number(target);
    const arr = [...array];
    let totalComparisons = 0;
    let foundIndex = -1;

    setCurrentStep(`Searching for ${targetValue}...`);

    for (let i = 0; i < arr.length; i++) {
      if (!isSearching) return;

      // Highlight current element being searched
      setCurrentStep(
        `Checking index ${i}: ${arr[i].value} === ${targetValue}?`,
      );
      setArray(
        arr.map((el, idx) => ({
          ...el,
          state: idx === i ? 'searching' : el.state,
        })),
      );
      totalComparisons++;
      setComparisons(totalComparisons);

      await new Promise((resolve) => setTimeout(resolve, speed));

      if (arr[i].value === targetValue) {
        // Found the target
        foundIndex = i;
        arr[i].state = 'found';
        setArray([...arr]);
        setCurrentStep(`Found ${targetValue} at index ${i}!`);
        setSearchResult('found');
        setIsSearching(false);
        return;
      }

      // Reset state to idle if not found
      arr[i].state = 'idle';
      setArray([...arr]);
    }

    // Not found
    if (foundIndex === -1) {
      setArray(
        arr.map((el) => ({
          ...el,
          state: 'not-found',
        })),
      );
      setCurrentStep(`${targetValue} not found in the array`);
      setSearchResult('not-found');
      setIsSearching(false);
    }
  }, [array, speed, isSearching, target]);

  useEffect(() => {
    if (isSearching && !isPaused) {
      linearSearch();
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

    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsSearching(true);
    }
  };

  const pauseSearch = () => {
    setIsPaused(true);
    setIsSearching(false);
  };

  const getBarColor = (state: ArrayElement['state']) => {
    switch (state) {
      case 'searching':
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
      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span>Linear Search Visualization</span>
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
              {array.map((element, index) => (
                <motion.div
                  key={element.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale:
                      element.state === 'searching'
                        ? 1.1
                        : element.state === 'found'
                          ? 1.15
                          : 1,
                    y:
                      element.state === 'searching'
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
                    className={`w-12 rounded-t-lg ${getBarColor(element.state)} relative transition-colors duration-300`}
                    style={{
                      height: `${(element.value / 100) * 300}px`,
                      minHeight: '30px',
                    }}
                  >
                    {element.state === 'found' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Search className="h-6 w-6 text-white" />
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

          <div className="text-muted-foreground space-y-2 text-center text-sm">
            <div>Comparisons: {comparisons}</div>
            <div className="flex items-center justify-center gap-4">
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-1 h-3 w-3 rounded"></div>
                Idle
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-2 h-3 w-3 rounded"></div>
                Searching
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-3 h-3 w-3 rounded"></div>
                Found
              </span>
              <span className="inline-flex items-center gap-1">
                <div className="bg-chart-5 h-3 w-3 rounded"></div>
                Not Found
              </span>
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
                {isPaused ? 'Resume' : 'Start Search'}
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
              <h3 className="mt-0 font-semibold">Linear Search</h3>
              <p className="text-muted-foreground text-sm">
                Linear Search sequentially checks each element of the array
                until a match is found or the entire array has been searched.
                It's the simplest search algorithm but not the most efficient
                for large datasets.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Time Complexity</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Best Case: O(1) - Element found at first position</li>
                <li>Average Case: O(n) - Element in middle</li>
                <li>Worst Case: O(n) - Element at end or not present</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Space Complexity</h4>
              <p className="text-muted-foreground text-sm">
                O(1) - No extra space required
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Use Cases</h4>
              <p className="text-muted-foreground text-sm">
                Best for small datasets or unsorted arrays where other search
                algorithms cannot be applied.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LinearSearchVisualization;
