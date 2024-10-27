import {
  LinkPreview,
  LinkPreviewProps,
} from '@/app/components/ui/link-preview';
import { H2, Ul } from '@/app/components/ui/typography';

import { HTMLElementProps } from '@/app/components/ui/types';
import { cn } from '@/app/lib/utils';

export function Section({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps>) {
  return (
    <section className={cn('mb-12', className)} {...props}>
      {children}
    </section>
  );
}

export function Block({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps>) {
  return (
    <article
      className={cn('grid gap-4 my-8 sm:grid-cols-3', className)}
      {...props}
    >
      {children}
    </article>
  );
}

export function LeftSide({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps<HTMLDivElement>>) {
  return (
    <div className={cn('col-span-full sm:col-span-1', className)} {...props}>
      {children}
    </div>
  );
}

export function RightSide({
  children,
  className,
  ...props
}: Readonly<Partial<HTMLElementProps<HTMLDivElement>>>) {
  return (
    <div className={cn('col-span-full sm:col-span-2', className)} {...props}>
      {children}
    </div>
  );
}

export function Title({
  children,
}: Readonly<Pick<HTMLElementProps<HTMLHeadingElement>, 'children'>>) {
  return <H2 className="capitalize">{children}</H2>;
}

export function Group({
  children,
}: Readonly<Pick<HTMLElementProps<HTMLUListElement>, 'children'>>) {
  return <Ul className="mt-2 mb-4 last-of-type:mb-0">{children}</Ul>;
}

export function Caption({
  children,
  className,
  ...props
}: Readonly<HTMLElementProps<HTMLParagraphElement>>) {
  return (
    <p className={cn('text-sm text-zinc-500', className)} {...props}>
      {children}
    </p>
  );
}

export function Link({
  children,
  imageSrc,
  url,
}: Readonly<
  Required<Pick<LinkPreviewProps, 'children' | 'imageSrc' | 'url'>>
>) {
  return (
    <LinkPreview
      isStatic
      imageSrc={imageSrc}
      className='font-semibold text-teal-500 border-b border-b-teal-900 border-opacity-25 after:content-["↗"] after:mx-0.5'
      url={url}
    >
      {children}
    </LinkPreview>
  );
}
