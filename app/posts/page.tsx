import Link from 'next/link';
import { getPosts } from './lib/utils';

export default function Posts() {
  const posts = getPosts();

  return (
    <section>
      <ul>
        {posts.map(({ slug, metadata: { title } }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
