import { formatDate, getPosts } from './lib/utils';

import Link from 'next/link';

export default function Page() {
  const posts = getPosts();

  return (
    <>
      <section></section>
      <section>
        <ul className="grid grid-cols-1 gap-12">
          {posts.map(({ slug, title, permalink, date }) => (
            <li key={slug}>
              <article className="group relative flex flex-col items-start p-4">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-800">
                  <div className="absolute inset-0 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:rounded-2xl sm:-inset-2" />
                  <Link href={permalink}>
                    <span className="absolute inset-0 z-20 sm:rounded-2xl" />
                    <span className="relative z-10">{title}</span>
                  </Link>
                </h2>
                <time
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400"
                  dateTime={formatDate(date)}
                >
                  {formatDate(date)}
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {title}
                </p>
                <span className="relative z-10 group-hover:text-teal-500 transition font-medium">
                  Read more &rarr;
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section></section>
    </>
  );
}
