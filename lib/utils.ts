import { ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

// https://ui.aceternity.com/docs/add-utilities
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
