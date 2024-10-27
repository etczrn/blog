import { formatDate, getPosts } from './lib/utils';

import Link from 'next/link';

export default function Posts() {
  const posts = getPosts();

  return (
    <section>
      {/* TODO: add filter */}
      <ul className="flex flex-col gap-20 py-8">
        {posts.map(
          ({ slug, metadata: { title, description, publishedAt } }) => (
            <li key={slug}>
              <article className="relative flex flex-col items-start group">
                <h2 className="text-xl font-semibold capitalize sm:text-2xl">
                  <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 sm:group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 rounded-2xl" />
                  <Link href={`/posts/${slug}`}>
                    <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{title}</span>
                  </Link>
                </h2>
                <time className="relative z-10 flex items-center order-first mb-3 text-sm text-zinc-400">
                  {formatDate(publishedAt)}
                </time>
                <p className="relative z-10 mt-2 mb-8 overflow-hidden text-sm sm:text-base text-zinc-600 text-ellipsis line-clamp-3">
                  {description}
                </p>
                <button className="relative p-0.5">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-300 to-teal-400" />
                  <div className="relative px-4 py-2 text-sm transition duration-200 bg-white rounded-md sm:text-base sm:px-8 group group-hover:bg-transparent group-hover:text-white group-hover:font-semibold">
                    Read more &rarr;
                  </div>
                </button>
              </article>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
