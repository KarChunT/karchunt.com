import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomArray(size: number): number[] {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100) + 1,
  );
}
