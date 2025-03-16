'use client';

import React, {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
  type MouseEvent,
} from 'react';
import { CORE_VALUES } from '@/constants';
import BlurFade from '@/components/ui/blur-fade';

const CoreValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CORE_VALUES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CORE_VALUES.length) % CORE_VALUES.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle drag start
  const handleDragStart = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => {
    setIsDragging(true);
    setAutoplay(false);

    // Get the starting position
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }

    setPrevTranslate(currentIndex * -100);

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
    }
  };

  // Handle dragging
  const handleDragging = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) return;

    e.preventDefault();

    // Get current position
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;

    // Calculate how far we've dragged
    const diff =
      ((currentX - startX) / (carouselRef.current?.offsetWidth || 1)) * 100;

    // Update the translate value
    const newTranslate = prevTranslate + diff;
    setCurrentTranslate(newTranslate);

    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${newTranslate}%)`;
    }
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    setAutoplay(true);

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }

    // Determine if we should go to the next or previous slide
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -20) {
      // Dragged left - go to next slide
      if (currentIndex === CORE_VALUES.length - 1) {
        // If at last slide, loop to first
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (movedBy > 20) {
      // Dragged right - go to previous slide
      if (currentIndex === 0) {
        // If at first slide, loop to last
        setCurrentIndex(CORE_VALUES.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      // Go back to current slide
      goToSlide(currentIndex);
    }
  };

  // Reset autoplay when dragging is done
  useEffect(() => {
    if (!isDragging) {
      setAutoplay(true);
    }
  }, [isDragging]);

  // Update transform when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    }
  }, [currentIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  return (
    <div className="mx-auto max-w-[64rem] px-4 py-16">
      <div className="mb-8 text-center">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-3xl font-semibold tracking-tighter">
            Synergy of my three core values
          </h2>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="mb-2 text-base text-neutral-500 md:text-lg">
            Fuels the fire, making everything you do powerful and engaging.
            Aesthetically pleasing and intellectually stimulating. Reinforces
            continuous growth and adaptation, pushing you to not just create,
            but improve and innovate.
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.25 * 3} inView>
        <div
          className="relative mx-auto max-w-5xl cursor-grab overflow-hidden"
          onTouchStart={handleDragStart}
          onTouchMove={handleDragging}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragging}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CORE_VALUES.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="mx-auto max-w-2xl rounded-lg border border-neutral-700 p-4 text-center">
                  <blockquote>
                    <p className="text-lg font-medium sm:text-xl md:text-2xl">
                      {item.content}
                    </p>

                    <div className="mt-6">
                      <cite className="font-medium text-primary">
                        {item.title}
                      </cite>
                    </div>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-2">
          {CORE_VALUES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default CoreValues;
