import { Post, posts } from '@/.velite';

export function formatDate(date?: string) {
  const d = new Date(date ?? '');

  if (d.toString() === 'Invalid Date') {
    return '';
  }

  return Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(d);
}

export function getPosts({
  take = 10,
  skip = 0,
  orderBy = 'desc',
  sortBy = 'date',
  search = '',
}: // tags = [], // TODO: add tag filtering
{
  // pagination
  take?: number;
  skip?: number;
  // sorting
  orderBy?: 'desc' | 'asc';
  sortBy?: 'date';
  // filtering
  search?: string;
  tags?: string[];
} = {}) {
  // filtering
  const filteredPosts = posts.filter(({ title }) =>
    title.toLowerCase().includes(search.trim().toLowerCase())
  );
  // sorting
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy !== 'date') return 0;

    switch (orderBy) {
      case 'desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return 0;
    }
  });
  // pagination
  const paginatedPosts = sortedPosts.slice(skip, skip + take);

  return paginatedPosts;
}

export function getPost({ slug }: Pick<Post, 'slug'>) {
  const post = posts.find((post) => post.slug === slug);
  return post;
}
