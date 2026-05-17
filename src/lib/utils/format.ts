import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function formatNaira(kobo: number): string {
  const naira = kobo / 100;
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(naira);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
