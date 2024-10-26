import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
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
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
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

export function getPosts() {
  return getMdxData(path.join(process.cwd(), 'app', 'posts', 'markdown'));
}

// ======
export function getPost(slug: string) {
  const allPosts = getPosts();
  return allPosts.find(({ slug: postSlug }) => slug === postSlug);
}
