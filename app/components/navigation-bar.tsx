'use client';

import { Hamburger, X } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

import { Button } from '@/app/components/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Highlight } from './highlight';

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'about' },
    { href: '/posts', label: 'posts' },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav className="font-[family-name:var(--font-geist-mono)]">
      <ul className="hidden text-sm capitalize sm:flex w-fit">
        {links.map(({ href, label }) => (
          <li
            key={href}
            className={`mr-4 ${pathname === href ? 'font-semibold' : ''}`}
          >
            <Highlight show={pathname === href}>
              <Link href={href}>{label}</Link>
            </Highlight>
          </li>
        ))}
      </ul>
      <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Hamburger size={24} />
      </Button>
      {mobileMenuOpen && (
        <div className="absolute inset-0 z-50 flex flex-col p-4 bg-white h-svh sm:hidden">
          <Button onClick={() => setMobileMenuOpen(false)} className="ml-auto">
            <X size={32} />
          </Button>
          <ul className="py-8 text-4xl capitalize">
            {links.map(({ href, label }) => (
              <li
                key={href}
                className={`pb-8 w-fit ${
                  pathname === href ? 'font-semibold' : ''
                }`}
              >
                <Highlight show={pathname === href}>
                  <Link href={href} onClick={() => setMobileMenuOpen(false)}>
                    {label}
                  </Link>
                </Highlight>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
