import Link from 'next/link';
import { getPosts } from './lib/utils';

export default function Posts() {
  const posts = getPosts();

  return (
    <section>
      <ul className="space-y-4">
        {posts.map(({ slug, metadata: { title, description } }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              <h1>{title}</h1>
              <p>{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
