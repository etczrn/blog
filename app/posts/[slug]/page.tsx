import type { Metadata } from 'next';
import { getPost } from '../lib/utils';
import { Mdx } from './components/mdx';

type Props = { params: Promise<{ slug: string }> };

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${post?.metadata?.title ?? 'Post'} | I write to forget`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export async function generateStaticParams(props: Props) {
  const { slug } = await props.params;
  return [{ slug }];
}

export default async function Post(props: Readonly<Props>) {
  const { slug } = await props.params;
  const post = getPost(slug);

  // TODO: not found page
  if (!post) return null;

  return (
    <article>
      <Mdx source={post.content} />
    </article>
  );
}
