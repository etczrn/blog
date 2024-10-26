import { getPost } from '../lib/utils';
import { Mdx } from './components/mdx';

type Params = Promise<{ slug: string }>;

// export async function generateMetadata(props: { params: Params }) {
//   const params = await props.params;
//   const slug = params.slug;
// }

export async function generateStaticParams(props: { params: Params }) {
  const { slug } = await props.params;
  return [{ slug }];
}

export default async function Post(props: Readonly<{ params: Params }>) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) return null;

  return (
    <article>
      <Mdx source={post.content} />
    </article>
  );
}
