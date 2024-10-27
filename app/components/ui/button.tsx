import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

import { cn } from '@/app/lib/utils';

// https://ui.shadcn.com/docs/components/button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'p-2 transition-all rounded-full hover:bg-zinc-50',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
