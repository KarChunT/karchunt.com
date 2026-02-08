import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function tagToSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function generateRandomArray(size: number): number[] {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100) + 1,
  );
}
