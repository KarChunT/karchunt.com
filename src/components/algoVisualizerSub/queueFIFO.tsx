import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { IconPlus, IconMinus, IconTrash } from '@tabler/icons-react';
import { generateRandomArray } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const QueueFIFOVisualizer = () => {
  const [randomValueArray, setRandomValueArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState(5);
  const [queue, setQueue] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [speed, setSpeed] = useState([500]);

  const enqueueRandom = async () => {
    await clear(); // Wait for clear to complete
    setIsAnimating(true);

    const newRandomArray = generateRandomArray(arraySize);
    setRandomValueArray(newRandomArray);

    for (let i = 0; i < newRandomArray.length; i++) {
      setQueue((prev) => [...prev, newRandomArray[i]]);
      setAnimatingIndex(i); // Now we can safely use just i since queue starts empty
      await new Promise((resolve) => setTimeout(resolve, speed[0]));
      setAnimatingIndex(null);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setIsAnimating(false);
  };

  const dequeue = async () => {
    if (queue.length === 0) return;
    setIsAnimating(true);

    for (let i = 0; i < randomValueArray.length; i++) {
      setAnimatingIndex(0); // First element will be removed
      await new Promise((resolve) => setTimeout(resolve, 800));
      setQueue((prev) => prev.slice(1));
      setAnimatingIndex(null);
    }
    setIsAnimating(false);
  };

  const clear = () => {
    return new Promise<void>((resolve) => {
      setQueue([]);
      setAnimatingIndex(null);
      setIsAnimating(false);
      // Use setTimeout to ensure state update completes
      setTimeout(resolve, 0);
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={enqueueRandom} disabled={isAnimating} size="sm">
          <IconPlus className="mr-1 h-4 w-4" />
          Enqueue
        </Button>
        <Button
          onClick={dequeue}
          disabled={isAnimating || queue.length === 0}
          size="sm"
          className="bg-red-600 hover:bg-red-700"
        >
          <IconMinus className="mr-1 h-4 w-4" />
          Dequeue
        </Button>
        <Button
          onClick={() => clear()}
          disabled={isAnimating}
          variant="outline"
          size="sm"
        >
          <IconTrash className="mr-1 h-4 w-4" />
          Clear All
        </Button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Array Size: {arraySize}</label>
        <Slider
          value={[arraySize]}
          onValueChange={([val]) => {
            setArraySize(val);
          }}
          max={10}
          min={3}
          step={1}
          disabled={isAnimating}
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
          disabled={isAnimating}
          className="w-48"
        />
      </div>

      <div className="bg-muted/20 flex h-80 flex-col justify-center gap-1 rounded-lg p-4">
        <div className="relative flex w-full items-center justify-center">
          {queue.length === 0 ? (
            <div className="text-sm">Queue is empty</div>
          ) : (
            <div
              className="flex flex-wrap items-center gap-2"
              style={{
                width: `${queue.length * 72}px`, // 64px width + 8px gap
                justifyContent: 'flex-start',
              }}
            >
              <AnimatePresence>
                {queue.map((value, index) => (
                  <motion.div
                    key={`${value}-${index}`}
                    className={`flex h-16 w-16 items-center justify-center rounded-lg border-2 font-bold text-white ${
                      animatingIndex === index
                        ? index === 0
                          ? 'border-red-600 bg-red-500'
                          : 'border-green-600 bg-green-500'
                        : 'border-yellow-600 bg-yellow-500'
                    } `}
                    initial={
                      index === queue.length - 1
                        ? { x: 50, opacity: 0, scale: 0.8 }
                        : false
                    }
                    // exit={{ x: -60, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 120,
                      damping: 20,
                    }}
                  >
                    {value}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Queue Position Indicators */}
        {queue.length > 0 && (
          <div className="mt-4 flex justify-center space-x-2">
            {queue.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 0
                    ? 'bg-red-400'
                    : index === queue.length - 1
                      ? 'bg-green-400'
                      : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* Operation Info */}
        <div className="text-muted-foreground mt-4 text-center text-sm">
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded bg-red-500"></div>
              <span>Dequeue (Front)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded bg-green-500"></div>
              <span>Enqueue (Rear)</span>
            </div>
          </div>
        </div>
        {/* Queue Stats */}
        <div className="text-muted-foreground mt-2 text-center text-xs">
          Queue Length: {queue.length} |
          {queue.length > 0 &&
            ` First (dequeue): ${queue[0]} | Last (enqueue): ${queue[queue.length - 1]}`}
        </div>
      </div>
    </div>
  );
};

export default QueueFIFOVisualizer;
