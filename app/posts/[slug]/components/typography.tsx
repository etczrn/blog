import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/app/lib/utils';

interface TypographyProps<T = HTMLElement> extends HTMLAttributes<T> {
  children: ReactNode;
}

export function H1({
  children,
  className,
  ...props
}: TypographyProps<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className,
  ...props
}: TypographyProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'pb-2 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({
  children,
  className,
  ...props
}: TypographyProps<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-2xl font-semibold tracking-tight scroll-m-20',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({
  children,
  className,
  ...props
}: TypographyProps<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        'text-xl font-semibold tracking-tight scroll-m-20',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({
  children,
  className,
  ...props
}: TypographyProps<HTMLParagraphElement>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children, className, ...props }: TypographyProps) {
  return (
    <blockquote
      className={cn('pl-6 mt-6 italic border-l-2', className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function Ul({
  children,
  className,
  ...props
}: TypographyProps<HTMLUListElement>) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function Code({ children, className, ...props }: TypographyProps) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}
