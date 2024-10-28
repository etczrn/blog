import Link from 'next/link';
import { Logo } from './logo';
import { NavigationBar } from './navigation-bar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full min-h-16 flex items-center bg-white">
      <Link href={'/'} className="max-w-fit">
        <Logo />
      </Link>
      <NavigationBar />
    </header>
  );
}
