import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
};

// https://vercel.com/templates/next.js/portfolio-starter-kit
function parseFrontmatter(rawContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(rawContent);
  const frontMatterBlock = match![1];
  const content = rawContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    // console.log({ line });
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    // console.log({ key, value });
    metadata[key.trim() as keyof Metadata] = value;
    // console.log({ key, value, metadata });
  });

  return { metadata, content };
}

// https://github.com/vercel/examples/tree/main/solutions/blog
function getMdxFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMdxFile(path: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(path, 'utf-8');
  const { metadata, content } = parseFrontmatter(rawContent);
  return { metadata, content };
}

function getMdxData(dir: string) {
  const mdxFiles = getMdxFiles(dir);

  const mdxData = mdxFiles.map((file) => {
    const { content, metadata } = readMdxFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return { slug, metadata, content };
  });

  return mdxData;
}

// TODO: add pagination, sorting
export function getPosts({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
} = {}) {
  const posts = getMdxData(
    path.join(process.cwd(), 'app', 'posts', 'markdown')
  );
  console.log({ posts });
  return posts;
}

// ======
export function getPost(slug: string) {
  const allPosts = getPosts();
  return allPosts.find(({ slug: postSlug }) => slug === postSlug);
}

export function formatDate(date?: string) {
  const dateObj = new Date(date ?? '');

  if (dateObj.toString() === 'Invalid Date') {
    return '';
  }

  // YYYY.MM.DD.
  return dateObj.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}
