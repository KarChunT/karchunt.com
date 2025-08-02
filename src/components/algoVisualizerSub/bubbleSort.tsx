import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { generateRandomArray } from '@/lib/utils';
import { motion } from 'framer-motion';
import { IconPlayerPlay, IconArrowsShuffle } from '@tabler/icons-react';

const BubbleSortVisualizer = () => {
  const [arraySize, setArraySize] = useState(5);
  const [array, setArray] = useState(generateRandomArray(arraySize));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState([500]);

  const bubbleSort = useCallback(async () => {
    const arr = [...array];
    const n = arr.length;

    setIsPlaying(true);
    setSortedIndices([]);

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compare adjacent elements with a delay
        setCurrentIndices([j, j + 1]);
        await new Promise((resolve) => setTimeout(resolve, speed[0]));

        if (arr[j] > arr[j + 1]) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed[0]));
        }
      }
      // Mark the last element of this pass as sorted
      setSortedIndices((prev) => [...prev, n - 1 - i]);
    }

    // Mark the last element as sorted
    setSortedIndices((prev) => [...prev, 0]);
    setCurrentIndices([]);
    setIsPlaying(false);
  }, [array, speed]);

  const shuffle = () => {
    if (!isPlaying) {
      setArray(generateRandomArray(arraySize));
      setCurrentIndices([]);
      setSortedIndices([]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button onClick={bubbleSort} disabled={isPlaying} size="sm">
          <IconPlayerPlay className="mr-1 h-4 w-4" />
          Sort
        </Button>
        <Button
          onClick={shuffle}
          disabled={isPlaying}
          variant="outline"
          size="sm"
        >
          <IconArrowsShuffle className="mr-1 h-4 w-4" />
          Shuffle
        </Button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Array Size: {arraySize}</label>
        <Slider
          value={[arraySize]}
          onValueChange={([val]) => {
            setArraySize(val);
            setArray(generateRandomArray(val));
            setCurrentIndices([]);
            setSortedIndices([]);
          }}
          max={10}
          min={3}
          step={1}
          disabled={isPlaying}
          className="w-48"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Speed: {speed[0]}ms</label>
        <Slider
          value={speed}
          onValueChange={setSpeed}
          max={1000}
          min={0}
          step={100}
          disabled={isPlaying}
          className="w-48"
        />
      </div>

      <div className="bg-muted/20 flex h-64 items-end gap-1 rounded-lg p-4">
        {array.map((value, index) => (
          <motion.div
            key={index}
            className={`flex flex-1 items-end justify-center rounded-t-sm text-xs font-medium text-white ${
              sortedIndices.includes(index)
                ? 'bg-green-500'
                : currentIndices.includes(index)
                  ? 'bg-red-500'
                  : 'bg-yellow-500'
            }`}
            style={{ height: `${(value / 100) * 200}px` }}
            animate={{ height: `${(value / 100) * 200}px` }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
