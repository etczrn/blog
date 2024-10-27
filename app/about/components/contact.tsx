'use client';

import { GithubLogo, PaperPlaneTilt } from '@phosphor-icons/react';

import { cn } from '@/app/lib/utils';

export function Contacts({
  className,
}: Readonly<{
  className?: HTMLUListElement['className'];
}>) {
  return (
    <ul className={cn('flex gap-x-2', className)}>
      <li>
        <a href="https://github.com/etczrn" target="_blank">
          <GithubLogo size={32} className="p-1 rounded-full hover:bg-zinc-50" />
        </a>
      </li>
      <li>
        <a href="mailto:etczrn@gmail.com">
          <PaperPlaneTilt
            size={32}
            className="p-1 rounded-full hover:bg-zinc-50"
          />
        </a>
      </li>
    </ul>
  );
}
