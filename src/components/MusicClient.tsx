'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { AUDIO_PATH } from '@/constants';
import { getBasePath } from '@/lib/utils';

const MusicToggleButton = () => {
  const basePath = getBasePath();
  const bars = 5;

  const getRandomHeights = () => {
    return Array.from({ length: bars }, () => Math.random() * 0.8 + 0.2);
  };

  const [heights, setHeights] = useState(getRandomHeights());

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, sound }] = useSound(`${basePath}${AUDIO_PATH}`, {
    loop: true,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
    soundEnabled: true,
  });

  useEffect(() => {
    if (isPlaying) {
      const waveformIntervalId = setInterval(() => {
        setHeights(getRandomHeights());
      }, 100);

      return () => {
        clearInterval(waveformIntervalId);
      };
    }
    setHeights(Array(bars).fill(0.1));
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      return;
    }
    play();
    setIsPlaying(true);
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        key="audio"
        initial={{ padding: '10px 10px ' }}
        whileHover={{ padding: '14px 18px ' }}
        whileTap={{ padding: '14px 18px ' }}
        transition={{ duration: 1, bounce: 0.6, type: 'spring' }}
        className="bg-background cursor-pointer rounded-full p-2"
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
          }}
          exit={{ opacity: 0, filter: 'blur(4px)' }}
          transition={{ type: 'spring', bounce: 0.35 }}
          className="flex h-[18px] w-full items-center gap-1 rounded-full"
        >
          {/* Waveform visualization */}
          {heights.map((height, index) => (
            <motion.div
              key={index}
              className="bg-foreground w-[1px] rounded-full"
              initial={{ height: 1 }}
              animate={{
                height: Math.max(4, height * 14),
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 10,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default MusicToggleButton;
