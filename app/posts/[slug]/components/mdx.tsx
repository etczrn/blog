import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { Blockquote, Code, H1, H2, H3, H4, P, Ul } from './typography';

import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: ({ children }) => <H1>{children}</H1>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  h4: ({ children }) => <H4>{children}</H4>,
  p: ({ children }) => <P>{children}</P>,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  ul: ({ children }) => <Ul>{children}</Ul>,
  code: ({ children }) => <Code>{children}</Code>,
};

export function Mdx({ source }: Readonly<Pick<MDXRemoteProps, 'source'>>) {
  return <MDXRemote source={source} components={components} />;
}
