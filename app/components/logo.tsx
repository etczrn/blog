'use client';

import { usePathname } from 'next/navigation';
import { Highlight } from './highlight';

export function Logo() {
  const pathname = usePathname();
  const show = pathname === '/';

  return (
    <p
      className={`mr-8 text-sm text-center font-[family-name:var(--font-geist-mono)]`}
    >
      <span className="block">I write </span>
      <span className="block">
        to{' '}
        <Highlight show={show}>
          <span className={show ? 'font-semibold' : ''}>forget</span>
        </Highlight>
      </span>
    </p>
  );
}
