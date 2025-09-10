import { clsx, type ClassValue } from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUpdatedAt() {
  const response = await fetch(
    'https://api.github.com/repos/KarChunT/karchunt.com',
  );
  const repo = await response.json();
  const updatedAt = repo.updated_at;
  return new Date(updatedAt).toLocaleDateString();
}

export function generateRandomKey(length: number = 10): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
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
