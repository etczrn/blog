import { HTMLAttributes, ReactNode } from 'react';

export type HTMLElementProps<T = HTMLElement> = HTMLAttributes<T> & {
  children: ReactNode;
};
