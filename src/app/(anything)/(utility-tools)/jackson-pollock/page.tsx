'use client';

import type React from 'react';

import { useRef, useEffect, useState, useCallback } from 'react';
import {
  Trash2,
  Download,
  Shuffle,
  Info,
  X,
  Palette,
  Paintbrush,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const POLLOCK_PALETTES = [
  {
    name: 'Classic',
    colors: ['#E63946', '#F1C40F', '#2ECC71', '#3498DB', '#1A1A2E', '#F5F5F5'],
  },
  {
    name: 'Autumn',
    colors: ['#D35400', '#E74C3C', '#F39C12', '#8E44AD', '#2C3E50', '#ECF0F1'],
  },
  {
    name: 'Ocean',
    colors: ['#0077B6', '#00B4D8', '#90E0EF', '#023E8A', '#CAF0F8', '#03045E'],
  },
  {
    name: 'Neon',
    colors: ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF', '#FFFFFF'],
  },
  {
    name: 'Earth',
    colors: ['#6B4226', '#8B5A2B', '#CD853F', '#DEB887', '#2F4F4F', '#F5F5DC'],
  },
];

const ALL_COLORS = POLLOCK_PALETTES.flatMap((p) => p.colors);

type SplatterType =
  | 'drip'
  | 'splash'
  | 'spatter'
  | 'line'
  | 'web'
  | 'fling'
  | 'pool'
  | 'ribbon'
  | 'mist'
  | 'burst'
  | 'zigzag'
  | 'comet'
  | 'arc'
  | 'scatter'
  | 'streak'
  | 'swirl'
  | 'crack'
  | 'droplet'
  | 'splat'
  | 'wave'
  | 'constellation';

const SPLATTER_TYPES: SplatterType[] = [
  'drip',
  'splash',
  'spatter',
  'line',
  'web',
  'fling',
  'pool',
  'ribbon',
  'mist',
  'burst',
  'zigzag',
  'comet',
  'arc',
  'scatter',
  'streak',
  'swirl',
  'crack',
  'droplet',
  'splat',
  'wave',
  'constellation',
];

const SPLATTER_DISPLAY_NAMES: Record<SplatterType, string> = {
  drip: 'Drip',
  splash: 'Splash',
  spatter: 'Spatter',
  line: 'Line',
  web: 'Web',
  fling: 'Fling',
  pool: 'Pool',
  ribbon: 'Ribbon',
  mist: 'Mist',
  burst: 'Burst',
  zigzag: 'Zigzag',
  comet: 'Comet',
  arc: 'Arc',
  scatter: 'Scatter',
  streak: 'Streak',
  swirl: 'Swirl',
  crack: 'Crack',
  droplet: 'Droplet',
  splat: 'Splat',
  wave: 'Wave',
  constellation: 'Stars',
};

const page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState([30]);
  const [intensity, setIntensity] = useState([50]);
  const [currentPalette, setCurrentPalette] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSplatters, setSelectedSplatters] = useState<Set<SplatterType>>(
    new Set(SPLATTER_TYPES),
  );
  const [showSplatterPanel, setShowSplatterPanel] = useState(false);

  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const dprRef = useRef(1);

  const palette = POLLOCK_PALETTES[currentPalette];

  const getRandomColor = useCallback(() => {
    if (selectedColor) return selectedColor;
    return palette.colors[Math.floor(Math.random() * palette.colors.length)];
  }, [palette.colors, selectedColor]);

  const getRandomColorFromAll = useCallback(() => {
    return ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];
  }, []);

  const getRandomSplatterType = useCallback((): SplatterType => {
    const available = Array.from(selectedSplatters);
    if (available.length === 0) return 'splash'; // fallback
    return available[Math.floor(Math.random() * available.length)];
  }, [selectedSplatters]);

  const drawSplatterDirect = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      color: string,
      size: number,
      velocityX = 0,
      velocityY = 0,
    ) => {
      const type = getRandomSplatterType();
      const rotation = Math.random() * 360;
      const opacity = 0.7 + Math.random() * 0.3;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;

      switch (type) {
        case 'drip': {
          ctx.beginPath();
          const dripLength = size * (2 + Math.random() * 3);
          ctx.ellipse(
            x,
            y,
            size / 3,
            dripLength,
            (rotation * Math.PI) / 180,
            0,
            Math.PI * 2,
          );
          ctx.fill();
          break;
        }

        case 'splash': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          const spokes = 5 + Math.floor(Math.random() * 8);
          for (let i = 0; i < spokes; i++) {
            ctx.beginPath();
            const angle = ((Math.PI * 2) / spokes) * i;
            const length = size * (0.5 + Math.random());
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
            ctx.lineWidth = 1 + Math.random() * 3;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.arc(0, 0, size / 4, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'spatter': {
          const dots = 3 + Math.floor(Math.random() * 10);
          for (let i = 0; i < dots; i++) {
            ctx.beginPath();
            const offsetX = (Math.random() - 0.5) * size * 2;
            const offsetY = (Math.random() - 0.5) * size * 2;
            const dotSize = 1 + Math.random() * (size / 5);
            ctx.arc(x + offsetX, y + offsetY, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'line': {
          ctx.beginPath();
          const endX = x + velocityX * (20 + Math.random() * 80);
          const endY = y + velocityY * (20 + Math.random() * 80);
          const cp1x = x + (Math.random() - 0.5) * 50;
          const cp1y = y + (Math.random() - 0.5) * 50;
          const cp2x = endX + (Math.random() - 0.5) * 50;
          const cp2y = endY + (Math.random() - 0.5) * 50;
          ctx.moveTo(x, y);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
          ctx.lineWidth = 1 + Math.random() * (size / 8);
          ctx.lineCap = 'round';
          ctx.stroke();
          break;
        }

        case 'web': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          const arms = 6 + Math.floor(Math.random() * 6);
          const rings = 2 + Math.floor(Math.random() * 3);
          ctx.lineWidth = 0.5 + Math.random() * 1.5;
          ctx.lineCap = 'round';

          for (let i = 0; i < arms; i++) {
            ctx.beginPath();
            const angle = ((Math.PI * 2) / arms) * i;
            const length = size * (1 + Math.random() * 0.5);
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
            ctx.stroke();
          }

          for (let r = 1; r <= rings; r++) {
            ctx.beginPath();
            const ringSize = (size / rings) * r * (0.8 + Math.random() * 0.4);
            for (let i = 0; i <= arms; i++) {
              const angle = ((Math.PI * 2) / arms) * i;
              const px = Math.cos(angle) * ringSize;
              const py = Math.sin(angle) * ringSize;
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }
          break;
        }

        case 'fling': {
          const flingCount = 8 + Math.floor(Math.random() * 12);
          const baseAngle = Math.atan2(
            velocityY || Math.random() - 0.5,
            velocityX || Math.random() - 0.5,
          );

          for (let i = 0; i < flingCount; i++) {
            ctx.beginPath();
            const spreadAngle = baseAngle + (Math.random() - 0.5) * 1.2;
            const distance = size * (0.5 + Math.random() * 2);
            const endX = x + Math.cos(spreadAngle) * distance;
            const endY = y + Math.sin(spreadAngle) * distance;
            const dotSize = 1 + Math.random() * (size / 6);
            ctx.ellipse(
              endX,
              endY,
              dotSize * 0.5,
              dotSize * (1 + Math.random()),
              spreadAngle,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
          break;
        }

        case 'pool': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.beginPath();
          const points = 8 + Math.floor(Math.random() * 6);
          for (let i = 0; i <= points; i++) {
            const angle = ((Math.PI * 2) / points) * i;
            const radius = size * (0.6 + Math.random() * 0.4);
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius * (0.5 + Math.random() * 0.3);
            if (i === 0) ctx.moveTo(px, py);
            else {
              const cpAngle = angle - Math.PI / points;
              const cpRadius = size * (0.5 + Math.random() * 0.5);
              ctx.quadraticCurveTo(
                Math.cos(cpAngle) * cpRadius,
                Math.sin(cpAngle) * cpRadius * 0.7,
                px,
                py,
              );
            }
          }
          ctx.closePath();
          ctx.fill();
          break;
        }

        case 'ribbon': {
          ctx.beginPath();
          ctx.lineWidth = size / 4 + Math.random() * (size / 3);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          const ribbonLength = 4 + Math.floor(Math.random() * 4);
          let cx = x,
            cy = y;
          ctx.moveTo(cx, cy);

          for (let i = 0; i < ribbonLength; i++) {
            const angle =
              velocityX || velocityY
                ? Math.atan2(velocityY, velocityX) + (Math.random() - 0.5) * 2
                : Math.random() * Math.PI * 2;
            const segmentLength = size * (0.5 + Math.random());
            const nextX = cx + Math.cos(angle) * segmentLength;
            const nextY = cy + Math.sin(angle) * segmentLength;
            const cpX = cx + (Math.random() - 0.5) * size;
            const cpY = cy + (Math.random() - 0.5) * size;
            ctx.quadraticCurveTo(cpX, cpY, nextX, nextY);
            cx = nextX;
            cy = nextY;
          }
          ctx.stroke();
          break;
        }

        case 'mist': {
          const particles = 20 + Math.floor(Math.random() * 30);
          for (let i = 0; i < particles; i++) {
            ctx.beginPath();
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * size * 1.5;
            const px = x + Math.cos(angle) * distance;
            const py = y + Math.sin(angle) * distance;
            const particleSize = 0.5 + Math.random() * 2;
            ctx.globalAlpha = 0.3 + Math.random() * 0.5;
            ctx.arc(px, py, particleSize, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'burst': {
          ctx.translate(x, y);
          const rays = 12 + Math.floor(Math.random() * 12);
          for (let i = 0; i < rays; i++) {
            ctx.beginPath();
            const angle = ((Math.PI * 2) / rays) * i + Math.random() * 0.3;
            const innerRadius = size * 0.2;
            const outerRadius = size * (0.8 + Math.random() * 0.8);
            ctx.moveTo(
              Math.cos(angle) * innerRadius,
              Math.sin(angle) * innerRadius,
            );
            ctx.lineTo(
              Math.cos(angle) * outerRadius,
              Math.sin(angle) * outerRadius,
            );
            ctx.lineWidth = 1 + Math.random() * 4;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
          // Center dot
          ctx.beginPath();
          ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'zigzag': {
          ctx.beginPath();
          ctx.lineWidth = 2 + Math.random() * (size / 10);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          const segments = 5 + Math.floor(Math.random() * 8);
          const baseAngle =
            velocityX || velocityY
              ? Math.atan2(velocityY, velocityX)
              : Math.random() * Math.PI * 2;
          let cx = x,
            cy = y;
          ctx.moveTo(cx, cy);

          for (let i = 0; i < segments; i++) {
            const perpAngle = baseAngle + Math.PI / 2;
            const zigOffset =
              (i % 2 === 0 ? 1 : -1) * size * (0.3 + Math.random() * 0.4);
            const forwardDist = size * (0.3 + Math.random() * 0.4);
            cx +=
              Math.cos(baseAngle) * forwardDist +
              Math.cos(perpAngle) * zigOffset;
            cy +=
              Math.sin(baseAngle) * forwardDist +
              Math.sin(perpAngle) * zigOffset;
            ctx.lineTo(cx, cy);
          }
          ctx.stroke();
          break;
        }

        case 'comet': {
          const baseAngle =
            velocityX || velocityY
              ? Math.atan2(velocityY, velocityX)
              : (rotation * Math.PI) / 180;
          const tailLength = 8 + Math.floor(Math.random() * 12);

          // Draw tail particles (smaller towards end)
          for (let i = tailLength; i >= 0; i--) {
            ctx.beginPath();
            const t = i / tailLength;
            const dist = size * 2 * (1 - t);
            const px = x - Math.cos(baseAngle) * dist;
            const py = y - Math.sin(baseAngle) * dist;
            const particleSize = size * 0.4 * t + 1;
            ctx.globalAlpha = opacity * t * 0.8;
            ctx.arc(px, py, particleSize, 0, Math.PI * 2);
            ctx.fill();
          }

          // Draw head
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'arc': {
          ctx.beginPath();
          ctx.lineWidth = 2 + Math.random() * (size / 6);
          ctx.lineCap = 'round';

          const arcRadius = size * (1 + Math.random());
          const startAngle = Math.random() * Math.PI * 2;
          const arcLength = Math.PI * (0.3 + Math.random() * 1.2);

          ctx.arc(x, y, arcRadius, startAngle, startAngle + arcLength);
          ctx.stroke();

          // Add dots at ends
          ctx.beginPath();
          ctx.arc(
            x + Math.cos(startAngle) * arcRadius,
            y + Math.sin(startAngle) * arcRadius,
            size * 0.15,
            0,
            Math.PI * 2,
          );
          ctx.fill();
          ctx.beginPath();
          ctx.arc(
            x + Math.cos(startAngle + arcLength) * arcRadius,
            y + Math.sin(startAngle + arcLength) * arcRadius,
            size * 0.15,
            0,
            Math.PI * 2,
          );
          ctx.fill();
          break;
        }

        case 'scatter': {
          const count = 15 + Math.floor(Math.random() * 25);
          for (let i = 0; i < count; i++) {
            ctx.beginPath();
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.pow(Math.random(), 0.5) * size * 2; // Cluster toward center
            const px = x + Math.cos(angle) * dist;
            const py = y + Math.sin(angle) * dist;
            const dotSize = 0.5 + Math.random() * (size / 8);
            ctx.globalAlpha = 0.4 + Math.random() * 0.6;
            ctx.arc(px, py, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'streak': {
          ctx.beginPath();
          const streakAngle =
            velocityX || velocityY
              ? Math.atan2(velocityY, velocityX)
              : (rotation * Math.PI) / 180;
          const streakLength = size * (3 + Math.random() * 4);

          // Tapered stroke using multiple lines
          const segments = 20;
          for (let i = 0; i < segments; i++) {
            const t = i / segments;
            const px = x + Math.cos(streakAngle) * streakLength * t;
            const py = y + Math.sin(streakAngle) * streakLength * t;
            const thickness = size * 0.3 * (1 - t * 0.8); // Taper off
            ctx.beginPath();
            ctx.globalAlpha = opacity * (1 - t * 0.5);
            ctx.arc(px, py, thickness, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'swirl': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.beginPath();
          ctx.lineWidth = 1 + Math.random() * 3;
          ctx.lineCap = 'round';

          const spiralTurns = 1.5 + Math.random() * 2;
          const points = 60;
          for (let i = 0; i <= points; i++) {
            const t = i / points;
            const angle = t * Math.PI * 2 * spiralTurns;
            const radius = t * size;
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          break;
        }

        case 'crack': {
          ctx.translate(x, y);
          ctx.lineWidth = 1 + Math.random() * 2;
          ctx.lineCap = 'round';

          const drawBranch = (
            startX: number,
            startY: number,
            angle: number,
            length: number,
            depth: number,
          ) => {
            if (depth <= 0 || length < 3) return;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            const endX = startX + Math.cos(angle) * length;
            const endY = startY + Math.sin(angle) * length;
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // Branch off
            if (Math.random() > 0.3) {
              drawBranch(
                endX,
                endY,
                angle + (Math.random() - 0.5) * 1.2,
                length * (0.5 + Math.random() * 0.3),
                depth - 1,
              );
            }
            if (Math.random() > 0.4) {
              drawBranch(
                endX,
                endY,
                angle + (Math.random() - 0.5) * 1.2,
                length * (0.5 + Math.random() * 0.3),
                depth - 1,
              );
            }
          };

          const branches = 3 + Math.floor(Math.random() * 3);
          for (let i = 0; i < branches; i++) {
            const angle = ((Math.PI * 2) / branches) * i + Math.random() * 0.5;
            drawBranch(0, 0, angle, size * 0.8, 4);
          }
          break;
        }

        case 'droplet': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);

          // Teardrop shape
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.bezierCurveTo(
            size * 0.6,
            -size * 0.5,
            size * 0.6,
            size * 0.3,
            0,
            size * 0.5,
          );
          ctx.bezierCurveTo(
            -size * 0.6,
            size * 0.3,
            -size * 0.6,
            -size * 0.5,
            0,
            -size,
          );
          ctx.fill();

          // Highlight
          ctx.beginPath();
          ctx.globalAlpha = 0.3;
          ctx.fillStyle = '#ffffff';
          ctx.arc(-size * 0.15, -size * 0.4, size * 0.15, 0, Math.PI * 2);
          ctx.fill();
          break;
        }

        case 'splat': {
          ctx.translate(x, y);
          ctx.rotate((rotation * Math.PI) / 180);

          // Main blob
          ctx.beginPath();
          const blobPoints = 12 + Math.floor(Math.random() * 8);
          for (let i = 0; i <= blobPoints; i++) {
            const angle = ((Math.PI * 2) / blobPoints) * i;
            const radius = size * (0.5 + Math.random() * 0.5);
            const px = Math.cos(angle) * radius;
            const py = Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(px, py);
            else {
              const cp1Angle = angle - Math.PI / blobPoints / 2;
              const cp1Radius = size * (0.3 + Math.random() * 0.6);
              ctx.quadraticCurveTo(
                Math.cos(cp1Angle) * cp1Radius,
                Math.sin(cp1Angle) * cp1Radius,
                px,
                py,
              );
            }
          }
          ctx.closePath();
          ctx.fill();

          // Splatter droplets around
          const droplets = 5 + Math.floor(Math.random() * 8);
          for (let i = 0; i < droplets; i++) {
            ctx.beginPath();
            const angle = Math.random() * Math.PI * 2;
            const dist = size * (0.8 + Math.random() * 1.2);
            const dropSize = size * (0.1 + Math.random() * 0.2);
            ctx.arc(
              Math.cos(angle) * dist,
              Math.sin(angle) * dist,
              dropSize,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
          break;
        }

        case 'wave': {
          ctx.beginPath();
          ctx.lineWidth = 2 + Math.random() * (size / 8);
          ctx.lineCap = 'round';

          const waveLength = size * 4;
          const amplitude = size * 0.5;
          const baseAngle =
            velocityX || velocityY
              ? Math.atan2(velocityY, velocityX)
              : (rotation * Math.PI) / 180;
          const segments = 30;

          for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const along = t * waveLength;
            const wave = Math.sin(t * Math.PI * 3) * amplitude;
            const px =
              x + Math.cos(baseAngle) * along - Math.sin(baseAngle) * wave;
            const py =
              y + Math.sin(baseAngle) * along + Math.cos(baseAngle) * wave;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          break;
        }

        case 'constellation': {
          const stars = 5 + Math.floor(Math.random() * 8);
          const starPositions: { x: number; y: number }[] = [];

          // Draw stars
          for (let i = 0; i < stars; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * size * 1.5;
            const px = x + Math.cos(angle) * dist;
            const py = y + Math.sin(angle) * dist;
            starPositions.push({ x: px, y: py });

            ctx.beginPath();
            ctx.arc(px, py, 2 + Math.random() * 4, 0, Math.PI * 2);
            ctx.fill();
          }

          // Connect some stars with lines
          ctx.lineWidth = 0.5 + Math.random();
          ctx.globalAlpha = 0.4;
          for (let i = 0; i < starPositions.length - 1; i++) {
            if (Math.random() > 0.4) {
              ctx.beginPath();
              ctx.moveTo(starPositions[i].x, starPositions[i].y);
              const connectTo =
                starPositions[
                  i +
                    1 +
                    Math.floor(Math.random() * (starPositions.length - i - 1))
                ];
              if (connectTo) {
                ctx.lineTo(connectTo.x, connectTo.y);
                ctx.stroke();
              }
            }
          }
          break;
        }
      }

      ctx.restore();
    },
    [getRandomSplatterType], // Add getRandomSplatterType dependency
  );

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0f0d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        // ctx.fillStyle = '#0f0d14';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDrawing(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lastPoint.current = { x, y };

      const count = 1 + Math.floor(Math.random() * (intensity[0] / 25));
      for (let i = 0; i < count; i++) {
        drawSplatterDirect(
          ctx,
          x + (Math.random() - 0.5) * 20,
          y + (Math.random() - 0.5) * 20,
          getRandomColor(),
          brushSize[0] * (0.5 + Math.random() * (intensity[0] / 50)),
        );
      }
    },
    [brushSize, intensity, getRandomColor, drawSplatterDirect],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDrawing) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastPoint.current) {
        const dx = x - lastPoint.current.x;
        const dy = y - lastPoint.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Smooth interpolation - draw points along the path
        const spacing = Math.max(3, brushSize[0] / 6);
        const steps = Math.max(1, Math.floor(distance / spacing));

        const velocityX = dx / Math.max(distance, 1);
        const velocityY = dy / Math.max(distance, 1);

        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          const px = lastPoint.current.x + dx * t;
          const py = lastPoint.current.y + dy * t;

          // Vary count based on intensity
          const count = Math.random() < 0.7 ? 1 : 2;
          for (let j = 0; j < count; j++) {
            const offsetX = (Math.random() - 0.5) * brushSize[0] * 0.3;
            const offsetY = (Math.random() - 0.5) * brushSize[0] * 0.3;
            drawSplatterDirect(
              ctx,
              px + offsetX,
              py + offsetY,
              getRandomColor(),
              brushSize[0] * (0.3 + Math.random() * 0.7 * (intensity[0] / 50)),
              velocityX * 20,
              velocityY * 20,
            );
          }
        }
      }

      lastPoint.current = { x, y };
    },
    [isDrawing, brushSize, intensity, getRandomColor, drawSplatterDirect],
  );

  const handlePointerUp = useCallback(() => {
    setIsDrawing(false);
    lastPoint.current = null;
  }, []);

  const randomize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear first
    ctx.fillStyle = '#0f0d14';
    ctx.fillRect(
      0,
      0,
      canvas.width / dprRef.current,
      canvas.height / dprRef.current,
    );

    const count = 50 + Math.floor(Math.random() * 100);
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      drawSplatterDirect(
        ctx,
        x,
        y,
        getRandomColorFromAll(),
        brushSize[0] * (0.5 + Math.random() * 1.5),
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
      );
    }
  }, [brushSize, getRandomColorFromAll, drawSplatterDirect]);

  const downloadCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `pollock-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  const cyclePalette = useCallback(() => {
    setCurrentPalette((prev) => (prev + 1) % POLLOCK_PALETTES.length);
    setSelectedColor(null);
  }, []);

  const toggleSplatter = useCallback((type: SplatterType) => {
    setSelectedSplatters((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        // Don't allow deselecting all
        if (next.size > 1) {
          next.delete(type);
        }
      } else {
        next.add(type);
      }
      return next;
    });
  }, []);

  const selectAllSplatters = useCallback(() => {
    setSelectedSplatters(new Set(SPLATTER_TYPES));
  }, []);

  const selectNoneSplatters = useCallback(() => {
    // Keep at least one
    setSelectedSplatters(new Set(['splash']));
  }, []);

  return (
    <div className="bg-background w-full">
      <div className="h-dvh">
        <div className="relative h-full w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 cursor-crosshair touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        </div>
      </div>

      <div className="relative">
        {/* Controls Panel */}
        <div
          className={cn(
            'relative right-0 bottom-0 left-0 z-10 transition-transform duration-300',
            showControls ? 'translate-y-0' : 'translate-y-full',
          )}
        >
          <div className="bg-card/80 border-border/50 border-t p-4 backdrop-blur-xl md:p-6">
            {/* Mobile toggle */}
            <button
              onClick={() => setShowControls(!showControls)}
              className="bg-card/80 border-border/50 text-foreground/70 absolute -top-10 left-1/2 -translate-x-1/2 rounded-t-lg border border-b-0 px-4 py-2 text-sm backdrop-blur-xl md:hidden"
            >
              {showControls ? 'Hide Controls' : 'Show Controls'}
            </button>

            <div className="mx-auto max-w-4xl space-y-6">
              <div className="flex items-center">
                <h1 className="text-foreground/90 text-lg font-light tracking-widest md:text-xl">
                  POLLOCK STUDIO
                </h1>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowInfo(true)}
                  className="text-foreground/70 hover:text-foreground hover:bg-foreground/10"
                >
                  <Info className="h-5 w-5" />
                  <span className="sr-only">Info</span>
                </Button>
              </div>

              {/* Color Palette */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-xs tracking-wider uppercase">
                    {palette.name} Palette
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={cyclePalette}
                    className="text-foreground/70 hover:text-foreground h-8 gap-2"
                  >
                    <Palette className="h-4 w-4" />
                    <span className="hidden sm:inline">Change</span>
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setSelectedColor(null)}
                    className={cn(
                      'h-8 w-8 rounded-full border-2 transition-all md:h-10 md:w-10',
                      'bg-gradient-conic from-red-500 via-blue-500 via-green-500 via-yellow-500 to-red-500',
                      selectedColor === null
                        ? 'border-foreground scale-110'
                        : 'border-transparent hover:scale-105',
                    )}
                    title="Random colors"
                  />
                  {palette.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        'h-8 w-8 rounded-full border-2 transition-all md:h-10 md:w-10',
                        selectedColor === color
                          ? 'border-foreground scale-110'
                          : 'border-transparent hover:scale-105',
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowSplatterPanel(true)}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-xs tracking-wider uppercase transition-colors"
                >
                  <Paintbrush className="h-3 w-3" />
                  {selectedSplatters.size} of {SPLATTER_TYPES.length} Splatter
                  Types
                </button>
              </div>

              {/* Sliders */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs tracking-wider uppercase">
                      Brush Size
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {brushSize[0]}px
                    </span>
                  </div>
                  <Slider
                    value={brushSize}
                    onValueChange={setBrushSize}
                    min={5}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs tracking-wider uppercase">
                      Intensity
                    </span>
                    <span className="text-muted-foreground font-mono text-xs">
                      {intensity[0]}%
                    </span>
                  </div>
                  <Slider
                    value={intensity}
                    onValueChange={setIntensity}
                    min={10}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={clearCanvas}
                  className="border-border/50 hover:bg-foreground/10 gap-2 bg-transparent"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Clear</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={randomize}
                  className="border-border/50 hover:bg-foreground/10 gap-2 bg-transparent"
                >
                  <Shuffle className="h-4 w-4" />
                  <span className="hidden sm:inline">Randomize</span>
                </Button>
                <Button
                  size="lg"
                  onClick={downloadCanvas}
                  className="bg-foreground text-background hover:bg-foreground/90 gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {showSplatterPanel && (
          <div className="bg-background/80 absolute inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-card border-border relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg border p-6 md:p-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSplatterPanel(false)}
                className="text-muted-foreground hover:text-foreground absolute top-4 right-4"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              <h2 className="mb-2 text-xl font-light tracking-wide">
                Splatter Types
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">
                Select which splatter effects to use when painting.
              </p>

              {/* Quick actions */}
              <div className="mb-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={selectAllSplatters}
                  className="bg-transparent text-xs"
                >
                  Select All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={selectNoneSplatters}
                  className="bg-transparent text-xs"
                >
                  Select One
                </Button>
              </div>

              {/* Splatter type grid */}
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {SPLATTER_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleSplatter(type)}
                    className={cn(
                      'rounded-md px-3 py-2 text-xs font-medium transition-all',
                      'border',
                      selectedSplatters.has(type)
                        ? 'bg-foreground text-background border-foreground'
                        : 'text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground bg-transparent',
                    )}
                  >
                    {SPLATTER_DISPLAY_NAMES[type]}
                  </button>
                ))}
              </div>

              <p className="text-muted-foreground mt-4 text-xs">
                {selectedSplatters.size} type
                {selectedSplatters.size !== 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
        )}

        {/* Info Modal */}
        {showInfo && (
          <div className="bg-background/80 absolute inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-card border-border relative w-full max-w-xl rounded-lg border p-6 md:p-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowInfo(false)}
                className="text-muted-foreground hover:text-foreground absolute top-4 right-4"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>

              <h2 className="mb-4 text-xl font-light tracking-wide">
                About Pollock Studio
              </h2>
              <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                <p>
                  Create expressive abstract art inspired by Jackson
                  Pollock&apos;s revolutionary drip painting technique.
                </p>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">How to use:</h3>
                  <ul className="list-inside list-disc space-y-1">
                    <li>Click and drag to paint</li>
                    <li>Select colors or use random mode</li>
                    <li>Adjust brush size and intensity</li>
                    <li>Try different color palettes</li>
                    <li>Click the brush icon to choose splatter types</li>
                    <li>Download your masterpiece</li>
                  </ul>
                </div>
                <p className="text-muted-foreground/70 pt-2 text-xs">
                  &quot;Every good painter paints what he is.&quot; — Jackson
                  Pollock
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
