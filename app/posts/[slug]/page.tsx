import { formatDate, getPost } from '../lib/utils';

import { MDXContent } from './components/mdx';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Readonly<Props>) {
  const { slug } = await params;
  const post = getPost({ slug });
  // return <article></article>;

  if (!post) {
    // TODO: add 404
    return <p>Post not found</p>;
  }

  const {
    title,
    content,
    date,
    metadata: { readingTime, wordCount },
  } = post;
  console.log({ content });

  return (
    <article>
      <section className="my-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <time className="text-sm text-zinc-400">{formatDate(date)}</time>
        <p className="text-sm text-zinc-500">
          {wordCount} words · {readingTime} min read
        </p>
      </section>
      <section className="my-6">
        <MDXContent code={content} />
      </section>
    </article>
  );
}
