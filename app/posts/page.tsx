import { posts } from '@/.velite';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <ul>
        {posts.map(({ title, permalink }) => (
          <li key={permalink}>
            <article>
              <h2>
                <Link href={permalink}>
                  <span>{title}</span>
                </Link>
              </h2>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
