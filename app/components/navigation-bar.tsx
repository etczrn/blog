'use client';

import { Hamburger, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Highlight } from './highlight';

function isActivePath(pathname: string, href: string) {
  const [firstPath] = pathname
    .split('/')
    .filter(Boolean)
    .map((p) => `/${p}`);

  return pathname === href || firstPath === href;
}

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'about' },
    { href: '/posts', label: 'posts' },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav className="font-[family-name:var(--font-geist-mono)] ml-auto">
      <ul className="hidden text-sm capitalize sm:flex w-fit">
        {links.map(({ href, label }) => {
          const isActive = isActivePath(pathname, href);
          return (
            <li
              key={href}
              className={`mr-4 ${isActive ? 'font-semibold' : ''}`}
            >
              <Highlight show={isActive}>
                <Link href={href}>{label}</Link>
              </Highlight>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="sm:hidden"
      >
        <Hamburger size={24} />
      </Button>
      {mobileMenuOpen && (
        <div className="absolute inset-0 z-50 flex flex-col p-4 bg-white h-svh sm:hidden">
          <Button
            onClick={() => setMobileMenuOpen(false)}
            className="ml-auto sm:hidden"
          >
            <X size={24} />
          </Button>
          <ul className="py-8 text-4xl capitalize">
            {links.map(({ href, label }) => {
              const isActive = isActivePath(pathname, href);
              return (
                <li
                  key={href}
                  className={`pb-8 w-fit ${isActive ? 'font-semibold' : ''}`}
                >
                  <Highlight show={isActive}>
                    <Link href={href} onClick={() => setMobileMenuOpen(false)}>
                      {label}
                    </Link>
                  </Highlight>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
