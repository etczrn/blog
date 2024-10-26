import Link from 'next/link';
import { Logo } from './logo';
import { NavigationBar } from './navigation-bar';

export function Header() {
  return (
    <header className="flex items-center justify-between min-h-16">
      <Link href={'/'}>
        <Logo />
      </Link>
      <NavigationBar />
    </header>
  );
}
