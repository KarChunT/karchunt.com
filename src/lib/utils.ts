import { clsx, type ClassValue } from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function reactNodeToString(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToString).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return reactNodeToString((node as any).props.children);
  }
  return '';
}

export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function generateRandomArray(size: number): number[] {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100) + 1,
  );
}

export function tagToSlug(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}
