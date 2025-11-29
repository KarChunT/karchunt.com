'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { getRandomQuote, quotes, type Quote } from '@/lib/quotes';
import {
  RefreshCw,
  Copy,
  QuoteIcon,
  Check,
  Grid,
  Play,
  Pause,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteDisplayProps {
  initialQuote?: Quote;
}

const QuoteDisplay = ({ initialQuote }: QuoteDisplayProps) => {
  const [quote, setQuote] = useState<Quote>(initialQuote || getRandomQuote());
  const [filter, setFilter] = useState<'all' | 'en' | 'zh'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);

  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Add a small delay for the animation feel
    await new Promise((resolve) => setTimeout(resolve, 400));
    setQuote(getRandomQuote(filter));
    setIsRefreshing(false);
    setProgress(0);
  };

  const handleCopy = (text: string, author: string) => {
    navigator.clipboard.writeText(`"${text}" — ${author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Update quote when filter changes if current quote doesn't match
  useEffect(() => {
    if (filter !== 'all' && quote.language !== filter) {
      setQuote(getRandomQuote(filter));
    }
  }, [filter, quote.language]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;
    const duration = 10000; // 10 seconds per quote
    const updateRate = 100; // update progress every 100ms

    if (isAutoPlaying && viewMode === 'single') {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 100 / (duration / updateRate);
        });
      }, updateRate);

      interval = setInterval(() => {
        handleRefresh();
      }, duration);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, viewMode, filter]); // Added dependencies

  const displayQuotes =
    filter === 'all' ? quotes : quotes.filter((q) => q.language === filter);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="mx-auto w-full">
          <AnimatePresence mode="wait">
            {viewMode === 'single' ? (
              <motion.div
                key="single-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center space-y-12"
              >
                {/* Filter Toggle */}
                <div className="flex flex-col justify-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setViewMode(viewMode === 'single' ? 'grid' : 'single')
                    }
                    className="hover:bg-primary/10 hover:text-primary gap-2 rounded-full font-medium transition-colors"
                  >
                    {viewMode === 'single' ? (
                      <>
                        <Grid className="h-4 w-4" /> View All
                      </>
                    ) : (
                      <>
                        <X className="h-4 w-4" /> Close
                      </>
                    )}
                  </Button>
                  <div>
                    {(['all', 'en', 'zh'] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                          filter === f
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                        }`}
                      >
                        {f === 'all' ? 'All' : f === 'en' ? 'English' : '中文'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quote Area */}
                <div className="relative flex min-h-[300px] flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={quote.text}
                      initial={{
                        opacity: 0,
                        scale: 0.95,
                        filter: 'blur(10px)',
                      }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="space-y-8"
                    >
                      <QuoteIcon className="text-primary/30 mx-auto h-10 w-10" />
                      <blockquote
                        className={`text-3xl leading-relaxed font-semibold text-balance md:text-5xl lg:text-6xl ${
                          quote.language === 'zh'
                            ? 'font-medium tracking-wide'
                            : 'italic'
                        }`}
                      >
                        {quote.text}
                      </blockquote>
                      <cite className="text-muted-foreground block text-xl font-medium not-italic md:text-2xl">
                        — {quote.author}
                      </cite>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-6">
                  {isAutoPlaying && (
                    <div className="bg-secondary h-1 w-48 overflow-hidden rounded-full">
                      <motion.div
                        className="bg-primary h-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: 'linear', duration: 0.1 }}
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleCopy(quote.text, quote.author)}
                      className="hover:border-primary/50 hover:bg-secondary/50 h-12 w-12 rounded-full border-2 bg-transparent transition-all"
                      aria-label="Copy quote"
                    >
                      {copied ? (
                        <Check className="text-primary h-5 w-5" />
                      ) : (
                        <Copy className="text-muted-foreground h-5 w-5" />
                      )}
                    </Button>

                    <div className="bg-background flex items-center gap-2 rounded-full border-2 p-1 shadow-lg">
                      <Button
                        variant={isAutoPlaying ? 'secondary' : 'ghost'}
                        size="icon"
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className={`h-12 w-12 rounded-full ${isAutoPlaying ? 'text-primary bg-primary/10' : 'text-muted-foreground'}`}
                        title={
                          isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'
                        }
                      >
                        {isAutoPlaying ? (
                          <Pause className="h-5 w-5 fill-current" />
                        ) : (
                          <Play className="h-5 w-5 fill-current" />
                        )}
                      </Button>

                      <div className="bg-border h-6 w-px" />

                      <Button
                        onClick={handleRefresh}
                        disabled={isRefreshing}
                        size="lg"
                        variant="ghost"
                        className="hover:bg-secondary/50 h-12 gap-2 rounded-full px-6 text-base font-medium"
                      >
                        <RefreshCw
                          className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`}
                        />
                        Next Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="grid-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence>
                  {displayQuotes.map((q, i) => (
                    <motion.div
                      key={i}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-card hover:border-primary/20 relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 shadow-sm transition-all hover:shadow-md"
                      onClick={() => {
                        setQuote(q);
                        setViewMode('single');
                        setIsAutoPlaying(false);
                      }}
                    >
                      <div className="to-secondary/30 absolute inset-0 bg-gradient-to-br from-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <blockquote
                        className={`text-foreground/90 relative z-10 mb-4 text-lg ${q.language === 'zh' ? 'font-medium' : 'italic'}`}
                      >
                        "{q.text}"
                      </blockquote>
                      <div className="relative z-10 flex items-center justify-between">
                        <cite className="text-muted-foreground text-sm font-medium">
                          — {q.author}
                        </cite>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(q.text, q.author);
                          }}
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
