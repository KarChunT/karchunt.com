'use client';

import React, { useEffect, useRef } from 'react';
import {
  TOP_TAGLINE,
  MAIN_HEADLINE,
  HERO_SUB_HEADLINE,
  HERO_BOTTOM_TAGLINE,
} from '@/constants';
import CoreValues from '@/components/page/home/coreValues';

const colors = {
  50: '#fffbe6',
  100: '#fff3bf',
  200: '#ffe066',
  300: '#ffd43b',
  400: '#fcc419',
  500: '#fab005',
  600: '#f59f00',
  700: '#f08c00',
  800: '#e67700',
  900: '#d9480f',
};

const HeroSVG = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="rgba(200,180,160,0.08)"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <line
      x1="0"
      y1="20%"
      x2="100%"
      y2="20%"
      className="grid-line"
      style={{ animationDelay: '0.5s' }}
    />
    <line
      x1="0"
      y1="80%"
      x2="100%"
      y2="80%"
      className="grid-line"
      style={{ animationDelay: '1s' }}
    />
    <line
      x1="20%"
      y1="0"
      x2="20%"
      y2="100%"
      className="grid-line"
      style={{ animationDelay: '1.5s' }}
    />
    <line
      x1="80%"
      y1="0"
      x2="80%"
      y2="100%"
      className="grid-line"
      style={{ animationDelay: '2s' }}
    />
    <line
      x1="50%"
      y1="0"
      x2="50%"
      y2="100%"
      className="grid-line"
      style={{ animationDelay: '2.5s', opacity: 0.05 }}
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      className="grid-line"
      style={{ animationDelay: '3s', opacity: 0.05 }}
    />
    <circle
      cx="20%"
      cy="20%"
      r="2"
      className="detail-dot"
      style={{ animationDelay: '3s' }}
    />
    <circle
      cx="80%"
      cy="20%"
      r="2"
      className="detail-dot"
      style={{ animationDelay: '3.2s' }}
    />
    <circle
      cx="20%"
      cy="80%"
      r="2"
      className="detail-dot"
      style={{ animationDelay: '3.4s' }}
    />
    <circle
      cx="80%"
      cy="80%"
      r="2"
      className="detail-dot"
      style={{ animationDelay: '3.6s' }}
    />
    <circle
      cx="50%"
      cy="50%"
      r="1.5"
      className="detail-dot"
      style={{ animationDelay: '4s' }}
    />
  </svg>
);

const CornerElements = () => (
  <>
    {[
      { className: 'top-8 left-8', delay: '4s' },
      { className: 'top-8 right-8', delay: '4.2s' },
      { className: 'bottom-8 left-8', delay: '4.4s' },
      { className: 'right-8 bottom-8', delay: '4.6s' },
    ].map(({ className, delay }, i) => (
      <div
        key={i}
        className={`corner-element ${className}`}
        style={{ animationDelay: delay }}
      >
        <div
          className={`absolute ${className.replace(/(top|bottom|left|right)-8/g, '$1-0')} h-2 w-2 opacity-30`}
          style={{ background: colors[200] }}
        ></div>
      </div>
    ))}
  </>
);

const FloatingElements = () => (
  <>
    {[
      { top: '25%', left: '15%', delay: '5s' },
      { top: '60%', left: '85%', delay: '5.5s' },
      { top: '40%', left: '10%', delay: '6s' },
      { top: '75%', left: '90%', delay: '6.5s' },
    ].map(({ top, left, delay }, i) => (
      <div
        key={i}
        className="floating-element"
        style={{ top, left, animationDelay: delay, position: 'absolute' }}
      ></div>
    ))}
  </>
);

const Tagline = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className="font-mono text-xs font-light tracking-[0.2em] uppercase opacity-80 md:text-sm"
      style={{ color }}
    >
      {children}
    </h2>
  );
};

const Divider = ({
  color,
  className = '',
  ...props
}: {
  color: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={`h-px w-16 opacity-30 ${className}`}
      style={{
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
        ...props.style,
      }}
      {...props}
    ></div>
  );
};

const FloatingDots = ({ color }: { color: string }) => {
  return (
    <div
      className="mt-6 flex justify-center space-x-4 opacity-0"
      style={{
        animation: 'word-appear 1s ease-out forwards',
        animationDelay: '4.5s',
      }}
    >
      <div
        className="h-1 w-1 rounded-full opacity-40"
        style={{ background: color }}
      ></div>
      <div
        className="h-1 w-1 rounded-full opacity-60"
        style={{ background: color }}
      ></div>
      <div
        className="h-1 w-1 rounded-full opacity-40"
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default function Hero() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>('.word');
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        word.style.animation = 'word-appear 0.8s ease-out forwards';
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + 'px';
        gradient.style.top = e.clientY - 192 + 'px';
        gradient.style.opacity = '1';
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = '0';
    }
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener('mouseenter', () => {
        word.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
      });
      word.addEventListener('mouseleave', () => {
        word.style.textShadow = 'none';
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement('div');
      ripple.style.position = 'fixed';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      ripple.style.width = '4px';
      ripple.style.height = '4px';
      ripple.style.background = 'rgba(200, 180, 160, 0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'pulse-glow 1s ease-out forwards';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener('click', onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document
          .querySelectorAll<HTMLElement>('.floating-element')
          .forEach((el, index) => {
            setTimeout(() => {
              el.style.animationPlayState = 'running';
            }, index * 200);
          });
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="font-primary relative mt-10 min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1a1d18] via-black to-[#2a2e26] text-[#e6e1d7] md:mt-0">
      <HeroSVG />
      <CornerElements />
      <FloatingElements />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-8 py-12 md:px-16 md:py-24">
        {/* Top tagline */}
        <div className="text-center">
          <Tagline color={colors[200]}>
            {TOP_TAGLINE.map(({ text, delay }, i) => (
              <span className="word" data-delay={delay} key={i}>
                {text}
              </span>
            ))}
          </Tagline>
          <Divider color={colors[200]} className="mt-4" />
        </div>

        {/* Main headline */}
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="text-decoration text-3xl leading-tight font-extralight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: colors[50] }}
          >
            <div className="mb-4 md:mb-6">
              {MAIN_HEADLINE.map(({ text, delay }, i) => (
                <span className="word" data-delay={delay} key={i}>
                  {text}
                </span>
              ))}
            </div>

            <div
              className="text-[20px] leading-relaxed font-thin md:text-2xl lg:text-3xl"
              style={{ color: colors[200] }}
            >
              {HERO_SUB_HEADLINE.map(({ text, delay }, i) => (
                <span className="word" data-delay={delay} key={i}>
                  {text}
                </span>
              ))}
            </div>
          </h1>
          <div
            className="absolute top-1/2 -left-8 h-px w-4 opacity-20"
            style={{
              background: colors[200],
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '3.5s',
            }}
          ></div>
          <div
            className="absolute top-1/2 -right-8 h-px w-4 opacity-20"
            style={{
              background: colors[200],
              animation: 'word-appear 1s ease-out forwards',
              animationDelay: '3.7s',
            }}
          ></div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <Divider color={colors[200]} className="mb-4" />
          <Tagline color={colors[200]}>
            {HERO_BOTTOM_TAGLINE.map(({ text, delay }, i) => (
              <span className="word" data-delay={delay} key={i}>
                {text}
              </span>
            ))}
          </Tagline>
          <FloatingDots color={colors[200]} />
        </div>
      </div>

      <CoreValues />

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="pointer-events-none fixed h-96 w-96 rounded-full opacity-0 blur-3xl transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      ></div>
    </div>
  );
}
