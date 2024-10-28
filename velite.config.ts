import { defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    posts: {
      name: 'Post', // collection type name
      pattern: 'posts/**/*.md', // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          slug: s.slug('posts'), // validate format, unique in posts collection
          // slug: s.path(), // auto generate slug from file path
          date: s.isodate(), // input Date-like string, output ISO Date string.
          cover: s.image().optional(), // input image relative path, output image object with blurImage.
          video: s.file().optional(), // input file relative path, output file public path.
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          excerpt: s.excerpt(), // excerpt of markdown content
          // content: s.markdown(), // transform markdown to html
          content: s.mdx(),
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/posts/${data.slug}` })),
    },
    // others: {
    //   // other collection schema options
    // },
    // tags: {
    //   name: 'Tag',
    //   pattern: 'tags/**/*.md',
    //   schema: s.object({})
    // }
  },
});
