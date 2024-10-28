import { HTMLElementProps } from '@/app/components/ui/types';
import { cn } from '@/app/lib/utils';

export function H1({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps<HTMLHeadingElement>>) {
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
}: Readonly<HTMLElementProps<HTMLHeadingElement>>) {
  return (
    <h2
      className={cn(
        'mt-10 transition-colors',
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
}: Readonly<HTMLElementProps<HTMLHeadingElement>>) {
  return (
    <h3
      className={cn(
        'mt-8',
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
}: Readonly<HTMLElementProps<HTMLHeadingElement>>) {
  return (
    <h4
      className={cn(
        'mt-6',
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
}: Readonly<HTMLElementProps<HTMLParagraphElement>>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Blockquote({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps>) {
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
}: Readonly<HTMLElementProps<HTMLUListElement>>) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function Code({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps>) {
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

export function Anchor({
  children,
  href,
  className,
  ...props
}: Readonly<HTMLElementProps<HTMLAnchorElement>> & { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        'font-semibold text-teal-500 border-b border-b-teal-900 border-opacity-25 after:content-["↗"] after:mx-0.5',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
