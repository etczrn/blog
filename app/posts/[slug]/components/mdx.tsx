import * as runtime from 'react/jsx-runtime';

import {
  Anchor,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  P,
  Ul,
} from '@/app/components/ui/typography';

import { HTMLElementProps } from '@/app/components/ui/types';
import Image from 'next/image';

const sharedComponents = {
  Image,
  h1: (props: HTMLElementProps<HTMLHeadingElement>) => <H1 {...props} />,
  h2: (props: HTMLElementProps<HTMLHeadingElement>) => <H2 {...props} />,
  h3: (props: HTMLElementProps<HTMLHeadingElement>) => <H3 {...props} />,
  h4: (props: HTMLElementProps<HTMLHeadingElement>) => <H4 {...props} />,
  p: (props: HTMLElementProps<HTMLParagraphElement>) => <P {...props} />,
  ul: (props: HTMLElementProps<HTMLUListElement>) => <Ul {...props} />,
  blockquote: (props: HTMLElementProps) => <Blockquote {...props} />,
  code: (props: HTMLElementProps) => <Code {...props} />,
  a: (props: HTMLElementProps<HTMLAnchorElement> & { href: string }) => (
    <Anchor {...props} />
  ),
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: unknown;
}

export const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
};
